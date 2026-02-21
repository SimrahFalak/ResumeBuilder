import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <label className="flex items-start gap-2 cursor-pointer py-2.5">
      <div className="flex items-start pt-0.5">
        <input
          type="checkbox"
          {...props}
          className={`
            w-4 h-4 
            bg-white border border-border-normal rounded
            checked:bg-primary checked:border-primary
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            shadow-xs
            ${className}
          `}
        />
      </div>
      <span className="font-medium text-sm text-text-primary leading-5 tracking-[-0.07px]">
        {label}
      </span>
    </label>
  );
};
