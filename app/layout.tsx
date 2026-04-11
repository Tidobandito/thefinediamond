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
    images: [
      {
        url: "https://www.thefinediamond.com/images/gallery/featured-ring.png",
        width: 1200,
        height: 630,
        alt: "The Fine Diamond — Private Luxury Gemstone Dealer in Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fine Diamond",
    description:
      "Private luxury gemstone dealer specializing in rare diamonds, sapphires, emeralds, and collector stones.",
    images: ["https://www.thefinediamond.com/images/gallery/featured-ring.png"],
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
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1215,
                longitude: -115.1739,
              },
              areaServed: {
                "@type": "City",
                name: "Las Vegas",
              },
              priceRange: "$$$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                description: "By appointment only",
              },
              description:
                "Private luxury gemstone dealer specializing in rare diamonds, sapphires, emeralds, and collector stones. Bespoke jewelry sourced globally.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Gemstone & Jewelry Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rare Gemstone Sourcing",
                      description:
                        "Direct sourcing of rare diamonds, sapphires, emeralds, rubies, and collector stones from global cutting houses.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Jewelry Design",
                      description:
                        "Bespoke jewelry design with photorealistic 3D CAD renders, from concept to creation.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Private Consultation",
                      description:
                        "One-on-one private gemstone viewing and consultation by appointment in Las Vegas.",
                    },
                  },
                ],
              },
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
