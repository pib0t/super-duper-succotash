import React from 'react';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-full';
  const sizeStyles = {
    small: 'text-sm px-4 py-2',
    medium: 'text-base px-6 py-3',
    large: 'text-lg px-8 py-4',
  };
  const colorStyles = primary
    ? 'text-white bg-blue-600 hover:bg-blue-700'
    : 'text-gray-700 bg-gray-100 hover:bg-gray-200';

  return (
    <button
      type="button"
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles}`}
      {...props}
    >
      {label}
    </button>
  );
};
