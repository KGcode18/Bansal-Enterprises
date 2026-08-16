'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Users, ShieldCheck, Layers, PackageCheck, Headphones, Award, TrendingUp } from 'lucide-react';

export const Finance: React.FC = () => {
  const advantages = [
    {
      icon: Truck,
      title: 'Fast Regional Dispatch',
      desc: 'Scheduled daily deliveries across Bathinda, Mansa, Muktsar, and Faridkot with dedicated logistics fleet.',
    },
    {
      icon: Users,
      title: 'Dedicated Dealer Managers',
      desc: 'Personalized account management, trade support, and customized stock planning for channel partners.',
    },
    {
      icon: ShieldCheck,
      title: 'Direct Manufacturer Procurement',
      desc: 'Direct distributor supply contracts with Samsung, LG, IFB, Voltas, Haier, Blue Star, and leading brands.',
    },
    {
      icon: PackageCheck,
      title: 'Bulk Order Fulfilment',
      desc: 'Scalable wholesale supply capability for volume retailer demands and institutional project contracts.',
    },
    {
      icon: Layers,
      title: 'High Inventory Availability',
      desc: 'Central warehousing capacity ensuring high stock depth across all major consumer electronics categories.',
    },
    {
      icon: TrendingUp,
      title: 'Trade Support & Credit Options',
      desc: 'Structured B2B payment terms and margin-focused pricing designed for retail business growth.',
    },
    {
      icon: Award,
      title: 'Warranty & Service Coordination',
      desc: '100% factory original products backed by direct brand manufacturer service networks.',
    },
    {
      icon: Headphones,
      title: 'Stock Planning & Assistance',
      desc: 'Data-backed seasonal inventory planning helping dealers maximize turnover and profitability.',
    },
  ];

  return (
    <section className="py-20 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-4 py-1.5 rounded-full border border-gold-500/20">
            CHANNEL PARTNER ADVANTAGES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Distribution Advantages
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans font-light mt-2 leading-relaxed">
            Why leading electronics retailers across Punjab partner with Bansal Enterprises for their inventory and supply chain needs.
          </p>
        </div>

        {/* 8 B2B Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold-500/40 transition-all duration-300 shadow-xl text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
