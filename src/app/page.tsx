'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { About } from '@/components/sections/About';
import { IndustryEvents } from '@/components/sections/IndustryEvents';
import { Brands } from '@/components/sections/Brands';
import { Products } from '@/components/sections/Products';
import { Wholesale } from '@/components/sections/Wholesale';
import { Retail } from '@/components/sections/Retail';
import { Finance } from '@/components/sections/Finance';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { DistributionMap } from '@/components/sections/DistributionMap';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { EnquiryModal } from '@/components/ui/EnquiryModal';

export default function Home() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<'wholesale' | 'retail'>('wholesale');

  const handleOpenEnquiry = (type: 'wholesale' | 'retail') => {
    setEnquiryType(type);
    setEnquiryModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-navy-900 text-slate-900 overflow-x-hidden selection:bg-gold-500 selection:text-navy-950">
      {/* Navigation Bar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={handleOpenEnquiry} />

      {/* 2. Trust & Experience Bar */}
      <TrustBar />

      {/* 3. About Bansal Enterprises */}
      <About />

      {/* 4. Media Recognition & Industry Events */}
      <IndustryEvents />

      {/* 5. Brands We Deal In */}
      <Brands />

      {/* 6. Distribution Portfolio (Product Categories) */}
      <Products />

      {/* 7. Wholesale Distribution Network */}
      <Wholesale onOpenEnquiry={handleOpenEnquiry} />

      {/* 8. Corporate Hub & Experience Centre */}
      <Retail onOpenEnquiry={handleOpenEnquiry} />

      {/* 9. Distribution Advantages */}
      <Finance />

      {/* 10. Why Choose Us */}
      <WhyChooseUs />

      {/* 11. Regional Distribution Map */}
      <DistributionMap onOpenEnquiry={handleOpenEnquiry} />

      {/* 12. Channel Partner Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* 13. Channel Partner Onboarding & Contact */}
      <Contact />

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Global Lead Capture Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialType={enquiryType}
      />
    </main>
  );
}
