import { ProfileCard } from '@repo/ui/components/marketing/profile-card';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


const meta = {
  title: 'marketing/Profile card',
  component: ProfileCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: "https://images.unsplash.com/photo-1748054775355-9fccc5ef2665?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Dole",
    subtitle: "Front End Engineer @ Microsoft",
    description: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
    socialLinks: [
      {
        type: "github",
        href: "https://github.com/"
      },
      {
        type: "linkedin",
        href: "https://linkedin.com/"
      },
      {
        type: "instagram",
        href: "https://instagram.com/"
      },
      {
        type: "twitter",
        href: "https://x.com/"
      },
    ]
  }
};