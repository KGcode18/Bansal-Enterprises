'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, Award } from 'lucide-react';
import { Button } from '../ui/Button';

interface FooterProps {
  onOpenEnquiry: (type: 'wholesale' | 'retail') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          {/* Col 1: Business Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient p-[1px] shadow-gold-glow">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-serif text-xl font-bold text-gold-400">
                  BE
                </div>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-wider block">
                  BANSAL <span className="text-gold-400 font-light">ENTERPRISES</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase block">
                  Established 2004 • Bathinda, Punjab
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-light">
              Founded by Mr. Rakesh Bansal, Bansal Enterprises is Southern Punjab's premier multi-brand consumer electronics distribution network supplying authorised retailers, dealers, and institutional partners across Bathinda, Mansa, Muktsar, & Faridkot.
            </p>

            {/* B2B Credential Badge */}
            <div className="p-3 rounded-xl bg-navy-900 border border-gold-500/20 inline-flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-gold-400">
                <Award className="w-4 h-4" />
                <span className="font-bold text-xs text-white">Authorised Regional Distributor</span>
              </div>
              <span className="text-slate-400 text-[11px] font-light">• 1000+ Dealer Network</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={() => onOpenEnquiry('wholesale')}
                className="px-4 py-2 rounded-lg border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 text-xs font-semibold transition-colors"
              >
                Become a Partner
              </button>
              <button
                onClick={() => onOpenEnquiry('retail')}
                className="px-4 py-2 rounded-lg bg-gold-gradient text-navy-950 text-xs font-bold transition-all shadow-gold-glow"
              >
                Distribution Inquiry
              </button>
            </div>
          </div>

          {/* Col 2: Distributed Brands */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold text-gold-400 tracking-wider uppercase">
              Authorised Brands
            </h4>
            <ul className="space-y-2 text-slate-300">
              {['Samsung', 'LG Electronics', 'IFB Appliances', 'Voltas', 'Blue Star', 'Haier', 'Whirlpool', 'Godrej', 'Panasonic', 'Havells', 'KAFF', 'Liebherr'].map((brand, idx) => (
                <li key={idx} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-gold-400 shrink-0" />
                  <span>{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Distribution Scope */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold text-gold-400 tracking-wider uppercase">
              Distribution Scope
            </h4>
            <ul className="space-y-2 text-slate-300">
              {['Display Systems', 'Refrigeration Systems', 'Air Conditioning Systems', 'Laundry Care', 'Built-in Kitchen Appliances', 'Kitchen Chimneys & Hobs', 'Cooking Ovens', 'Air Cooling Solutions', 'Water Heating Systems', 'Mobile Phones'].map((cat, idx) => (
                <li key={idx} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-gold-400 shrink-0" />
                  <span>{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold text-gold-400 tracking-wider uppercase">
              Corporate Hub
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Main Road, Opposite Patiala Hospital, Paras Ram Nagar, Bathinda, Punjab - 151001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:9988096592" className="hover:text-gold-400 font-semibold font-mono transition-colors">+91 99880 96592</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:bathindabe@gmail.com" className="hover:text-gold-400 transition-colors">bathindabe@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Mon – Sun: 9:30 AM – 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>© 2004 - 2026 Bansal Enterprises. All Rights Reserved. Authorised Consumer Electronics Distributor.</span>
          </div>
          <span className="font-mono text-gold-400/80">Bathinda • Mansa • Muktsar • Faridkot</span>
        </div>
      </div>
    </footer>
  );
};
