import React from 'react';

interface CheckboxProps {
  /**
   * Is the checkbox checked?
   */
  checked?: boolean;
  /**
   * Label text for the checkbox
   */
  label: string;
  /**
   * Optional change handler
   */
  onChange?: (checked: boolean) => void;
  /**
   * Is the checkbox disabled?
   */
  disabled?: boolean;
}

export const Checkbox = ({
  checked = false,
  label,
  onChange,
  disabled = false,
  ...props
}: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        {...props}
      />
      <span className={disabled ? 'text-gray-400' : 'text-gray-700'}>
        {label}
      </span>
    </label>
  );
};
