'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Award, Users, Layers } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    { icon: Award, title: 'Authorized Regional Distributor', desc: 'Direct supply contracts with Amstrad, Tomashi, Kenstar, Liebherr, KAFF, & Nova Max.' },
    { icon: Users, title: '100+ Dealer Network', desc: 'Active supply partnerships with leading retailers across 5 districts.' },
    { icon: Truck, title: '5-District Logistics Reach', desc: 'Daily scheduled dispatches across Bathinda, Mansa, Muktsar, Faridkot, & Fazilka.' },
    { icon: ShieldCheck, title: '100% Genuine Guarantee', desc: 'Direct factory original products with full manufacturer warranty support.' },
    { icon: Layers, title: 'Central Warehousing', desc: 'Large inventory depth ensures continuous stock availability for peak sales seasons.' },
    { icon: Clock, title: '30+ Years Trade Leadership', desc: 'Founded in 2017 by Mr. Rakesh Bansal, bringing 30+ years electronics experience.' },
  ];

  return (
    <section className="py-20 bg-navy-950 text-white border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-3.5 py-1 rounded-full border border-gold-500/20">
          THE DISTRIBUTOR ADVANTAGE
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Why Retailers Partner With Bansal Enterprises
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left font-sans">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-navy-900 p-6 rounded-2xl border border-navy-800 hover:border-gold-500/40 transition-all shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient p-[1px] mb-4 shadow-gold-glow">
                  <div className="w-full h-full bg-navy-950 rounded-[11px] flex items-center justify-center text-gold-400">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
