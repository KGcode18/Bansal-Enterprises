'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Eye, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Central Distribution Warehouse',
      category: 'Logistics Hub',
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
      isPlaceholder: false,
    },
    {
      id: 2,
      title: 'Bathinda Flagship Showroom Interior',
      category: 'Retail Storefront',
      src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=80',
      isPlaceholder: false,
    },
    {
      id: 3,
      title: 'Official Showroom Photography',
      category: 'Bathinda Showroom Floor',
      src: '',
      isPlaceholder: true,
      placeholderText: 'Official Showroom Photography Coming Soon',
    },
    {
      id: 4,
      title: 'Logistics Fleet & Dispatch Yard',
      category: 'Distribution Logistics',
      src: '',
      isPlaceholder: true,
      placeholderText: 'Central Warehouse Photography Coming Soon',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 bg-navy-900 px-4 py-1.5 rounded-full border border-gold-500/20">
            BUSINESS PREMISES & INFRASTRUCTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Facilities & Operational Scale
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-sans font-light">
            Take a look at our Bathinda headquarters, distribution warehouse, and retail premises.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-navy-900 rounded-2xl border border-navy-800 hover:border-gold-500/40 overflow-hidden group relative shadow-xl h-64 flex flex-col justify-between"
            >
              {item.isPlaceholder ? (
                /* Intentional Placeholder Card with Camera Icon (NO UNFINISHED LOOK) */
                <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-navy-900 border border-dashed border-gold-500/30 rounded-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-3">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gold-400 font-mono">
                    {item.placeholderText}
                  </p>
                  <span className="text-[10px] text-slate-500 font-sans uppercase tracking-widest mt-3">
                    {item.category}
                  </span>
                </div>
              ) : (
                /* Real High-Res Photography Card */
                <div
                  onClick={() => setSelectedImg(item.src)}
                  className="relative w-full h-full cursor-pointer overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent p-5 flex flex-col justify-end">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block">
                          {item.category}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <div className="p-2 rounded-lg bg-navy-950/80 border border-gold-500/30 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 hover:bg-navy-850"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-4xl w-full h-[70vh] rounded-2xl overflow-hidden border border-gold-500/30">
              <Image
                src={selectedImg}
                alt="Enlarged Facility Preview"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
