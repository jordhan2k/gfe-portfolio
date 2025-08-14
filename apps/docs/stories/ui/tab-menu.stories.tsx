import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TabButton, TabList, TabPanel, Tabs } from '@repo/ui/src/components/ui/tab-menu';

const meta = {
  title: 'components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStyle: Story = {
  args: {

  },
  render: () => <div className='max-w-[340px] mx-auto'>
    <Tabs defaultValue={"account"}>
      <TabList>
        <TabButton value={'account'}>Account</TabButton>
        <TabButton value={'security'}>Security</TabButton>
        <TabButton value={'plan'}>Plan</TabButton>
      </TabList>
      <div>
        <TabPanel value='account'>
          The Account Management section provides a comprehensive view of
          your personal information and settings. Here, you can update your
          profile details, manage contact information, and customize your
          preferences to enhance your user experience.
        </TabPanel>
        <TabPanel value='security'>
          The Security Settings section is dedicated to protecting your
          account and personal data. Here, you can manage various security
          features to ensure your information remains safe and secure.
        </TabPanel>
        <TabPanel value='plan'>
          The Subscription Plan section provides details about your current
          plan and available upgrades. Here, you can review your plan’s
          benefits, manage billing information, and explore other
          subscription options to find the best fit for your needs.
        </TabPanel>
      </div>
    </Tabs>
  </div>

};
export const TabStyle: Story = {
  args: {

  },
  render: () => <div className='max-w-[340px] mx-auto'>
    <Tabs defaultValue={"account"}>
      <TabList>
        <TabButton variant={'tab'} value={'account'}>Account</TabButton>
        <TabButton variant={'tab'} value={'security'}>Security</TabButton>
        <TabButton variant={'tab'} value={'plan'}>Plan</TabButton>
      </TabList>
      <div>
        <TabPanel value='account'>
          The Account Management section provides a comprehensive view of
          your personal information and settings. Here, you can update your
          profile details, manage contact information, and customize your
          preferences to enhance your user experience.
        </TabPanel>
        <TabPanel value='security'>
          The Security Settings section is dedicated to protecting your
          account and personal data. Here, you can manage various security
          features to ensure your information remains safe and secure.
        </TabPanel>
        <TabPanel value='plan'>
          The Subscription Plan section provides details about your current
          plan and available upgrades. Here, you can review your plan’s
          benefits, manage billing information, and explore other
          subscription options to find the best fit for your needs.
        </TabPanel>
      </div>
    </Tabs>
  </div>
};