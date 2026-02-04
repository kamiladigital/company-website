# Kamila Digital Website
Minimal React site for Kamila Digital.

## Run locally
1. Install dependencies:
	- `npm install`
2. Start the dev server:
	- `npm run dev`

The app will be available at the URL shown in your terminal.

## Build
- `npm run build`
- `npm run preview`

## Deploy to Cloudflare Pages (GitHub Actions)
This repo includes a GitHub Actions workflow at [.github/workflows/cloudflare-pages.yml](.github/workflows/cloudflare-pages.yml).

Required GitHub secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Update the `projectName` in the workflow to match your Cloudflare Pages project.
