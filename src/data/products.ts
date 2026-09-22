export interface Product {
  id: string;
  name: string;
  inspiredBy: string;
  image: string;
  category: "men" | "fresh" | "sweet" | "bold";
  categoryLabel: string;
  shortDescription: string;
  size: string;
  concentration: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  loveHook: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "khalifa",
    name: "Khalifa",
    inspiredBy: "Bleu de Chanel",
    image: "/images/products/Khalifa.png",
    category: "men",
    categoryLabel: "FOR MEN",
    shortDescription: "A crisp cedarwood and fresh citrus fragrance for daily confidence and work.",
    size: "60 ML",
    concentration: "EAU DE PARFUM",
    price: 799,
    originalPrice: 1999,
    discountPercentage: 60,
    loveHook: "LOVE BLEU DE CHANEL?",
  },
  {
    id: "hot-crush",
    name: "Hot Crush",
    inspiredBy: "Dior Sauvage",
    image: "/images/products/hot-crush.png",
    category: "men",
    categoryLabel: "FOR MEN",
    shortDescription: "A fresh and peppery scent with warm undertones that turns heads.",
    size: "60 ML",
    concentration: "EAU DE PARFUM",
    price: 799,
    originalPrice: 1999,
    discountPercentage: 60,
    loveHook: "LOVE DIOR SAUVAGE?",
  },
  {
    id: "ly-19",
    name: "LY • 19",
    inspiredBy: "Tom Ford's Leather",
    image: "/images/products/ly-19.png",
    category: "men",
    categoryLabel: "FOR MEN",
    shortDescription: "A rich, deep leather and warm spice fragrance made for special nights.",
    size: "60 ML",
    concentration: "EAU DE PARFUM",
    price: 799,
    originalPrice: 1999,
    discountPercentage: 60,
    loveHook: "LOVE TOM FORD LEATHER?",
  },
  {
    id: "amber-kiss",
    name: "Amber Kiss",
    inspiredBy: "Creed Aventus",
    image: "/images/products/amber-kiss.png",
    category: "bold",
    categoryLabel: "BOLD & DIFFERENT",
    shortDescription: "A smoky birch and amber scent that feels rich and powerful.",
    size: "60 ML",
    concentration: "EAU DE PARFUM",
    price: 799,
    originalPrice: 1999,
    discountPercentage: 60,
    loveHook: "LOVE CREED AVENTUS?",
  },
  {
    id: "hind-rajab",
    name: "Hind Rajab",
    inspiredBy: "Davidoff Cool Water",
    image: "/images/products/hind-rajab.png",
    category: "fresh",
    categoryLabel: "FRESH & CLEAN",
    shortDescription: "A refreshing ocean breeze and mint fragrance for an energetic, clean day.",
    size: "60 ML",
    concentration: "EAU DE PARFUM",
    price: 799,
    originalPrice: 1999,
    discountPercentage: 60,
    loveHook: "LOVE DAVIDOFF COOL WATER?",
  },
  {
    id: "party-mood",
    name: "Party Mood",
    inspiredBy: "Diptyque",
    image: "/images/products/party_Mood.png",
    category: "bold",
    categoryLabel: "BOLD & DIFFERENT",
    shortDescription: "A clean green and woody scent made for parties and evening gatherings.",
    size: "60 ML",
    concentration: "EAU DE PARFUM",
    price: 799,
    originalPrice: 1999,
    discountPercentage: 60,
    loveHook: "LOVE DIPTYQUE?",
  },
  {
    id: "midnight",
    name: "Midnight",
    inspiredBy: "Victoria's Secret Bombshell",
    image: "/images/products/midnight.png",
    category: "sweet",
    categoryLabel: "SWEET & FEMININE",
    shortDescription: "A sweet, fruity, and floral scent that feels playful and charming.",
    size: "60 ML",
    concentration: "EAU DE PARFUM",
    price: 799,
    originalPrice: 1999,
    discountPercentage: 60,
    loveHook: "LOVE BOMBSHELL?",
  },
];

export const CATEGORY_GUIDES = [
  {
    id: "men",
    title: "FOR MEN",
    subtitle: "Strong, masculine and long-lasting scents.",
    perfumeNames: ["Khalifa", "Hot Crush", "LY • 19"],
    highlightId: "khalifa",
  },
  {
    id: "fresh",
    title: "FRESH & CLEAN",
    subtitle: "Daily aquatic coolness and energy.",
    perfumeNames: ["Hind Rajab"],
    highlightId: "hind-rajab",
  },
  {
    id: "sweet",
    title: "SWEET & FEMININE",
    subtitle: "Fruity and floral, playful charm.",
    perfumeNames: ["Midnight"],
    highlightId: "midnight",
  },
  {
    id: "bold",
    title: "BOLD & DIFFERENT",
    subtitle: "Stand out with smoky and woody notes.",
    perfumeNames: ["Amber Kiss", "Party Mood"],
    highlightId: "amber-kiss",
  },
];
