import { RiBrushLine, RiCopyrightLine, RiDownload2Line, RiHdLine, RiP2pLine, RiRainbowLine, RiRefreshLine, RiRefund2Fill, RiRocket2Line, RiTeamLine, RiWaterPercentLine } from '@remixicon/react';
import { FeatureSectionGrid } from '@repo/ui/components/marketing/feature-section-grid';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// import { NavBar } from '@repo/ui/components/navigation/nav-bar';

const meta = {
  title: 'marketing/Feature section - Grid',
  component: FeatureSectionGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof FeatureSectionGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    supportingText: "Premium abstract images",
    title: "Easy access to top quality images",
    description: "In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.",

    features: [
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
    ]

  }
};

