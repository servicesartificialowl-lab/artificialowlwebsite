import React from 'react';
import { motion } from 'motion/react';
import { MessageSquarePlus, Cpu, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function RoadmapSection() {
  const { language } = useLanguage();
  const t = translations[language].roadmap;

  const getIcon = (id: string) => {
    switch (id) {
      case 'r-2':
        return <MessageSquarePlus className="h-6 w-6 text-teal-600" />;
      default:
        return <Cpu className="h-6 w-6 text-indigo-600" />;
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-white relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full glow-indigo opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full inline-block">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-500 shrink-0" />
            {t.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200/60 hover:border-indigo-500/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Outer decorative halo for active items */}
              <div className="absolute top-0 right-0 p-3">
                <span className={`text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  item.id === 'r-2'
                    ? 'bg-teal-50 text-teal-600 border border-teal-100'
                    : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                }`}>
                  {item.quarter}
                </span>
              </div>

              <div className="space-y-4">
                {/* Icon Container */}
                <div className="p-3 bg-white rounded-2xl border border-slate-100 group-hover:bg-indigo-50 transition-all shadow-sm w-fit">
                  {getIcon(item.id)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
