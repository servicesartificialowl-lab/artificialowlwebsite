import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import {
  ArrowRight,
  Play,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const carouselSlides = [
  {
    src: '/hero/hero-1.webp',
    title: {
      pt: '1. Sobrecarga docente',
      en: '1. Teacher Overload'
    },
    description: {
      pt: 'Noites infindáveis perdidas a corrigir pilhas de testes manualmente.',
      en: 'Endless nights lost grading piles of tests manually.'
    }
  },
  {
    src: '/hero/hero-2.webp',
    title: {
      pt: '2. Artificial Owl entra em ação',
      en: '2. Artificial Owl Steps In'
    },
    description: {
      pt: 'A nossa coruja inteligente assume o trabalho repetitivo de correção.',
      en: 'Our smart owl takes over the repetitive grading work.'
    }
  },
  {
    src: '/hero/hero-3.webp',
    title: {
      pt: '3. Tempo de qualidade devolvido',
      en: '3. Quality Time Returned'
    },
    description: {
      pt: 'Mais tempo livre para a família e para o que realmente importa.',
      en: 'More free time for family and what truly matters.'
    }
  },
  {
    src: '/hero/hero-4.webp',
    title: {
      pt: '4. Feedback mais rico',
      en: '4. Richer Feedback'
    },
    description: {
      pt: 'Apoio individualizado, detalhado e focado no sucesso de cada aluno.',
      en: 'Individualized, detailed support focused on each student\'s success.'
    }
  },
  {
    src: '/hero/hero-5.webp',
    title: {
      pt: '5. Foco em ensinar',
      en: '5. Focus on Teaching'
    },
    description: {
      pt: 'De volta à sala de aula, focado no ensino ativo e inspiração de alunos.',
      en: 'Back in the classroom, focused on active teaching and inspiring students.'
    }
  }
];

export default function Hero({ onBookDemo }: HeroProps) {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const isPt = language === 'pt';

  const [activeSlide, setActiveSlide] = useState(0);
  const carouselSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToCarousel = () => {
    if (carouselSectionRef.current) {
      carouselSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-950 overflow-hidden text-white">
      {/* Dynamic Background Glowing Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full glow-teal opacity-30 -z-10" />
      <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] rounded-full glow-teal opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6.5xl font-extrabold text-white tracking-tight leading-[1.1] font-sans"
            >
              {t.titlePre}{' '}
              <span className="text-teal-400 block sm:inline">
                {t.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                id="hero-cta-demo"
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 text-white font-bold text-base rounded-2xl shadow-lg shadow-teal-500/20 hover:bg-teal-400 hover:shadow-teal-500/45 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer border border-teal-400/30 font-sans whitespace-nowrap min-w-fit"
              >
                {t.bookDemo}
                <ArrowRight className="h-5 w-5 shrink-0" />
              </button>
              <button
                id="hero-cta-video"
                onClick={handleScrollToCarousel}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-slate-200 font-bold text-base rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 hover:text-white transition-all font-sans cursor-pointer whitespace-nowrap min-w-fit"
              >
                <Play className="h-4.5 w-4.5 text-teal-400 fill-teal-400/20" />
                {t.seeHowItWorks}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 flex justify-center lg:justify-start"
            >
              <a
                id="hero-cta-platform"
                href="https://teach-app.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 -mx-4 text-teal-400 font-bold text-base rounded-xl hover:text-teal-300 hover:bg-white/5 transition-all font-sans"
              >
                {t.goToPlatform}
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Hero Right Content - Premium Embedded Carousel Area */}
          <div className="lg:col-span-7" ref={carouselSectionRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
              className="relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl p-3 sm:p-4 text-white max-w-2xl mx-auto lg:max-w-none group"
            >
              {/* Outer soft glowing halo border */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-teal-400/10 opacity-40 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10 blur-xl" />

              {/* Mac-like browser frame header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 px-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80 block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
                  <span className="text-[11px] text-slate-400 font-mono ml-3">story.artificialowl.app</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 px-3 py-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-teal-300 uppercase tracking-widest">
                    {isPt ? 'A plataforma em ação' : 'The platform in action'}
                  </span>
                </div>
              </div>

              {/* Automatic Carousel Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-teal-500/30 transition-colors duration-500 shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                        src={carouselSlides[activeSlide].src}
                        alt={isPt ? carouselSlides[activeSlide].title.pt : carouselSlides[activeSlide].title.en}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover block"
                      />
                    
                    {/* Caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 sm:p-6 pt-12 text-left">
                      <h3 className="text-base sm:text-lg font-bold text-teal-400 font-sans">
                        {isPt ? carouselSlides[activeSlide].title.pt : carouselSlides[activeSlide].title.en}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1 font-sans">
                        {isPt ? carouselSlides[activeSlide].description.pt : carouselSlides[activeSlide].description.en}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider dots indicator */}
                <div className="absolute bottom-4 right-6 flex items-center gap-1.5 z-10">
                  {carouselSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeSlide === index
                          ? 'bg-teal-400 w-5'
                          : 'bg-white/30 hover:bg-white/50 w-2'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
