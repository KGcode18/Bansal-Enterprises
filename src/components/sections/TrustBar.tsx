'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Award, CheckCircle2, Building2, FileCheck2, Headphones } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: <Award className="w-5 h-5 text-gold-400" />, title: 'Official Distributor', subtitle: 'Direct Manufacturer Contracts' },
    { icon: <ShieldCheck className="w-5 h-5 text-gold-400" />, title: '100% Brand Warranty', subtitle: 'Authorized Service Backing' },
    { icon: <FileCheck2 className="w-5 h-5 text-gold-400" />, title: 'GST Registered', subtitle: 'Verified Enterprise Entity' },
    { icon: <Truck className="w-5 h-5 text-gold-400" />, title: 'Fast Delivery Fleet', subtitle: 'Daily Scheduled Regional Dispatch' },
    { icon: <Headphones className="w-5 h-5 text-gold-400" />, title: 'Dedicated Support', subtitle: 'Wholesale & Retail Account Care' },
  ];

  return (
    <section className="bg-navy-950 border-b border-navy-800 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-navy-900 border border-navy-800 shadow-xl hover:border-gold-500/30 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-navy-950 border border-gold-500/20 shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="font-sans">
                <h4 className="text-xs font-bold text-white group-hover:text-gold-400 transition-colors">{item.title}</h4>
                <p className="text-[10px] text-slate-400 mt-0.5 font-light">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
