import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Jewelry Design — 3D CAD, Bespoke Pieces",
  description:
    "Custom jewelry design with photorealistic 3D CAD renders. From concept to creation — engagement rings, bespoke pieces, and one-of-a-kind commissions. Las Vegas.",
  openGraph: {
    title: "Custom Jewelry Design — The Fine Diamond",
    description:
      "Custom jewelry design with photorealistic 3D CAD renders. Engagement rings, bespoke pieces, and one-of-a-kind commissions in Las Vegas.",
  },
};

export default function CustomDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
