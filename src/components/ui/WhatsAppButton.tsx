'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919988096592';

  const defaultMessages = [
    { label: 'Wholesale Dealer Enquiry', text: 'Hello Bansal Enterprises, I am interested in becoming an authorized wholesale dealer in Punjab.' },
    { label: 'Retail Appliance Purchase', text: 'Hello Bansal Enterprises, I want to inquire about electronics available at your Bathinda showroom.' },
    { label: 'Finance & EMI Query', text: 'Hello, I want details regarding Bajaj Finance / IDFC Zero Down Payment EMI options.' },
  ];

  const handleSend = (text: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-72 sm:w-80 bg-navy-900 border border-gold-500/30 rounded-2xl p-4 shadow-2xl text-white"
          >
            <div className="flex items-center justify-between border-b border-navy-800 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Bansal Enterprises</h4>
                  <p className="text-[10px] text-emerald-400">● Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-3">
              Select your inquiry type to chat directly with our team on WhatsApp:
            </p>

            <div className="space-y-2">
              {defaultMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-navy-950/60 hover:bg-navy-800 border border-gold-500/10 hover:border-gold-500/40 text-xs text-slate-200 transition-all flex items-center justify-between group"
                >
                  <span>{msg.label}</span>
                  <Send className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-luxury-dark border border-emerald-400/40 focus:outline-none"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gold-500 rounded-full border-2 border-navy-900 animate-pulse" />
        <MessageCircle className="w-7 h-7" />
      </motion.button>
    </div>
  );
};
