'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, ArrowRight, Phone, Award, ShieldCheck, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface WholesaleProps {
  onOpenEnquiry: (type: 'wholesale') => void;
}

export const Wholesale: React.FC<WholesaleProps> = ({ onOpenEnquiry }) => {
  const benefits = [
    { title: 'Authorized Regional Distributor', desc: 'Direct supply contracts with leading global & Indian appliance manufacturers.' },
    { title: 'Fast 4-District Logistics', desc: 'Daily scheduled dispatches across Bathinda, Mansa, Muktsar, & Faridkot.' },
    { title: 'Dedicated Account Management', desc: 'Personalized trade assistance, bulk order processing, and inventory planning.' },
    { title: 'Factory Original Warranty', desc: 'Every product carries 100% genuine manufacturer warranty backed by brand service networks.' },
    { title: 'Structured Trade Pricing', desc: 'Distributor-level margin structures designed to maximize dealer profitability.' },
  ];

  return (
    <section id="wholesale" className="py-20 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-3.5 py-1 rounded-full border border-gold-500/20">
              REGIONAL SUPPLY CHAIN NETWORK
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Trusted Wholesale Supply Chain for Retail Partners Across Punjab
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light">
              Bansal Enterprises powers electronics retailers, dealers, and institutional partners across Bathinda, Mansa, Sri Muktsar Sahib, and Faridkot with reliable stock availability, transparent trade credit, and direct distributor backing.
            </p>

            <div className="space-y-3 pt-2 font-sans">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-white block">{benefit.title}</strong>
                    <span className="text-xs text-slate-300 font-light">{benefit.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button
                variant="gold"
                size="md"
                onClick={() => onOpenEnquiry('wholesale')}
                icon={<ArrowRight className="w-4 h-4" />}
                className="uppercase font-bold tracking-wider shadow-gold-glow"
              >
                Become a Channel Partner
              </Button>
              <a
                href="tel:9988096592"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gold-500/40 text-gold-400 hover:bg-navy-900 text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                Call Wholesale Desk: +91 99880 96592
              </a>
            </div>
          </motion.div>

          {/* Right Column: Channel Advantage Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-navy-900 rounded-3xl p-8 border-2 border-gold-500/40 shadow-2xl space-y-6 text-left"
          >
            <div className="flex items-center gap-3 border-b border-navy-800 pb-4">
              <div className="p-2.5 rounded-xl bg-navy-950 border border-gold-500/30 text-gold-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">Channel Partner Program</h3>
                <p className="text-xs text-slate-400 font-sans">Official Regional Distribution</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
              Partner with Bansal Enterprises for direct manufacturer pricing, official brand warranty backing, and daily scheduled delivery across all 4 target districts.
            </p>

            <div className="space-y-3 pt-1 font-sans">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950 border border-navy-800 text-xs">
                <span className="text-slate-300 font-medium">Districts Covered</span>
                <span className="text-gold-400 font-bold">4 Major Punjab Hubs</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950 border border-navy-800 text-xs">
                <span className="text-slate-300 font-medium">Retailer Network</span>
                <span className="text-gold-400 font-bold">1000+ Active Partners</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950 border border-navy-800 text-xs">
                <span className="text-slate-300 font-medium">Product Guarantee</span>
                <span className="text-gold-400 font-bold">100% Factory Original</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
