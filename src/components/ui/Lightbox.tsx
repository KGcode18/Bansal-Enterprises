'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle: string;
  imageCaption: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
  imageCaption,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/95 backdrop-blur-xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-gold-400 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav buttons */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-gold-400 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-gold-400 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-gold-500/20">
              <Image
                src={imageSrc}
                alt={imageTitle}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="mt-4 text-center max-w-2xl px-4">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                {imageTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-sans">
                {imageCaption}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
