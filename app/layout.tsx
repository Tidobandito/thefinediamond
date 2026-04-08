import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "The Fine Diamond | Private Luxury Gemstone Dealer — Las Vegas",
    template: "%s | The Fine Diamond",
  },
  description:
    "Private luxury gemstone dealer in Las Vegas specializing in rare diamonds, sapphires, emeralds, and collector stones. Bespoke jewelry sourced globally.",
  keywords: [
    "luxury diamonds",
    "rare gemstones",
    "bespoke jewelry",
    "Las Vegas jeweler",
    "sapphires",
    "emeralds",
    "rubies",
    "collector stones",
    "private jeweler",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Fine Diamond",
    title: "The Fine Diamond | Private Luxury Gemstone Dealer — Las Vegas",
    description:
      "Private luxury gemstone dealer specializing in rare diamonds, sapphires, emeralds, and collector stones. Bespoke jewelry sourced globally.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fine Diamond",
    description:
      "Private luxury gemstone dealer specializing in rare diamonds, sapphires, emeralds, and collector stones.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              name: "The Fine Diamond",
              url: "https://www.thefinediamond.com",
              telephone: "+17862301333",
              email: "matt@thefinediamond.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3726 S. Las Vegas Blvd.",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89158",
                addressCountry: "US",
              },
              priceRange: "$$$$",
              description:
                "Private luxury gemstone dealer specializing in rare diamonds, sapphires, emeralds, and collector stones. Bespoke jewelry sourced globally.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
