import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { NavBar } from '@repo/ui/components/navigation/nav-bar';

const meta = {
  title: 'navigation/Navbar',
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

    navLinks: [
      { label: 'Home', href: '' },
      { label: 'Features', href: '' },
      { label: 'Pricing', href: '' },
      { label: 'About us', href: '' },
      { label: 'Contact', href: '' },
    ],

  }
};