# Deployment Guide

This project ships with GitHub Actions workflows that automatically build and deploy your site whenever you push to `main`.

## 1. Connect Lovable → GitHub

In Lovable: **Connectors → GitHub → Create Repository**. Every change you make in Lovable is now pushed to GitHub automatically.

## 2. Pick a host (Vercel or Netlify)

You only need to set up **one** of these. Add the secrets below in your GitHub repo under **Settings → Secrets and variables → Actions → New repository secret**.

### Option A — Vercel (`.github/workflows/deploy-vercel.yml`)

1. Create a Vercel account → import your GitHub repo (or create an empty project).
2. Run `npx vercel link` once locally to generate `.vercel/project.json`. Copy the `orgId` and `projectId` from that file.
3. Generate a token at <https://vercel.com/account/tokens>.
4. Add these GitHub secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

Your live URL: `https://<project-name>.vercel.app` (shown in the Action's job summary after the first deploy).

### Option B — Netlify (`.github/workflows/deploy-netlify.yml`)

1. Create a Netlify account → **Add new site → Import an existing project** (or create an empty site).
2. Copy the **Site ID** from **Site settings → Site information**.
3. Generate a token at <https://app.netlify.com/user/applications#personal-access-tokens>.
4. Add these GitHub secrets:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`

Your live URL: `https://<site-name>.netlify.app` (shown in the Action's job summary after the first deploy).

## 3. Push and watch it deploy

Any push to `main` triggers the workflow. Open the **Actions** tab on GitHub to watch the build, and the live URL will appear in the job summary.

## Files added

- `.github/workflows/build.yml` — builds on every branch/PR (sanity check, no deploy).
- `.github/workflows/deploy-vercel.yml` — deploys to Vercel on push to `main`.
- `.github/workflows/deploy-netlify.yml` — deploys to Netlify on push to `main`.
- `vercel.json` / `netlify.toml` — host config with SPA routing fallback.

> Tip: delete the workflow file for the host you're not using so you don't see failed jobs from missing secrets.
