'use client';

import { ActionButtonVariant } from '../lib/types';

interface ActionButtonProps {
  variant: ActionButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function ActionButton({ 
  variant, 
  children, 
  onClick, 
  disabled = false,
  size = 'md',
  fullWidth = false 
}: ActionButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 flex items-center justify-center';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white/20 hover:bg-white/30 text-white border border-white/30',
    disabled: 'bg-gray-400 text-gray-600 cursor-not-allowed',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const currentVariant = disabled ? 'disabled' : variant;

  return (
    <button
      className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${variantClasses[currentVariant]}
        ${widthClass}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
