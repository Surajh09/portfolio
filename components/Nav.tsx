"use client";

import { useEffect, useRef, useState } from "react";
import { hero, navItems } from "@/content/site";
import { cn } from "@/lib/cn";

const MENU_ID = "nav-menu";

/* 3x3 dot-matrix mark with one red dot */
function Mark() {
  return (
    <span aria-hidden="true" className="grid grid-cols-3 gap-[3px]">
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} className={cn("size-[3px] rounded-full", i === 5 ? "bg-red" : "bg-ink")} />
      ))}
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Glass island when scrolled + active section tracking (rAF-throttled) */
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector<HTMLElement>(item.href));
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        const y = window.scrollY + 120;
        let current = -1;
        sections.forEach((s, i) => {
          if (s && s.getBoundingClientRect().top + window.scrollY <= y) current = i;
        });
        setActive(current);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Escape closes the mobile menu and returns focus to the toggle */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="sitewrap">
        <div
          className={cn(
            "relative flex items-center justify-between border transition-[margin,height,padding,background-color,border-color,box-shadow] duration-300 ease-soft",
            scrolled
              ? "mt-2.5 h-[52px] rounded-full border-line bg-ground/85 px-4 shadow-[0_10px_30px_-18px_rgba(10,10,10,0.45)] backdrop-blur-xl md:px-5"
              : "h-16 border-transparent px-0",
          )}
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-[15px] font-semibold tracking-tight"
          >
            <Mark />
            <span>{hero.name}</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="relative grid size-10 place-items-center rounded-full border border-line bg-surface md:hidden"
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute h-[1.5px] w-[18px] bg-ink transition-transform duration-200",
                open ? "rotate-45" : "-translate-y-[3.5px]",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute h-[1.5px] w-[18px] bg-ink transition-transform duration-200",
                open ? "-rotate-45" : "translate-y-[3.5px]",
              )}
            />
          </button>

          <nav
            id={MENU_ID}
            aria-label="Primary"
            className={cn(
              "absolute inset-x-0 top-[calc(100%+8px)] flex-col gap-0.5 rounded-[20px] border border-line bg-surface p-2 shadow-[0_24px_48px_-24px_rgba(10,10,10,0.35)]",
              "md:static md:flex md:flex-row md:gap-7 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none",
              open ? "flex" : "hidden",
            )}
          >
            {navItems.map((item, i) => {
              const isActive = active === i;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  data-active={isActive || undefined}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-[14px] px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-ground hover:text-ink",
                    "md:justify-start md:rounded-none md:px-0 md:py-1 md:text-sm md:hover:bg-transparent",
                    isActive && "text-ink",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "size-1.5 rounded-full bg-red transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
