'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'glass' | 'gold-border';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'light',
  hoverEffect = true,
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300 p-6 md:p-8';

  const variants = {
    light: 'bg-white border border-slate-200/80 shadow-luxury text-slate-800',
    dark: 'bg-navy-900 border border-navy-800 text-white shadow-luxury-dark',
    glass: 'bg-navy-900/80 backdrop-blur-xl border border-gold-500/20 text-white',
    'gold-border': 'bg-white border border-gold-500/30 shadow-luxury text-slate-900',
  };

  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-xl hover:border-gold-500/50'
    : '';

  return (
    <div className={cn(baseStyles, variants[variant], hoverStyles, className)} {...props}>
      {children}
    </div>
  );
};
