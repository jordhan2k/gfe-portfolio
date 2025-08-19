import { HeroSection } from '@repo/ui/components/marketing/hero-section';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


const meta = {
  title: 'marketing/Hero section',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/hero-section-simple/starter/img/prism.jpg",
    title: "Well crafted abstract images",
    description: "High quality abstract images for your projects, wallpaper and presentations.",
    buttons: [
      {
        children: "Learn more",
        variant: "secondary",
        onClick: () => alert("learn more clicked")
      },
      {
        children: "See pricing",
        variant: "primary",
        onClick: () => alert("See pricing clicked")
      },
    ]
  }
};
export const WithBulletPoints: Story = {
  args: {
    imgUrl: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/hero-section-feature-bullets/starter/img/prism.jpg",
    title: "Well crafted abstract images",
    // description: "High quality abstract images for your projects, wallpaper and presentations.",
    bulletPoints: [
      "Minimum 5K image resolution",
      "Various format variants available",
      "Retina display support"
    ],
    buttons: [
      {
        children: "Learn more",
        variant: "secondary",
        onClick: () => alert("learn more clicked")
      },
      {
        children: "See pricing",
        variant: "primary",
        onClick: () => alert("See pricing clicked")
      },
    ]
  }
};