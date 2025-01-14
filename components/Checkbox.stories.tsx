import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox label',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked checkbox',
    checked: true,
    disabled: true,
  },
};
