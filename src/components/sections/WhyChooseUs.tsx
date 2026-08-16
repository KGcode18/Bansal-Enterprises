'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, Building2, Truck, Users, DollarSign, Layers } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    { icon: Award, title: '20+ Years Distribution Excellence', desc: 'Over two decades of established supply chain leadership in Punjab.' },
    { icon: Users, title: '1000+ Dealer Network', desc: 'Active supply partnerships with leading retailers across 4 districts.' },
    { icon: MapPin, title: '4 District Coverage', desc: 'Full logistics reach across Bathinda, Mansa, Muktsar & Faridkot.' },
    { icon: ShieldCheck, title: 'Manufacturer Relationships', desc: 'Direct distributor contracts with top global & national brands.' },
    { icon: Building2, title: 'Warehousing Capacity', desc: 'High inventory depth supporting volume orders and continuous stock.' },
    { icon: Truck, title: 'Regional Logistics', desc: 'Daily scheduled fleet dispatches directly to dealer storefronts.' },
    { icon: Layers, title: 'Dedicated Dealer Support', desc: 'Personal account managers assisting with ordering and stock planning.' },
    { icon: DollarSign, title: 'Trade Pricing & Credit', desc: 'Competitive distributor margins and structured B2B trade terms.' },
  ];

  return (
    <section className="py-20 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-4 py-1.5 rounded-full border border-gold-500/20">
            OUR DISTRIBUTION STRENGTHS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Why Retailers Partner With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="p-6 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold-500/30 transition-all text-left shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-950 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-3">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-1.5">{pt.title}</h3>
                <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">{pt.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
