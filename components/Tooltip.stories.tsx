import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from './Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    delay: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button label="Hover me" />,
    position: 'top',
  },
};

export const Bottom: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button label="Hover me" />,
    position: 'bottom',
  },
};

export const Left: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button label="Hover me" />,
    position: 'left',
  },
};

export const Right: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button label="Hover me" />,
    position: 'right',
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Appears after 1 second',
    children: <Button label="Hover me" />,
    delay: 1000,
  },
};
