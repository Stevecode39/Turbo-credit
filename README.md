# Turbo-credit

A Vercel-ready static site configured to deploy from `main`.

## Local build

```bash
npm install
npm run build
```

The build output is written to `dist/`.

## Vercel settings

The repository includes `vercel.json` with:

- install command: `npm install`
- build command: `npm run build`
- output directory: `dist`
- clean URLs enabled

When this GitHub repository is connected to a Vercel project, pushes to `main` will trigger a production deployment.
