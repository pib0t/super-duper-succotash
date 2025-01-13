import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};

export const WithLongTitle: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
        <div className="h-screen p-4">
          Scroll down to see header behavior
          <div className="h-[200vh]" />
        </div>
      </div>
    ),
  ],
};
