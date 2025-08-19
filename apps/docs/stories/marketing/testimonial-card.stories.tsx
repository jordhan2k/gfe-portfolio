import { TestimonialCard } from '@repo/ui/components/marketing/testimonial-card';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// import { NavBar } from '@repo/ui/components/navigation/nav-bar';

const meta = {
  title: 'marketing/Testimonial card',
  component: TestimonialCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TestimonialCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Sarah',
    username: '@sarahdole',
    avatarUrl: "https://images.unsplash.com/photo-1748054775355-9fccc5ef2665?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
  }
};