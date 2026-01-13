# Connor Brown Personal Site

A modern, black-and-white personal website built with plain HTML, CSS, and JavaScript. Designed to deploy cleanly on GitHub Pages with relative paths.

## File structure

```
/
  index.html
  projects.html
  thoughts.html
  contact.html
  post.html
  assets/
    css/
      styles.css
    js/
      data.js
      main.js
      thoughts.js
      post.js
      projects.js
```

## Editing content

- **Status + photo + social links** live in `assets/js/data.js` inside `siteConfig`.
- **Projects** live in `assets/js/data.js` inside the `projects` array.
- **Thought posts** live in `assets/js/data.js` inside the `posts` array.

## Run locally

From the repository root:

```bash
python -m http.server 8000
```

Open `http://127.0.0.1:8000/` in your browser.

## Build

No build step is required. This is a static site.

## Deploy to GitHub Pages

1. Create a GitHub repo (or use an existing one).
2. Add these files to the repo root and commit them.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and **/ (root)** folder, then save.
6. Wait for Pages to publish. Your site will be available at:
   - `https://username.github.io/repo-name/`

Because all links and assets use relative paths (e.g., `./projects.html` and `./assets/css/styles.css`), the site works on project pages without additional configuration.
