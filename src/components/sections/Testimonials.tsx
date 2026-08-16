'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Building, Store } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const dealerTestimonials = [
    {
      quote: 'Bansal Enterprises has been our primary electronics distributor for over 12 years. Their inventory availability and daily dispatch reliability are unmatched in Bathinda district.',
      name: 'Gurpreet Singh',
      role: 'Owner & Channel Partner',
      business: 'Malwa Electronics, Bathinda',
    },
    {
      quote: 'Direct manufacturer backing and transparent trade margins have helped us expand our retail footprint across Mansa. The dedicated account managers make order processing effortless.',
      name: 'Ramanpreet Sharma',
      role: 'Retail Business Partner',
      business: 'Sharma Digital Hub, Mansa',
    },
    {
      quote: 'Their rapid bulk fulfilment and factory original warranty support give us complete peace of mind when fulfilling large commercial and institutional supply contracts.',
      name: 'Harmander Gill',
      role: 'Institutional Buyer & Dealer',
      business: 'Gill Appliances, Sri Muktsar Sahib',
    },
  ];

  return (
    <section className="py-20 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-4 py-1.5 rounded-full border border-gold-500/20">
            TRADE TRUST & CHANNEL FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Partner Testimonials
          </h2>
          <p className="text-slate-300 text-sm font-sans font-light mt-2">
            Feedback from authorized retailers, dealers, and institutional partners across Southern Punjab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dealerTestimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-navy-900 border border-navy-800 shadow-xl flex flex-col justify-between text-left space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-sans italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-navy-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">{t.name}</h4>
                  <span className="text-[10px] text-gold-400 block font-semibold">{t.role}</span>
                  <span className="text-[10px] text-slate-400 block font-light">{t.business}</span>
                </div>
                <Store className="w-5 h-5 text-gold-500/20 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
