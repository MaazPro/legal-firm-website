# West Adelaide Legal website

Production-ready multi-page website for West Adelaide Legal Pty Ltd, built from the approved content and visual specification in this repository.

## Stack

- Next.js App Router with TypeScript
- React
- Chakra UI for accessible interactive primitives
- Tailwind CSS and project CSS for layout and the approved brand system
- Server-side SMTP delivery for the contact form

## Local development

Node.js 20.9 or newer is required.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

If a stale Webpack/HMR bundle causes a runtime error after dependency or Next.js
changes, stop the development server and start from a clean generated cache:

```bash
npm run clean
npm run dev
```

## Checks and production build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` for local development or configure the same values on the server:

- `NEXT_PUBLIC_SITE_URL`: canonical production URL. Defaults to `https://www.westadelaidelegal.com.au`.
- `SMTP_HOST`: SMTP hostname. Hostinger Email uses `smtp.hostinger.com`.
- `SMTP_PORT`: SMTP port. Hostinger Email uses `465` for SSL or `587` for STARTTLS.
- `SMTP_USER`: full email address of the sending mailbox.
- `SMTP_PASSWORD`: password for the sending mailbox. Keep this server-only and out of Git.
- `SMTP_FROM_EMAIL`: sender address; this should be the authenticated domain mailbox.
- `CONTACT_TO_EMAIL`: enquiry recipient. Defaults to `akrishnan@westadelaidelegal.com.au`.

## Hostinger deployment

The SMTP route requires a running Node.js server. Hostinger currently supports Node.js on VPS plans, not standard Web or Cloud hosting. On a VPS:

1. Install Node.js 20 or newer and upload/clone the project.
2. Run `npm ci` and `npm run build`.
3. Configure the environment variables above in the process manager or a protected `.env.local` file.
4. Run `npm run start` behind HTTPS using a process manager and reverse proxy.
5. Submit one real test enquiry and confirm it arrives at the recipient address.

If the purchased Hostinger plan is Web or Cloud hosting, use a PHP mail endpoint or an external email API instead of this Node.js route.

## Project structure

```text
app/
  api/contact/          Server-side SMTP form handler
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

The browser sends enquiries only to `/api/contact`. The server validates the data and delivers it through SMTP, so mailbox credentials are never included in the client bundle. Keep all SMTP variables server-only and do not rename them with a `NEXT_PUBLIC_` prefix.
