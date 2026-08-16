'use client';

import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'wholesale' | 'retail';
  productName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'wholesale',
  productName,
}) => {
  const [enquiryType, setEnquiryType] = useState<'wholesale' | 'retail'>(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Bathinda',
    businessName: '',
    categoryInterest: 'All Categories',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const messageText = `*Distribution Channel Application*\nName: ${formData.name}\nBusiness: ${formData.businessName || 'N/A'}\nPhone: ${formData.phone}\nDistrict: ${formData.city}${productName ? `\nCategory: ${productName}` : ''}\nMessage: ${formData.message}`;
      const url = `https://wa.me/919988096592?text=${encodeURIComponent(messageText)}`;
      window.open(url, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={productName ? `Distribution Inquiry: ${productName}` : 'Channel Partner Onboarding'}
      subtitle="Bansal Enterprises • Direct Line to Trade Management"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center mx-auto border border-gold-500/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="font-serif text-2xl text-white font-bold">Inquiry Received</h4>
          <p className="text-sm text-slate-300 max-w-sm mx-auto">
            Thank you, <span className="text-gold-400 font-semibold">{formData.name}</span>. Our channel management team will contact your business within 2 business hours.
          </p>
          <div className="pt-4">
            <Button variant="gold" onClick={handleReset}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Inquiry Type Tabs */}
          {!productName && (
            <div className="grid grid-cols-2 gap-2 p-1 bg-navy-950 rounded-xl border border-gold-500/20 mb-4">
              <button
                type="button"
                onClick={() => setEnquiryType('wholesale')}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  enquiryType === 'wholesale'
                    ? 'bg-gold-gradient text-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Become a Channel Partner
              </button>
              <button
                type="button"
                onClick={() => setEnquiryType('retail')}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  enquiryType === 'retail'
                    ? 'bg-gold-gradient text-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Bulk Supply / Corporate Inquiry
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ramanpreet Singh"
                className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="99880 96592"
                className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                District / City *
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="Bathinda">Bathinda</option>
                <option value="Mansa">Mansa</option>
                <option value="Sri Muktsar Sahib">Sri Muktsar Sahib</option>
                <option value="Faridkot">Faridkot</option>
                <option value="Fazilka">Fazilka</option>
                <option value="Other Punjab District">Other Punjab District</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Retail Store / Business Name
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Malwa Electronics"
                className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Supply Requirements or Category Interest
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what brands, categories, or order volumes you need..."
              className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Direct priority response from trade desk management</span>
            </div>
            <Button type="submit" variant="gold" size="md">
              Submit Partner Application
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
