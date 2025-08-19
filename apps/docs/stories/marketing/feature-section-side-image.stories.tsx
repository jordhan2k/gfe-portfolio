import { RiCopyrightLine, RiHdLine, RiP2pLine, RiRainbowLine, RiRocket2Line, RiWaterPercentLine } from '@remixicon/react';
import { FeatureSectionSideImage } from '@repo/ui/components/marketing/feature-section-side-image';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// import { NavBar } from '@repo/ui/components/navigation/nav-bar';

const meta = {
  title: 'marketing/Feature section - Side image',
  component: FeatureSectionSideImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof FeatureSectionSideImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    imgUrl: "https://jordhan2k.github.io/gfe-p06-feature-section-side-image/img/unsplash:rAtzDB6hWrU.jpg",
    side: 'right',
    supportingText: "High quality images",
    title: "For designers, by designers",
    description: "Unleash boundless creativity with a large repository of images optimized for designers",

    features: [
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

  }
};
export const Left: Story = {
  args: {
    imgUrl: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/features-section-side-image/starter/img/blocks.jpg",
    side: 'left',
    supportingText: "Best-in-class support",
    title: "Convenience and licensing that empowers",
    description: "In a world where storytelling constantly evolves,don't let licensing and poor support hold you down.",
    features: [
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
    ]
  }
};
