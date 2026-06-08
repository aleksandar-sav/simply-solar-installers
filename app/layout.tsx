import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { site } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Simply Solar Installers | Solar Installation Subcontractors Working to MCS Guidelines | Hertfordshire & UK",
    template: "%s | Simply Solar Installers",
  },
  description:
    "Simply Solar Installers provides professional sub-contract solar panel installation for solar companies across Hertfordshire, London and the UK. Working to MCS guidelines, white-label ready, 48hr booking. Partner with us today.",
  keywords: [
    "solar installation subcontractors working to MCS guidelines",
    "solar installation subcontractor Hertfordshire",
    "sub-contract solar installation UK",
    "white-label solar installation",
    "solar installers for solar companies",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title:
      "Simply Solar Installers | Solar Installation Subcontractors Working to MCS Guidelines",
    description:
      "The sub-contract solar installation partner — working to MCS guidelines — that solar companies across Hertfordshire and the UK rely on. White-label ready, 48hr booking.",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description:
    "Sub-contract solar installation partner working to MCS guidelines for solar companies across Hertfordshire and the UK.",
  email: site.email,
  telephone: site.phone,
  url: site.url,
  areaServed: site.areas,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Hertfordshire",
    addressCountry: "GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
