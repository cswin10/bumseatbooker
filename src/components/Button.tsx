'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  icon
}: ButtonProps) {
  const baseStyles = 'font-display font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-bum-yellow text-bum-black hover:bg-bum-cream',
    secondary: 'border-2 border-bum-yellow text-bum-yellow bg-transparent hover:bg-bum-yellow hover:text-bum-black',
    ghost: 'text-bum-cream hover:text-bum-yellow bg-transparent'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileHover={{ y: disabled ? 0 : -2, scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}
