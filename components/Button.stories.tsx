import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    icon: {
      control: { type: 'select' },
      options: ['download', 'upload', 'refresh', 'settings'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "toller Button",
    size: "small"
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    size: "small"
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    primary: true
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    primary: true
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    primary: true
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    loading: true,
    primary: true
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Download',
    icon: 'download',
    primary: true
  },
};
