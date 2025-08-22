import { TeamSection } from '@repo/ui/components/marketing/team-section';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


const meta = {
  title: 'marketing/Team section',
  component: TeamSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof TeamSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    supportingText: 'Team',
    title: 'Meet our team',
    description: 'From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table.',
    members: [
      {
        "name": "Joe Jackson",
        "role": "Founder & CEO",
        "description": "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
        "avatar": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/team-section/starter/img/joe.jpg"
      },
      {
        "name": "Ash Karter",
        "role": "Founder & CFO",
        "description": "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
        "avatar": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/team-section/starter/img/ash.jpg"
      },
      {
        "name": "Farias Amed",
        "role": "Front End AI Engineer",
        "description": "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
        "avatar": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/team-section/starter/img/farias.jpg"
      },
      {
        "name": "Sarah Haust",
        "role": "Dev Ops",
        "description": "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
        "avatar": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/team-section/starter/img/sarah.jpg"
      }
    ]
  }
};