import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DropdownMenu } from '@repo/ui/components/ui/dropdown-menu';

import { ReactNode } from 'react';
import { RiGlobeLine, RiLock2Line, RiMistFill } from '@remixicon/react';

type OptionType = {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean
}

const options: OptionType[] = [
  {
    id: 'public',
    label: 'Public',
    icon: <RiGlobeLine />
  },
  {
    id: 'unlisted',
    label: 'Unlisted',
    icon: <RiMistFill />
  },
  {
    id: 'private',
    label: 'Private',
    icon: <RiLock2Line />,
    // disabled: true
  },

]

const meta: Meta = {
  title: 'components/Dropdown menu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof DropdownMenu<OptionType>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Privacy options",
    options: options,
    getItemLabel: (item: OptionType) => item.label,
    getItemValue: (item: OptionType) => item.id,
    getItemIcon: (item: OptionType) => item.icon,
    getItemDisabled: (item: OptionType) => item.disabled ?? false,
    defaultVisible: true
  },
  render: (args) => {
    return <div className='py-[200px] max-w-[280px] mx-auto flex flex-col gap-6'>
      <DropdownMenu<OptionType> {...args} />
    </div>
  }
};