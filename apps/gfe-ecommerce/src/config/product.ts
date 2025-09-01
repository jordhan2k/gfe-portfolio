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

const SPEC_TABS = [
  { label: "Sustainability", value: "sustainability" },
  { label: "Comfort", value: "comfort" },
  { label: "Durability", value: "durability" },
  { label: "Versatility", value: "versatility" },
];

const SPEC_DETAILS = [
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

export { SPEC_TABS, SPEC_DETAILS };
