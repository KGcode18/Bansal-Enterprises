'use client';

import React from 'react';
import { Modal } from './Modal';
import { Phone, MessageCircle, UserCheck, ShieldCheck, Crown, Sparkles } from 'lucide-react';

interface DistributionTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DistributionTeamModal: React.FC<DistributionTeamModalProps> = ({
  isOpen,
  onClose,
}) => {
  const teamMembers = [
    {
      name: 'Mr. Rakesh Bansal',
      role: 'Founder & Managing Director',
      phone: '+91 99880 96592',
      phoneRaw: '919988096592',
      badge: 'Founder & MD',
      icon: Crown,
      desc: 'Direct line for brand partnerships, executive trade decisions & strategic regional supply.',
      whatsappText: 'Hello Mr. Rakesh Bansal, I am reaching out regarding strategic distribution partnership with Bansal Enterprises.',
      isHighlight: true,
    },
    {
      name: 'Mr. Rajiv Bansal',
      role: 'Product & Model Inquiries',
      phone: '+91 79735 41285',
      phoneRaw: '917973541285',
      badge: 'Product Specialist',
      icon: Sparkles,
      desc: 'Ask about product specifications, model features, stock availability & trade pricing.',
      whatsappText: 'Hello Mr. Rajiv Bansal, I would like to inquire about product models, specifications, and stock availability.',
      isHighlight: false,
    },
    {
      name: 'Mr. Vijay Sharma',
      role: 'Trade & Dealer Relations',
      phone: '+91 99153 73302',
      phoneRaw: '919915373302',
      badge: 'Channel Manager',
      icon: UserCheck,
      desc: 'Contact for retail dealer onboarding, trade credit terms & daily 5-district logistics.',
      whatsappText: 'Hello Mr. Vijay Sharma, I am reaching out regarding dealer partnership and trade credit terms.',
      isHighlight: false,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Contact Leadership & Distribution Team"
      subtitle="Direct Phone & WhatsApp Lines to Founder & Key Executives"
      maxWidth="4xl"
    >
      <div className="space-y-6 text-left">
        <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
          Connect directly with Mr. Rakesh Bansal (Founder & MD) or our trade specialists for product details, model inquiries, stock availability, and dealer onboarding across Punjab.
        </p>

        {/* Executive Cards Grid (3 Equal Columns with Spacious Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {teamMembers.map((member, idx) => {
            const Icon = member.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-navy-950 border-2 ${
                  member.isHighlight
                    ? 'border-gold-400 shadow-gold-glow bg-gradient-to-b from-navy-900 to-navy-950'
                    : 'border-gold-500/30 hover:border-gold-400/80 bg-navy-950'
                } transition-all duration-300 shadow-2xl flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-navy-900 border border-gold-500/25">
                      {member.badge}
                    </span>
                    <Icon className={`w-4 h-4 ${member.isHighlight ? 'text-gold-400' : 'text-gold-400/80'}`} />
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-bold text-white tracking-wide">{member.name}</h4>
                    <p className="text-xs font-semibold text-gold-400 font-sans mt-0.5">{member.role}</p>
                  </div>

                  <p className="text-xs text-slate-300 font-sans font-light leading-relaxed min-h-[48px]">
                    {member.desc}
                  </p>

                  <div className="pt-1">
                    <span className="text-xs text-slate-400 block font-sans text-[10px] uppercase tracking-wider mb-1">
                      Direct Phone Number
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-white bg-navy-900 px-3 py-1.5 rounded-lg border border-gold-500/20 block text-center whitespace-nowrap">
                      {member.phone}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-5 mt-4 border-t border-navy-800/80">
                  <a
                    href={`tel:${member.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold transition-all shadow-gold-glow hover:brightness-110"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/${member.phoneRaw}?text=${encodeURIComponent(member.whatsappText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-navy-800/80 flex items-center justify-between text-xs text-slate-400 font-sans">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Authorised regional distribution network for Bathinda, Mansa, Muktsar, Faridkot, & Fazilka</span>
          </span>
        </div>
      </div>
    </Modal>
  );
};
