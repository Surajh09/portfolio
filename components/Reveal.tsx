"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/*
  One-pass reveal: content renders visible on the server, is armed (hidden) on
  mount, and fades in the first time it intersects the viewport. Under
  prefers-reduced-motion it is simply shown.
*/
type Props = { children: ReactNode; className?: string };

export default function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "visible">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setState("visible");
      return;
    }
    setState("armed");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("visible");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(state !== "idle" && "reveal", state === "visible" && "is-visible", className)}
    >
      {children}
    </div>
  );
}
