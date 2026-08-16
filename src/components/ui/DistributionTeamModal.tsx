'use client';

import React from 'react';
import { Modal } from './Modal';
import { Phone, MessageCircle, UserCheck, ShieldCheck, Award } from 'lucide-react';

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
      name: 'Rajiv Bansal',
      role: 'Distribution Management',
      phone: '+91 79735 41285',
      phoneRaw: '917973541285',
      badge: 'Executive Desk',
    },
    {
      name: 'Vijay Sharma',
      role: 'Trade & Dealer Relations',
      phone: '+91 99153 73302',
      phoneRaw: '919915373302',
      badge: 'Channel Manager',
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Contact Distribution Team"
      subtitle="Direct Phone & WhatsApp Lines to Trade Executives"
    >
      <div className="space-y-4 py-2 text-left">
        <p className="text-xs text-slate-300 font-sans font-light leading-relaxed mb-4">
          Connect directly with our senior distribution executives for trade pricing, bulk ordering, and channel partner onboarding across Punjab.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-navy-950 border-2 border-gold-500/30 hover:border-gold-400 transition-all shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest px-2 py-0.5 rounded bg-navy-900 border border-gold-500/20">
                    {member.badge}
                  </span>
                  <UserCheck className="w-4 h-4 text-gold-400/80" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white mb-0.5">{member.name}</h4>
                <p className="text-xs text-slate-400 font-sans">{member.role}</p>
                <p className="text-sm font-mono font-bold text-gold-400 mt-2">{member.phone}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-navy-800">
                <a
                  href={`tel:${member.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold transition-all shadow-gold-glow hover:brightness-110"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${member.phoneRaw}?text=${encodeURIComponent(`Hello ${member.name}, I am reaching out regarding Distribution Partnership with Bansal Enterprises.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-navy-800/80 flex items-center justify-between text-[11px] text-slate-400 font-sans">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>Direct priority line for authorized dealers & retailers</span>
          </span>
        </div>
      </div>
    </Modal>
  );
};
