import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

interface NavbarProps {
  onBookDemo: () => void;
}

export default function Navbar({ onBookDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.problem, href: '#problem' },
    { label: t.platform, href: '#solution' },
    { label: t.features, href: '#features' },
    { label: t.pricing || 'Pricing', href: '#pricing' },
    { label: t.whynow, href: '#whynow' },
    { label: t.howItWorks, href: '#solution' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-100/50 py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className={`transition-colors duration-200 ${'text-[#14233B]'}`}>
              {/* Owl logo, the same symbol as the Teach platform */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinejoin="miter"
                aria-hidden="true"
                className="w-7 h-7 group-hover:scale-105 transition-transform duration-200"
              >
                <path d="M2.75 2.5 L2.75 11.5 L12 21 L21.25 11.5 L21.25 2.5" />
                <path d="M2.75 2.5 L10.75 10.5 L2.75 10.5" />
                <path d="M21.25 2.5 L13.25 10.5 L21.25 10.5" />
                <path d="M12 11.4 L12 15" />
              </svg>
            </div>
            <span className={`font-extrabold tracking-tight text-lg sm:text-xl whitespace-nowrap transition-colors duration-200 ${
              'text-[#14233B]'
            }`}>
              Artificial Owl
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5 ml-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`px-2.5 py-2 text-[14px] font-medium rounded-lg whitespace-nowrap transition-all duration-150 ${
                  isScrolled
                    ? 'text-slate-600 hover:text-teal-500 hover:bg-slate-50'
                    : 'text-slate-700 hover:text-teal-500 hover:bg-white/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher pill */}
            <div className={`flex items-center rounded-lg p-0.5 border transition-colors duration-300 ${
              isScrolled 
                ? 'bg-slate-100/80 border-slate-200/50' 
                : 'bg-white/70 border-slate-200'
            }`}>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-teal-500 text-white shadow-sm'
                    : isScrolled
                      ? 'text-slate-500 hover:text-teal-500'
                      : 'text-slate-500 hover:text-teal-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all ${
                  language === 'pt'
                    ? 'bg-teal-500 text-white shadow-sm'
                    : isScrolled
                      ? 'text-slate-500 hover:text-teal-500'
                      : 'text-slate-500 hover:text-teal-500'
                }`}
              >
                PT
              </button>
            </div>

            <button
              onClick={onBookDemo}
              className="px-4.5 py-2 bg-teal-500 text-white font-semibold text-sm rounded-xl hover:bg-teal-600 transition-all active:scale-[0.98] shadow-sm hover:shadow-md font-sans whitespace-nowrap min-w-fit inline-flex items-center justify-center"
            >
              {t.bookDemo}
            </button>
          </div>

          {/* Mobile hamburger menu and switcher */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Language Switcher on mobile header bar */}
            <div className={`flex items-center rounded-lg p-0.5 border ${
              isScrolled 
                ? 'bg-slate-100 border-slate-200/50' 
                : 'bg-white/70 border-slate-200'
            }`}>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-teal-500 text-white'
                    : isScrolled
                      ? 'text-slate-600'
                      : 'text-slate-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all ${
                  language === 'pt'
                    ? 'bg-teal-500 text-white'
                    : isScrolled
                      ? 'text-slate-600'
                      : 'text-slate-600'
                }`}
              >
                PT
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg active:scale-95 transition-all ${
                isScrolled ? 'text-slate-600 hover:bg-slate-50' : 'text-slate-700 hover:bg-white/60'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-6 px-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="space-y-2">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-teal-500 hover:bg-teal-50/50 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookDemo();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all shadow-md shadow-teal-100/50 font-sans"
              >
                {t.bookDemo}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

