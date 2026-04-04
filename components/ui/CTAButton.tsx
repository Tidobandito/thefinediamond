import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: CTAButtonProps) {
  const baseStyles =
    "inline-block tracking-[0.25em] uppercase font-medium transition-all duration-700 text-center";

  const sizeStyles =
    size === "large"
      ? "px-12 py-4 text-[11px]"
      : "px-8 py-3 text-[10px]";

  const variantStyles = {
    primary: "bg-gold text-black hover:bg-gold-light glow-pulse",
    secondary: "border border-gold/40 text-gold hover:bg-gold hover:text-black",
    outline: "border border-white/[0.08] text-white/40 hover:border-gold/40 hover:text-gold",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, sizeStyles, variantStyles[variant], className)}
    >
      {children}
    </Link>
  );
}
