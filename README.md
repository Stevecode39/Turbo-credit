# Turbo-credit

A Vercel-ready Next.js app configured to deploy from `main`.

## Local development

```bash
npm install
npm run dev
```

The dev server listens on port `3000` and is configured for automatic preview forwarding in compatible remote environments.

## Production build

```bash
npm run build
```

## Vercel settings

The repository includes `vercel.json` with:

- install command: `npm install`
- build command: `npm run build`
- framework: detected from the root `package.json` dependency on `next`

When this GitHub repository is connected to a Vercel project with the root directory set to the repository root, pushes to `main` will trigger a production deployment.
