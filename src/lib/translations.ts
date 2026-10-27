import React from 'react';

export const translations = {
  en: {
    navbar: {
      problem: 'Problem',
      safety: 'AI Safety',
      platform: 'Platform',
      features: 'Features',
      roadmap: 'Vision & Innovation',
      whynow: 'Why Now',
      howItWorks: 'How It Works',
      bookDemo: 'Book a Demo',
      login: 'Log In',
      teachingIsHuman: 'Teaching is Human. We handle the rest!',
      pricing: 'Pricing',
    },
    hero: {
      titlePre: 'Teaching is human.',
      titleHighlight: 'We handle the rest.',
      description: 'Create, grade and analyze assessments faster, keeping the teacher always in control.',
      bookDemo: 'Book a Demo',
      seeHowItWorks: 'See How It Works',
      videoLabel: 'See the platform in action',
      videoTitle: 'How Artificial Owl works',
      platformPreview: 'Platform Preview',
      sidebarTitle: 'Platform Modules',
      profileProfessor: 'Professor',
      editProfile: 'Edit Profile',
      signOut: 'Sign Out',
      sidebarHome: 'Home',
      sidebarExams: 'Exams',
      sidebarCreate: 'Create Exam',
      sidebarLocked: 'Locked Sessions',
      sidebarFeatures: 'New Features',
      sidebarSupport: 'Support',
      
      // Mockup Tab - Home
      dashboard: 'Dashboard',
      welcome: 'Welcome back, Afonso!',
      statsAssessments: 'Total Exams Created',
      statsGraded: 'Graded via AI-Assisted',
      statsSaved: 'Hours Reclaimed',
      statsStudents: 'Enrolled Pupils',
      activityTitle: 'Recent Assessment Blueprints',
      activityChemistry: 'Chemistry Grade 10 - Unit 3 Exam',
      activityChemistryDesc: 'Mole calculations, Stoichiometry, gas equations.',
      activityHistory: 'History Grade 12 - National Exam Revision',
      activityHistoryDesc: 'Democratic transition, European integration.',
      activityMath: 'Math Grade 9 - Quadratic Formulas',
      activityMathDesc: 'Solving structured algebraic problems.',
      statusDraft: 'Drafting',
      statusReady: 'Ready for delivery',
      statusGrading: 'Grading ongoing',
      quickCreateBtn: 'Create New Assessment Plan',
      quickCreateTitle: 'Quick Assessment Setup',
      quickCreateDesc: 'Draft high-fidelity curriculum-aligned questions in seconds.',
      quickCreateInput: 'Topic (e.g. Acid-base reactions, French Revolution)',
      quickCreateSubmit: 'Generate Exam Draft',

      // Mockup Tab - Exams
      myExams: 'My Exams',
      allExamsBadge: 'All Exams',
      newExamBtn: 'Create New Exam',
      searchPlaceholder: 'Search exams...',
      examColName: 'Assessment Name',
      examColDate: 'Date Created',
      examColStatus: 'Status',
      examColGrades: 'Avg Score',
      examColActions: 'Actions',
      examPhysics: 'Physics Grade 11 - Optics & Lenses',
      examBiology: 'Biology Grade 10 - Cell Mitosis',
      examGeography: 'Geography Grade 8 - Tectonic Plates',
      actionView: 'View',
      actionGrade: 'Grade',
      actionLaunch: 'Launch',

      // Mockup Tab - Create Exam
      createExamTitle: 'Create New Exam',
      stepIndicator: 'Step {step} of 4',
      draftTitle: 'Exam Draft Generator',
      draftDesc: 'Choose parameters to generate questions aligned with the Portuguese National Curriculum.',
      labelSubject: 'Subject / Discipline',
      labelGrade: 'Grade Level',
      labelTopic: 'Topic Description',
      labelDifficulty: 'Cognitive Depth (Difficulty)',
      labelCount: 'Number of Questions',
      optionChemistry: 'Chemistry (Física-Química A)',
      optionPhysics: 'Physics',
      optionMath: 'Mathematics A',
      optionBiology: 'Biology & Geology',
      optionHigh: 'High School (10th-12th Grade)',
      optionMiddle: 'Middle School (7th-9th Grade)',
      optionEasy: 'Introductory Concepts (Recall)',
      optionMedium: 'Balanced (Application & Synthesis)',
      optionHard: 'Advanced (Exam Style & Reasoning)',
      placeholderTopic: 'e.g. Chemical bonds, Stoichiometric proportions...',
      generateBtn: 'Generate AI Blueprint',
      generatingMsg: 'Synthesizing educational items, comparing with exam standards...',
      aiDraftBadge: 'AI Draft Constructed',
      saveAndReviewBtn: 'Save Blueprint & Approve',
      regenerateBtn: 'Regenerate',

      // Mockup Tab - Locked Sessions
      lockedTitle: 'Locked Sessions',
      secureMonitoring: 'Secure Monitoring Active',
      lockedDesc: 'Students must enter the unique classroom key on their devices. The Artificial Owl sandbox locks browser tabs, prevents copy-paste, and monitors active session continuity.',
      classroomKey: 'Classroom Key',
      refreshBtn: 'Refresh Terminals',
      studentCol: 'Student Name',
      statusCol: 'Status',
      deviceCol: 'Terminal',
      actionsCol: 'Actions',
      studentActive: 'Locked & Solving',
      studentIdle: 'Idle - Focus Warning',
      studentSuccess: 'Submitted Successfully',
      lockScreenBtn: 'Unlock Student',
      shareCodeDesc: 'Share this private register code with your pupils to safely grant entrance.',

      // Mockup Tab - New Features
      newFeaturesTitle: 'New Features',
      newRelease: 'New Release v1.4',
      feat1Title: 'OCR Hand-Written Essay Scan',
      feat1Desc: 'Upload a picture of hand-written paper tests. Our AI model transcriptions preserve student annotations and speed up paper grading by 80%.',
      feat2Title: 'National Exam Alignment Engine',
      feat2Desc: 'Automatically balances standard deviation, grading curves and item criteria to align results with IAVE and national examination structures.',
      feat3Title: 'Secure Sandbox Lockdown App',
      feat3Desc: 'Download the native Artificial Owl client for Chromebooks and Windows to enforce hardware-level focus monitoring during high-stakes exams.',
      safeguardActive: 'Safeguard Active • 100%',

      // Mockup Tab - Support
      supportTitle: 'Support',
      hotline: '24/7 Teacher Hotline',
      supportDesc: 'Get immediate support from our pedagogical onboarding team. We help you upload your curriculum parameters and set up school accounts.',
      supportEmail: 'Email Support',
      supportPhone: 'Schedule Phone Call',
      supportFaqTitle: 'Quick Troubleshooting FAQ',
      faq1Q: 'Is student data used to train public models?',
      faq1A: 'No. AI Owl operates with zero-retention API contracts. No student input is ever stored or used for training.',
      faq2Q: 'Can I import my own school rubrics?',
      faq2A: 'Yes. Simply drag and drop your existing PDF evaluation sheets into the "Criteria Creator" to train your private scoring assistant.',
    },
    problem: {
      badge: 'Educational Challenge',
      title: 'Assessment is harder to manage.',
      description: 'Traditional testing workflows remain slow, fragmented, and administratively exhausting.',
      cards: [
        {
          id: 'p-1',
          title: 'Manual grading takes too long',
          description: 'Open-ended answers consume hours of teacher time.',
          stats: '15+ hrs/wk',
          consequence: '',
        },
        {
          id: 'p-2',
          title: 'Inconsistent evaluation standards',
          description: 'Grading open answers becomes subjective and inconsistent due to fatigue.',
          stats: 'Subjective',
          consequence: '',
        },
        {
          id: 'p-3',
          title: 'Platform fragmentation',
          description: 'Schools use too many disconnected apps to design, scan, grade, and report.',
          stats: '4-6 apps',
          consequence: '',
        },
        {
          id: 'p-4',
          title: 'Lack of pedagogical insights',
          description: 'Numeric scores fail to reveal specific conceptual gaps in student learning.',
          stats: 'Unstructured',
          consequence: '',
        },
        {
          id: 'p-5',
          title: 'Uncontrolled shadow AI',
          description: 'Teachers use public chatbots without security oversight or data compliance.',
          stats: 'High Risk',
          consequence: '',
        },
      ]
    },
    safety: {
      badge: 'Institutional Safety',
      titlePre: 'AI is already in schools.',
      titlePost: 'Schools need control.',
      description: 'Teachers are using general AI chatbots daily. Without a dedicated system, schools risk losing control over student data and grade integrity.',
      quote: '“The risk is discovering too late that AI was being used without oversight.”',
      quoteAuthor: '— Leadership Directive',
      comparisonTitle: 'How we compare',
      shadowTitle: 'Public Chatbots',
      shadowPoints: [
        'Student data fed into public LLMs.',
        'No audit trail for grades.',
        'Increases platform fragmentation.'
      ],
      secureTitle: 'Artificial Owl',
      securePoints: [
        'Strict Zero-Retention API standard.',
        'Transparent grading set by teachers.',
        'Unified, secure environment.'
      ],
      footerText: 'Aligned with data privacy regulations.',
    },
    solution: {
      badge: 'Centralised Solution',
      title: 'One platform for the assessment lifecycle.',
      description: 'Manage the full assessment process in one place to save time.',
      clickToInspect: 'Click each stage',
      stageActive: 'Active',
      flowIntegration: 'Assessment Flow Integration',
      phaseLabel: 'Phase',
      mockupHeader: 'Mockup Preview',
      stages: [
        {
          id: 'create',
          title: 'Create',
          step: '01',
          description: 'Design curriculum-aligned assessments in minutes.',
          details: [],
          mockupTitle: 'Assessment Blueprint Workspace',
          mockupText1: 'Topic Blueprint',
          mockupText2: 'Grade 10 Chemistry',
          mockupText3: 'Prompt Config: Stoichiometry Concept Test',
          mockupTextDetails: [
            '• Question Type: Structured Open-Ended',
            '• Difficulty: Moderate (Secondary Exam Level)',
            '• Target: Conservation of Mass and Mole Calculations'
          ],
          mockupTextIndicator: 'AI drafts constructed and reviewed against school grading standards.'
        },
        {
          id: 'deliver',
          title: 'Deliver',
          step: '02',
          description: 'Administer tests in a secure sandbox.',
          details: [],
          mockupTitle: 'Safe Assessment Delivery Portal',
          mockupText1: 'Secure Lockout Active',
          mockupText2: 'Student: Marcus Alvarez',
          mockupText3: 'Locked Exam Progress: Question 4 of 6',
          mockupTextDetails: [
            '"Student workspace isolated. External browser tabs, copy-paste, and screenshots disabled."'
          ],
          mockupTextIndicator: ''
        },
        {
          id: 'grade',
          title: 'Grade',
          step: '03',
          description: 'Accelerate open-ended grading with teacher-in-the-loop AI.',
          details: [],
          mockupTitle: 'Hybrid Human-AI Grader',
          mockupText1: 'Assisted Rubrics',
          mockupText2: 'Teacher Approval',
          mockupText3: 'Concept Match: Acid-Base reactions',
          mockupTextDetails: [
            'Student mentioned hydronium ion and neutralisation (2/2 pts).'
          ],
          mockupTags: ['Correct reasoning', 'Slight syntax typo'],
          mockupTextIndicator: 'Verify draft grade:',
          mockupScore: '9/10 points (Approved)'
        },
        {
          id: 'analyse',
          title: 'Analyse',
          step: '04',
          description: 'Get instant insights to improve learning outcomes.',
          details: [],
          mockupTitle: 'Cohort Learning Insights',
          mockupText1: 'Diagnosed Classroom Hurdles:',
          mockupText2: 'Mole Ratio Conversion',
          mockupText3: '55% struggled',
          mockupTextDetails: [
            'Suggestion: Plan a brief 10-minute recap session on coefficients.'
          ],
          mockupTags: ['Reactant Balancing', '88% mastered'],
          mockupTextIndicator: ''
        }
      ]
    },
    features: {
      badge: 'Comprehensive Capabilities',
      title: 'Designed for secure educational excellence.',
      description: 'Our assessment suite combines high-level compliance, institutional data security, and pedagogical workflows.',
      realTimePreview: 'Real-time grading criteria preview:',
      criterionLogic: 'Criterion: Logic & Flow',
      recommendedPts: 'Recommended 4/4 pts',
      criterionTerminology: 'Criterion: Scientific terminology',
      needsReview: 'Needs teacher review',
      euCompliance: 'EU Data Compliance',
      zeroRetentionDesc: 'Student responses are evaluated under strict Zero-Retention APIs.',
      mocksDesc: 'Curriculum mocks and presets included.',
      insightsDesc: 'Uncover individual learning blocks.',
      supportDesc: 'Engineer lines and workshops.',
      items: [
        {
          id: 'f-1',
          title: 'AI-assisted grading',
          description: 'Evaluate open-ended answers based on your private criteria.',
          badge: 'Co-Pilot Mode'
        },
        {
          id: 'f-2',
          title: 'GDPR compliant AI for schools',
          description: 'Protect student data with strict zero-retention privacy protocols.',
          badge: 'Strict Compliance'
        },
        {
          id: 'f-3',
          title: 'National Exam Library',
          description: 'Access past national exam papers and curriculum templates.',
          badge: 'Official Source'
        },
        {
          id: 'f-4',
          title: 'Pedagogical insights',
          description: 'Identify conceptual learning gaps and analytical blockers instantly.',
          badge: 'Deep Analytics'
        },
        {
          id: 'f-5',
          title: 'Dedicated institutional support',
          description: 'Receive teacher training sessions and dedicated priority assistance.',
          badge: 'Partner Program'
        }
      ]
    },
    teacherBenefit: {
      badge: 'Impact on Educators',
      titlePre: 'Menos tempo a corrigir.',
      titleHighlight: 'Mais tempo com os alunos.',
      description: 'Reclaim your evening hours. Let Artificial Owl automate the tedious parts of grading so you can focus entirely on mentoring and inspiring your students.',
      calcTitle: 'Workload Recovery Estimator',
      calcSlider1: 'Weekly Exams / Quizzes',
      calcSlider2: 'Average Class Size',
      calcStudents: 'students',
      labelManual: 'Manual Method',
      labelOwl: 'AI Owl Method',
      labelSaved: 'Saved Weekly',
      calcFooterPre: 'That is equivalent to gaining back ',
      calcFooterHighlight: ' hours',
      calcFooterPost: ' of pedagogical time every month.',
      badgeTitle: 'Target Achievement',
      badgeStatus: 'Guaranteed Compliance'
    },
    testimonials: {
      badge: 'What schools say',
      titlePre: 'Trusted by educators to make assessment ',
      titleHighlight: 'faster and smarter.',
      description: 'How we help educators save time and understand student progress.',
      bannerTitle: 'Speak with a specialist?',
      bannerSubtitle: 'Schedule a 15-minute call to see if Artificial Owl is right for your school.',
      bannerBtn: 'Learn More Below',
      list: [
        {
          id: 'testimonial-1',
          quote: '“AI-driven assessment grading has finally brought what we always dreamed of: rich, individualized, real-time feedback. The potential of this for the teaching process is huge.”',
          author: 'Rodrigo Queiroz e Melo',
          role: 'Board Member',
          institution: 'AEEP',
          avatarInitials: 'RM',
          avatarBg: 'from-indigo-500 to-purple-500',
        },
        {
          id: 'testimonial-2',
          quote: '“An assessment platform like Artificial Owl brings speed, methodology, and enables feedback that was previously impossible.”',
          author: 'João Mendonça',
          role: 'Founder',
          institution: 'Artificial Owl',
          avatarInitials: 'JM',
          avatarBg: 'from-teal-400 to-indigo-500',
        },
        {
          id: 'testimonial-3',
          quote: '“With Artificial Owl, we stopped looking only at the final grade. We started to better understand where students were failing and what content needs to be reinforced before the exam.”',
          author: 'Mónica Zickermann',
          role: 'Teacher',
          institution: 'Colégio Alemão do Porto',
          avatarInitials: 'MZ',
          avatarBg: 'from-purple-500 to-teal-400',
        }
      ]
    },
    news: {
      badge: 'Just launched',
      title: "What's new",
      description: 'The latest features now available on the platform.',
      items: [
        {
          id: 'n-1',
          title: 'Handwritten answer grading',
          description: 'Scan and grade handwritten paper exam sheets with advanced OCR.',
          tag: 'New'
        }
      ]
    },
    roadmap: {
      badge: 'Vision & Innovation',
      title: 'Coming soon',
      description: 'We are continuously building new features to solve assessment bottlenecks.',
      footer: 'Next-Gen Module Deployment',
      items: [
        {
          id: 'r-2',
          title: 'Criteria creation agent',
          description: 'Collaborate with an intelligent assistant to build and align grading rubrics.',
          quarter: 'Alpha Testing'
        },
        {
          id: 'r-3',
          title: 'Automatic exam generator',
          description: 'Draft balanced, multi-tier exam papers based on your curriculum guidelines.',
          quarter: 'Prototype'
        }
      ]
    },
    whyNow: {
      badge: 'Strategic Need',
      title: 'The future of assessment is changing.',
      description: 'The strategic decisions made this term will define school standards.',
      statsPre: 'Did you know?',
      statsText: 'Over 80% of secondary school teachers have already experimented with LLM tools for grading support.',
      items: [
        {
          id: 'w-1',
          title: 'AI adoption is accelerating',
          description: 'Teachers are already using generic AI; schools must provide a secure, compliant environment.'
        },
        {
          id: 'w-2',
          title: 'Workload is reaching a tipping point',
          description: 'Teacher administrative overload is at an all-time high, impacting retention.'
        },
        {
          id: 'w-3',
          title: 'Demand for structured processes',
          description: 'Boards, parents, and regulators demand clear, auditable policies for AI usage.'
        },
        {
          id: 'w-4',
          title: 'Leadership in the new era',
          description: 'Schools implementing structured AI policies today will attract top talent and lead.'
        }
      ]
    },
    finalCTA: {
      badge: 'Get Started',
      title: 'Ready to give teachers their time back?',
      description: 'Reduce grading workload and streamline assessment in one platform.',
      bookDemo: 'Book a Demo',
      point1: 'Faster grading',
      point2: 'Teacher always in control',
      point3: 'GDPR compliant',
      navTitle1: 'Platform',
      navTitle2: 'Company',
      navTitle3: 'Contact Us',
      rights: 'All rights reserved.',
      complianceBadge: 'GDPR & FERPA Compliant',
      navHome: 'Home',
      navSafety: 'AI Safety',
      navGDPR: 'GDPR Commitment',
      navContact: 'Contact',
      address: 'Lisbon, Portugal',
    },
    demoModal: {
      badge: 'Book a Demo',
      title: 'Discover how Artificial Owl can support your school',
      subtitle: 'See how Artificial Owl helps schools simplify assessment, support teachers and improve the way student performance is understood.',
      labelFullName: 'Full Name',
      labelEmail: 'Work Email Address',
      labelSchoolName: 'School / Institution Name',
      labelRole: 'Your Role / Title',
      labelCount: 'Estimated Number of Students',
      labelMessage: 'Additional message or requirements (Optional)',
      placeholderFullName: 'e.g. Professor Afonso Fernandes',
      placeholderEmail: 'e.g. afonso@colegio.pt',
      placeholderSchoolName: 'e.g. Colégio de São Miguel',
      placeholderMessage: 'Tell us about your school goals...',
      btnSubmit: 'Request Invitation',
      btnSubmitting: 'Submitting Proposal...',
      btnSuccess: 'Proposal Submitted!',
      successTitle: 'Thank you for your interest!',
      successSubtitle: "We have received your request. An education specialist from Artificial Owl will reach out to schedule your personalized live demo within 24 hours.",
      btnClose: 'Close Window',
      roleOptions: [
        'Teacher / Educator',
        'Department Coordinator',
        'Pedagogical Director / Principal',
        'IT Administrator',
        'Other'
      ],
      studentOptions: [
        'Under 100 pupils',
        '100 - 500 pupils',
        '500 - 1000 pupils',
        'Over 1000 pupils'
      ]
    },
    comparison: {
      title: 'A simpler process, from start to finish',
      subtitle: 'From fragmented assessment to centralized management.',
      beforeTitle: 'Without the platform',
      beforePoints: [
        'Multiple tools',
        'Time-consuming manual grading',
        'Dispersed information'
      ],
      beforeFooter: 'More friction. Less time.',
      beforeSteps: ['Create', 'Export', 'Grade', 'Consolidate'],
      afterTitle: 'With Artificial Owl',
      afterPoints: [
        'All in one place',
        'AI-assisted grading',
        'Useful pedagogical data'
      ],
      afterFooter: 'Fewer corrections. More time for students.',
      afterSteps: ['Create', 'Grade', 'Analyze']
    },
    pricing: {
      title: 'Plans for teachers and schools',
      subtitle: 'From individual teachers to entire school groups, choose the plan that fits you best.',
      plans: [
        {
          id: 'digital-plus',
          title: 'Digital+',
          badge: 'Most popular',
          description: 'For individual teachers.',
          price: '24 €',
          period: '/month, billed annually',
          vatNote: 'VAT included',
          savings: 'Save 72 € per year',
          features: [
            'Centralized management of classes and student grades',
            'AI-assisted grading',
            'Share grades and feedback with students',
            'Student data anonymization and data protection',
            'Cancel anytime'
          ],
          cta: 'Buy now'
        },
        {
          id: 'pro',
          title: 'Pro',
          badge: '',
          description: 'For individual teachers.',
          price: '40 €',
          period: '/month, billed annually',
          vatNote: 'VAT included',
          savings: 'Save 120 € per year',
          features: [
            'Everything in Digital+',
            '3× more AI grading usage',
            'Handwritten test grading'
          ],
          cta: 'Buy now'
        },
        {
          id: 'school',
          title: 'School',
          badge: '',
          description: 'For schools and school groups.',
          price: 'On request',
          period: 'per seat, monthly or annual',
          vatNote: '',
          savings: '',
          features: [
            'Seats assigned by email by the administrator',
            'Mix of Digital+ and Pro across teachers',
            'Onboarding and workshops included',
            'Custom contract, with GDPR responsibilities set out in writing'
          ],
          cta: 'Contact us'
        }
      ],
      footnote: 'You can change plans whenever you like. No questions asked.'
    },
    team: {
      title: 'Meet our team',
      subtitle: 'The people behind Artificial Owl.'
    }
  },
  pt: {
    navbar: {
      problem: 'Problema',
      safety: 'Segurança de IA',
      platform: 'Plataforma',
      features: 'Funcionalidades',
      roadmap: 'Visão e Inovação',
      whynow: 'Porquê Agora',
      howItWorks: 'Como Funciona',
      bookDemo: 'Contacte-nos',
      login: 'Entrar',
      teachingIsHuman: 'O ensino é humano. Nós tratamos do resto!',
      pricing: 'Preços',
    },
    hero: {
      titlePre: 'Ensinar é humano.',
      titleHighlight: 'Nós tratamos do resto.',
      description: 'Crie, corrija e analise avaliações com mais rapidez, mantendo o professor sempre no controlo.',
      bookDemo: 'Contacte-nos',
      seeHowItWorks: 'Ver Como Funciona',
      videoLabel: 'Ver a plataforma em ação',
      videoTitle: 'Como funciona o Artificial Owl',
      platformPreview: 'Pré-visualização da Plataforma',
      sidebarTitle: 'Módulos da Plataforma',
      profileProfessor: 'Professor',
      editProfile: 'Editar Perfil',
      signOut: 'Terminar Sessão',
      sidebarHome: 'Início',
      sidebarExams: 'Exames',
      sidebarCreate: 'Criar Exame',
      sidebarLocked: 'Sessões Bloqueadas',
      sidebarFeatures: 'Novidades',
      sidebarSupport: 'Suporte',

      // Mockup Tab - Home
      dashboard: 'Painel',
      welcome: 'Olá de novo, Afonso!',
      statsAssessments: 'Total de Exames Criados',
      statsGraded: 'Corrigidos por IA Assistida',
      statsSaved: 'Horas Recuperadas',
      statsStudents: 'Alunos Inscritos',
      activityTitle: 'Modelos de Avaliação Recentes',
      activityChemistry: 'Física-Química 10º Ano - Exame Unidade 3',
      activityChemistryDesc: 'Cálculos estequiométricos, equações dos gases.',
      activityHistory: 'História 12º Ano - Revisão de Exame Nacional',
      activityHistoryDesc: 'Transição democrática, integração europeia.',
      activityMath: 'Matemática 9º Ano - Equações de 2º Grau',
      activityMathDesc: 'Resolução de problemas algébricos estruturados.',
      statusDraft: 'Rascunho',
      statusReady: 'Pronto a aplicar',
      statusGrading: 'Correção a decorrer',
      quickCreateBtn: 'Criar Nova Planificação',
      quickCreateTitle: 'Configuração Rápida de Teste',
      quickCreateDesc: 'Crie perguntas alinhadas com o currículo em poucos segundos.',
      quickCreateInput: 'Tema (ex. Reações ácido-base, Revolução Francesa)',
      quickCreateSubmit: 'Gerar Rascunho de Exame',

      // Mockup Tab - Exams
      myExams: 'Os Meus Exames',
      allExamsBadge: 'Todos os Exames',
      newExamBtn: 'Criar Novo Exame',
      searchPlaceholder: 'Pesquisar exames...',
      examColName: 'Nome do Teste',
      examColDate: 'Data de Criação',
      examColStatus: 'Estado',
      examColGrades: 'Média de Notas',
      examColActions: 'Ações',
      examPhysics: 'Física 11º Ano - Ótica e Lentes',
      examBiology: 'Biologia 10º Ano - Mitose Celular',
      examGeography: 'Geografia 8º Ano - Placas Tectónicas',
      actionView: 'Ver',
      actionGrade: 'Corrigir',
      actionLaunch: 'Aplicar',

      // Mockup Tab - Create Exam
      createExamTitle: 'Criar Novo Exame',
      stepIndicator: 'Passo {step} de 4',
      draftTitle: 'Gerador Automático de Exames',
      draftDesc: 'Defina os parâmetros para gerar questões alinhadas com o Currículo Escolar Nacional.',
      labelSubject: 'Disciplina',
      labelGrade: 'Ano de Escolaridade',
      labelTopic: 'Descrição do Conteúdo',
      labelDifficulty: 'Profundidade Cognitiva (Dificuldade)',
      labelCount: 'Número de Questões',
      optionChemistry: 'Física-Química A',
      optionPhysics: 'Física',
      optionMath: 'Matemática A',
      optionBiology: 'Biologia e Geologia',
      optionHigh: 'Ensino Secundário (10º-12º Anos)',
      optionMiddle: '3º Ciclo (7º-9º Anos)',
      optionEasy: 'Conceitos Introdutórios (Memorização)',
      optionMedium: 'Equilibrado (Aplicação e Síntese)',
      optionHard: 'Avançado (Estilo de Exame Nacional)',
      placeholderTopic: 'ex. Ligações químicas, proporções estequiométricas...',
      generateBtn: 'Gerar Estrutura de IA',
      generatingMsg: 'A sintetizar itens pedagógicos, a validar padrões...',
      aiDraftBadge: 'Esboço de IA Concluído',
      saveAndReviewBtn: 'Guardar e Aprovar Modelo',
      regenerateBtn: 'Regerar',

      // Mockup Tab - Locked Sessions
      lockedTitle: 'Sessões Bloqueadas',
      secureMonitoring: 'Monitorização Ativa Ativada',
      lockedDesc: 'Os alunos inserem um código de turma nos seus dispositivos. O ambiente seguro da Artificial Owl bloqueia o navegador, impede copiar-colar e monitoriza a integridade da sessão.',
      classroomKey: 'Código de Turma',
      refreshBtn: 'Atualizar Terminais',
      studentCol: 'Nome do Aluno',
      statusCol: 'Estado',
      deviceCol: 'Dispositivo',
      actionsCol: 'Ações',
      studentActive: 'Bloqueado e a Resolver',
      studentIdle: 'Inativo - Alerta de Foco',
      studentSuccess: 'Entregue com Sucesso',
      lockScreenBtn: 'Desbloquear Aluno',
      shareCodeDesc: 'Partilhe este código de registo privado com os seus alunos para garantir um acesso seguro.',

      // Mockup Tab - New Features
      newFeaturesTitle: 'Novidades',
      newRelease: 'Nova Versão v1.4',
      feat1Title: 'Digitalização de Exames Manuscritos (OCR)',
      feat1Desc: 'Carregue fotografias de testes manuais em papel. A nossa inteligência artificial transcreve as respostas mantendo as anotações do aluno, agilizando a correção em 80%.',
      feat2Title: 'Alinhamento com Exames Nacionais',
      feat2Desc: 'Ajuste automaticamente as curvas de distribuição, desvios-padrão e critérios de cotação para alinhar os testes aos moldes oficiais do IAVE.',
      feat3Title: 'Aplicação de Bloqueio Seguro (Sandbox)',
      feat3Desc: 'Descarregue a aplicação nativa da Artificial Owl para Chromebooks e Windows para garantir o bloqueio absoluto durante exames de avaliação sumativa.',
      safeguardActive: 'Salvaguarda Ativa • 100%',

      // Mockup Tab - Support
      supportTitle: 'Suporte',
      hotline: 'Linha Direta de Professores 24/7',
      supportDesc: 'Obtenha apoio imediato da nossa equipa pedagógica. Ajudamos a carregar os seus referenciais curriculares e a configurar as contas da sua escola.',
      supportEmail: 'Enviar E-mail',
      supportPhone: 'Agendar Chamada',
      supportFaqTitle: 'Perguntas Frequentes (FAQ)',
      faq1Q: 'Os dados dos alunos são usados para treinar modelos públicos?',
      faq1A: 'Não. A Artificial Owl funciona com contratos de API com retenção zero de dados. Nenhuma resposta é armazenada ou utilizada para treino externo.',
      faq2Q: 'Posso importar os critérios de avaliação da minha escola?',
      faq2A: 'Sim. Basta arrastar os seus ficheiros PDF com grelhas de avaliação para a ferramenta de critérios, treinando o seu assistente de correção privado.',
    },
    problem: {
      badge: 'Desafio Educacional',
      title: 'A avaliação está mais difícil de gerir.',
      description: 'Os processos tradicionais de testes continuam lentos, fragmentados e administrativamente desgastantes.',
      cards: [
        {
          id: 'p-1',
          title: 'A correção manual demora demasiado',
          description: 'As respostas abertas consomem horas preciosas do tempo dos professores.',
          stats: '15+ horas/sem',
          consequence: '',
        },
        {
          id: 'p-2',
          title: 'Critérios de avaliação inconsistentes',
          description: 'Classificar testes torna-se subjetivo e inconsistente devido ao cansaço.',
          stats: 'Subjetivo',
          consequence: '',
        },
        {
          id: 'p-3',
          title: 'Fragmentação de ferramentas digitais',
          description: 'As escolas utilizam demasiadas aplicações desconexas para criar, aplicar e corrigir testes.',
          stats: '4-6 apps',
          consequence: '',
        },
        {
          id: 'p-4',
          title: 'Ausência de dados pedagógicos',
          description: 'As notas numéricas normais não revelam as dificuldades reais dos alunos.',
          stats: 'Desestruturado',
          consequence: '',
        },
        {
          id: 'p-5',
          title: 'Uso de IA sem supervisão',
          description: 'Os docentes utilizam ferramentas públicas sem controlo de segurança ou privacidade.',
          stats: 'Alto Risco',
          consequence: '',
        },
      ]
    },
    safety: {
      badge: 'Segurança Institucional',
      titlePre: 'A IA já está nas escolas.',
      titlePost: 'As escolas precisam de controlo.',
      description: 'Os professores utilizam chatbots de IA generalistas diariamente. Sem um sistema dedicado, as escolas perdem o controlo sobre os dados e a integridade da avaliação.',
      quote: '“O risco é descobrir demasiado tarde que a IA estava a ser utilizada sem supervisão.”',
      quoteAuthor: '— Diretriz de Liderança',
      comparisonTitle: 'Como comparamos',
      shadowTitle: 'Chatbots Públicos',
      shadowPoints: [
        'Dados dos alunos inseridos em LLMs públicas.',
        'Sem registo ou auditoria de notas.',
        'Aumenta a fragmentação de ferramentas.'
      ],
      secureTitle: 'Artificial Owl',
      securePoints: [
        'Protocolo de Retenção Zero de dados.',
        'Critérios definidos apenas por professores.',
        'Ambiente unificado e seguro.'
      ],
      footerText: 'Alinhado com os regulamentos de privacidade de dados.',
    },
    solution: {
      badge: 'Solução Centralizada',
      title: 'Uma plataforma para o ciclo de avaliação.',
      description: 'Gira todo o processo de avaliação num único local e poupe tempo.',
      clickToInspect: 'Selecione cada fase',
      stageActive: 'Ativo',
      flowIntegration: 'Integração do Fluxo de Avaliação',
      phaseLabel: 'Fase',
      mockupHeader: 'Antevisão do Ecrã',
      stages: [
        {
          id: 'create',
          title: 'Criar',
          step: '01',
          description: 'Desenhe testes alinhados com o currículo em minutos.',
          details: [],
          mockupTitle: 'Área de Trabalho de Avaliação',
          mockupText1: 'Modelo Temático',
          mockupText2: 'Física e Química - 10º Ano',
          mockupText3: 'Configuração de Pergunta: Teste Estequiométrico',
          mockupTextDetails: [
            '• Tipo de Pergunta: Resposta Aberta Estruturada',
            '• Dificuldade: Moderada (Nível de Exame Secundário)',
            '• Objetivo: Conservação de Massa e Cálculos Moleculares'
          ],
          mockupTextIndicator: 'Rascunhos de IA gerados e validados segundo as diretrizes de avaliação da escola.'
        },
        {
          id: 'deliver',
          title: 'Aplicar',
          step: '02',
          description: 'Aplique testes num ambiente focado e seguro.',
          details: [],
          mockupTitle: 'Portal Seguro de Realização de Provas',
          mockupText1: 'Bloqueio de Segurança Ativo',
          mockupText2: 'Aluno: Marcus Alvarez',
          mockupText3: 'Progresso da Prova Bloqueada: Questão 4 de 6',
          mockupTextDetails: [
            '"Ambiente de trabalho do aluno isolado. Separadores externos, copiar-colar e capturas de ecrã desativados."'
          ],
          mockupTextIndicator: ''
        },
        {
          id: 'grade',
          title: 'Corrigir',
          step: '03',
          description: 'Acelere a correção com inteligência artificial assistida.',
          details: [],
          mockupTitle: 'Corretor Híbrido Humano-IA',
          mockupText1: 'Critérios Assistidos',
          mockupText2: 'Aprovação do Professor',
          mockupText3: 'Correspondência: Reações Ácido-Base',
          mockupTextDetails: [
            'O aluno mencionou ião hidrónio e reação de neutralização (2/2 pts).'
          ],
          mockupTags: ['Raciocínio correto', 'Pequeno erro de sintaxe'],
          mockupTextIndicator: 'Confirmar nota sugerida:',
          mockupScore: '9/10 pontos (Aprovado)'
        },
        {
          id: 'analyse',
          title: 'Analisar',
          step: '04',
          description: 'Obtenha relatórios instantâneos de desempenho.',
          details: [],
          mockupTitle: 'Dados de Desempenho da Turma',
          mockupText1: 'Dificuldades Identificadas na Turma:',
          mockupText2: 'Conversão de Proporções de Moles',
          mockupText3: '55% com dificuldades',
          mockupTextDetails: [
            'Sugestão: Planear uma revisão rápida de 10 minutos sobre coeficientes.'
          ],
          mockupTags: ['Equilíbrio de Reagentes', '88% de domínio'],
          mockupTextIndicator: ''
        }
      ]
    },
    features: {
      badge: 'Capacidades Abrangentes',
      title: 'Desenhado para a excelência pedagógica segura.',
      description: 'A nossa suite de avaliação combina conformidade do mais alto nível, segurança de dados institucionais e fluxos de trabalho pedagógicos.',
      realTimePreview: 'Antevisão de critérios em tempo real:',
      criterionLogic: 'Critério: Lógica e Estrutura',
      recommendedPts: 'Recomendado 4/4 pts',
      criterionTerminology: 'Critério: Terminologia científica',
      needsReview: 'Requer revisão do docente',
      euCompliance: 'Conformidade de Dados na UE',
      zeroRetentionDesc: 'As respostas dos alunos são processadas sob APIs estritas de Retenção Zero.',
      mocksDesc: 'Simulações e modelos incluídos.',
      insightsDesc: 'Descubra bloqueios de aprendizagem.',
      supportDesc: 'Workshops e suporte direto.',
      items: [
        {
          id: 'f-1',
          title: 'Correção assistida por IA',
          description: 'Classifique automaticamente respostas abertas com base nos seus critérios.',
          badge: 'Modo Co-Piloto'
        },
        {
          id: 'f-2',
          title: 'IA em conformidade com o RGPD',
          description: 'Proteja os dados com regras rigorosas de retenção zero.',
          badge: 'Conformidade Rigorosa'
        },
        {
          id: 'f-3',
          title: 'Arquivo de Exames Nacionais',
          description: 'Aceda a exames nacionais e modelos curriculares oficiais.',
          badge: 'Fonte Oficial'
        },
        {
          id: 'f-4',
          title: 'Perspetivas pedagógicas',
          description: 'Identifique dificuldades conceituais e bloqueios de desempenho.',
          badge: 'Análise Detalhada'
        },
        {
          id: 'f-5',
          title: 'Apoio institucional dedicado',
          description: 'Receba formação docente e suporte prioritário especializado.',
          badge: 'Parceria Escolar'
        }
      ]
    },
    teacherBenefit: {
      badge: 'Impacto nos Professores',
      titlePre: 'Menos tempo a corrigir.',
      titleHighlight: 'Mais tempo com os alunos.',
      description: 'Recupere as suas noites livres. Deixe que a Artificial Owl automatize a correção administrativa para que se possa focar em ensinar e inspirar.',
      calcTitle: 'Simulador de Poupança de Tempo',
      calcSlider1: 'Avaliações / Testes Semanais',
      calcSlider2: 'Média de Alunos por Turma',
      calcStudents: 'alunos',
      labelManual: 'Método Tradicional',
      labelOwl: 'Método Artificial Owl',
      labelSaved: 'Tempo Poupado por Semana',
      calcFooterPre: 'Isto traduz-se em recuperar ',
      calcFooterHighlight: ' horas',
      calcFooterPost: ' de tempo letivo e pedagógico todos os meses.',
      badgeTitle: 'Resultados Pedagógicos',
      badgeStatus: 'Conformidade Garantida'
    },
    testimonials: {
      badge: 'O que as escolas dizem',
      titlePre: 'A escolha dos educadores para tornar a avaliação ',
      titleHighlight: 'mais rápida e inteligente.',
      description: 'Como ajudamos os docentes a poupar tempo e a avaliar melhor.',
      bannerTitle: 'Falar com um especialista?',
      bannerSubtitle: 'Agende uma chamada de 15 minutos para saber se a Artificial Owl é ideal para a sua escola.',
      bannerBtn: 'Saber Mais Abaixo',
      list: [
        {
          id: 'testimonial-1',
          quote: '“A classificação de provas com IA trouxe finalmente aquilo com que sempre sonhámos: feedback rico, individualizado, em tempo real. O potencial disto para o processo de ensino é brutal.”',
          author: 'Rodrigo Queiroz e Melo',
          role: 'Direção',
          institution: 'AEEP',
          avatarInitials: 'RM',
          avatarBg: 'from-indigo-500 to-purple-500',
        },
        {
          id: 'testimonial-2',
          quote: '“Uma plataforma de avaliação como a Artificial Owl traz velocidade, metodologia e permite um feedback que antes era impossível.”',
          author: 'João Mendonça',
          role: 'Founder',
          institution: 'Artificial Owl',
          avatarInitials: 'JM',
          avatarBg: 'from-teal-400 to-indigo-500',
        },
        {
          id: 'testimonial-3',
          quote: '“Com a Artificial Owl deixámos de olhar apenas para a nota final. Passámos a perceber melhor onde os alunos estavam a falhar e que conteúdos precisam de ser reforçados antes do exame.”',
          author: 'Mónica Zickermann',
          role: 'Professora',
          institution: 'Colégio Alemão do Porto',
          avatarInitials: 'MZ',
          avatarBg: 'from-purple-500 to-teal-400',
        }
      ]
    },
    news: {
      badge: 'Acabado de lançar',
      title: 'Novidades',
      description: 'As funcionalidades mais recentes, já disponíveis na plataforma.',
      items: [
        {
          id: 'n-1',
          title: 'Correção de exames manuscritos',
          description: 'Digitalize e corrija folhas de testes escritas à mão com OCR avançado.',
          tag: 'Novo'
        }
      ]
    },
    roadmap: {
      badge: 'Visão e Inovação',
      title: 'Brevemente',
      description: 'Estamos continuamente a desenvolver novas ferramentas para otimizar a avaliação.',
      footer: 'Módulo de Nova Geração',
      items: [
        {
          id: 'r-2',
          title: 'Assistente de critérios de cotação',
          description: 'Crie e alinhe rubricas de cotação com a ajuda de um assistente inteligente.',
          quarter: 'Testes Alpha'
        },
        {
          id: 'r-3',
          title: 'Assistente de criação de testes',
          description: 'Gere propostas de testes equilibradas com base no seu referencial curricular.',
          quarter: 'Protótipo'
        }
      ]
    },
    whyNow: {
      badge: 'Porquê Agora',
      title: 'O futuro da avaliação está a mudar.',
      description: 'As decisões estratégicas tomadas este período vão definir os padrões escolares.',
      statsPre: 'Sabia que?',
      statsText: 'Mais de 80% dos professores do ensino secundário já experimentaram ferramentas de IA para apoiar a correção de testes.',
      items: [
        {
          id: 'w-1',
          title: 'A adoção de IA está a acelerar',
          description: 'Os alunos e professores já utilizam ferramentas de IA nos seus hábitos diários. As escolas devem disponibilizar uma plataforma institucional segura antes que se criem práticas informais e inseguras.'
        },
        {
          id: 'w-2',
          title: 'A sobrecarga docente atingiu o limite',
          description: 'O cansaço e a taxa de abandono na carreira docente estão no nível mais elevado de sempre. Libertar os professores do trabalho administrativo devolve o foco à relação em sala de aula.'
        },
        {
          id: 'w-3',
          title: 'Exigência de processos transparentes',
          description: 'Conselhos de direção, encarregados de educação e reguladores exigem regras claras e auditáveis sobre como e onde a inteligência artificial é integrada no ensino.'
        },
        {
          id: 'w-4',
          title: 'Liderança pedagógica no futuro',
          description: 'As escolas que implementarem hoje diretrizes claras e uma plataforma de IA segura vão destacar-se, atraindo os melhores professores e liderando os resultados académicos.'
        }
      ]
    },
    finalCTA: {
      badge: 'Comece Hoje',
      title: 'Preparado para devolver o tempo aos professores?',
      description: 'Reduza a carga de correção e otimize a avaliação numa única plataforma.',
      bookDemo: 'Contacte-nos',
      point1: 'Correção mais rápida',
      point2: 'Professor sempre no controlo',
      point3: 'Em conformidade com o RGPD',
      navTitle1: 'Plataforma',
      navTitle2: 'Organização',
      navTitle3: 'Contacto',
      rights: 'Todos os direitos reservados.',
      complianceBadge: 'Em conformidade com o RGPD',
      navHome: 'Início',
      navSafety: 'Segurança de IA',
      navGDPR: 'Compromisso de Proteção de Dados',
      navContact: 'Contacto',
      address: 'Lisboa, Portugal',
    },
    demoModal: {
      badge: 'Contacte-nos',
      title: 'Descubra como a Artificial Owl pode apoiar a sua escola',
      subtitle: 'Veja como a Artificial Owl ajuda as escolas a simplificar a avaliação, apoiar os professores e melhorar a análise do desempenho dos alunos.',
      labelFullName: 'Nome Completo',
      labelEmail: 'E-mail Profissional',
      labelSchoolName: 'Nome da Escola / Agrupamento',
      labelRole: 'O seu Cargo / Função',
      labelCount: 'Número Estimado de Alunos',
      labelMessage: 'Mensagem adicional ou requisitos específicos (Opcional)',
      placeholderFullName: 'ex. Professor Afonso Fernandes',
      placeholderEmail: 'ex. afonso@escola.pt',
      placeholderSchoolName: 'ex. Escola Secundária D. João II',
      placeholderMessage: 'Partilhe os objetivos pedagógicos da sua instituição...',
      btnSubmit: 'Enviar Pedido de Convite',
      btnSubmitting: 'A submeter proposta...',
      btnSuccess: 'Pedido Enviado com Sucesso!',
      successTitle: 'Agradecemos o seu interesse!',
      successSubtitle: 'Recebemos o seu pedido. Um especialista pedagógico da Artificial Owl entrará em contacto nas próximas 24 horas para agendar a sua demonstração personalizada.',
      btnClose: 'Fechar Janela',
      roleOptions: [
        'Professor / Educador',
        'Coordenador de Departamento',
        'Diretor Pedagógico / Direção',
        'Administrador de Sistemas TI',
        'Outro'
      ],
      studentOptions: [
        'Menos de 100 alunos',
        '100 - 500 alunos',
        '500 - 1000 alunos',
        'Mais de 1000 alunos'
      ]
    },
    comparison: {
      title: 'Um processo mais simples, do início ao fim',
      subtitle: 'Da avaliação fragmentada a uma gestão centralizada.',
      beforeTitle: 'Sem a plataforma',
      beforePoints: [
        'Várias ferramentas',
        'Correção manual demorada',
        'Informação dispersa'
      ],
      beforeFooter: 'Mais fricção. Menos tempo.',
      beforeSteps: ['Criar', 'Exportar', 'Corrigir', 'Consolidar'],
      afterTitle: 'Com a Artificial Owl',
      afterPoints: [
        'Tudo num só local',
        'Correção assistida por IA',
        'Dados pedagógicos úteis'
      ],
      afterFooter: 'Menos correções. Mais tempo para os alunos.',
      afterSteps: ['Criar', 'Corrigir', 'Analisar']
    },
    pricing: {
      title: 'Planos para professores e escolas',
      subtitle: 'De professores individuais a agrupamentos inteiros, escolha o plano mais adequado para si.',
      plans: [
        {
          id: 'digital-plus',
          title: 'Digital+',
          badge: 'Mais popular',
          description: 'Para professores individuais.',
          price: '24 €',
          period: '/mês, faturado anualmente',
          vatNote: 'IVA incluído',
          savings: 'Poupa 72 € por ano',
          features: [
            'Gestão centralizada de turmas e notas dos alunos',
            'Correção assistida por IA',
            'Partilha de notas e feedback com os alunos',
            'Anonimização de dados dos alunos e proteção de dados',
            'Cancele quando quiser'
          ],
          cta: 'Comprar'
        },
        {
          id: 'pro',
          title: 'Pro',
          badge: '',
          description: 'Para professores individuais.',
          price: '40 €',
          period: '/mês, faturado anualmente',
          vatNote: 'IVA incluído',
          savings: 'Poupa 120 € por ano',
          features: [
            'Tudo o que há no Digital+',
            '3× mais uso de correção por IA',
            'Correção de testes manuscritos'
          ],
          cta: 'Comprar'
        },
        {
          id: 'school',
          title: 'Escola',
          badge: '',
          description: 'Para escolas e agrupamentos.',
          price: 'Sob proposta',
          period: 'por assento, mensal ou anual',
          vatNote: '',
          savings: '',
          features: [
            'Assentos atribuídos por email pelo administrador',
            'Mistura de Digital+ e Pro entre professores',
            'Onboarding e workshops incluídos',
            'Contrato à medida, com repartição de responsabilidades RGPD por escrito'
          ],
          cta: 'Falar connosco'
        }
      ],
      footnote: 'Pode mudar de plano quando quiser. Sem perguntas.'
    },
    team: {
      title: 'Conheça a nossa equipa',
      subtitle: 'As pessoas por trás da Artificial Owl.'
    }
  }
};
