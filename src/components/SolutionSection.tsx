import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, Send, CheckSquare, BarChart3, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function SolutionSection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const { language } = useLanguage();
  const t = translations[language].solution;

  const getStageIcon = (id: string, isSel: boolean) => {
    const cls = `h-6 w-6 transition-transform ${isSel ? 'scale-110 text-white' : 'text-slate-600'}`;
    switch (id) {
      case 'create':
        return <PenTool className={cls} />;
      case 'deliver':
        return <Send className={cls} />;
      case 'grade':
        return <CheckSquare className={cls} />;
      default:
        return <BarChart3 className={cls} />;
    }
  };

  const renderMockupContent = (id: string) => {
    const st = t.stages.find(s => s.id === id) || t.stages[0];
    switch (id) {
      case 'create':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded">{st.mockupText1}</span>
              <span>{st.mockupText2}</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-2">
              <h5 className="text-xs font-bold text-slate-800">{st.mockupText3}</h5>
              <div className="text-[11px] text-slate-500 space-y-1">
                {st.mockupTextDetails?.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>
            </div>
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-700 rounded-xl flex items-center gap-2">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>{st.mockupTextIndicator}</span>
            </div>
          </div>
        );
      case 'deliver':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-teal-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                {st.mockupText1}
              </span>
              <span className="text-slate-400">{st.mockupText2}</span>
            </div>
            <div className="border border-slate-100 rounded-xl p-3.5 space-y-1 bg-slate-50">
              <div className="w-full bg-slate-200 h-1.5 rounded-full mb-2">
                <div className="bg-indigo-600 h-1/2 rounded-full" style={{ width: '65%' }} />
              </div>
              <p className="text-[10px] text-slate-400">{st.mockupText3}</p>
              <p className="text-xs font-medium text-slate-800 italic mt-2">{st.mockupTextDetails?.[0]}</p>
            </div>
          </div>
        );
      case 'grade':
        return (
          <div className="space-y-3.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-600">{st.mockupText1}</span>
              <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{st.mockupText2}</span>
            </div>
            <div className="border border-indigo-100 bg-indigo-50/10 rounded-xl p-3 space-y-1.5 text-xs text-slate-700">
              <p className="font-bold text-slate-800">{st.mockupText3}</p>
              <p className="text-[11px] text-slate-500">{st.mockupTextDetails?.[0]}</p>
              <div className="flex gap-1 pt-1">
                {st.mockupTags?.map((tag, i) => (
                  <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full ${i === 0 ? 'bg-teal-100 text-teal-800 font-semibold' : 'bg-slate-100 text-slate-600'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-slate-500 font-medium">{st.mockupTextIndicator}</span>
              <span className="font-bold text-indigo-600">{st.mockupScore}</span>
            </div>
          </div>
        );
      case 'analyse':
      default:
        return (
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-600">{st.mockupText1}</p>
            <div className="space-y-2">
              <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg space-y-1">
                <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                  <span>{st.mockupText2}</span>
                  <span className="text-rose-500">{st.mockupText3}</span>
                </div>
                <p className="text-[10px] text-slate-400">{st.mockupTextDetails?.[0]}</p>
              </div>
              <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg space-y-1">
                <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                  <span>{st.mockupTags?.[0]}</span>
                  <span className="text-teal-600">88%</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="solution" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full glow-indigo opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* Interactive Steps Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Stepper Navigation (Left Column) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest pl-2 mb-4">{t.clickToInspect}</p>
            {t.stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-5 ${
                    isSelected
                      ? 'bg-white border-indigo-500/30 shadow-xl shadow-slate-100'
                      : 'bg-transparent border-slate-200/50 hover:bg-slate-100/50'
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div className={`p-3 rounded-xl transition-all ${
                    isSelected
                      ? 'bg-indigo-600 shadow-md shadow-indigo-100'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {getStageIcon(stage.id, isSelected)}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-indigo-600/80 tracking-widest uppercase">{t.phaseLabel} {stage.step}</span>
                      {isSelected && (
                        <span className="text-[10px] bg-teal-50 text-teal-600 font-bold px-2 py-0.5 rounded">{t.stageActive}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">{stage.title}</h3>
                  </div>
                  <ChevronRight className={`h-5 w-5 text-slate-400 transition-transform ${isSelected ? 'rotate-90 text-indigo-600' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Stepper Showcase Console (Right Column) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between min-h-[380px]"
              >
                <div className="space-y-6">
                  {/* Title and Tagline */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-600 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500" />
                      {t.flowIntegration}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                      {t.stages[activeStage].title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                      {t.stages[activeStage].description}
                    </p>
                  </div>
                </div>

                {/* Simulated Screen Segment Widget */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{t.stages[activeStage].mockupTitle}</p>
                  <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-150 relative overflow-hidden">
                    {renderMockupContent(t.stages[activeStage].id)}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

