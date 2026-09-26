# RumbyTCG landing page

Marketing site for the RumbyTCG iOS app, operated by The Social Experiment LLC, based on the structure of `maison-landing` and the visual system of `maison-card`.

## Development

```sh
npm install
npm run dev
```

Set `VITE_APP_STORE_URL` to the production App Store listing URL when it is available.

## Static legal pages

Edit `privacy-policy/index.html` and `terms-of-service/index.html` directly to
update the legal documents. Both pages use the shared `src/styles.css` stylesheet
and render without JavaScript. `/terms-of-service/` is the single terms URL.

`npm run build` builds the homepage and both legal pages into `dist/` using Vite's
multi-page configuration. Deploy `dist/` as a static site; no Vercel rewrites are
needed. Use `npm run preview` to check the production build locally.
