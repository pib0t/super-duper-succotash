import React, { useState } from 'react';

interface TooltipProps {
  /**
   * The content to display in the tooltip
   */
  content: string;
  /**
   * The element that triggers the tooltip
   */
  children: React.ReactNode;
  /**
   * Tooltip position relative to the trigger
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Delay before showing the tooltip (in milliseconds)
   */
  delay?: number;
}

export const Tooltip = ({
  content,
  children,
  position = 'top',
  delay = 300,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    const id = setTimeout(() => setVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setVisible(false);
  };

  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg ${positionClasses[position]}`}
        >
          {content}
          <div
            className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${
              position === 'top' ? 'bottom-[-4px]' :
              position === 'bottom' ? 'top-[-4px]' :
              position === 'left' ? 'right-[-4px]' :
              'left-[-4px]'
            }`}
          />
        </div>
      )}
    </div>
  );
};
