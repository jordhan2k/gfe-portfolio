import { FaqSection } from '@repo/ui/components/marketing/fag-section';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


const meta = {
  title: 'marketing/Faq section',
  component: FaqSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof FaqSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Frequently asked questions',
    description: 'Get all your questions answered',
    questions: [
      {
        "question": "What types of images are available on your platform?",
        "answer": "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes."
      },
      {
        "question": "How can I access and download images from your platform?",
        "answer": "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks."
      },
      {
        "question": "Do you offer free images, or is there a subscription required?",
        "answer": "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs."
      },
      {
        "question": "What payment methods do you accept for subscriptions?",
        "answer": "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users."
      },
      {
        "question": "Can I cancel or modify my subscription at any time?",
        "answer": "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences."
      },
      {
        "question": "How frequently do you update your image collection?",
        "answer": "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform."
      }
    ]

  }
};