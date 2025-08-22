import { ButtonProps } from "@repo/ui/src/components/ui/button";

const HOME_IMG_URL =
  "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/hero-section-simple/starter/img/prism.jpg";
const HOME_TITLE = "Well crafted abstract images";
const HOME_DESCRIPTION =
  "High quality abstract images for your projects, wallpaper and presentations.";

const FEATURE_IMG_URL =
  "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/hero-section-feature-bullets/starter/img/prism.jpg";
const FEATURE_TITLE = "Premium abstract images";
const FEATURE_POINTS = [
  "Minimum 5K image resolution",
  "Various format variants available",
  "Retina display support",
];

const ABOUT_TITLE = "From a tiny desk to the entire world";
const ABOUT_DESCRIPTION =
  "As a lean, passionate team, we've made something that most would think is impossible - premium abstract images for free and for all.";

const HERO_BUTTONS: ButtonProps[] = [
  {
    children: "Learn more",
    variant: "secondary",
  },
  {
    children: "See pricing",
    variant: "primary",
  },
];
export {
  HOME_DESCRIPTION,
  HOME_IMG_URL,
  HOME_TITLE,
  HERO_BUTTONS,
  //
  FEATURE_POINTS,
  FEATURE_IMG_URL,
  FEATURE_TITLE,
  //
  ABOUT_DESCRIPTION,
  ABOUT_TITLE,
};
