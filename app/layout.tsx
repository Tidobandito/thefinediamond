import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Fine Diamond | Direct from Source. Designed for You.",
    template: "%s | The Fine Diamond",
  },
  description:
    "Exceptional loose diamonds direct from our cutting facilities. Custom 3D CAD jewelry design. Below retail pricing with full GIA certification.",
  keywords: [
    "diamonds",
    "loose diamonds",
    "custom jewelry",
    "CAD design",
    "engagement rings",
    "GIA certified",
    "direct diamond",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Fine Diamond",
    title: "The Fine Diamond | Direct from Source. Designed for You.",
    description:
      "Exceptional loose diamonds direct from our cutting facilities. Custom 3D CAD jewelry design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fine Diamond",
    description:
      "Exceptional loose diamonds direct from our cutting facilities. Custom 3D CAD jewelry design.",
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
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
