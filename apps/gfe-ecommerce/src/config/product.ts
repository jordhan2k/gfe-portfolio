import {
  RiColorFilterLine,
  RiHandHeartLine,
  RiInfinityFill,
  RiPaintLine,
  RiPlantLine,
  RiPriceTag2Line,
  RiRainbowLine,
  RiRecycleLine,
  RiScales2Line,
  RiShapesLine,
  RiShieldStarLine,
  RiShirtLine,
  RiStackLine,
  RiTShirtLine,
  RiWaterFlashLine,
  RiWindyLine,
} from "@remixicon/react";

export const SPEC_TABS = [
  { label: "Sustainability", value: "sustainability" },
  { label: "Comfort", value: "comfort" },
  { label: "Durability", value: "durability" },
  { label: "Versatility", value: "versatility" },
];

export const SPEC_DETAILS = [
  {
    value: "sustainability",
    title: "Eco-Friendly Choice",
    description:
      "With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.",
    img: {
      desktop:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/yellow-desktop.jpg",
      tablet:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/yellow-tablet.jpg",
      mobile:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/yellow-mobile.jpg",
    },
    items: [
      {
        label: "Recycled Materials",
        icon: RiRecycleLine,
      },
      {
        label: "Low Impact Dye",
        icon: RiPaintLine,
      },
      {
        label: "Carbon Neutral",
        icon: RiPlantLine,
      },
      {
        label: "Water Conservation",
        icon: RiWaterFlashLine,
      },
    ],
  },
  {
    value: "comfort",
    title: "Uncompromised Comfort",
    description:
      "Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.",
    img: {
      desktop:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/black-desktop.jpg",
      tablet:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/black-tablet.jpg",
      mobile:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/black-mobile.jpg",
    },
    items: [
      {
        label: "Ergonomic Fits",
        icon: RiTShirtLine,
      },
      {
        label: "Soft-to-the-Touch Fabrics",
        icon: RiHandHeartLine,
      },
      {
        label: "Breathable Weaves",
        icon: RiWindyLine,
      },
      {
        label: "Thoughtful Design",
        icon: RiColorFilterLine,
      },
    ],
  },
  {
    value: "durability",
    title: "Built to Last",
    description:
      "Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.",
    img: {
      desktop:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/chair-desktop.jpg",
      tablet:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/chair-tablet.jpg",
      mobile:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/chair-mobile.jpg",
    },
    items: [
      {
        label: "Reinforced Construction",
        icon: RiStackLine,
      },
      {
        label: "Quality Control",
        icon: RiScales2Line,
      },
      {
        label: "Material Resilience",
        icon: RiShieldStarLine,
      },
      {
        label: "Warranty and Repair",
        icon: RiPriceTag2Line,
      },
    ],
  },
  {
    value: "versatility",
    title: "Versatile by Design",
    description:
      "Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch. ",
    img: {
      desktop:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/clothes-desktop.jpg",
      tablet:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/clothes-tablet.jpg",
      mobile:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/clothes-mobile.jpg",
    },
    items: [
      {
        label: "Adaptive Styles",
        icon: RiRainbowLine,
      },
      {
        label: "Functional Fashion",
        icon: RiShirtLine,
      },
      {
        label: "Timeless Aesthetics",
        icon: RiInfinityFill,
      },
      {
        label: "Mix-and-Match Potential",
        icon: RiShapesLine,
      },
    ],
  },
];

export const COLORS = {
  white: { value: "#fff", label: "White" },
  black: { value: "#000", label: "Black" },
  red: { value: "#DC2626", label: "Red" },
  orange: { value: "#EA580C", label: "Orange" },
  yellow: { value: "#F59E0B", label: "Yellow" },
  green: { value: "#10B981", label: "Green" },
  blue: { value: "#4F46E5", label: "Blue" },
  brown: { value: "#CA8A04", label: "Brown" },
  beige: { value: "#d2b08a", label: "Beige" },
  pink: { value: "#EC4899", label: "Pink" },
};

export const SIZES = {
  xs: { short: "XS", long: "Extra Small" },
  sm: { short: "S", long: "Small" },
  md: { short: "M", long: "Medium" },
  lg: { short: "L", long: "Large" },
  xl: { short: "XL", long: "Extra Large" },
};

export const COLLECTIONS_OPTIONS = {
  title: "Collections",
  key: "collection",
  items: [
    {
      name: "Latest arrivals",
      value: "latest",
    },
    {
      name: "Urban Oasis",
      value: "urban",
    },
    {
      name: "Cozy Comfort",
      value: "cozy",
    },
    {
      name: "Fresh Fusion",
      value: "fresh",
    },
  ],
};

export const CATEGORY_OPTIONS = {
  title: "Category",
  key: "category",
  items: [
    {
      name: "Unisex",
      value: "unisex",
    },
    {
      name: "Women",
      value: "women",
    },
    {
      name: "Men",
      value: "men",
    },
  ],
};

export const COLORS_OPTIONS = {
  title: "Colors",
  key: "color",
  items: [
    {
      color: COLORS.white.value,
      value: "white",
    },
    {
      color: COLORS.black.value,
      value: "black",
    },
    {
      color: COLORS.red.value,
      value: "red",
    },
    {
      color: COLORS.orange.value,
      value: "orange",
    },
    {
      color: COLORS.yellow.value,
      value: "yellow",
    },
    {
      color: COLORS.green.value,
      value: "green",
    },
    {
      color: COLORS.blue.value,
      value: "blue",
    },
    {
      color: COLORS.brown.value,
      value: "brown",
    },
    {
      color: COLORS.beige.value,
      value: "beige",
    },
    {
      color: COLORS.pink.value,
      value: "pink",
    },
  ],
};

export const RATING_OPTIONS = {
  title: "Rating",
  key: "rating",
  items: [
    {
      value: 5,
      name: "5 star rating",
    },
    {
      value: 4,
      name: "4 star rating",
    },
    {
      value: 3,
      name: "3 star rating",
    },
    {
      value: 2,
      name: "2 star rating",
    },
    {
      value: 1,
      name: "1 star rating",
    },
  ],
};

export const SORT_OPTIONS = [
  {
    name: "Newest",
    value: "created",
    direction: "desc",
  },
  {
    name: "Best rating",
    value: "rating",
    direction: "desc",
  },
  {
    name: "Most popular",
    value: "popularity",
    direction: "desc",
  },
  {
    name: "Price: Low to high",
    value: "price",
    direction: "asc",
  },
  {
    name: "Price: High to low",
    value: "price",
    direction: "desc",
  },
];
