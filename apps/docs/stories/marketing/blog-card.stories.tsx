import { BlogCard } from '@repo/ui/components/marketing/blog-card';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// import { NavBar } from '@repo/ui/components/navigation/nav-bar';

const meta = {
  title: 'marketing/Blog card',
  component: BlogCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof BlogCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/blog-card/starter/img/blog-article-image.jpg",
    badgeProps: {
      children: "Interior",
      variant: "success",
      size: "md"
    },
    title: 'Top 5 Living Room Inspirations',
    description: 'Curated vibrants colors for your living, make it pop & calm in the same time.'
  }
};