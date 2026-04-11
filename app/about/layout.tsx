import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — A Private Practice in Extraordinary Stones",
  description:
    "The Fine Diamond is a private luxury gemstone practice in Las Vegas. We source rare diamonds, sapphires, emeralds, and collector stones from trusted cutting houses worldwide.",
  openGraph: {
    title: "Our Story — The Fine Diamond",
    description:
      "A private luxury gemstone practice in Las Vegas. Rare diamonds, sapphires, emeralds, and collector stones sourced from trusted cutting houses worldwide.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
