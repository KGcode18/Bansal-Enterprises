'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, Award, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (type: 'wholesale' | 'retail') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Distribution Portfolio', href: '#categories' },
    { label: 'Brands', href: '#brands' },
    { label: 'Industry Events', href: '#events' },
    { label: 'Regional Network', href: '#distribution' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Topmost Micro Info Announcement Bar */}
      <div className="bg-navy-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-gold-500/15 hidden sm:block font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              Established 2004 • 20+ Years Regional Distribution Excellence
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-gold-400/80" />
              Bathinda • Mansa • Muktsar • Faridkot
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9988096592" className="hover:text-gold-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-gold-400" />
              +91 99880 96592
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://wa.me/919988096592"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-emerald-400 font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              Trade Desk Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main Dark Luxury Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-xl border-b border-gold-500/25 shadow-luxury py-3'
            : 'bg-navy-950/80 backdrop-blur-md border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Mark */}
          <a href="#" className="group flex items-center gap-3 focus:outline-none">
            <div className="w-9 h-9 rounded-lg bg-gold-gradient p-[1px] shadow-gold-glow">
              <div className="w-full h-full bg-navy-950 rounded-[7px] flex items-center justify-center font-serif text-lg font-bold text-gold-400">
                BE
              </div>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-wider block leading-tight">
                BANSAL <span className="text-gold-400 font-light">ENTERPRISES</span>
              </span>
              <span className="text-[9px] text-slate-400 tracking-widest uppercase block font-sans">
                AUTHORISED REGIONAL DISTRIBUTOR • EST. 2004
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-gold-400 transition-colors tracking-wide py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop B2B Call To Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry('wholesale')}
              className="text-xs font-semibold px-4 py-2 rounded-lg border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 transition-colors"
            >
              Become a Channel Partner
            </button>
            <button
              onClick={() => onOpenEnquiry('retail')}
              className="text-xs font-bold px-4 py-2 rounded-lg bg-gold-gradient text-navy-950 shadow-gold-glow hover:brightness-110 transition-all"
            >
              Distribution Inquiry
            </button>
          </div>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-gold-400 bg-navy-900 rounded-lg border border-gold-500/20"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-navy-950 border-b border-gold-500/20 shadow-2xl xl:hidden overflow-hidden"
          >
            <div className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
              <div className="grid grid-cols-1 gap-2 border-b border-navy-800 pb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-gold-400 hover:bg-navy-900 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry('wholesale');
                  }}
                  className="w-full py-2.5 text-xs font-semibold rounded-lg border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 transition-colors"
                >
                  Become a Channel Partner
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry('retail');
                  }}
                  className="w-full py-2.5 text-xs font-bold rounded-lg bg-gold-gradient text-navy-950 transition-all"
                >
                  Distribution Inquiry
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
