'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Newspaper, Users, Sparkles, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const IndustryEvents: React.FC = () => {
  return (
    <section id="events" className="py-20 sm:py-28 bg-navy-950 text-white relative border-b border-navy-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>INDUSTRY RECOGNITION</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by India’s Leading Appliance Brands
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans font-light leading-relaxed">
            For over two decades, Bansal Enterprises has partnered with India’s leading appliance manufacturers, participated in exclusive product launches, dealer conferences, and industry events while serving retailers across Punjab.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          {/* Left Side: Large Featured Media Interview Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border-2 border-gold-500/40 bg-navy-900 shadow-2xl group min-h-[380px] sm:min-h-[460px] flex flex-col justify-end"
          >
            <Image
              src="/images/events/media-interview.jpg"
              alt="Mr. Rakesh Bansal Press & Media Coverage"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 saturate-[1.05]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Glass Sweep & Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent p-6 sm:p-8 flex flex-col justify-end transition-opacity duration-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-navy-950/90 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider w-max mb-2 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Media Coverage</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white drop-shadow mb-1">
                Official Media Coverage
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans font-light max-w-xl">
                Press interviews during major product launches and industry events across Punjab.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Top Ribbon Unveiling & Bottom Brand Experience */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Top Card: Ribbon Unveiling Product Launch */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 bg-navy-900 shadow-xl group h-[220px] sm:h-[240px] flex flex-col justify-end"
            >
              <Image
                src="/images/events/product-launch.jpg"
                alt="Exclusive Product Launch Ribbon Ceremony"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 saturate-[1.05]"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest block mb-1">
                  Product Launch
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-0.5">
                  Exclusive Product Launch
                </h4>
                <p className="text-[11px] text-slate-200 font-sans font-light leading-snug">
                  Official unveiling with brand representatives and dealer partners.
                </p>
              </div>
            </motion.div>

            {/* Bottom Card: Brand Experience & Dealer Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 bg-navy-900 shadow-xl group h-[220px] sm:h-[240px] flex flex-col justify-end"
            >
              <Image
                src="/images/events/brand-showcase.jpg"
                alt="Brand Experience & Dealer Meet Showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 saturate-[1.05]"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest block mb-1">
                  Dealer Meet
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-0.5">
                  Brand Experience Showcase
                </h4>
                <p className="text-[11px] text-slate-200 font-sans font-light leading-snug">
                  Premium appliance demonstrations and customer engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Under the Gallery: 3 Elegant Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
          <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 shadow-xl text-center">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400 block">20+</span>
            <span className="text-xs text-slate-300 font-sans font-medium uppercase tracking-wider block mt-1">
              Years of Business
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 shadow-xl text-center">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400 block">1000+</span>
            <span className="text-xs text-slate-300 font-sans font-medium uppercase tracking-wider block mt-1">
              Retail Partners
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 shadow-xl text-center">
            <span className="font-serif text-base sm:text-lg font-bold text-white block">Leading Brand Launches</span>
            <span className="text-[11px] text-gold-400 font-sans font-medium uppercase tracking-wider block mt-1">
              Dealer Conferences • Media Events
            </span>
          </div>
        </div>

        {/* Dark Glass Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-navy-900/90 border-2 border-gold-500/30 backdrop-blur-xl p-8 sm:p-10 shadow-2xl relative text-center"
        >
          <Quote className="w-12 h-12 text-gold-500/15 mx-auto mb-3" />
          <p className="text-base sm:text-xl font-serif italic text-slate-200 leading-relaxed max-w-2xl mx-auto">
            "Strong manufacturer relationships and long-term dealer trust have been the foundation of our business since 2004."
          </p>
          <div className="mt-6 pt-4 border-t border-navy-800/80">
            <span className="font-serif text-lg font-bold text-white block">Rakesh Bansal</span>
            <span className="text-xs text-gold-400 font-sans uppercase tracking-widest font-semibold block mt-0.5">
              Founder & Managing Director
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
