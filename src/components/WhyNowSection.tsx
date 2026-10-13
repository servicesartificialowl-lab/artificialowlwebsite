import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function WhyNowSection() {
  const { language } = useLanguage();
  const t = translations[language].whyNow;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <TrendingUp className="h-5 w-5 text-indigo-600" />;
      case 1:
        return <Users className="h-5 w-5 text-indigo-600" />;
      case 2:
        return <ShieldAlert className="h-5 w-5 text-indigo-600" />;
      default:
        return <Award className="h-5 w-5 text-indigo-600" />;
    }
  };

  return (
    <section id="whynow" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -bottom-10 right-0 w-96 h-96 rounded-full glow-teal opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full inline-block">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Why Now Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((reason, idx) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex items-start gap-5 group"
            >
              {/* Icon container */}
              <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors shrink-0">
                {getIcon(idx)}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                    {reason.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-indigo-500 transition-colors opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing trust statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-indigo-50/50 border border-indigo-100/50 rounded-2xl px-5 py-3 text-xs text-indigo-800">
            <span className="font-bold">{t.statsPre}</span>
            <span>{t.statsText}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
