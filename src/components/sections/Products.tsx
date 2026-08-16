'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { categoryVisualItems } from '@/data/categories';
import Image from 'next/image';
import { ShieldCheck, Truck } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-left max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/20 mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>REGIONAL DISTRIBUTION PORTFOLIO</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Distribution Portfolio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans font-light mt-2 leading-relaxed">
            Multi-brand consumer electronics and home appliance categories distributed to authorised retail partners, dealers, and institutional buyers across Punjab.
          </p>
        </div>

        {/* Responsive Product Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoryVisualItems.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-navy-900 rounded-2xl border border-navy-800 hover:border-gold-500/50 shadow-xl overflow-hidden group relative h-52 sm:h-56 flex flex-col justify-end"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 saturate-[1.05]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

              {/* Title & B2B Summary Overlay */}
              <div className="relative p-4 z-10 space-y-1">
                <span className="text-[10px] font-bold text-gold-400 font-sans tracking-widest uppercase block">
                  {cat.tag}
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-white tracking-wide block group-hover:text-gold-400 transition-colors leading-tight">
                  {cat.name}
                </span>
                <span className="text-[11px] text-slate-300 font-sans font-light block leading-snug">
                  {cat.summary}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
