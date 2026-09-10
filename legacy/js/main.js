(function () {
  const cfg = window.SITE || {};

  /* ---- Links from config ---- */
  const hrefFor = {
    email: cfg.email ? "mailto:" + cfg.email : "",
    linkedin: cfg.linkedin || "",
    github: cfg.github || "",
    resume: cfg.resume || ""
  };
  document.querySelectorAll("[data-link]").forEach(function (a) {
    const key = a.getAttribute("data-link");
    const href = hrefFor[key];
    if (!href) {
      a.parentElement.remove();
      if (!window.__warned) { window.__warned = true; console.warn("[site] Set linkedin/github in js/site.config.js to show those links."); }
      return;
    }
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "me noopener"; }
  });

  /* ---- Nav: glass when scrolled, active section ---- */
  const nav = document.getElementById("nav");
  const links = Array.from(document.querySelectorAll(".nav-menu a"));
  const sections = links.map(function (l) { return document.querySelector(l.getAttribute("href")); });
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
      const y = window.scrollY + 120;
      let current = -1;
      sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
      links.forEach(function (l, i) { l.classList.toggle("is-active", i === current); });
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
  }
  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") setOpen(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setOpen(false); toggle.focus(); }
  });

  /* ---- Section reveal (opacity only, respects reduced motion) ---- */
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".section .section-body, .contact .container");
    targets.forEach(function (t) { t.classList.add("reveal"); });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    targets.forEach(function (t) { io.observe(t); });
  }
})();
