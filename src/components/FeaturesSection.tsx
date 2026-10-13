import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, BookOpen, Compass, HeartHandshake, Lock, FileCheck2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function FeaturesSection() {
  const { language } = useLanguage();
  const t = translations[language].features;

  const getIcon = (name: string) => {
    switch (name) {
      case 'grading':
        return <FileCheck2 className="h-6 w-6 text-indigo-600" />;
      case 'gdpr':
        return <ShieldCheck className="h-6 w-6 text-teal-600" />;
      case 'library':
        return <BookOpen className="h-6 w-6 text-indigo-600" />;
      case 'insights':
        return <Compass className="h-6 w-6 text-indigo-600" />;
      default:
        return <HeartHandshake className="h-6 w-6 text-indigo-600" />;
    }
  };

  const items = t.items;

  return (
    <section id="features" className="py-24 bg-white relative">
      {/* Background radial soft lights */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full glow-indigo opacity-30 -z-10" />

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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Feature 1 - AI Grading (Large Bento block, span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/60 hover:border-indigo-500/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-white rounded-2xl border border-slate-100 group-hover:bg-indigo-50 transition-all shadow-sm">
                  {getIcon('grading')}
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {items[0].badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {items[0].title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                {items[0].description}
              </p>
            </div>

            {/* Simulated Interactive grading criteria block */}
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t.realTimePreview}</span>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="font-semibold">{t.criterionLogic}</span>
                  <span className="text-indigo-600 font-bold">{t.recommendedPts}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="font-semibold">{t.criterionTerminology}</span>
                  <span className="text-amber-600 font-bold">{t.needsReview}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 - GDPR compliant AI ( span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/60 hover:border-teal-500/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-white rounded-2xl border border-slate-100 group-hover:bg-teal-50 transition-all shadow-sm">
                  {getIcon('gdpr')}
                </div>
                <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {items[1].badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors">
                {items[1].title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {items[1].description}
              </p>
            </div>

            {/* GDPR Protection diagram representation */}
            <div className="bg-teal-950/5 border border-teal-500/15 rounded-2xl p-4 flex items-center gap-3">
              <div className="p-2 bg-teal-500/10 rounded-xl text-teal-600">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">{t.euCompliance}</p>
                <p className="text-[10px] text-slate-500">{t.zeroRetentionDesc}</p>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 - National Exam Library (span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:border-indigo-500/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-white rounded-2xl border border-slate-100 group-hover:bg-indigo-50 transition-all shadow-sm">
                  {getIcon('library')}
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {items[2].badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {items[2].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {items[2].description}
              </p>
            </div>

            <div className="text-[11px] font-medium text-slate-400 italic">
              {t.mocksDesc}
            </div>
          </motion.div>

          {/* Feature 4 - Pedagogical insights (span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:border-indigo-500/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-white rounded-2xl border border-slate-100 group-hover:bg-indigo-50 transition-all shadow-sm">
                  {getIcon('insights')}
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {items[3].badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {items[3].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {items[3].description}
              </p>
            </div>

            <div className="text-[11px] font-medium text-slate-400 italic">
              {t.insightsDesc}
            </div>
          </motion.div>

          {/* Feature 5 - Dedicated support (span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:border-indigo-500/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-white rounded-2xl border border-slate-100 group-hover:bg-indigo-50 transition-all shadow-sm">
                  {getIcon('support')}
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {items[4].badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {items[4].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {items[4].description}
              </p>
            </div>

            <div className="text-[11px] font-medium text-slate-400 italic">
              {t.supportDesc}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
