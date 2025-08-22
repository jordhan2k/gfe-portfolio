import { RiBrushLine, RiCopyrightLine, RiDownload2Line, RiHdLine, RiP2pLine, RiRainbowLine, RiRefreshLine, RiRefund2Fill, RiRocket2Line, RiTeamLine, RiWaterPercentLine } from "@remixicon/react";

const GRID_SUPPORTING_TEXT = "Premium abstract images";
const GRID_TITLE = "Easy access to top quality images";
const GRID_DESCRIPTION = "In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.";
const GRID_FEATURES = [
  {
    icon: <RiDownload2Line />,
    title: "Infinite Download",
    description: "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
  },
  {
    icon: <RiBrushLine />,
    title: "Purely Handcrafted",
    description: "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
  },
  {
    icon: <RiCopyrightLine />,
    title: "All Are Under Licensed",
    description: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
  },
  {
    icon: <RiRefund2Fill />,
    title: "Cancel Anytime",
    description: "Subscribe at your own pace, and cancel when you feel it's enough."
  },
  {
    icon: <RiTeamLine />,
    title: "Empowering For Team",
    description: "We support multiple seats at once, requiring only a single payment."
  },
  {
    icon: <RiRefreshLine />,
    title: "No Limitations",
    description: "Use as many as you want, from Dribbble presentations to PowerPoint presentations."
  }
];

// Image on the right side
const RIGHT_IMG_URL = "https://jordhan2k.github.io/gfe-p06-feature-section-side-image/img/unsplash:rAtzDB6hWrU.jpg";
const RIGHT_SUPPORTING_TEXT = "High quality images";
const RIGHT_TITLE = "For designers, by designers"
const RIGHT_DESC = "Unleash boundless creativity with a large repository of images optimized for designers"
const RIGHT_FEATURES = [
  {
    icon: <RiHdLine />,
    title: "5K resolution support",
    description: "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
  },
  {
    icon: <RiWaterPercentLine />,
    title: "From water to glass",
    description: "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector."
  },
  {
    icon: <RiRainbowLine />,
    title: "Portrait or landscape",
    description: "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories."
  }
]

// Image on the left side
const LEFT_IMG_URL = "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/features-section-side-image/starter/img/blocks.jpg";
const LEFT_SUPPORTING_TEXT = "Best-in-class support";
const LEFT_TITLE = "Convenience and licensing that empowers";
const LEFT_DESC = "In a world where storytelling constantly evolves,don't let licensing and poor support hold you down.";
const LEFT_FEATURES = [
  {
    icon: <RiRocket2Line />,
    title: "Faster downloads",
    description: "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience."
  },
  {
    icon: <RiP2pLine />,
    title: "Convenience for teams",
    description: "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity."
  },
  {
    icon: <RiCopyrightLine />,
    title: "Royalty-free licensing",
    description: "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project."
  }
];


export {
  GRID_SUPPORTING_TEXT,
  GRID_TITLE,
  GRID_DESCRIPTION,
  GRID_FEATURES,

  RIGHT_DESC,
  RIGHT_FEATURES,
  RIGHT_IMG_URL,
  RIGHT_SUPPORTING_TEXT,
  RIGHT_TITLE,

  LEFT_DESC,
  LEFT_FEATURES,
  LEFT_IMG_URL,
  LEFT_SUPPORTING_TEXT,
  LEFT_TITLE
};