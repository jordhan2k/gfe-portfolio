import { PricingSection } from '@repo/ui/components/marketing/pricing-section';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


const meta = {
  title: 'marketing/Pricing section',
  component: PricingSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof PricingSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    supportingText: "One time purchase",
    title: "Pay as you need",
    description: "We offer one-time purchases with credits, for you to use as needed. Always active.",
    featureHeadline: "Unlock creativity once, enjoy forever",
    features: [
      "128 available credits for all images",
      "Up to 3 users",
      "24 hour response time",
      "Advanced analytics"
    ],
    cardProps: {
      title: "$699",
      subtitle: "Prices in USD",
      description: "Pay once, use it forever. No strings attached.",
      badgeProps: {
        children: "Popular",
        variant: "success",
        size: "md"
      },
      buttonProps: {
        children: "Buy now",
        variant: "primary",
        size: "lg",
        className: "w-full"
      }
    }
  }
};