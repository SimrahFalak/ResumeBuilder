import React from 'react';

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  required = false,
  className = '',
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="flex gap-1 items-start px-0 py-0.5">
        <span className="font-medium text-sm text-text-primary leading-5 tracking-[-0.07px]">
          {label}
        </span>
        {required && (
          <span className="font-normal text-sm" style={{ color: '#FF9900', fontSize: '16px', lineHeight: '20px', fontWeight: 500 }}>
            *
          </span>
        )}
      </label>
      <div className="flex items-center bg-background-input rounded-xl shadow-xs">
        <input
          {...props}
          ref={inputRef}
          type="date"
          className={`
            flex-1 px-3 py-2.5 
            bg-transparent border rounded-l-xl text-sm
            placeholder:text-text-tertiary
            focus:outline-none focus:border-primary
            ${className}
            hide-calendar-icon
          `}
          style={{ borderColor: '#DEE0E3', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }}
        />
        <button
          type="button"
          className="px-2.5 py-2.5 cursor-pointer border border-l-0 rounded-r-xl"
          style={{ borderColor: '#DEE0E3' }}
          onClick={() => inputRef.current && inputRef.current.showPicker && inputRef.current.showPicker()}
        >
          <img src="/icons/calendar.svg" alt="Calendar" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
