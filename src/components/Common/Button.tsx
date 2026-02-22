// src/components/Button/Button.tsx
import React from 'react';

interface ButtonProps {
  variant?: 'dark' | 'light';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'dark',
  href,
  children,
  className = '',
  onClick,
  target = '_self',
}) => {
  const baseStyles = "inline-flex py-4 px-12 font-semibold text-sm font-anek-latin uppercase justify-center transition-all";
  
  const variantStyles = {
    dark: "bg-primary-500 text-white hover:opacity-50",
    light: "bg-white text-primary-500 hover:opacity-50"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};