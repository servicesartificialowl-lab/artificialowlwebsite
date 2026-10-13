import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldAlert, Layers, BarChart4, AlertOctagon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function ProblemSection() {
  const { language } = useLanguage();
  const t = translations[language].problem;

  const getIcon = (id: string) => {
    switch (id) {
      case 'p-1':
        return <Clock className="h-6 w-6 text-indigo-600" />;
      case 'p-2':
        return <ShieldAlert className="h-6 w-6 text-indigo-600" />;
      case 'p-3':
        return <Layers className="h-6 w-6 text-indigo-600" />;
      case 'p-4':
        return <BarChart4 className="h-6 w-6 text-indigo-600" />;
      default:
        return <AlertOctagon className="h-6 w-6 text-indigo-600" />;
    }
  };

  return (
    <section id="problem" className="py-24 bg-white relative">
      {/* Background design accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full glow-teal opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
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

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.cards.map((problem, idx) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-6 sm:p-8 bg-slate-50/50 border border-slate-200/60 hover:border-indigo-500/30 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Icon & Stat Badge Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white rounded-2xl border border-slate-100 group-hover:bg-indigo-50 transition-colors shadow-sm">
                    {getIcon(problem.id)}
                  </div>
                  {problem.stats && (
                    <span className="text-[10px] font-extrabold text-slate-400 bg-slate-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:bg-indigo-100/50 group-hover:text-indigo-700 transition-colors">
                      {problem.stats}
                    </span>
                  )}
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {problem.description}
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

