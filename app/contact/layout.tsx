import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Private Consultation",
  description:
    "Contact The Fine Diamond for a private consultation. Inquire about rare diamonds, sapphires, emeralds, and custom jewelry design. By appointment in Las Vegas.",
  openGraph: {
    title: "Schedule a Private Consultation — The Fine Diamond",
    description:
      "Inquire about rare diamonds, sapphires, emeralds, and custom jewelry design. Private consultations by appointment in Las Vegas.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
