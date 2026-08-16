'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'navy' | 'outline' | 'gold' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'navy', size = 'md', children, icon, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

    const variants = {
      navy: 'bg-navy-900 text-white hover:bg-slate-800 shadow-sm-tech border border-navy-900',
      outline: 'border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 hover:border-slate-400 shadow-sm-tech',
      gold: 'bg-gold-gradient text-navy-950 hover:brightness-110 font-bold shadow-md shadow-gold-500/20',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200',
      glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
