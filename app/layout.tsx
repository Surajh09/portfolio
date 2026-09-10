import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Doto, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { meta } from "@/content/site";
import { siteConfig } from "@/lib/site.config";
import DotField from "@/components/DotField";
import Nav from "@/components/Nav";

const doto = Doto({
  subsets: ["latin"],
  weight: "variable",
  axes: ["ROND"],
  variable: "--font-doto",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suraj-hemnani.vercel.app"),
  title: meta.title,
  description: meta.description,
  authors: [{ name: meta.author }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: meta.title,
    description: meta.ogDescription,
    siteName: meta.siteName,
  },
  twitter: {
    card: "summary",
    title: meta.title,
    description: meta.ogDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: meta.themeColor,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: meta.author,
  jobTitle: meta.jobTitle,
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: meta.address.locality,
    addressRegion: meta.address.region,
    addressCountry: meta.address.country,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${doto.variable} ${grotesk.variable} ${spaceMono.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attributes on <body> before hydration */}
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-on-ink"
        >
          Skip to content
        </a>
        <DotField />
        <Nav />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
