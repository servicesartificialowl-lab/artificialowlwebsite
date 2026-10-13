import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ShieldCheck, AlertCircle, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function AIRiskSection() {
  const { language } = useLanguage();
  const t = translations[language].safety;

  return (
    <section id="safety" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden text-white">
      {/* Professional Soft Subtle Backdrop Ambient Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and Statement Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-teal-400 bg-teal-400/10 border border-teal-500/20 px-3.5 py-1.5 rounded-full inline-block uppercase tracking-wider">
                {t.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {t.titlePre} <span className="block text-slate-400 font-normal text-2xl sm:text-3xl mt-2">{t.titlePost}</span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.description}
            </p>

            {/* Editorial Key Statement Pull-Quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 border-l-4 border-l-teal-400 shadow-xl space-y-3"
            >
              <p className="text-base sm:text-lg font-medium text-slate-100 italic leading-relaxed">
                {t.quote}
              </p>
              <div className="text-[11px] uppercase tracking-widest text-teal-400 font-bold">
                {t.quoteAuthor}
              </div>
            </motion.div>
          </div>

          {/* Right Comparison Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-indigo-400" />
                {t.comparisonTitle}
              </h3>

              <div className="space-y-4">
                {/* Shadow AI Box */}
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                    <ShieldAlert className="h-4.5 w-4.5 shrink-0" />
                    <span>{t.shadowTitle}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {t.shadowPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold mt-0.5">✕</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secure AI Box */}
                <div className="p-4 rounded-2xl bg-teal-950/20 border border-teal-900/30 space-y-3">
                  <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="h-4.5 w-4.5 shrink-0" />
                    <span>{t.secureTitle}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {t.securePoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-400">
                  {t.footerText}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

