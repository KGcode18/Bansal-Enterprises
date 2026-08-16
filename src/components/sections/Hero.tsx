'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Building2, Users, FileText, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onOpenEnquiry: (type: 'wholesale' | 'retail') => void;
  onOpenTeamModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onOpenTeamModal }) => {
  // Apple/Stripe-Inspired Floating Hero Collage Cards featuring 100% Executive Leadership & Certification Photos
  const floatingCards = [
    {
      id: 'media-focal',
      title: 'Press & Media Leadership',
      tag: 'Media Coverage',
      image: '/images/events/media-interview.jpg',
      // LARGE FOCAL CARD (350x215) - Dominates Top-Left
      pos: 'top-2 left-2 sm:left-6 w-[300px] h-[190px] sm:w-[340px] sm:h-[210px] z-40 border-2 border-gold-400 shadow-gold-glow',
      delay: 0,
      floatY: [0, -6, 0],
    },
    {
      id: 'storefront-landscape',
      title: 'Bathinda Corporate Hub',
      tag: 'Central Facility',
      image: '/images/showroom.jpg',
      // MEDIUM STOREFRONT CARD (Landscape crop: 250x155) - Top-Right
      pos: 'top-0 right-2 sm:right-4 w-[210px] h-[135px] sm:w-[240px] sm:h-[150px] z-30 border border-gold-500/30',
      delay: 0.2,
      floatY: [0, -5, 0],
    },
    {
      id: 'amstrad-executives',
      title: 'Amstrad Owner & Regional Leadership',
      tag: 'Executive Summit',
      image: '/images/events/amstrad-executives.jpg',
      // MEDIUM EXECUTIVE CARD (240x150) - Staggered Center-Left
      pos: 'top-[200px] left-8 sm:left-14 w-[210px] h-[135px] sm:w-[240px] sm:h-[150px] z-35 border-2 border-gold-400/80 shadow-gold-glow',
      delay: 0.4,
      floatY: [0, -7, 0],
    },
    {
      id: 'kenstar-executives',
      title: 'Kenstar Official Authorised Certification',
      tag: 'Brand Certification',
      image: '/images/events/kenstar-executives.jpg',
      // SMALL SUPPORTING CARD (190x130) - Staggered Center-Right (Features Kenstar Branch & Area Manager presenting Certificate)
      pos: 'top-[160px] right-0 sm:right-2 w-[170px] h-[120px] sm:w-[190px] sm:h-[130px] z-25 border-2 border-gold-400/80 shadow-gold-glow',
      delay: 0.6,
      floatY: [0, -5, 0],
    },
    {
      id: 'product-launch',
      title: 'Product Launch Ceremony',
      tag: 'Brand Partnership',
      image: '/images/events/product-launch.jpg',
      // SMALL SUPPORTING CARD (180x120) - Bottom-Right Accent
      pos: 'bottom-2 right-10 sm:right-16 w-[160px] h-[110px] sm:w-[180px] sm:h-[120px] z-30 border border-gold-500/30',
      delay: 0.8,
      floatY: [0, -6, 0],
    },
  ];

  // Mobile product showcase tiles (for screens < 768px)
  const mobileShowcase = [
    { title: 'Official Media Coverage', image: '/images/events/media-interview.jpg' },
    { title: 'Kenstar Authorised Certification', image: '/images/events/kenstar-executives.jpg' },
    { title: 'Amstrad Owner & Leadership', image: '/images/events/amstrad-executives.jpg' },
    { title: 'Bathinda Corporate Hub', image: '/images/showroom.jpg' },
  ];

  const handleTeamClick = () => {
    if (onOpenTeamModal) {
      onOpenTeamModal();
    } else {
      onOpenEnquiry('retail');
    }
  };

  return (
    <section className="relative min-h-[88vh] bg-navy-950 text-white overflow-hidden flex items-center border-b border-navy-800 py-12 sm:py-16">
      {/* Right Curved Diagonal Gold Background Panel */}
      <div className="absolute top-0 right-0 w-full lg:w-[58%] h-full bg-gradient-to-br from-gold-500/20 via-gold-400/10 to-gold-600/25 rounded-l-[50px] lg:rounded-l-[180px] pointer-events-none border-l border-gold-500/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand-First Corporate Hero (Spacious & Authoritative) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-left pr-0 lg:pr-2"
          >
            {/* 1. Hero Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ESTABLISHED 2017 • 30+ YEARS INDUSTRY LEADERSHIP</span>
            </div>

            {/* 2. Main Heading (LARGEST TEXT ON PAGE - Brand First) */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[80px] xl:text-[92px] font-extrabold text-gold-400 tracking-tight leading-[0.92] mb-5 drop-shadow-sm">
              Bansal Enterprises
            </h1>

            {/* 3. Supporting Heading */}
            <h2 className="text-xl sm:text-3xl lg:text-[32px] font-medium text-white tracking-tight leading-snug mb-6">
              Punjab's Trusted Regional Electronics Distributor Since 2017
            </h2>

            {/* 4. Corporate Description */}
            <p className="text-slate-300 text-sm sm:text-base font-sans font-light max-w-xl leading-relaxed mb-9">
              Authorised regional distributor for <strong className="text-white font-semibold">Amstrad, Tomashi, Kenstar, Liebherr, KAFF & Nova Max</strong> across Bathinda, Mansa, Muktsar, Faridkot and Fazilka. Founded by Mr. Rakesh Bansal with over 30 years of industry experience, Bansal Enterprises supplies retailers, dealers and business partners with trusted brands, reliable inventory and efficient regional logistics.
            </p>

            {/* 5. Apple-Style B2B CTA Buttons (56px height, equal width) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <button
                onClick={() => onOpenEnquiry('wholesale')}
                className="w-full sm:w-56 h-14 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Become a Channel Partner</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleTeamClick}
                className="w-full sm:w-56 h-14 rounded-xl border-2 border-gold-500/40 bg-navy-900/80 hover:bg-navy-900 text-gold-400 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4 text-gold-400" />
                <span>Contact Distribution Team</span>
              </button>
            </div>

            {/* 6. Clean Corporate Trust Metrics (4 Equal Columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-navy-800/80 font-sans">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="font-serif text-lg font-bold text-white">30+ Years</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium font-sans">Trade Experience</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                  <Users className="w-4 h-4 shrink-0" />
                  <span className="font-serif text-lg font-bold text-white">100+</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Dealer Network</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="font-serif text-lg font-bold text-white">6 Brands</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Authorised Supply</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span className="font-serif text-lg font-bold text-white">5 District</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Logistics Reach</span>
              </div>
            </div>
          </motion.div>

          {/* Dedicated Mobile B2B Showcase (Visible on < 768px screens) */}
          <div className="block md:hidden mt-4">
            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2">
              Regional Distribution Capabilities
            </span>
            <div className="grid grid-cols-2 gap-3">
              {mobileShowcase.map((item, idx) => (
                <div
                  key={idx}
                  className="relative h-32 rounded-xl overflow-hidden border border-gold-500/30 bg-navy-900 shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent p-2 flex items-end">
                    <span className="text-[10px] font-bold text-white font-serif drop-shadow leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Floating Hero Collage (Shifted Right, Fits 100% in 70-75vh) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative h-[420px] sm:h-[460px] w-full hidden md:block pl-6 lg:pl-10"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {floatingCards.map((item) => (
                <motion.div
                  key={item.id}
                  animate={{ y: item.floatY }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: item.delay,
                  }}
                  className={`absolute ${item.pos} rounded-2xl overflow-hidden bg-navy-900/95 shadow-2xl backdrop-blur-md group hover:border-gold-300 hover:scale-[1.03] transition-all duration-300`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent p-2.5 flex flex-col justify-end">
                    <span className="text-[8px] sm:text-[9px] font-bold text-gold-400 font-sans tracking-widest uppercase mb-0.5">
                      {item.tag}
                    </span>
                    <span className="font-serif text-xs font-bold text-white drop-shadow leading-tight">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
