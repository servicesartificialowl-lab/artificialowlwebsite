import React from 'react';
import { motion } from 'motion/react';
import { Users, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  institution: string;
  imageUrl: string;
  linkedinUrl?: string;
  objectPosition?: string;
}

export default function TeamSection() {
  const { language } = useLanguage();
  const t = translations[language].team;
  const isPt = language === 'pt';

  const members: TeamMember[] = [
    {
      id: 'joao-simao',
      name: 'João Simão',
      role: 'CTO',
      institution: 'Artificial Owl',
      imageUrl: 'https://i.postimg.cc/XqfFs0Cq/1771244271931.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/joão-simão-554a052ba/',
      objectPosition: 'center top'
    },
    {
      id: 'joao-batalha-mendonca',
      name: 'João Batalha Mendonça',
      role: 'CEO',
      institution: 'Artificial Owl',
      imageUrl: 'https://i.postimg.cc/xCqtpqfF/1697125474536.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/joaofbmendonca/',
      objectPosition: 'center 15%'
    },
    {
      id: 'elisa-avelas',
      name: 'Elisa Avelas',
      role: 'Marketing Intern',
      institution: 'Artificial Owl',
      imageUrl: '/team/elisa-avelas.jpg',
      objectPosition: 'center 30%'
    },
    {
      id: 'andreia-vitorino',
      name: 'Andreia Vitorino',
      role: 'Marketing Intern',
      institution: 'Artificial Owl',
      imageUrl: '/team/andreia-vitorino.webp',
      objectPosition: 'center 20%'
    },
    {
      id: 'gilberta-rufino',
      name: 'Gilberta Rufino',
      role: 'Marketing Intern',
      institution: 'Artificial Owl',
      imageUrl: '/team/gilberta-rufino.webp',
      objectPosition: 'center 20%'
    },
    {
      id: 'rute-xavier',
      name: 'Rute Xavier',
      role: 'Advisor',
      institution: isPt
        ? 'Universidade Católica Portuguesa — Centro de Estudos Aplicados'
        : 'Universidade Católica Portuguesa — Centre for Applied Studies',
      imageUrl: 'https://i.postimg.cc/T1f8zRBQ/1581009075774.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/rute-xavier/',
      objectPosition: 'center 15%'
    },
    {
      id: 'rodrigo-queiroz-melo',
      name: 'Rodrigo Queiroz e Melo',
      role: 'Advisor',
      institution: 'Artificial Owl / Universidade Católica Portuguesa',
      imageUrl: 'https://i.postimg.cc/GmsMxW5v/1516238604126.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/rodrigo-queiroz-e-melo-925b791/',
      objectPosition: 'center 8%'
    },
    {
      id: 'monica-zickermann',
      name: 'Mónica Zickermann',
      role: 'Advisor',
      institution: isPt ? 'Colégio Alemão do Porto' : 'German School of Porto',
      imageUrl: 'https://i.postimg.cc/CLnC3jsT/1628487309528.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/mónica-zickermann/',
      objectPosition: 'center 10%'
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-teal-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5"
            id="team-badge"
          >
            <Users className="h-3 w-3" />
            <span>{isPt ? 'Equipa' : 'Team'}</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            id="team-title"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base leading-relaxed"
            id="team-subtitle"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto" id="team-grid">
          {members.map((member, idx) => (
            <motion.a
              key={member.id}
              href={member.linkedinUrl}
              target={member.linkedinUrl ? '_blank' : undefined}
              rel={member.linkedinUrl ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col w-full sm:w-[280px] md:w-[260px] lg:w-[260px] xl:w-[270px] shrink-0 block ${member.linkedinUrl ? 'cursor-pointer' : ''}`}
              id={member.id}
            >
              <div className="relative h-[310px] w-full overflow-hidden shrink-0 bg-slate-100">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  style={{ objectPosition: member.objectPosition || 'center 20%' }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors duration-200 leading-tight">
                      {member.name}
                    </h3>
                    {member.linkedinUrl && (
                      <div
                        className="text-slate-400 group-hover:text-[#0077b5] transition-colors mt-0.5"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin className="h-4.5 w-4.5" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-bold text-teal-600 tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>
                <p
                  className="text-xs text-slate-500 leading-relaxed line-clamp-2 min-h-[2rem] pt-3.5 border-t border-slate-100"
                  title={member.institution}
                >
                  {member.institution}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
