import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { 
  ArrowRight, 
  XCircle, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Shuffle, 
  Sparkles, 
  BrainCircuit, 
  LineChart, 
  AlertCircle 
} from 'lucide-react';

export default function ComparisonSection() {
  const { language } = useLanguage();
  const t = translations[language].comparison;

  // Icon mapping helper for Left side (Without Platform) - styled in muted #94A3B8
  const getBeforeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="h-5 w-5 text-[#94A3B8]" />;
      case 1:
        return <Clock className="h-5 w-5 text-[#94A3B8]" />;
      case 2:
        return <Shuffle className="h-5 w-5 text-[#94A3B8]" />;
      default:
        return <AlertCircle className="h-5 w-5 text-[#94A3B8]" />;
    }
  };

  // Icon mapping helper for Right side (With Artificial Owl) - styled in bright #14B8A6
  const getAfterIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CheckCircle2 className="h-5 w-5 text-[#14B8A6]" />;
      case 1:
        return <BrainCircuit className="h-5 w-5 text-[#14B8A6]" />;
      case 2:
        return <LineChart className="h-5 w-5 text-[#14B8A6]" />;
      default:
        return <Sparkles className="h-5 w-5 text-[#14B8A6]" />;
    }
  };

  return (
    <section id="comparison" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Without the Platform (Subtle, neutral, flat) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFC] rounded-2xl border border-[#D8E2F0] p-8 flex flex-col justify-between shadow-sm relative group"
          >
            <div>
              {/* Badge & Title */}
              <div className="flex items-center justify-between border-b border-[#D8E2F0]/50 pb-5 mb-6">
                <h3 className="text-xl font-semibold text-[#334155]">
                  {t.beforeTitle}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#F1F5F9] border border-[#CBD5E1] text-[#64748B]">
                  <XCircle className="h-3.5 w-3.5 text-[#94A3B8]" />
                  {language === 'pt' ? 'Ineficiente' : 'Inefficient'}
                </span>
              </div>

              {/* 3 Core Points */}
              <ul className="space-y-4 mb-8">
                {t.beforePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-lg bg-[#F1F5F9] border border-[#CBD5E1]/20 text-[#94A3B8]">
                      {getBeforeIcon(index)}
                    </div>
                    <span className="text-[#64748B] font-normal leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Visual Workflow Map */}
              <div className="bg-[#F8FAFC] rounded-xl p-4 mb-8 border border-[#D8E2F0]/80">
                <span className="block text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold mb-3">
                  {language === 'pt' ? 'FLUXO DE TRABALHO' : 'WORKFLOW'}
                </span>
                <div className="flex items-center flex-wrap gap-2 text-xs">
                  {t.beforeSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-[#64748B] font-medium border border-[#CBD5E1]/30">
                        {step}
                      </span>
                      {idx < t.beforeSteps.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-[#CBD5E1] shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Column Footer */}
            <div className="mt-auto pt-5 border-t border-[#D8E2F0]/40 flex items-center justify-between text-sm font-semibold">
              <span className="text-[#64748B]">
                {t.beforeFooter}
              </span>
            </div>
          </motion.div>

          {/* Right Column: With Artificial Owl (Premium, organized, highly efficient) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0F172A] text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group border border-[#4F46E5] ring-4 ring-[#4F46E5]/10"
          >
            <div className="relative z-10">
              {/* Badge & Title */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <h3 className="text-xl font-semibold text-white">
                  {t.afterTitle}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[rgba(20,184,166,0.12)] border border-[rgba(20,184,166,0.35)] text-[#14B8A6]">
                  <Sparkles className="h-3.5 w-3.5 text-[#14B8A6]" />
                  {language === 'pt' ? 'Centralizado' : 'Centralized'}
                </span>
              </div>

              {/* 3 Core Points */}
              <ul className="space-y-4 mb-8">
                {t.afterPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-lg bg-slate-800/80 text-[#14B8A6] border border-slate-700/50">
                      {getAfterIcon(index)}
                    </div>
                    <span className="text-[#CBD5E1] font-normal leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Visual Workflow Map */}
              <div className="bg-[#0b0f19] rounded-xl p-4 mb-8 border border-slate-800/80 shadow-inner">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  {language === 'pt' ? 'FLUXO DE TRABALHO' : 'WORKFLOW'}
                </span>
                <div className="flex items-center flex-wrap gap-2 text-xs">
                  {t.afterSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-3 py-1.5 rounded-lg bg-[#4F46E5]/20 text-white font-medium border border-[#4F46E5]/40 shadow-[0_0_12px_rgba(79,70,229,0.15)]">
                        {step}
                      </span>
                      {idx < t.afterSteps.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-[#14B8A6] shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Column Footer */}
            <div className="mt-auto pt-5 border-t border-slate-800 flex items-center justify-between text-sm font-semibold relative z-10">
              <span className="text-[#14B8A6]">
                {t.afterFooter}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
