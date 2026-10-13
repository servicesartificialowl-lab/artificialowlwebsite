import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with dark blurred background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-[95%] md:max-w-[700px] max-h-[85vh] flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Upper Decorative Color Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#4F46E5] z-10" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all z-20"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Iframe Content Container */}
            <div className="pt-14 pb-5 px-4 flex-1 flex flex-col min-h-0 overflow-hidden">
              <div className="w-full flex-1 min-h-[400px] h-[65vh] md:h-[72vh] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf_txWa7-cLpmcei23AqAe0xdnzDBXEpXRruNRVxSl_6Le4eA/viewform?embedded=true"
                  className="w-full h-full"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Google Forms"
                >
                  A carregar…
                </iframe>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
