import { PricingCard } from '@repo/ui/components/marketing/pricing-card';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


const meta = {
  title: 'marketing/Pricing card',
  component: PricingCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof PricingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    popular: false,
    plan: 'Basic',
    description: 'Access to a curated selection of abstract images',
    price: 6.99,
    totalPrice: 84,
    type: 'monthly',
    features: [
      'Standard quality images',
      'Limited to personal use',
      'Email support'
    ],
    className: 'max-w-[380px] min-h-[676px] w-full',
    buttonProps: {
      children: 'Buy now'
    }


  }
};
export const Popular: Story = {
  args: {
    popular: true,
    plan: 'Basic',
    description: 'Access to a curated selection of abstract images',
    price: 9.99,
    type: 'monthly',
    features: [
      'Standard quality images',
      'Limited to personal use',
      'Email support'
    ],
    className: 'max-w-[380px] min-h-[676px] w-full',
    buttonProps: {
      children: 'Buy now'
    }


  }
};