import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StatisticsSection } from '@repo/ui/components/marketing/statistics-section';

const meta = {
  title: 'Marketing/Statistics section',
  component: StatisticsSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof StatisticsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'More than premium abstract imagery',
    supportingText: 'Statistics',
    description: 'Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery.',
    imgUrl: 'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/statistics-section/starter/img/white-blocks.jpg',
    metrics: [
      { metric: 'downloads', value: 526728982 },
      { metric: 'paid_users', value: 125283242 },
      { metric: 'library_images', value: 232409662 }
    ]
  },
};





