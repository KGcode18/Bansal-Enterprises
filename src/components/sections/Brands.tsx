'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { partnerBrands } from '@/data/brands';
import { ExternalLink } from 'lucide-react';

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
          Click any brand below to visit their official manufacturer website. Direct regional distribution partnerships across Punjab.
        </p>
      </div>

      {/* Perfectly Centered & Balanced Clickable Brand Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
          {partnerBrands.map((brand, idx) => (
            <motion.a
              key={brand.id}
              href={brand.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="w-[calc(50%-8px)] sm:w-48 md:w-52 bg-navy-900 rounded-2xl p-4 border border-navy-800 hover:border-gold-400 shadow-xl hover:bg-navy-950 transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-pointer h-28 relative overflow-hidden"
              title={`Visit Official Website of ${brand.name}`}
            >
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
              <span className="font-serif text-lg sm:text-2xl font-bold text-slate-200 group-hover:text-gold-400 transition-colors duration-200">
                {brand.logoText}
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-sans tracking-wider uppercase mt-1 font-medium group-hover:text-slate-300">
                {brand.highlight}
              </span>
              <span className="text-[9px] text-gold-400/80 font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Visit Official Site →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
