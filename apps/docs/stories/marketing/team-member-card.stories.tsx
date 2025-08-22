import { TeamMemberCard } from '@repo/ui/components/marketing/team-member-card';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


const meta = {
  title: 'marketing/Team member card',
  component: TeamMemberCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TeamMemberCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: 'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/team-section/starter/img/ash.jpg',
    name: 'Ash Karter',
    role: 'Founder & CFO',
    description: 'Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.',
    className: 'w-[280px]'
  }
};