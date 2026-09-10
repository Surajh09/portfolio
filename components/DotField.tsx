"use client";

import { useEffect, useRef } from "react";

/*
  Dot field background, ported from the original static site.
  - One fixed canvas behind the page.
  - Dots sit on a regular grid; the cursor pushes nearby dots away and they spring back.
  - Work only happens while something is moving: pointermove stores coordinates, the
    animation loop runs until every dot is at rest, then stops.
  - Interaction is disabled for coarse pointers (touch) and prefers-reduced-motion;
    the static grid is still drawn.
*/

const GAP = 26; // px between dots
const SIZE = 1.7; // dot diameter (px)
const RADIUS = 150; // cursor influence radius (px)
const STRENGTH = 18; // max displacement (px)
const SPRING = 0.14; // pull toward target per frame
const DAMPING = 0.72; // velocity damping per frame
const REST = 0.02; // threshold below which a dot counts as at rest

export default function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const interactive = () => finePointer.matches && !reducedMotion.matches;

    let width = 0;
    let height = 0;
    let count = 0;
    let ox = new Float32Array(0);
    let oy = new Float32Array(0);
    let px = new Float32Array(0);
    let py = new Float32Array(0);
    let vx = new Float32Array(0);
    let vy = new Float32Array(0);
    let mouseX = -1e5;
    let mouseY = -1e5;
    let raf = 0;

    const cssColor = getComputedStyle(document.documentElement).getPropertyValue("--dot").trim();
    const color = cssColor || "rgba(10,10,10,0.22)";

    function build() {
      const cols = Math.ceil(width / GAP) + 1;
      const rows = Math.ceil(height / GAP) + 1;
      count = cols * rows;
      ox = new Float32Array(count);
      oy = new Float32Array(count);
      px = new Float32Array(count);
      py = new Float32Array(count);
      vx = new Float32Array(count);
      vy = new Float32Array(count);
      const offsetX = (width - (cols - 1) * GAP) / 2;
      const offsetY = (height - (rows - 1) * GAP) / 2;
      let i = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++, i++) {
          ox[i] = px[i] = offsetX + c * GAP;
          oy[i] = py[i] = offsetY + r * GAP;
        }
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.beginPath();
      const half = SIZE / 2;
      for (let i = 0; i < count; i++) {
        ctx.rect(px[i] - half, py[i] - half, SIZE, SIZE);
      }
      ctx.fill();
    }

    function step() {
      let moving = false;
      const r2 = RADIUS * RADIUS;
      for (let i = 0; i < count; i++) {
        let tx = ox[i];
        let ty = oy[i];
        const dx = ox[i] - mouseX;
        const dy = oy[i] - mouseY;
        const d2 = dx * dx + dy * dy;
        if (d2 < r2 && d2 > 0.0001) {
          const d = Math.sqrt(d2);
          const t = 1 - d / RADIUS;
          const f = STRENGTH * t * t;
          tx += (dx / d) * f;
          ty += (dy / d) * f;
        }
        vx[i] = (vx[i] + (tx - px[i]) * SPRING) * DAMPING;
        vy[i] = (vy[i] + (ty - py[i]) * SPRING) * DAMPING;
        px[i] += vx[i];
        py[i] += vy[i];
        if (
          !moving &&
          (Math.abs(vx[i]) > REST ||
            Math.abs(vy[i]) > REST ||
            Math.abs(px[i] - ox[i]) > REST ||
            Math.abs(py[i] - oy[i]) > REST)
        ) {
          moving = true;
        }
      }
      draw();
      if (moving) {
        raf = requestAnimationFrame(step);
      } else {
        raf = 0;
        // snap exactly to rest so the next idle draw is clean
        px.set(ox);
        py.set(oy);
        vx.fill(0);
        vy.fill(0);
      }
    }

    function wake() {
      if (!raf) raf = requestAnimationFrame(step);
    }

    function onMove(e: PointerEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      wake();
    }

    function onLeave() {
      mouseX = -1e5;
      mouseY = -1e5;
      wake();
    }

    function resize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      draw();
    }

    function bind() {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (interactive()) {
        window.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);
      } else {
        onLeave();
      }
    }

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 120);
    };

    window.addEventListener("resize", onResize);
    reducedMotion.addEventListener("change", bind);
    finePointer.addEventListener("change", bind);

    resize();
    bind();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      reducedMotion.removeEventListener("change", bind);
      finePointer.removeEventListener("change", bind);
      window.clearTimeout(resizeTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
