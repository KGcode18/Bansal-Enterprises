'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Quote, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight, Building2, Truck, Layers } from 'lucide-react';
import Image from 'next/image';

export const About: React.FC = () => {
  // Auto-sliding B2B corporate & distribution showcase carousel (Starts from Mr. Rakesh Bansal)
  const carouselItems = [
    {
      title: 'Mr. Rakesh Bansal',
      tag: 'Founder & Managing Director (30+ Years Trade Experience)',
      image: '/images/rakesh-bansal.jpg',
      badge: 'Executive Leadership',
    },
    {
      title: 'Kenstar Authorised Partner Certification',
      tag: 'Kenstar Branch Manager & Area Manager presenting Authorised Distributor Certificate to Mr. Rakesh Bansal',
      image: '/images/events/kenstar-executives.jpg',
      badge: 'Official Authorised Distributor',
    },
    {
      title: 'Amstrad Owner & Regional Leadership',
      tag: 'Amstrad Owner, Regional Manager & Branch Manager with Mr. Rakesh Bansal',
      image: '/images/events/amstrad-executives.jpg',
      badge: 'Executive Brand Partnership',
    },
    {
      title: 'Central Distribution Hub & Corporate Office',
      tag: 'Paras Ram Nagar, Main Road, Bathinda, Punjab',
      image: '/images/showroom.jpg',
      badge: 'Headquarters & Warehousing',
    },
    {
      title: 'Official Media Leadership Coverage',
      tag: 'Press interviews during major product launches & brand summits',
      image: '/images/events/media-interview.jpg',
      badge: 'Industry Recognition',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isInView, carouselItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 sm:py-28 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 sm:space-y-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <span>FOUNDER & DISTRIBUTION STORY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              30+ Years Electronics Trade Leadership
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light">
              Founded in 2017 by Mr. Rakesh Bansal—bringing over 30 years of deep consumer electronics retail and trade expertise—Bansal Enterprises is Southern Punjab’s premier multi-brand consumer electronics distribution partner, serving authorised retailers, dealers and institutional partners across Bathinda, Mansa, Muktsar, Faridkot and Fazilka.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Backed by direct manufacturer contracts with global leaders like Amstrad, Tomashi, Kenstar, Liebherr, KAFF, and Nova Max, central warehousing capacity, and dedicated regional logistics, we manage inventory depth and channel supply for over 100 active retail business partners.
            </p>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-2xl bg-navy-900 border border-gold-500/30 space-y-2 shadow-2xl relative overflow-hidden">
              <Quote className="absolute top-3 right-4 w-10 h-10 text-gold-500/10 pointer-events-none" />
              <p className="text-sm sm:text-base text-slate-200 italic font-serif leading-relaxed">
                "Our growth as a regional distributor stems from treating every retail partner with total transparency, reliable inventory availability, and zero compromise on product authenticity."
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-navy-800">
                <div>
                  <span className="font-serif text-base font-bold text-white block">Mr. Rakesh Bansal</span>
                  <span className="text-[10px] text-gold-400 font-sans tracking-widest uppercase font-semibold">Founder & Managing Director (30+ Yrs Exp.)</span>
                </div>
                <span className="text-[10px] font-mono text-gold-400 bg-navy-950 px-2.5 py-1 rounded border border-gold-500/20">Est. 2017</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-white font-sans">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Central Warehousing & Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Manufacturer Supply Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Structured Trade Credit Terms</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily Scheduled 5-District Dispatch</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Column: Auto-sliding B2B Corporate & Distribution Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-navy-900 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={carouselItems[currentIndex].image}
                    alt={carouselItems[currentIndex].title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent p-6 flex flex-col justify-end">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-navy-950/90 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider w-max mb-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{carouselItems[currentIndex].badge}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow">
                      {carouselItems[currentIndex].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans font-light">
                      {carouselItems[currentIndex].tag}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-navy-950/80 border border-gold-500/30 text-white hover:text-gold-400 hover:bg-navy-950 transition-all"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-navy-950/80 border border-gold-500/30 text-white hover:text-gold-400 hover:bg-navy-950 transition-all"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 right-6 z-20 flex items-center gap-1.5">
                {carouselItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex ? 'w-6 bg-gold-400' : 'w-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
