# Suraj Hemnani — portfolio

Static site. No build step, no framework.

```
index.html          all page content (semantic HTML)
css/styles.css      design tokens, layout, glass, responsive rules
js/site.config.js   links (email, LinkedIn, GitHub, resume) — edit this first
js/dots.js          dot-matrix background + cursor displacement
js/main.js          nav glass on scroll, mobile menu, section reveal
resume.pdf          downloadable resume
```

## Before publishing
1. Put your LinkedIn and GitHub URLs in `js/site.config.js`. While they are empty, those links are hidden rather than broken.
2. Replace `resume.pdf` whenever the resume changes.
3. Optionally add `<meta property="og:url">` and an `og:image` in `index.html` once you have a domain.

## Deploy
Any static host works (GitHub Pages, Netlify, Cloudflare Pages, S3 + CloudFront). Serve the folder as-is.

## Notes
- Dot field: one fixed canvas; work only runs while dots are moving. Interaction is off for touch devices and `prefers-reduced-motion`.
- Fonts: Inter Tight + JetBrains Mono from Google Fonts with system fallbacks. Self-host them if you want zero third-party requests.
