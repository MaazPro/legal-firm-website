import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "West Adelaide Legal | Trusted Legal Support",
    template: "%s | West Adelaide Legal",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "West Adelaide Legal | Trusted Legal Support",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: "West Adelaide Legal | Trusted Legal Support",
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/branding/west-adelaide-legal-favicon-64.png", sizes: "64x64" },
      { url: "/branding/west-adelaide-legal-favicon-512.png", sizes: "512x512" },
    ],
    apple: "/branding/west-adelaide-legal-favicon-180.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2638",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "Organization"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/branding/west-adelaide-legal-logo.svg`,
      email: siteConfig.email,
      telephone: siteConfig.phoneInternational,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1-3 Metro Parade",
        addressLocality: "Mawson Lakes",
        addressRegion: "SA",
        postalCode: "5095",
        addressCountry: "AU",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide, South Australia",
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/about#ashwina-krishnan`,
      name: "Ashwina Krishnan",
      jobTitle: "Principal Solicitor",
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      alumniOf: { "@type": "CollegeOrUniversity", name: "University of Adelaide" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <Providers>
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
