'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { partnerBrands } from '@/data/brands';

export const Brands: React.FC = () => {
  return (
    <section id="brands" className="py-14 sm:py-20 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-3.5 py-1 rounded-full border border-gold-500/20">
          AUTHORIZED DIRECT BRAND PARTNERS
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Brands We Deal In
        </h2>
        <p className="text-slate-300 text-xs sm:text-base mt-2 font-sans font-light max-w-2xl mx-auto">
          Direct regional distribution and flagship retail partnerships with leading global & Indian electronics manufacturers.
        </p>
      </div>

      {/* Perfectly Centered & Balanced Brand Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {partnerBrands.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="w-[calc(50%-8px)] sm:w-44 md:w-48 bg-navy-900 rounded-2xl p-4 border border-navy-800 hover:border-gold-500/50 shadow-lg hover:bg-navy-900/90 transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-pointer h-24"
            >
              <span className="font-serif text-base sm:text-xl font-bold text-slate-200 group-hover:text-gold-400 transition-colors duration-200">
                {brand.logoText}
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-sans tracking-wider uppercase mt-1">
                {brand.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
