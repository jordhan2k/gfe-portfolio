import { Accordion } from "@repo/ui/components/ui/accordion";
import { Meta, StoryObj } from "@storybook/nextjs-vite";


const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],

} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'What types of images are available on your platform?',
    content: 'Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.'
  },
  // render: (args) => (
  //   <div className="w-[700px]!">
  //     <Accordion {...args} />
  //   </div>
  // )
};