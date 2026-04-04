export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getShapeIcon(shape: string): string {
  const icons: Record<string, string> = {
    Round: "◯",
    Princess: "◇",
    Cushion: "▢",
    Oval: "⬮",
    Emerald: "▭",
    Pear: "◊",
    Marquise: "◈",
    Radiant: "◆",
    Asscher: "□",
    Heart: "♡",
  };
  return icons[shape] || "◇";
}
