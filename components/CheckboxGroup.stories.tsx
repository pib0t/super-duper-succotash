import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3', disabled: true },
];

export const Default: Story = {
  args: {
    options,
  },
};

export const WithSelected: Story = {
  args: {
    options,
    selectedValues: ['1'],
  },
};

export const DisabledGroup: Story = {
  args: {
    options,
    disabled: true,
  },
};
