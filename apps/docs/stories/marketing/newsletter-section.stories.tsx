import { NewsletterSection } from '@repo/ui/components/marketing/newsletter-section';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


const meta = {
  title: 'marketing/Newsletter section',
  component: NewsletterSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof NewsletterSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/newsletter-section/starter/img/abstract.jpg",
    title: "Get the finest curated abstracts delivered weekly to your inbox",
    features: [
      'Exclusive access to new abstract images and collections',
      'Unlock special promotions only for subscribers',
      'Regular doses of artistic inspiration'
    ]

  }
};
