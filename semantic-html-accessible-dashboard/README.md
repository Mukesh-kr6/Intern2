# Semantic HTML5 & Accessible Component Architecture

Multi-page enterprise dashboard demonstrating semantic HTML5 and WCAG 2.1 accessibility patterns.

## Pages
- `index.html` — Dashboard
- `reports.html` — Accessible data table
- `settings.html` — Accessible settings form

## Requirements covered
- Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Keyboard-accessible navigation and controls
- Skip link and visible focus styles
- Labels, fieldsets, legends, validation attributes and `aria-describedby`
- Accessible data table with caption and `scope`
- Native `<dialog>` modal
- Status messages with `role="status"`

## Run
```bash
python -m http.server 8080
```
Open `http://localhost:8080/`.

For final proof, run every page through the W3C Nu HTML Checker and capture screenshots showing zero errors.
