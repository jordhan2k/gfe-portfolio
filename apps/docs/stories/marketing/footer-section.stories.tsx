import { RiFacebookBoxLine, RiGithubLine, RiInstagramLine, RiTwitchLine, RiYoutubeLine } from "@remixicon/react";
import { FooterSection } from "@repo/ui/components/marketing/footer-section";
import { Meta, StoryObj } from "@storybook/nextjs-vite";


const meta = {
  title: 'marketing/Footer section',
  component: FooterSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }

} satisfies Meta<typeof FooterSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

    navLinks: [
      { label: 'Features', href: '' },
      { label: 'Pricing', href: '' },
      { label: 'About us', href: '' },
      { label: 'Contact', href: '' },
    ],
    socialLinks: [
      { icon: <RiYoutubeLine />, href: 'https://youtube.com' },
      { icon: <RiInstagramLine />, href: 'https://instagram.com' },
      { icon: <RiFacebookBoxLine />, href: 'https://facebook.com' },
      { icon: <RiGithubLine />, href: 'https://github.com' },
      { icon: <RiTwitchLine />, href: 'https://twitter.com' },
    ]

  }
}