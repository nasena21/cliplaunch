# Clip Launch public website

Small static website for Clip Launch, a privately operated YouTube publishing automation tool. It is designed for direct deployment to Cloudflare Pages and does not require a build step, server, database, or environment variables.

## Preview locally

Open `index.html` directly for a quick preview, or run any local static file server from this folder and open the address it gives you. The clean routes are:

- `/`
- `/privacy`
- `/terms`

## Deploy to Cloudflare Pages

For this project, GitHub integration is the better default because future changes to the logo, contact email, or policy pages will deploy automatically when pushed. Cloudflare also supports direct drag-and-drop upload, but Cloudflare treats Git integration and Direct Upload as different project types and does not let you switch between them later.

1. Push this folder to a GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repository.
4. Use `main` as the production branch. Leave the build command empty and set the output directory to the repository root (`.`). If the dashboard requires a build command, use `exit 0`.
5. Deploy the site.

If you prefer a one-time upload, choose **Workers & Pages → Create application → Get started → Drag and drop your files** and upload this entire folder. Use GitHub integration instead if you expect to make regular edits.

## Before publishing

- The contact email is configured in `assets/site-config.js` as `contact@cliplaunch.net`. This is the single site-wide configuration location; the visible contact links on each page update automatically.
- The current logo is already copied to `assets/cliplaunch-logo.png`. Replace that file with the final logo if needed. The header and social preview metadata use this path.

## Connect `cliplaunch.net`

In the Cloudflare Pages project, open **Custom domains → Set up a custom domain**, enter `cliplaunch.net`, and follow the DNS instructions. After the domain is active, confirm these public URLs:

- `https://cliplaunch.net/`
- `https://cliplaunch.net/privacy/`
- `https://cliplaunch.net/terms/`

## Google Auth Platform values

- Application homepage: `https://cliplaunch.net`
- Privacy policy: `https://cliplaunch.net/privacy/`
- Terms of service: `https://cliplaunch.net/terms/`
- Authorized domain: `cliplaunch.net`
