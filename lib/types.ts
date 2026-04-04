export interface Diamond {
  id: string;
  shape: DiamondShape;
  carat: number;
  color: DiamondColor;
  clarity: DiamondClarity;
  cut: DiamondCut;
  polish: string;
  symmetry: string;
  fluorescence: string;
  certification: string;
  dimensions: string;
  price: number;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export type DiamondShape =
  | "Round"
  | "Princess"
  | "Cushion"
  | "Oval"
  | "Emerald"
  | "Pear"
  | "Marquise"
  | "Radiant"
  | "Asscher"
  | "Heart";

export type DiamondColor = "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K";

export type DiamondClarity =
  | "FL"
  | "IF"
  | "VVS1"
  | "VVS2"
  | "VS1"
  | "VS2"
  | "SI1"
  | "SI2";

export type DiamondCut = "Ideal" | "Excellent" | "Very Good" | "Good";

export interface Collection {
  slug: string;
  name: string;
  description: string;
  image: string;
  products: CollectionProduct[];
}

export interface CollectionProduct {
  id: string;
  name: string;
  description: string;
  price: number | null;
  priceLabel?: string;
  image: string;
  collection: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  rating: number;
  product?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface DiamondFilters {
  shapes: DiamondShape[];
  caratMin: number;
  caratMax: number;
  colors: DiamondColor[];
  clarities: DiamondClarity[];
  cuts: DiamondCut[];
  priceMin: number;
  priceMax: number;
  sortBy: "price-asc" | "price-desc" | "carat-asc" | "carat-desc" | "newest";
}
