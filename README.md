# West Adelaide Legal website

Production-ready multi-page website for West Adelaide Legal Pty Ltd, built from the approved content and visual specification in this repository.

## Stack

- Next.js App Router with TypeScript
- React
- Chakra UI for accessible interactive primitives
- Tailwind CSS and project CSS for layout and the approved brand system
- Netlify-compatible server route for contact-form delivery

## Local development

Node.js 20.9 or newer is required.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Checks and production build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` for local development or configure the same values in Netlify:

- `NEXT_PUBLIC_SITE_URL`: canonical production URL. Defaults to `https://www.westadelaidelegal.com.au`.
- `CONTACT_FORM_ENDPOINT`: optional server-to-server form delivery endpoint. The endpoint should accept a JSON `POST` containing `fullName`, `email`, `phone`, `message`, `privacyAcknowledged`, and `source`.
- `CONTACT_FORM_TOKEN`: optional bearer token sent from the server route to the form provider. It is never exposed to browser code.

When `CONTACT_FORM_ENDPOINT` is not configured, frontend validation remains available and the form displays a clear phone/email fallback without losing control of the page.

## Netlify deployment

1. Push this project to the Git repository Netlify will deploy.
2. In Netlify, select **Add new site → Import an existing project** and connect the repository.
3. If this directory is nested in a larger repository, set the base directory to `legal-firm-website`; otherwise leave it blank.
4. Use build command `npm run build`.
5. Leave the publish directory blank so Netlify&apos;s current Next.js integration can configure it automatically.
6. Set Node.js to version 20 in the Netlify build environment.
7. Add the environment variables listed above under **Site configuration → Environment variables**.
8. Deploy the site, then verify the six routes, contact delivery, phone/email links, WhatsApp link, map, sitemap and robots file on the production domain.

No custom `netlify.toml` is required for the standard Next.js integration.

## Project structure

```text
app/
  api/contact/          Server-side form delivery adapter
  about/                About page
  contact/              Contact page
  fees-appointments/    Fees and appointments page
  practice-areas/       Practice areas page
  privacy-policy/       Privacy policy page
  layout.tsx            Global metadata, structured data and shell
  page.tsx              Home page
components/             Reusable navigation, sections, form, map and footer
lib/site.ts             Approved business data and shared configuration
public/branding/        Approved logo and favicon assets
public/images/          Production hero background
```

## Contact-form integration note

The client has not selected a form provider. The included `/api/contact` route validates the submitted data and forwards it only when `CONTACT_FORM_ENDPOINT` is configured. Confirm the selected provider&apos;s payload and authentication requirements before launch; if it requires a different contract, adapt only the server route and keep credentials in Netlify environment variables.
