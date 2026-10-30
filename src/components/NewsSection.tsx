import React from 'react';
import { motion } from 'motion/react';
import { PenTool, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function NewsSection() {
  const { language } = useLanguage();
  const t = translations[language].news;

  return (
    <section id="news" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full inline-block">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-teal-500 shrink-0" />
            {t.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* News Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8">
          {t.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-white border border-teal-500/30 shadow-xl shadow-slate-100 flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <div className="absolute top-0 right-0 p-3">
                <span className="text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider bg-brand-500 text-white border border-brand-500">
                  {item.tag}
                </span>
              </div>

              <div className="p-3 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm w-fit shrink-0">
                <PenTool className="h-6 w-6 text-teal-600" />
              </div>

              <div className="space-y-2 sm:pr-12">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
