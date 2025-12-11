'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  success?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  success,
  className,
  icon
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={clsx('w-full', className)}>
      {label && (
        <label className="block text-sm font-medium text-bum-cream/70 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-bum-cream/50">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(
            'w-full bg-bum-grey border-2 text-bum-cream placeholder-bum-cream/40 px-4 py-3 font-body transition-all duration-300 outline-none',
            icon && 'pl-12',
            focused && !error && 'border-bum-yellow',
            !focused && !error && 'border-bum-grey hover:border-bum-cream/30',
            error && 'border-bum-coral',
            success && 'border-green-500'
          )}
        />
        <AnimatePresence>
          {success && !error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
            >
              <Check size={20} />
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-bum-coral"
            >
              <AlertCircle size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-bum-coral text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
