import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  required = false, 
  error,
  className = '',
  ...props 
}) => {
  return (
    <div
      className="flex flex-col items-start gap-2"
    >
      <label
        className="flex items-start gap-0 self-stretch"
        style={{ padding: 0 }}
      >
        <span
          style={{
            color: '#14151A',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '-0.07px',
          }}
        >
          {label}
        </span>
        {required && (
          <span
            style={{
              color: '#E6483D',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '20px',
              letterSpacing: '-0.07px',
            }}
          >
            *
          </span>
        )}
      </label>
      <div className="relative" style={{ width: '100%' }}>
        <input
          {...props}
          className={
            `flex items-center gap-0 w-full rounded-xl` +
            ` placeholder:text-text-tertiary focus:outline-none focus:border-primary ${className}`
          }
          style={{
            padding: '10px 12px',
            border: '1px solid #DEE0E3',
            background: '#FFF',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '-0.07px',
            borderRadius: 12,
            flex: '1 0 0',
          }}
        />
      </div>
      {error && (
        <span style={{ color: '#E6483D', fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.07px' }}>{error}</span>
      )}
    </div>
  );
};
