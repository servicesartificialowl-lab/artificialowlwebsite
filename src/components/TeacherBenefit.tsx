import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hourglass, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function TeacherBenefit() {
  const [weeklyAssessments, setWeeklyAssessments] = useState<number>(3);
  const [classSize, setClassSize] = useState<number>(30);
  const { language } = useLanguage();
  const t = translations[language].teacherBenefit;

  // Math simulation for hours saved
  // Traditional grading: 15 minutes per open assessment = 0.25 hrs. 
  // With AI Owl: 2 minutes per open assessment = 0.033 hrs.
  const traditionalHours = Math.round(weeklyAssessments * classSize * 0.25 * 10) / 10;
  const owlHours = Math.round(weeklyAssessments * classSize * 0.04 * 10) / 10;
  const hoursSaved = Math.round((traditionalHours - owlHours) * 10) / 10;

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden text-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full glow-teal opacity-20 -z-10" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 rounded-full glow-indigo opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Benefit Copy & Calculator (Left Column) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-teal-400 bg-teal-400/10 border border-teal-500/20 px-3.5 py-1.5 rounded-full inline-block uppercase tracking-wider">
                {t.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {t.titlePre}<br />
                <span className="text-teal-400">
                  {t.titleHighlight}
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                {t.description}
              </p>
            </div>

            {/* Interactive Calculator Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-sm">
              <h4 className="text-sm font-bold text-teal-400 flex items-center gap-2">
                <Hourglass className="h-4.5 w-4.5" />
                {t.calcTitle}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* assessments slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>{t.calcSlider1}</span>
                    <span className="text-white font-bold">{weeklyAssessments}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={weeklyAssessments}
                    onChange={(e) => setWeeklyAssessments(Number(e.target.value))}
                    className="w-full accent-teal-400 cursor-pointer h-1 rounded-lg bg-slate-800"
                  />
                </div>

                {/* class size slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>{t.calcSlider2}</span>
                    <span className="text-white font-bold">{classSize} {t.calcStudents}</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="45"
                    value={classSize}
                    onChange={(e) => setClassSize(Number(e.target.value))}
                    className="w-full accent-teal-400 cursor-pointer h-1 rounded-lg bg-slate-800"
                  />
                </div>
              </div>

              {/* Stats Result Layout */}
              <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-slate-800 items-center">
                <div className="p-2 bg-slate-950/60 rounded-xl border border-slate-800">
                  <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wide">{t.labelManual}</span>
                  <span className="text-sm sm:text-lg font-bold text-slate-200 block mt-0.5">{traditionalHours}h</span>
                </div>
                <div className="p-2 bg-slate-950/60 rounded-xl border border-slate-800">
                  <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wide">{t.labelOwl}</span>
                  <span className="text-sm sm:text-lg font-bold text-slate-200 block mt-0.5">{owlHours}h</span>
                </div>
                <div className="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20 col-span-1">
                  <span className="text-[9px] text-teal-400 block uppercase font-bold tracking-widest">{t.labelSaved}</span>
                  <span className="text-base sm:text-xl font-extrabold text-teal-300 block mt-0.5">+{hoursSaved}h</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 text-center">
                {t.calcFooterPre}
                <span className="text-teal-300 font-semibold">{Math.round(hoursSaved * 4)}{t.calcFooterHighlight}</span>{t.calcFooterPost}
              </div>
            </div>
          </div>

          {/* Premium Vector Human-Centered Illustration (Right Column) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md rounded-3xl overflow-hidden bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 shadow-2xl flex flex-col items-center"
            >
              {/* Custom High-Fidelity SVG Classroom Workspace vector representation */}
              <svg
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-xl"
              >
                {/* Background desk & elements */}
                <rect x="40" y="220" width="320" height="12" rx="6" fill="#1E1B4B" opacity="0.6" />
                <path d="M70 232L60 280H80L70 232Z" fill="#1E1B4B" opacity="0.6" />
                <path d="M330 232L320 280H340L330 232Z" fill="#1E1B4B" opacity="0.6" />

                {/* Holographic Glowing AI Owl Mascot */}
                <g transform="translate(160, 50)" className="animate-bounce" style={{ animationDuration: '4s' }}>
                  <circle cx="40" cy="40" r="35" fill="url(#owl-glow)" opacity="0.15" />
                  <circle cx="40" cy="40" r="25" fill="url(#owl-core)" />
                  {/* Owl Eyes */}
                  <circle cx="31" cy="35" r="5" fill="#1E293B" />
                  <circle cx="31" cy="35" r="2" fill="#2DD4BF" />
                  <circle cx="49" cy="35" r="5" fill="#1E293B" />
                  <circle cx="49" cy="35" r="2" fill="#2DD4BF" />
                  {/* Beak */}
                  <polygon points="40,40 37,47 43,47" fill="#F59E0B" />
                  {/* Owl Feathers/Ears details */}
                  <path d="M22 22C24 16 28 18 28 18" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M58 22C56 16 52 18 52 18" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Left Figure: Smiling Teacher */}
                <g transform="translate(60, 100)">
                  {/* Body/Shirt */}
                  <path d="M30 110C30 90 45 80 65 80C85 80 100 90 100 110V140H30V110Z" fill="#4F46E5" />
                  {/* Collar/Details */}
                  <path d="M55 80L65 95L75 80" stroke="#818CF8" strokeWidth="2" />
                  {/* Neck */}
                  <rect x="58" y="65" width="14" height="15" rx="2" fill="#FEE2E2" />
                  {/* Face */}
                  <circle cx="65" cy="45" r="25" fill="#FEE2E2" />
                  {/* Hair */}
                  <path d="M38 35C38 18 50 15 65 15C80 15 92 18 92 35C92 40 88 25 65 25C42 25 38 40 38 35Z" fill="#1E293B" />
                  {/* Glasses */}
                  <circle cx="56" cy="45" r="6" stroke="#4F46E5" strokeWidth="2" />
                  <circle cx="74" cy="45" r="6" stroke="#4F46E5" strokeWidth="2" />
                  <line x1="62" y1="45" x2="68" y2="45" stroke="#4F46E5" strokeWidth="2" />
                  {/* Smile */}
                  <path d="M58 58C62 61 68 61 72 58" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                {/* Right Figure: High-school student looking up */}
                <g transform="translate(230, 130)">
                  {/* Body/Hoodie */}
                  <path d="M20 90C20 75 35 65 55 65C75 65 90 75 90 90V110H20V90Z" fill="#14B8A6" />
                  {/* Neck */}
                  <rect x="48" y="52" width="14" height="15" rx="2" fill="#F3F4F6" />
                  {/* Face */}
                  <circle cx="55" cy="35" r="22" fill="#F3F4F6" />
                  {/* Hair/Cap */}
                  <path d="M33 28C33 15 45 12 55 12C65 12 77 15 77 28" fill="#1E293B" stroke="#1E293B" strokeWidth="2" />
                  <rect x="40" y="8" width="30" height="6" rx="3" fill="#4F46E5" />
                  {/* Eyes / Smile */}
                  <circle cx="47" cy="34" r="2" fill="#1E293B" />
                  <circle cx="63" cy="34" r="2" fill="#1E293B" />
                  <path d="M49 46C52 48 58 48 61 46" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                {/* Tablet / tech in middle emitting teal light rays */}
                <g transform="translate(160, 205)">
                  <rect x="0" y="0" width="80" height="15" rx="4" fill="#334155" />
                  <rect x="4" y="3" width="72" height="9" rx="2" fill="#1E293B" />
                  <line x1="12" y1="8" x2="35" y2="8" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="68" cy="8" r="1.5" fill="#2DD4BF" />
                  {/* Light ray particles */}
                  <circle cx="20" cy="-25" r="2" fill="#2DD4BF" opacity="0.8" className="animate-pulse" />
                  <circle cx="60" cy="-35" r="1.5" fill="#818CF8" opacity="0.6" />
                  <circle cx="40" cy="-15" r="2.5" fill="#2DD4BF" opacity="0.9" />
                </g>

                {/* Gradients declarations */}
                <defs>
                  <radialGradient id="owl-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="owl-core" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Float badge */}
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-3 flex items-center gap-2.5">
                <div className="p-1.5 bg-teal-400 rounded-lg text-slate-950">
                  <GraduationCap className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-300">{t.badgeTitle}</p>
                  <p className="text-xs font-bold text-teal-300">{t.badgeStatus}</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
