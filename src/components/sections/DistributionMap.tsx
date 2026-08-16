'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface MapProps {
  onOpenEnquiry: (type: 'wholesale') => void;
}

export const DistributionMap: React.FC<MapProps> = ({ onOpenEnquiry }) => {
  const [activeDistrict, setActiveDistrict] = useState<string | null>('Bathinda');

  const districtData = [
    {
      name: 'Bathinda',
      x: 48,
      y: 55,
      dealers: '45+ Dealers',
      frequency: 'Daily Dispatch (2x Daily)',
      coverage: 'Central Logistics Hub',
    },
    {
      name: 'Mansa',
      x: 72,
      y: 65,
      dealers: '28+ Dealers',
      frequency: 'Daily Morning Dispatch',
      coverage: 'Eastern Supply Corridor',
    },
    {
      name: 'Muktsar',
      x: 34,
      y: 42,
      dealers: '32+ Dealers',
      frequency: 'Daily Morning Dispatch',
      coverage: 'Western Supply Corridor',
    },
    {
      name: 'Faridkot',
      x: 42,
      y: 22,
      dealers: '25+ Dealers',
      frequency: 'Daily Afternoon Dispatch',
      coverage: 'Northern Supply Corridor',
    },
    {
      name: 'Fazilka',
      x: 16,
      y: 55,
      dealers: '24+ Dealers',
      frequency: 'Daily Express Route',
      coverage: 'South-Western Corridor (Abohar & Jalalabad)',
    },
  ];

  const selected = districtData.find((d) => d.name === activeDistrict) || districtData[0];

  return (
    <section id="distribution" className="py-24 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-4 py-1.5 rounded-full border border-gold-500/20">
              REGIONAL DISTRIBUTION NETWORK
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Southern Punjab Logistics Corridor
            </h2>

            <p className="text-slate-300 text-sm font-sans font-light leading-relaxed">
              Operating from our central logistics facility in Bathinda, we maintain scheduled daily inventory dispatch across 5 primary trade districts.
            </p>

            {/* Interactive District Details Panel */}
            <div className="p-5 rounded-2xl bg-navy-900 border border-gold-500/30 space-y-3 font-sans shadow-xl">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <span className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  {selected.name} District
                </span>
                <span className="text-xs font-mono text-gold-400 bg-navy-950 px-2.5 py-1 rounded border border-gold-500/20">
                  {selected.dealers}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 font-light">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Coverage Zone:</span>
                  <span className="text-white font-medium">{selected.coverage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Delivery Schedule:</span>
                  <span className="text-gold-400 font-semibold">{selected.frequency}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry('wholesale')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold transition-all shadow-gold-glow"
              >
                <span>Become a Dealer in {selected.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Enhanced Punjab Vector Map & Logistics Hub */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center"
          >
            {/* Interactive Vector Map Box */}
            <div className="bg-navy-900 rounded-2xl p-6 border border-navy-800 h-80 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className="text-[10px] font-mono text-gold-400 uppercase tracking-widest z-10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Punjab Logistics Vector (5 Districts)</span>
              </div>

              {/* Map SVG Canvas */}
              <div className="relative w-full h-full my-2">
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="48%" y1="55%" x2="72%" y2="65%" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="48%" y1="55%" x2="34%" y2="42%" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="48%" y1="55%" x2="42%" y2="22%" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="48%" y1="55%" x2="16%" y2="55%" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>

                {districtData.map((d) => {
                  const isSelected = activeDistrict === d.name;
                  return (
                    <div
                      key={d.name}
                      style={{ left: `${d.x}%`, top: `${d.y}%` }}
                      onClick={() => setActiveDistrict(d.name)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                          isSelected ? 'bg-gold-400 shadow-gold-glow scale-125' : 'bg-navy-800 border border-gold-500/40'
                        }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-navy-950" />
                      </div>
                      <span
                        className={`text-[10px] font-bold block mt-1 px-1.5 py-0.5 rounded transition-all font-sans whitespace-nowrap ${
                          isSelected
                            ? 'bg-gold-gradient text-navy-950 shadow-md'
                            : 'bg-navy-950/90 text-slate-300 border border-navy-800 group-hover:text-gold-400'
                        }`}
                      >
                        {d.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <span className="text-[10px] text-slate-400 font-sans text-center">
                Click district nodes to view coverage details
              </span>
            </div>

            {/* Real Warehouse Logistics Photo */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-navy-800 bg-black shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Bansal Enterprises Warehouse Dispatch Yard"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent p-5 flex flex-col justify-end">
                <div className="flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Truck className="w-4 h-4" />
                  <span>Central Logistics Dispatch</span>
                </div>
                <p className="text-xs text-slate-300 font-sans font-light">
                  Scheduled daily logistics fleet servicing Bathinda, Mansa, Muktsar, Faridkot, & Fazilka.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
