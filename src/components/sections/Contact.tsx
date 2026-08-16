'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<string>('Dealer Onboarding');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Bathinda',
    businessName: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const messageText = `*Distribution Inquiry (${inquiryType.toUpperCase()})*\nName: ${formData.name}\nBusiness: ${formData.businessName || 'N/A'}\nPhone: ${formData.phone}\nDistrict: ${formData.city}\nMessage: ${formData.message}`;
      const url = `https://wa.me/919988096592?text=${encodeURIComponent(messageText)}`;
      window.open(url, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-navy-900 w-full max-w-2xl p-6 sm:p-10 text-left">
          <div className="border-b border-navy-800 pb-4 mb-5 text-center">
            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-1">
              B2B CHANNEL ONBOARDING
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Become a Distribution Partner</h3>
            <p className="text-xs text-slate-300 font-sans mt-1">Get in touch directly with Bansal Enterprises for dealer onboarding, bulk supply, or corporate sales.</p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto" />
              <h4 className="font-serif text-xl text-white font-bold">Partner Inquiry Submitted</h4>
              <p className="text-xs text-slate-300 font-light">Our channel management team will contact your phone number shortly.</p>
              <Button variant="gold" size="sm" onClick={() => setSubmitted(false)}>
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Inquiry Purpose *</label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-3 bg-navy-950 border border-navy-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                >
                  <option value="Dealer Onboarding">Become a Channel Partner / Dealer</option>
                  <option value="Bulk Supply Enquiry">Bulk Supply / Wholesale Inquiry</option>
                  <option value="Corporate Sales">Corporate Sales Inquiry</option>
                  <option value="Brand Partnership">Brand Partnership Proposal</option>
                  <option value="Institutional Orders">Institutional Orders</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Gurpreet Singh"
                    className="w-full px-3.5 py-3 bg-navy-950 border border-navy-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Store / Business Name</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Malwa Electronics"
                    className="w-full px-3.5 py-3 bg-navy-950 border border-navy-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="99880 96592"
                    className="w-full px-3.5 py-3 bg-navy-950 border border-navy-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">District / City *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-3 bg-navy-950 border border-navy-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="Bathinda">Bathinda</option>
                    <option value="Mansa">Mansa</option>
                    <option value="Sri Muktsar Sahib">Sri Muktsar Sahib</option>
                    <option value="Faridkot">Faridkot</option>
                    <option value="Fazilka">Fazilka</option>
                    <option value="Other Punjab District">Other Punjab District</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Specific Supply Requirements</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify categories, brand requirements, or order volumes..."
                  className="w-full px-3.5 py-3 bg-navy-950 border border-navy-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                />
              </div>

              <Button type="submit" variant="gold" size="md" className="w-full uppercase font-bold tracking-wider shadow-gold-glow py-3">
                SUBMIT PARTNER INQUIRY
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
