import React from 'react';
import { motion } from 'motion/react';
import { Quote, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section id="testimonials" className="relative py-24 bg-[#F8FAFC] overflow-hidden font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#4F46E5] font-semibold text-xs tracking-wide uppercase"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-[#4F46E5]" />
            <span>{t.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
          >
            {t.titlePre} <span className="text-[#4F46E5]">{t.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.list.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle visual solid accent top border for each card */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-[#4F46E5]/80 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-6">
                {/* Visual decoration: quote mark icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50/80 text-[#4F46E5] flex items-center justify-center">
                    <Quote className="h-5 w-5 fill-current opacity-80" />
                  </div>
                  <GraduationCap className="h-5 w-5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-[#0F172A] text-[15px] sm:text-[16px] leading-relaxed font-normal italic">
                  {item.quote}
                </p>
              </div>

              {/* Author Info block */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                {/* Visual Avatar Placeholder with elegant solid circle */}
                <div className="w-11 h-11 rounded-full bg-indigo-500 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {item.avatarInitials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-[#0F172A] truncate">
                    {item.author}
                  </h4>
                  <p className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider mt-0.5 leading-tight">
                    {item.role}
                  </p>
                  <p className="text-[11px] font-semibold text-[#4F46E5] mt-0.5 leading-tight truncate">
                    {item.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Interactive Banner below cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-[#0F172A]">{t.bannerTitle}</h4>
            <p className="text-xs text-[#64748B]">{t.bannerSubtitle}</p>
          </div>
          <a
            href="#final-cta"
            className="px-5 py-2.5 bg-white border border-indigo-200 hover:border-[#4F46E5] text-[#4F46E5] hover:text-[#3B32CC] font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap"
          >
            {t.bannerBtn}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
