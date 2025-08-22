import { AppLink } from "@repo/ui/components/ui/link";
import { Meta, StoryObj } from "@storybook/nextjs-vite";


const meta = {
  title: 'Components/Link',
  component: AppLink,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://open.spotify.com/track/5Z6g2vnqBgd23HNRLDWoBY',
    children: 'Eyes, Nose, Lips - Taeyang'
  }
};