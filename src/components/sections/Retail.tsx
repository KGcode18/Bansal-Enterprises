'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Building2, Users } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/Button';

interface ExperienceHubProps {
  onOpenEnquiry: (type: 'wholesale' | 'retail') => void;
  onOpenTeamModal?: () => void;
}

export const Retail: React.FC<ExperienceHubProps> = ({ onOpenEnquiry, onOpenTeamModal }) => {
  const handleTeamClick = () => {
    if (onOpenTeamModal) {
      onOpenTeamModal();
    } else {
      onOpenEnquiry('retail');
    }
  };

  return (
    <section className="py-20 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/20 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>CENTRAL HEADQUARTERS & FACILITY</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bathinda Corporate Hub & Experience Centre
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans font-light mt-2 leading-relaxed">
            Our central administrative headquarters and brand demonstration facility supporting regional dealers, manufacturer executives, and institutional partners across Southern Punjab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Authentic Storefront Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-navy-900 group"
          >
            <Image
              src="/images/showroom.jpg"
              alt="Bansal Enterprises Bathinda Corporate Headquarters & Experience Centre"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 saturate-[1.05]"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent p-6 flex flex-col justify-end">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-950/90 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider w-max mb-1 backdrop-blur-md">
                <Building2 className="w-3.5 h-3.5" />
                <span>Central Operations Facility</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white drop-shadow">
                Bansal Enterprises Headquarters
              </h3>
              <p className="text-xs text-slate-300 font-sans font-light">
                Main Road, Opposite Patiala Hospital, Paras Ram Nagar, Bathinda, Punjab
              </p>
            </div>
          </motion.div>

          {/* Right: Supporting Facility & Meeting Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-navy-900 rounded-3xl p-8 border-2 border-gold-500/30 shadow-2xl space-y-6 text-left"
          >
            <div className="border-b border-navy-800 pb-4">
              <h3 className="font-serif text-xl font-bold text-white">Partner Meetings & Support</h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">Central Trade Desk & Corporate Office</p>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-300 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Main Road, Opposite Patiala Hospital, Paras Ram Nagar, Bathinda, Punjab - 151001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <button onClick={handleTeamClick} className="hover:text-gold-400 font-mono font-semibold transition-colors text-left">
                  +91 79735 41285 / +91 99153 73302
                </button>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:bathindabe@gmail.com" className="hover:text-gold-400 transition-colors">bathindabe@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Mon – Sun: 9:30 AM – 8:30 PM</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-3">
              <Button
                variant="gold"
                size="md"
                onClick={handleTeamClick}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full uppercase font-bold tracking-wider shadow-gold-glow"
              >
                Contact Distribution Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
