import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

interface CheckboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  /**
   * Array of checkbox options
   */
  options: CheckboxOption[];
  /**
   * Currently selected values
   */
  selectedValues?: string[];
  /**
   * Callback when selection changes
   */
  onChange?: (selectedValues: string[]) => void;
  /**
   * Is the entire group disabled?
   */
  disabled?: boolean;
}

export const CheckboxGroup = ({
  options,
  selectedValues = [],
  onChange,
  disabled = false,
}: CheckboxGroupProps) => {
  const [selected, setSelected] = useState<string[]>(selectedValues);

  const handleChange = (value: string, isChecked: boolean) => {
    const newSelected = isChecked
      ? [...selected, value]
      : selected.filter((v) => v !== value);

    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          checked={selected.includes(option.value)}
          onChange={(checked) => handleChange(option.value, checked)}
          disabled={disabled || option.disabled}
        />
      ))}
    </div>
  );
};
