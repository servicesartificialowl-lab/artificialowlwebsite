import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { Check } from 'lucide-react';

const TEACH_URL = 'https://teach-app.pt/';

interface PricingSectionProps {
  onBookDemo: () => void;
}

export default function PricingSection({ onBookDemo }: PricingSectionProps) {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards Grid: Digital+ (highlighted), Pro, School */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {t.plans.map((plan, idx) => {
            const highlighted = Boolean(plan.badge);
            const isSchool = plan.id === 'school';
            const ctaClass = `block w-full py-3.5 px-6 rounded-xl active:scale-[0.98] transition-all font-semibold text-sm text-center cursor-pointer ${
              highlighted
                ? 'bg-[#2B5BA8] hover:bg-[#244C8C] text-white shadow-[0_4px_14px_rgba(43, 91, 168,0.3)] hover:shadow-[0_6px_20px_rgba(43, 91, 168,0.4)]'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
            }`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                className={`rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden ${
                  highlighted
                    ? 'bg-[#14233B] text-white border border-[#2B5BA8] shadow-xl ring-4 ring-[#2B5BA8]/15'
                    : 'bg-[#f1f2f4] border border-[#D8E2F0] shadow-sm hover:border-[#CBD5E1] transition-all'
                }`}
              >
                {highlighted && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2B5BA8]/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="flex-1 flex flex-col">
                  {/* Badge */}
                  <div className="mb-6 h-7">
                    {plan.badge && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-butter-300 text-slate-900 border border-butter-500">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.title}</h3>
                    <p className={`text-sm leading-relaxed ${highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                  </div>

                  {/* Pricing Display */}
                  <div className={`mb-6 pb-6 border-b min-h-[110px] flex flex-col justify-end ${highlighted ? 'border-slate-800' : 'border-[#D8E2F0]/65'}`}>
                    <div className="text-4xl font-extrabold tracking-tight">
                      <span className={highlighted ? 'text-white' : 'text-slate-800'}>{plan.price}</span>
                    </div>
                    <div className={`mt-1 text-sm font-medium ${highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.period}
                    </div>
                    {plan.vatNote && (
                      <div className={`mt-1 text-xs ${highlighted ? 'text-slate-500' : 'text-slate-400'}`}>{plan.vatNote}</div>
                    )}
                    {plan.savings && (
                      <div className={`mt-1.5 text-xs font-semibold ${highlighted ? 'text-[#4A7BC8]' : 'text-[#2B5BA8]'}`}>{plan.savings}</div>
                    )}
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3 text-sm">
                        <div className={`mt-0.5 rounded-full p-0.5 border ${
                          highlighted
                            ? 'bg-[#4A7BC8]/15 text-[#4A7BC8] border-[#4A7BC8]/20'
                            : 'bg-indigo-50 text-[#2B5BA8] border-indigo-100'
                        }`}>
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className={highlighted ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button: individual plans buy on Teach, schools open the contact form */}
                {isSchool ? (
                  <button type="button" onClick={onBookDemo} className={ctaClass}>
                    {plan.cta}
                  </button>
                ) : (
                  <a href={TEACH_URL} target="_blank" rel="noopener noreferrer" className={ctaClass}>
                    {plan.cta}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">{t.footnote}</p>
      </div>
    </section>
  );
}
