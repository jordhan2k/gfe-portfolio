import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Tooltip } from '@repo/ui/components/ui/tooltip';

const meta = {
  title: 'components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: "inline-radio",
      options: ['top', 'left', 'right', 'bottom']
    },
    align: {
      control: "inline-radio",
      options: ['start', 'center', 'end'],
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hover me',
    title: 'This is the tooltip content',
    arrow: true,
    side: 'top',
    align: 'center',
    forceVisible: true
  }
};
export const Demo: Story = {
  args: {
    children: 'Hover me',
    title: 'This is the tooltip content',
    arrow: true,
  },
  render: () => {
    return <div className='mx-auto py-[200px] w-fit flex flex-col gap-20'>
      <div className='flex flex-row gap-6 justify-between'>
        <Tooltip title='This is a tooltip content' side={'top'} align={'start'}>Top start</Tooltip>
        <Tooltip title='This is a tooltip content' side={'top'} align={'center'}>Top center</Tooltip>
        <Tooltip title='This is a tooltip content' side={'top'} align={'end'}>Top end</Tooltip>
      </div>
      <div className='flex flex-row gap-6 justify-between'>
        <Tooltip title='This is a tooltip content' side={'right'} >Right</Tooltip>
        <Tooltip title='This is a tooltip content' arrow={false}>None</Tooltip>
        <Tooltip title='This is a tooltip content' side={'left'} >Left</Tooltip>
      </div>
      <div className='flex flex-row gap-6 justify-between'>
        <Tooltip title='This is a tooltip content' side={'bottom'} align={'start'}>Bottom start</Tooltip>
        <Tooltip title='This is a tooltip content' side={'bottom'} align={'center'}>Bottom center</Tooltip>
        <Tooltip title='This is a tooltip content' side={'bottom'} align={'end'}>Bottom end</Tooltip>
      </div>
    </div>
  }
};