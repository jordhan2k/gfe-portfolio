import { MarqueeSection } from "@repo/ui/components/marketing/marque-section";
import { Meta, StoryObj } from "@storybook/nextjs-vite";


const meta = {
  title: 'marketing/Marquee section',
  component: MarqueeSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }

} satisfies Meta<typeof MarqueeSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brands: [
      {
        "brand": "Wan Nain",
        "logo": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/logo-marquee-section/starter/img/wan-nain.svg"
      },
      {
        "brand": "Robinwood",
        "logo": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/logo-marquee-section/starter/img/robinwood.svg"
      },
      {
        "brand": "Sawpdo",
        "logo": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/logo-marquee-section/starter/img/swapdo.svg"
      },
      {
        "brand": "Diamond",
        "logo": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/logo-marquee-section/starter/img/diamond.svg"
      },
      {
        "brand": "Air Car",
        "logo": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/logo-marquee-section/starter/img/air-car.svg"
      },
      {
        "brand": "Makro hard",
        "logo": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/logo-marquee-section/starter/img/makro-hard.svg"
      },
      {
        "brand": "Wirang",
        "logo": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/logo-marquee-section/starter/img/wirang.svg"
      },
      {
        "brand": "Bitterfly",
        "logo": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/logo-marquee-section/starter/img/bitterfly.svg"
      }
    ]
  }
}