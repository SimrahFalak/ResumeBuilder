import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'disabled';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'font-medium text-sm leading-5 tracking-[-0.07px] rounded-lg flex items-center justify-center gap-0.5';
  
  const variantClasses = {
    primary: 'bg-primary text-white px-2.5 py-1.5 shadow-xs hover:bg-primary/90',
    secondary: 'bg-white text-primary border border-primary px-2.5 py-1.5 hover:bg-primary/5',
    ghost: 'bg-transparent text-primary px-2.5 py-1.5 hover:bg-primary/5',
    disabled: 'bg-background-disabled text-text-quaternary px-2.5 py-1.5 cursor-not-allowed',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-2.5 py-1.5',
  };

  const currentVariant = disabled ? 'disabled' : variant;

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[currentVariant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && iconPosition === 'left' && <span className="w-4 h-4">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="w-4 h-4">{icon}</span>}
    </button>
  );
};
