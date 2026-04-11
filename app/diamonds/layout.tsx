import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Diamonds & Gemstones — GIA Certified",
  description:
    "Search our full inventory of GIA certified diamonds, colored gemstones, fine jewelry, and bespoke pieces. Direct global sourcing with no middlemen. Las Vegas.",
  openGraph: {
    title: "Search Diamonds & Gemstones — The Fine Diamond",
    description:
      "Search GIA certified diamonds, colored gemstones, and fine jewelry. Direct global sourcing with no middlemen.",
  },
};

export default function DiamondsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
