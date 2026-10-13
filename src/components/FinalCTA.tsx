import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

interface FinalCTAProps {
  onBookDemo: () => void;
}

export default function FinalCTA({ onBookDemo }: FinalCTAProps) {
  const { language } = useLanguage();
  const t = translations[language].finalCTA;

  const brandDesc = language === 'en'
    ? 'Helping schools modernize, streamline, and secure the full educational assessment process. Built strictly for professional educators and leaders.'
    : 'Ajudamos as escolas a modernizar, simplificar e proteger todo o processo de avaliação pedagógica. Criado especificamente para direções e professores.';

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden pt-24 pb-12">
      {/* Background radial soft indigo lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-950/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core CTA Box */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-800 p-8 sm:p-12 md:p-16 text-center max-w-5xl mx-auto shadow-2xl">
          {/* Decorative small particles */}
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-teal-500/5 blur-xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-indigo-500/5 blur-xl" />

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mx-auto">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              {t.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.description}
            </p>

            <div className="pt-4">
              <button
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal-400 text-slate-950 font-bold text-base rounded-2xl shadow-lg shadow-teal-400/10 hover:bg-teal-300 hover:shadow-teal-400/25 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap min-w-fit"
              >
                {t.bookDemo}
                <ArrowRight className="h-5 w-5 shrink-0" />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-teal-400" />
                <span>{t.point1}</span>
              </div>
              <div className="hidden sm:block text-slate-800">•</div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-teal-400" />
                <span>{t.point2}</span>
              </div>
              <div className="hidden sm:block text-slate-800">•</div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4.5 w-4.5 text-teal-400" />
                <span>{t.point3}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Contact details */}
        <div className="mt-24 pt-12 border-t border-slate-900 grid grid-cols-1 md:grid-cols-12 gap-8 text-sm text-slate-400">
          
          {/* Brand block (col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="text-white">
                {/* Official Artificial Owl Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7 group-hover:scale-105 transition-transform duration-200"
                >
                  <path d="M4 6 L12 14 L20 6 L20 13 L12 21 L4 13 Z" />
                  <path d="M4 9.5 C4 12, 8 13.5, 10 12" />
                  <path d="M20 9.5 C20 12, 16 13.5, 14 12" />
                  <polygon points="11.2,14 12.8,14 12,18.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Artificial Owl</span>
            </a>
            <p className="text-xs leading-relaxed">
              {brandDesc}
            </p>
            <div className="text-xs text-slate-500 pt-2">
              © {new Date().getFullYear()} Artificial Owl S.A. {t.rights}
            </div>
          </div>

          {/* Links block (col-span-4) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">{t.navTitle1}</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#problem" className="hover:text-white transition-colors">{language === 'en' ? 'The Problem' : 'O Problema'}</a></li>
                <li><a href="#safety" className="hover:text-white transition-colors">{t.navSafety}</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">{language === 'en' ? 'Assessment Lifecycle' : 'Ciclo de Avaliação'}</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">{language === 'en' ? 'Key Features' : 'Funcionalidades'}</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">{t.navTitle2}</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#safety" className="hover:text-white transition-colors">{t.navGDPR}</a></li>
                <li><span className="text-slate-500">{language === 'en' ? 'Security Policies' : 'Políticas de Segurança'}</span></li>
                <li><span className="text-slate-500">{language === 'en' ? 'Terms of Service' : 'Termos de Serviço'}</span></li>
                <li><span className="text-slate-500">{language === 'en' ? 'School Agreement' : 'Contrato de Parceria'}</span></li>
              </ul>
            </div>
          </div>

          {/* Contact block (col-span-4) */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">{t.navTitle3}</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-indigo-400" />
                <span>services.artificialowl@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-indigo-400" />
                <span>+351 966461129</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <span>{t.address}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
