
# Personal Homepage — Project 1

A fast, accessible, fully static personal site built with **HTML5**, **CSS3** (Flexbox/Grid), and **ES6 modules**. No frameworks, no jQuery, no backend.

> **Original component**: animated starfield canvas background + persistent theme switcher (no libraries).

## Author

- Vidheya Bole (bole.v@northeastern.edu)  
- Class link: https://canvas.northeastern.edu/

## Project Objective

Create a clean, meaningful homepage that introduces you and your work, and demonstrates modern, standards-based web development without frameworks.

## Run Locally

Option A (no installs):
```bash
# open index.html directly in your browser
```

Option B (Python static server):
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy (GitHub Pages)

1. Create a new GitHub repo and push this folder.
2. In **Settings → Pages**, select the `main` branch and `/ (root)`.
3. Wait for Pages to build; your site will be live at the provided URL.

## Linting & Formatting

Install tools:
```bash
npm install
```

Format:
```bash
npm run format
```

Lint:
```bash
npm run lint
```

> Replace the provided ESLint config with the **class ESLint config** if your instructor supplied one.

## Accessibility & Validation

- All images include descriptive `alt` text.
- Validate at <https://validator.w3.org> (no errors expected).
- Keyboard-usable: buttons are real `<button>`, links are `<a>`.

## License

MIT — see `LICENSE`.
