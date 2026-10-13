import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { Check, Sparkles, Building2 } from 'lucide-react';

interface PricingSectionProps {
  onBookDemo: () => void;
}

export default function PricingSection({ onBookDemo }: PricingSectionProps) {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight"
          >
            {t.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards Grid - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* CARD 1 — Standard Plan (Highlighted / Recommended) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0F172A] text-white rounded-2xl p-8 flex flex-col justify-between relative border border-[#4F46E5] shadow-xl overflow-hidden group ring-4 ring-[#4F46E5]/15"
          >
            {/* Spotlight Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F46E5]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex-1 flex flex-col">
              {/* Card Header & Badge */}
              <div className="flex items-center justify-between mb-6 h-7">
                <span className="text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
                  {language === 'pt' ? 'Recomendado' : 'Recommended'}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#4F46E5]/20 text-indigo-300 border border-[#4F46E5]/35">
                  {language === 'pt' ? 'Melhor Valor' : 'Best Value'}
                </span>
              </div>

              {/* Title & Description */}
              <div className="min-h-[100px] flex flex-col justify-start mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t.standard.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t.standard.description}</p>
              </div>

              {/* Pricing Display */}
              <div className="mb-6 pb-6 border-b border-slate-800 min-h-[100px] flex flex-col justify-end">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {t.standard.price}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">
                    {t.standard.period}
                  </span>
                </div>
                <div className="mt-1.5 text-xs font-semibold text-[#14B8A6]">
                  {t.standard.billingNote}
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8 flex-1">
                {t.standard.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 rounded-full p-0.5 bg-[#14B8A6]/15 text-[#14B8A6] border border-[#14B8A6]/20">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-slate-300 font-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={onBookDemo}
              className="w-full py-3.5 px-6 rounded-xl bg-[#4F46E5] hover:bg-[#5a52ff] active:scale-[0.98] transition-all font-semibold text-sm text-white shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] text-center cursor-pointer"
            >
              {t.standard.cta}
            </button>
          </motion.div>

          {/* CARD 2 — Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F8FAFC] rounded-2xl p-8 flex flex-col justify-between border border-[#D8E2F0] shadow-sm relative overflow-hidden group hover:border-[#CBD5E1] transition-all"
          >
            <div className="flex-1 flex flex-col">
              {/* Card Header & Badge */}
              <div className="flex items-center justify-between mb-6 h-7">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  {language === 'pt' ? 'Corporativo' : 'Corporate'}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-200/55 text-slate-600 border border-slate-300/45">
                  {language === 'pt' ? 'Institucional' : 'Institutional'}
                </span>
              </div>

              {/* Title & Description */}
              <div className="min-h-[100px] flex flex-col justify-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.enterprise.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.enterprise.description}</p>
              </div>

              {/* Pricing Display */}
              <div className="mb-6 pb-6 border-b border-[#D8E2F0]/65 min-h-[100px] flex flex-col justify-end">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-800 tracking-tight">
                    {t.enterprise.price}
                  </span>
                </div>
                <div className="mt-1.5 text-xs font-semibold text-slate-500">
                  {t.enterprise.billingNote}
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8 flex-1">
                {t.enterprise.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 rounded-full p-0.5 bg-indigo-50 text-[#4F46E5] border border-indigo-100">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-slate-600 font-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={onBookDemo}
              className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] transition-all font-semibold text-sm text-white shadow-sm text-center cursor-pointer"
            >
              {t.enterprise.cta}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
