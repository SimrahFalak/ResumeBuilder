import React, { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  label: React.ReactNode;
  options: Option[];
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  required = false,
  placeholder = 'Please select',
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelected(value || '');
  }, [value]);

  const handleSelect = (val: string) => {
    setSelected(val);
    setOpen(false);
    if (onChange) onChange(val);
  };

  return (
    <div className="flex flex-col gap-2 w-full" ref={dropdownRef}>
      <label className="flex gap-1 items-start px-0 py-0.5">
        <span className="font-medium text-sm text-text-primary leading-5 tracking-[-0.07px]">
          {label}
        </span>
        {/* Only show asterisk if label does not already include it */}
        {required && typeof label === 'string' && !label.includes('*') && (
          <span className="font-normal text-sm text-destructive leading-5 tracking-[-0.07px]">
            *
          </span>
        )}
      </label>
      <div className="relative w-full">
        <button
          type="button"
          className="w-full px-3 py-2.5 bg-background-input border border-[#DEE0E3] rounded-xl text-sm text-text-tertiary focus:outline-none focus:border-primary flex items-center justify-between appearance-none cursor-pointer"
          style={{ position: 'relative', textAlign: 'left' }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span style={{ color: selected ? '#0D1126' : 'rgba(13, 17, 38, 0.40)' }}>
            {selected ? options.find(o => o.value === selected)?.label : placeholder}
          </span>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none h-full">
          <div className="w-px h-full bg-[#DEE0E3] mr-2" />
          <img src="/arrow-down.svg" alt="Chevron" width={20} height={20} />
        </div>
        </button>
        {open && (
          <div className="absolute left-0 top-full mt-2 w-full bg-white border border-[#DEE0E3] rounded-xl shadow-lg z-10" style={{ minWidth: '180px', maxHeight: '180px', overflowY: 'auto' }}>
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#F9F9F9] ${selected === option.value ? 'bg-[#F2F2F3]' : ''}`}
                style={{ color: '#0D1126' }}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
