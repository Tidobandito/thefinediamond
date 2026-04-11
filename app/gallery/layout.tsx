import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Gallery — Rare Diamonds, Sapphires & Emeralds",
  description:
    "Browse our curated collection of rare diamonds, sapphires, emeralds, rubies, and collector stones. Every piece hand-selected and available for private viewing in Las Vegas.",
  openGraph: {
    title: "Curated Gallery — The Fine Diamond",
    description:
      "Browse our curated collection of rare diamonds, sapphires, emeralds, rubies, and collector stones. Private viewing available by appointment.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
