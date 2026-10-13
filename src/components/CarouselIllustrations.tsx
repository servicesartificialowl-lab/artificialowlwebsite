import React from 'react';

// Slide 1: Teacher Overload (A Sobrecarga Docente)
// Cozy, cluttered night study room. Tired teacher with dark hair, green sweater, hand on head, stacks of papers, mug, whiteboard checklist.
export function OverloadIllustration() {
  return (
    <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Definitions for gradients */}
        <defs>
          <radialGradient id="warmGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0c111d" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="skyGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Room wall */}
        <rect width="800" height="450" fill="#080c14" />
        {/* Cozy lamp light glow */}
        <circle cx="350" cy="220" r="320" fill="url(#warmGlow1)" />

        {/* Window showing city lights at night */}
        <rect x="580" y="30" width="190" height="250" rx="12" fill="url(#skyGrad1)" stroke="#1e293b" strokeWidth="4" />
        {/* Window grid */}
        <line x1="675" y1="30" x2="675" y2="280" stroke="#1e293b" strokeWidth="2" />
        <line x1="580" y1="140" x2="770" y2="140" stroke="#1e293b" strokeWidth="2" />
        {/* Stars */}
        <circle cx="610" cy="65" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="710" cy="80" r="1" fill="#ffffff" opacity="0.6" />
        <circle cx="740" cy="110" r="1.5" fill="#ffffff" opacity="0.4" />
        <circle cx="640" cy="100" r="1" fill="#ffffff" opacity="0.5" />
        {/* City buildings */}
        <path d="M580 280 V210 H605 V235 H630 V200 H665 V245 H695 V220 H725 V250 H750 V215 H770 V280 Z" fill="#02040a" />
        {/* Building windows */}
        <rect x="590" y="245" width="4" height="6" fill="#fef08a" opacity="0.6" />
        <rect x="615" y="255" width="4" height="6" fill="#fef08a" opacity="0.4" />
        <rect x="640" y="225" width="4" height="6" fill="#fef08a" opacity="0.7" />
        <rect x="648" y="225" width="4" height="6" fill="#fef08a" opacity="0.5" />
        <rect x="675" y="255" width="4" height="6" fill="#fef08a" opacity="0.5" />
        <rect x="705" y="235" width="4" height="6" fill="#fef08a" opacity="0.6" />
        <rect x="735" y="260" width="4" height="6" fill="#fef08a" opacity="0.3" />

        {/* Whiteboard with checklist on left */}
        <rect x="30" y="30" width="220" height="190" rx="6" fill="#f8fafc" stroke="#475569" strokeWidth="4" />
        <line x1="30" y1="200" x2="250" y2="200" stroke="#334155" strokeWidth="4" />
        <text x="45" y="60" fill="#334155" fontSize="15" fontWeight="bold" fontFamily="sans-serif">To-do:</text>
        <text x="45" y="90" fill="#64748b" fontSize="12" fontFamily="sans-serif">☐ Classes</text>
        <text x="45" y="115" fill="#64748b" fontSize="12" fontFamily="sans-serif">☐ Lesson plan</text>
        <text x="45" y="140" fill="#64748b" fontSize="12" fontFamily="sans-serif">☐ Tests</text>
        <text x="45" y="170" fill="#ef4444" fontSize="13" fontWeight="bold" fontFamily="sans-serif">☑ Grade 78 tests</text>
        {/* Strikeout line for effect */}
        <line x1="62" y1="166" x2="185" y2="166" stroke="#ef4444" strokeWidth="1.5" />

        {/* Teaching Poster */}
        <rect x="280" y="35" width="90" height="110" rx="3" fill="#fafaf9" stroke="#cbd5e1" strokeWidth="1" />
        <text x="290" y="60" fill="#44403c" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">TEACHING IS</text>
        <text x="290" y="73" fill="#44403c" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">A WORK OF</text>
        {/* Red heart */}
        <path d="M325 90 C321 86, 313 86, 313 94 C313 102, 325 110, 325 110 C325 110, 337 102, 337 94 C337 86, 329 86, 325 90 Z" fill="#ef4444" />
        <text x="311" y="130" fill="#44403c" fontSize="8" fontWeight="bold" fontFamily="sans-serif">HEART</text>

        {/* Small sticky note */}
        <rect x="215" y="135" width="40" height="40" fill="#fef08a" transform="rotate(-6, 235, 155)" />
        <text x="220" y="150" fill="#854d0e" fontSize="7" fontWeight="bold" fontFamily="sans-serif" transform="rotate(-6, 235, 155)">Don't</text>
        <text x="220" y="160" fill="#854d0e" fontSize="7" fontWeight="bold" fontFamily="sans-serif" transform="rotate(-6, 235, 155)">forget! :)</text>

        {/* Bookshelf in the background */}
        <rect x="420" y="70" width="110" height="230" fill="#1c1917" stroke="#292524" strokeWidth="2" />
        <rect x="420" y="145" width="110" height="6" fill="#292524" />
        <rect x="420" y="215" width="110" height="6" fill="#292524" />
        <rect x="430" y="90" width="12" height="55" fill="#0d9488" />
        <rect x="444" y="85" width="14" height="60" fill="#0284c7" />
        <rect x="460" y="105" width="10" height="40" fill="#e11d48" />
        <rect x="475" y="95" width="15" height="50" fill="#d97706" transform="rotate(12, 475, 145)" />
        <rect x="432" y="160" width="15" height="55" fill="#4f46e5" />
        <rect x="450" y="155" width="12" height="60" fill="#059669" />
        <rect x="475" y="170" width="35" height="45" fill="#7c3aed" />

        {/* Wooden desk */}
        <rect x="0" y="300" width="800" height="150" fill="#3b2314" stroke="#22140b" strokeWidth="3" />
        <line x1="0" y1="312" x2="800" y2="312" stroke="#4d2f1c" strokeWidth="2" />

        {/* Stacks of paper on the left */}
        <g id="left-pile">
          <path d="M35 375 L160 380 L140 425 L15 420 Z" fill="#cbd5e1" stroke="#94a3b8" />
          <path d="M30 360 L155 365 L145 410 L20 405 Z" fill="#e2e8f0" stroke="#cbd5e1" />
          <path d="M40 345 L165 350 L150 395 L25 390 Z" fill="#f1f5f9" stroke="#cbd5e1" />
          <path d="M32 330 L157 335 L141 380 L16 375 Z" fill="#ffffff" stroke="#cbd5e1" />
          <line x1="45" y1="342" x2="135" y2="345" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="352" x2="115" y2="354" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="362" x2="130" y2="365" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="120" cy="350" r="11" stroke="#ef4444" strokeWidth="1.5" fill="none" />
          <text x="114" y="354" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="sans-serif">D-</text>
        </g>

        {/* Stacks of paper on the right */}
        <g id="right-pile">
          <path d="M605 370 L735 365 L755 420 L625 425 Z" fill="#cbd5e1" stroke="#94a3b8" />
          <path d="M595 350 L725 345 L745 400 L615 405 Z" fill="#e2e8f0" stroke="#cbd5e1" />
          <path d="M610 330 L740 325 L760 380 L630 385 Z" fill="#f1f5f9" stroke="#cbd5e1" />
          <path d="M600 310 L730 305 L750 360 L620 365 Z" fill="#ffffff" stroke="#cbd5e1" />
          <line x1="620" y1="322" x2="710" y2="319" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="620" y1="332" x2="690" y2="329" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="620" y1="342" x2="705" y2="339" stroke="#cbd5e1" strokeWidth="2" />
        </g>

        {/* Crumpled paper balls */}
        <circle cx="185" cy="410" r="11" fill="#f1f5f9" stroke="#cbd5e1" />
        <path d="M178 405 Q185 401, 191 411 Q182 416, 178 405 Z" fill="#cbd5e1" />
        <circle cx="215" cy="395" r="8" fill="#e2e8f0" stroke="#cbd5e1" />

        {/* Tired Teacher */}
        <g id="teacher">
          {/* Torso */}
          <path d="M190 450 C195 360, 385 340, 415 450 Z" fill="#14532d" />
          {/* Collar */}
          <path d="M280 355 L315 355 L325 380 L270 380 Z" fill="#bae6fd" />
          <path d="M298 355 L288 380 M298 355 L308 380" stroke="#7dd3fc" strokeWidth="1.5" />

          {/* Neck */}
          <path d="M282 325 Q298 330, 313 325 L307 360 L288 360 Z" fill="#fed7aa" />

          {/* Head */}
          <path d="M260 280 C260 240, 335 240, 335 280 C335 310, 315 330, 298 330 C280 330, 260 310, 260 280 Z" fill="#fed7aa" />
          {/* Hair */}
          <path d="M255 275 C255 235, 295 220, 330 235 C340 245, 342 270, 338 280 C328 275, 318 278, 312 270 C302 275, 288 270, 282 260 C272 265, 264 265, 255 275 Z" fill="#292524" />
          <path d="M260 250 Q272 235, 292 240 M302 238 Q318 240, 328 255" stroke="#1c1917" strokeWidth="2.5" fill="none" />
          <path d="M255 272 C253 282, 258 288, 262 290" fill="#292524" />

          {/* Face details */}
          <path d="M272 294 Q282 289, 290 292" stroke="#1c1917" strokeWidth="2" fill="none" />
          <path d="M300 292 Q310 289, 318 295" stroke="#1c1917" strokeWidth="2" fill="none" />
          <path d="M274 305 Q280 302, 286 305" stroke="#1c1917" strokeWidth="2.5" fill="none" />
          <path d="M300 306 Q307 303, 314 306" stroke="#1c1917" strokeWidth="2.5" fill="none" />
          {/* Eye bags */}
          <path d="M272 311 Q280 314, 287 311" stroke="#ea580c" strokeWidth="1.5" opacity="0.4" fill="none" />
          <path d="M299 312 Q307 315, 314 312" stroke="#ea580c" strokeWidth="1.5" opacity="0.4" fill="none" />
          {/* Nose & Mouth */}
          <path d="M290 305 L294 315 L288 317" stroke="#c2410c" strokeWidth="1.5" fill="none" />
          <path d="M284 324 Q294 328, 304 323" stroke="#1c1917" strokeWidth="2" fill="none" />

          {/* Arm and hand holding head */}
          <path d="M335 450 C345 400, 350 340, 335 320 C330 310, 320 305, 316 305" stroke="#14532d" strokeWidth="28" strokeLinecap="round" fill="none" />
          <circle cx="327" cy="305" r="13" fill="#fed7aa" />
          <path d="M316 305 Q328 292, 338 308" stroke="#1c1917" strokeWidth="1.5" fill="none" />
        </g>

        {/* Laptop with owl sticker */}
        <g id="laptop">
          {/* Base */}
          <path d="M275 380 L525 380 L545 410 L255 410 Z" fill="#475569" stroke="#334155" strokeWidth="2" />
          <rect x="285" y="388" width="230" height="15" fill="#1e293b" rx="2" />

          {/* Lid */}
          <path d="M305 255 L495 255 L515 380 L285 380 Z" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          <polygon points="305,255 495,255 485,238 315,238" fill="#2dd4bf" opacity="0.1" />

          {/* Owl sticker */}
          <g id="sticker">
            <ellipse cx="400" cy="315" rx="22" ry="18" fill="#0284c7" />
            <circle cx="400" cy="315" r="19" fill="#0ea5e9" />
            <circle cx="392" cy="312" r="6" fill="#ffffff" />
            <circle cx="392" cy="312" r="2.5" fill="#0f172a" />
            <circle cx="408" cy="312" r="6" fill="#ffffff" />
            <circle cx="408" cy="312" r="2.5" fill="#0f172a" />
            <polygon points="400,317 397,322 403,322" fill="#f97316" />
            <circle cx="400" cy="315" r="21" stroke="#e0f2fe" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          </g>
        </g>

        {/* White Mug */}
        <g id="mug">
          <path d="M510 395 C528 395, 528 425, 510 425" stroke="#fafaf9" strokeWidth="5" fill="none" />
          <rect x="472" y="385" width="42" height="48" rx="4" fill="#fafaf9" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="493" cy="385" rx="21" ry="4" fill="#451a03" />
          <text x="477" y="401" fill="#44403c" fontSize="4.2" fontWeight="bold" fontFamily="monospace">TEACH.</text>
          <text x="477" y="409" fill="#44403c" fontSize="4.2" fontWeight="bold" fontFamily="monospace">INSPIRE.</text>
          <text x="477" y="417" fill="#44403c" fontSize="4.2" fontWeight="bold" fontFamily="monospace">REPEAT.</text>
        </g>

        {/* Pencil Holder */}
        <g id="holder">
          <rect x="545" y="375" width="28" height="45" rx="3" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
          <line x1="550" y1="375" x2="542" y2="345" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="558" y1="375" x2="558" y2="340" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
          <line x1="566" y1="375" x2="574" y2="348" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

// Slide 2: The Owl Steps In (A Inteligência Artificial)
// Cozy study room. Holographic magical glowing Owl floating above the laptop. Papers being scanned with a digital laser. Laptop shows grading success.
export function StepsInIllustration() {
  return (
    <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="tealGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0c111d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="owlGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="laserBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Room background */}
        <rect width="800" height="450" fill="#080c14" />
        {/* Magical teal processing glow */}
        <circle cx="400" cy="220" r="280" fill="url(#tealGlow2)" />

        {/* Whiteboard with green checklist checkmark */}
        <rect x="30" y="30" width="220" height="190" rx="6" fill="#f8fafc" stroke="#475569" strokeWidth="4" />
        <line x1="30" y1="200" x2="250" y2="200" stroke="#334155" strokeWidth="4" />
        <text x="45" y="60" fill="#334155" fontSize="15" fontWeight="bold" fontFamily="sans-serif">To-do:</text>
        <text x="45" y="90" fill="#cbd5e1" fontSize="12" fontFamily="sans-serif">✓ Classes</text>
        <text x="45" y="115" fill="#cbd5e1" fontSize="12" fontFamily="sans-serif">✓ Lesson plan</text>
        <text x="45" y="140" fill="#cbd5e1" fontSize="12" fontFamily="sans-serif">✓ Tests</text>
        {/* Completed grading checklist item in green! */}
        <text x="45" y="170" fill="#10b981" fontSize="13" fontWeight="bold" fontFamily="sans-serif">✓ Grade 78 tests</text>
        <line x1="45" y1="166" x2="175" y2="166" stroke="#10b981" strokeWidth="1.5" />

        {/* Bookshelf in background */}
        <rect x="420" y="70" width="110" height="230" fill="#1c1917" stroke="#292524" strokeWidth="2" />
        <rect x="420" y="145" width="110" height="6" fill="#292524" />
        <rect x="430" y="90" width="12" height="55" fill="#0d9488" />
        <rect x="444" y="85" width="14" height="60" fill="#0284c7" />
        <rect x="432" y="160" width="15" height="55" fill="#4f46e5" />

        {/* Wooden desk */}
        <rect x="0" y="300" width="800" height="150" fill="#3b2314" stroke="#22140b" strokeWidth="3" />
        <line x1="0" y1="312" x2="800" y2="312" stroke="#4d2f1c" strokeWidth="2" />

        {/* Left stack of papers being digitized/scanned */}
        <g id="scanning-papers">
          {/* Base paper block */}
          <path d="M35 375 L160 380 L140 425 L15 420 Z" fill="#cbd5e1" stroke="#94a3b8" />
          <path d="M30 360 L155 365 L145 410 L20 405 Z" fill="#e2e8f0" stroke="#cbd5e1" />
          <path d="M40 345 L165 350 L150 395 L25 390 Z" fill="#f1f5f9" stroke="#cbd5e1" />
          
          {/* Top paper floating and dissolving into data particles */}
          <path d="M50 315 L175 310 L155 355 L30 360 Z" fill="#e0f2fe" stroke="#38bdf8" opacity="0.8" transform="rotate(-12, 100, 335)" />
          {/* Floating data particles */}
          <circle cx="110" cy="280" r="3" fill="#22d3ee" />
          <circle cx="150" cy="270" r="4" fill="#0ea5e9" />
          <circle cx="180" cy="290" r="2.5" fill="#22d3ee" />
          <circle cx="130" cy="250" r="3" fill="#22d3ee" />
          {/* Binary glyphs */}
          <text x="160" y="260" fill="#22d3ee" fontSize="10" fontWeight="bold" fontFamily="monospace" opacity="0.8">1</text>
          <text x="120" y="275" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace" opacity="0.7">0</text>
          <text x="145" y="240" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace" opacity="0.9">✓</text>
          
          {/* Scanning laser projection */}
          <polygon points="30,360 170,300 400,180" fill="url(#laserBeam)" opacity="0.4" />
        </g>

        {/* Teacher - sitting back, looking happy and amazed! */}
        <g id="happy-teacher">
          <path d="M190 450 C200 370, 360 350, 395 450 Z" fill="#14532d" />
          <path d="M265 365 L300 365 L310 390 L255 390 Z" fill="#bae6fd" />
          
          {/* Neck */}
          <path d="M272 335 Q285 340, 300 335 L295 370 L280 370 Z" fill="#fed7aa" />

          {/* Head - tilted up slightly, looking at the floating owl */}
          <path d="M255 290 C255 250, 325 245, 325 285 C325 315, 305 332, 290 332 C275 332, 255 315, 255 290 Z" fill="#fed7aa" />
          {/* Hair */}
          <path d="M250 285 C250 245, 285 230, 320 242 C330 252, 332 275, 328 285 C318 280, 310 283, 304 275 C294 280, 282 275, 276 265 C266 270, 258 270, 250 285 Z" fill="#292524" />
          
          {/* Smiling face details */}
          <path d="M275 294 Q283 291, 290 295" stroke="#1c1917" strokeWidth="2" fill="none" /> {/* Eyebrow up */}
          <path d="M302 295 Q310 291, 317 296" stroke="#1c1917" strokeWidth="2" fill="none" />
          
          <path d="M278 305 Q283 308, 288 305" stroke="#1c1917" strokeWidth="2" fill="none" /> {/* Eye curve */}
          <path d="M302 305 Q307 308, 312 305" stroke="#1c1917" strokeWidth="2" fill="none" />
          
          {/* Smiling mouth! */}
          <path d="M285 318 Q293 325, 302 318" stroke="#1c1917" strokeWidth="2" fill="none" />
        </g>

        {/* Laptop - open, displaying grading success screen */}
        <g id="laptop-front">
          {/* Base */}
          <path d="M340 380 L560 380 L575 410 L325 410 Z" fill="#475569" stroke="#334155" strokeWidth="2" />
          
          {/* Laptop Lid (Facing the teacher, but screen is turned toward him, wait, let's render the glowing screen!) */}
          {/* Let's show the lid angled. Screen has glowing dashboard data! */}
          <path d="M360 270 L540 270 L555 380 L345 380 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          {/* Inner Screen */}
          <path d="M368 278 L532 278 L544 372 L356 372 Z" fill="#0f172a" />
          {/* Glowing Green telemetry */}
          <rect x="380" y="290" width="140" height="15" fill="#047857" rx="3" />
          <text x="388" y="301" fill="#a7f3d0" fontSize="8" fontWeight="bold" fontFamily="monospace">GRADING EXAMS: 100%</text>
          
          <rect x="380" y="312" width="60" height="25" fill="#1e293b" rx="2" />
          <text x="385" y="322" fill="#10b981" fontSize="7" fontFamily="monospace">78 / 78</text>
          <text x="385" y="332" fill="#64748b" fontSize="5" fontFamily="monospace">EXAMS PROCESSED</text>
          
          <rect x="450" y="312" width="70" height="25" fill="#1e293b" rx="2" />
          <text x="455" y="322" fill="#38bdf8" fontSize="6" fontFamily="monospace">FEEDBACK READY</text>
          <text x="455" y="332" fill="#10b981" fontSize="5" fontFamily="monospace">✓ SENT TO STUDENTS</text>
        </g>

        {/* HOLOGRAPHIC OWL ASSISTANT (Magical glowing hologram floating above the desk!) */}
        <g id="floating-owl-hologram" transform="translate(0, -10)">
          {/* Outer glowing halo */}
          <circle cx="450" cy="170" r="45" fill="url(#owlGlow)" />
          
          {/* Owl Body */}
          <ellipse cx="450" cy="170" rx="26" ry="32" fill="#22d3ee" opacity="0.9" stroke="#e0f7fa" strokeWidth="2" />
          {/* Belly */}
          <ellipse cx="450" cy="178" rx="16" ry="18" fill="#e0f7fa" opacity="0.8" />
          
          {/* Wings */}
          <path d="M424 165 C410 160, 415 190, 427 185 Z" fill="#06b6d4" />
          <path d="M476 165 C490 160, 485 190, 473 185 Z" fill="#06b6d4" />

          {/* Cute glowing glasses */}
          <circle cx="440" cy="162" r="9" stroke="#ffffff" strokeWidth="2.5" fill="none" />
          <circle cx="460" cy="162" r="9" stroke="#ffffff" strokeWidth="2.5" fill="none" />
          <line x1="449" y1="162" x2="451" y2="162" stroke="#ffffff" strokeWidth="2" />

          {/* Big eyes winking */}
          <circle cx="440" cy="162" r="5" fill="#ffffff" />
          <circle cx="440" cy="162" r="2.5" fill="#0891b2" />
          
          {/* Winking eye on the right */}
          <path d="M456 162 Q460 166, 464 162" stroke="#0891b2" strokeWidth="2.5" fill="none" />

          {/* Golden Beak */}
          <polygon points="450,167 447,172 453,172" fill="#f97316" />

          {/* Little ears/tufts */}
          <polygon points="432,143 426,134 438,140" fill="#06b6d4" />
          <polygon points="468,143 474,134 462,140" fill="#06b6d4" />

          {/* Tiny yellow feet */}
          <ellipse cx="444" cy="202" rx="4" ry="2" fill="#f97316" />
          <ellipse cx="456" cy="202" rx="4" ry="2" fill="#f97316" />
        </g>

        {/* White Mug */}
        <g id="mug2">
          <rect x="620" y="385" width="42" height="48" rx="4" fill="#fafaf9" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="641" cy="385" rx="21" ry="4" fill="#451a03" />
          <text x="625" y="401" fill="#44403c" fontSize="4.2" fontWeight="bold" fontFamily="monospace">TEACH.</text>
          <text x="625" y="409" fill="#44403c" fontSize="4.2" fontWeight="bold" fontFamily="monospace">INSPIRE.</text>
          <text x="625" y="417" fill="#44403c" fontSize="4.2" fontWeight="bold" fontFamily="monospace">REPEAT.</text>
        </g>
      </svg>
    </div>
  );
}

// Slide 3: Quality Time Returned (Tempo Devolvido)
// Cozy, beautiful living room with glowing fireplace on the left. The teacher relaxed and smiling on a sofa with his child, holding a warm cup. No papers.
export function QualityTimeIllustration() {
  return (
    <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0c111d" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="windowNight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050b18" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Room wall */}
        <rect width="800" height="450" fill="#18131d" />

        {/* Glowing Fireplace on the left */}
        <rect x="0" y="150" width="160" height="220" fill="#2d1510" stroke="#1c0a06" strokeWidth="3" />
        {/* Fireplace opening */}
        <rect x="0" y="210" width="110" height="150" fill="#0a0504" rx="8" />
        {/* Fire glow */}
        <circle cx="50" cy="300" r="80" fill="url(#fireGlow)" />
        {/* Logs */}
        <rect x="15" y="325" width="70" height="15" rx="3" fill="#451a03" transform="rotate(-10, 50, 332)" />
        <rect x="25" y="315" width="60" height="15" rx="3" fill="#78350f" transform="rotate(15, 55, 322)" />
        {/* Fire flames (detailed SVGs) */}
        <path d="M20 320 C30 250, 45 230, 45 280 C45 240, 60 230, 65 290 C65 250, 75 260, 75 320 Z" fill="#ef4444" />
        <path d="M30 320 C38 270, 50 260, 50 295 C50 270, 58 265, 62 300 C62 280, 68 285, 68 320 Z" fill="#f97316" />
        <path d="M40 320 Q50 280, 50 305 Q55 290, 58 320" fill="#facc15" />

        {/* Window on the right showing peaceful nature/stars */}
        <rect x="580" y="30" width="180" height="230" rx="12" fill="url(#windowNight)" stroke="#27272a" strokeWidth="4" />
        {/* Stars and Crescent Moon */}
        <circle cx="680" cy="70" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="730" cy="95" r="1" fill="#ffffff" opacity="0.6" />
        <path d="M625 65 C625 55, 635 50, 642 52 C635 55, 635 68, 642 72 C635 73, 625 68, 625 65 Z" fill="#fef08a" />
        
        {/* Bookshelf or plants on the background shelf */}
        <rect x="250" y="80" width="250" height="8" fill="#44403c" />
        {/* Hanging plant */}
        <rect x="270" y="65" width="20" height="15" fill="#a1a1aa" rx="2" />
        <path d="M272 80 Q265 110, 260 120 M280 80 Q285 115, 290 130 M288 80 Q278 120, 275 140" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Cozy Floor/Carpet */}
        <rect x="0" y="370" width="800" height="80" fill="#2d2a29" />
        <ellipse cx="400" cy="410" rx="300" ry="30" fill="#71717a" opacity="0.3" />

        {/* Comfortable Couch (Red-orange, warm looking) */}
        <path d="M220 395 C220 330, 240 310, 290 310 L520 310 C570 310, 590 330, 590 395 Z" fill="#9a3412" />
        <rect x="250" y="350" width="310" height="45" fill="#c2410c" rx="8" />
        <rect x="220" y="375" width="40" height="25" fill="#7c2d12" rx="4" />
        <rect x="550" y="375" width="40" height="25" fill="#7c2d12" rx="4" />

        {/* Teacher - relaxed, smiling! */}
        <g id="relaxed-teacher">
          <path d="M260 410 C265 345, 385 335, 395 410 Z" fill="#ea580c" /> {/* Cozy orange sweater */}
          <path d="M312 300 Q323 305, 334 300 L328 325 L318 325 Z" fill="#fed7aa" /> {/* Neck */}
          <path d="M295 255 C295 220, 355 220, 355 255 C355 285, 338 300, 325 300 C312 300, 295 285, 295 255 Z" fill="#fed7aa" /> {/* Head */}
          <path d="M290 250 C290 215, 325 205, 350 218 C358 228, 360 248, 356 256 C346 251, 338 253, 332 247 C322 251, 312 248, 307 240 Q298 245, 290 250 Z" fill="#292524" /> {/* Hair */}
          
          {/* Eyes closed in happiness */}
          <path d="M310 262 Q315 265, 320 262" stroke="#1c1917" strokeWidth="2" fill="none" />
          <path d="M330 262 Q335 265, 340 262" stroke="#1c1917" strokeWidth="2" fill="none" />
          {/* Broad smile */}
          <path d="M314 278 Q325 288, 336 278" stroke="#1c1917" strokeWidth="2" fill="none" />

          {/* Hand holding a mug */}
          <path d="M260 380 Q290 385, 305 380" stroke="#ea580c" strokeWidth="18" strokeLinecap="round" fill="none" />
          <rect x="298" y="365" width="20" height="22" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M295 372 C295 372, 290 372, 290 378 C290 382, 295 382, 295 382" stroke="#f8fafc" strokeWidth="3" fill="none" />
        </g>

        {/* Daughter/Son sitting next to him, laughing */}
        <g id="happy-child">
          <path d="M410 410 C415 365, 490 360, 495 410 Z" fill="#4f46e5" /> {/* Purple sweater */}
          {/* Neck & Head */}
          <path d="M444 328 L456 328 L450 345 Z" fill="#fcd34d" />
          <path d="M430 295 C430 268, 470 268, 470 295 C470 315, 458 325, 450 325 C442 325, 430 315, 430 295 Z" fill="#fcd34d" />
          {/* Hair (blonde/brown) */}
          <path d="M426 290 C426 265, 448 255, 468 265 L472 290 C462 285, 452 288, 448 280 C440 284, 432 280, 426 290 Z" fill="#b45309" />
          {/* Smile */}
          <path d="M440 300 Q450 304, 460 300" stroke="#1c1917" strokeWidth="1.5" fill="none" />
          <path d="M442 310 Q450 316, 458 310" stroke="#1c1917" strokeWidth="2" fill="none" />
          
          {/* Arm around his dad */}
          <path d="M440 380 Q400 370, 385 380" stroke="#4f46e5" strokeWidth="12" strokeLinecap="round" fill="none" />
        </g>

        {/* Sleeping Cat on carpet in front of fireplace */}
        <g id="sleeping-cat" transform="translate(130, 390)">
          <ellipse cx="20" cy="15" rx="16" ry="12" fill="#d97706" /> {/* Orange cat */}
          <circle cx="10" cy="11" r="7" fill="#d97706" />
          {/* Ears */}
          <polygon points="4,7 2,2 8,6" fill="#b45309" />
          <polygon points="12,7 14,2 10,6" fill="#b45309" />
          {/* Tail curled */}
          <path d="M34 15 Q38 18, 35 22 Q30 24, 25 18" stroke="#d97706" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M7 14 Q10 16, 13 14" stroke="#451a03" strokeWidth="1" fill="none" /> {/* Closed eyes */}
        </g>

        {/* Clean coffee table with plant */}
        <g id="table">
          <ellipse cx="600" cy="420" rx="60" ry="12" fill="#292524" />
          <rect x="592" y="390" width="16" height="32" fill="#44403c" />
          {/* Flower Vase */}
          <rect x="585" y="365" width="30" height="25" rx="4" fill="#a5f3fc" opacity="0.8" stroke="#06b6d4" strokeWidth="1" />
          {/* Flowers */}
          <circle cx="590" cy="355" r="5" fill="#facc15" />
          <circle cx="600" cy="350" r="4" fill="#e11d48" />
          <circle cx="610" cy="356" r="5" fill="#fb923c" />
          <line x1="590" y1="365" x2="590" y2="355" stroke="#16a34a" strokeWidth="1.5" />
          <line x1="600" y1="365" x2="600" y2="350" stroke="#16a34a" strokeWidth="1.5" />
          <line x1="605" y1="365" x2="610" y2="356" stroke="#16a34a" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// Slide 4: Richer Feedback (Feedback Enriquecido)
// Sleek, futuristic tablet mockup close-up. Shows Portuguese/English feedback analytics, color-coded student score metrics, and comment box with high contrast elements.
export function RicherFeedbackIllustration() {
  return (
    <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0c111d" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Clean, high-tech desk background */}
        <rect width="800" height="450" fill="#0b1329" />
        <circle cx="400" cy="225" r="300" fill="url(#portalGlow)" />

        {/* Modern desktop/tablet background elements */}
        <circle cx="700" cy="100" r="60" fill="#1e293b" opacity="0.3" />
        <rect x="80" y="50" width="80" height="80" rx="10" fill="#1e293b" opacity="0.2" />

        {/* TABLET BODY */}
        <rect x="140" y="30" width="520" height="390" rx="24" fill="#0f172a" stroke="#334155" strokeWidth="8" />
        {/* Screen */}
        <rect x="156" y="46" width="488" height="358" rx="16" fill="#f8fafc" />

        {/* PORTAL HEADER */}
        <rect x="156" y="46" width="488" height="45" rx="16" fill="#1e293b" />
        <text x="180" y="74" fill="#38bdf8" fontSize="14" fontWeight="bold" fontFamily="sans-serif">ARTIFICIAL OWL</text>
        <rect x="310" y="58" width="85" height="20" rx="10" fill="#0ea5e9" />
        <text x="323" y="71" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">DASHBOARD</text>
        
        {/* Active Class info */}
        <text x="500" y="73" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Turma: 9º Ano - Português</text>

        {/* STUDENT INFO CARD */}
        <rect x="175" y="110" width="180" height="65" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx="210" cy="142" r="20" fill="#e0f2fe" />
        {/* Student Avatar Icon */}
        <path d="M202 153 C202 145, 218 145, 218 153 Z" fill="#0284c7" />
        <circle cx="210" cy="136" r="6" fill="#0284c7" />
        
        <text x="242" y="138" fill="#1e293b" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Pedro Silva</text>
        <text x="242" y="152" fill="#64748b" fontSize="10" fontFamily="sans-serif">ID: #409220</text>

        {/* FINAL SCORE METRIC */}
        <rect x="375" y="110" width="250" height="65" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
        <text x="395" y="135" fill="#64748b" fontSize="11" fontFamily="sans-serif">Pontuação Final / Grade</text>
        <text x="395" y="160" fill="#10b981" fontSize="20" fontWeight="bold" fontFamily="sans-serif">9.2 / 10</text>
        
        {/* "EXCELENTE" badge */}
        <rect x="530" y="125" width="75" height="22" rx="11" fill="#d1fae5" />
        <text x="543" y="139" fill="#065f46" fontSize="9" fontWeight="bold" fontFamily="sans-serif">EXCELENTE</text>

        {/* METRICS & GRAPHS */}
        <rect x="175" y="195" width="215" height="185" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
        <text x="195" y="222" fill="#1e293b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Habilidades / Skills</text>
        
        {/* Gramática bar */}
        <text x="195" y="248" fill="#64748b" fontSize="9.5" fontFamily="sans-serif">Gramática / Syntax</text>
        <rect x="195" y="254" width="170" height="8" rx="4" fill="#f1f5f9" />
        <rect x="195" y="254" width="155" height="8" rx="4" fill="#0ea5e9" /> {/* 90% */}
        <text x="345" y="248" fill="#0284c7" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">90%</text>

        {/* Interpretação bar */}
        <text x="195" y="288" fill="#64748b" fontSize="9.5" fontFamily="sans-serif">Interpretação / Logic</text>
        <rect x="195" y="294" width="170" height="8" rx="4" fill="#f1f5f9" />
        <rect x="195" y="294" width="162" height="8" rx="4" fill="#10b981" /> {/* 95% */}
        <text x="345" y="288" fill="#047857" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">95%</text>

        {/* Vocabulário bar */}
        <text x="195" y="328" fill="#64748b" fontSize="9.5" fontFamily="sans-serif">Vocabulário / Lexicon</text>
        <rect x="195" y="334" width="170" height="8" rx="4" fill="#f1f5f9" />
        <rect x="195" y="334" width="135" height="8" rx="4" fill="#f59e0b" /> {/* 80% */}
        <text x="345" y="328" fill="#d97706" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">80%</text>

        {/* FEEDBACK COMMENT BUBBLE (AI personalized comments) */}
        <rect x="405" y="195" width="220" height="185" rx="12" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="425" y="222" fill="#1d4ed8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Comentário IA / AI Insight</text>
        
        {/* Comment text */}
        <text x="425" y="250" fill="#1e3a8a" fontSize="9" fontFamily="sans-serif">O Pedro demonstrou um domínio excelente</text>
        <text x="425" y="264" fill="#1e3a8a" fontSize="9" fontFamily="sans-serif">da estrutura narrativa e do uso de conectivos.</text>
        <text x="425" y="278" fill="#1e3a8a" fontSize="9" fontFamily="sans-serif">A gramática está impecável.</text>
        <text x="425" y="298" fill="#1d4ed8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Sugestão de Prática:</text>
        <text x="425" y="314" fill="#1e3a8a" fontSize="9" fontFamily="sans-serif">Recomendar exercícios de vocabulário</text>
        <text x="425" y="328" fill="#1e3a8a" fontSize="9" fontFamily="sans-serif">sinônimo para enriquecer ainda mais</text>
        <text x="425" y="342" fill="#1e3a8a" fontSize="9" fontFamily="sans-serif">as dissertações futuras.</text>

        {/* Owl watermark stamp */}
        <ellipse cx="585" cy="345" rx="18" ry="14" fill="#bfdbfe" opacity="0.3" />
        <circle cx="581" cy="343" r="4" fill="#1d4ed8" opacity="0.3" />
        <circle cx="589" cy="343" r="4" fill="#1d4ed8" opacity="0.3" />
      </svg>
    </div>
  );
}

// Slide 5: Focus on Teaching (Foco em Ensinar)
// Bright, energetic morning classroom setting. Smiling male teacher holding tablet pointing to whiteboard with atomic formulas and illustrations, silhouettes of happy raising-hand students.
export function FocusTeachingIllustration() {
  return (
    <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="morningSun" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#0f172a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chalkboardGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
        </defs>

        {/* Room wall */}
        <rect width="800" height="450" fill="#0f172a" />

        {/* Cheerful classroom window on the left with morning sun */}
        <rect x="30" y="30" width="130" height="230" rx="6" fill="#38bdf8" opacity="0.2" />
        {/* Morning sunbeams streaming across the classroom */}
        <polygon points="30,30 500,450 0,450" fill="url(#morningSun)" />

        {/* Green Blackboard */}
        <rect x="200" y="30" width="560" height="210" rx="8" fill="url(#chalkboardGrad)" stroke="#78350f" strokeWidth="6" />
        
        {/* Chalk drawings on board */}
        <text x="240" y="70" fill="#a7f3d0" fontSize="18" fontFamily="monospace" opacity="0.7" fontWeight="bold">BEM-VINDOS!</text>
        {/* Science atom drawing */}
        <circle cx="500" cy="110" r="16" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.6" />
        <ellipse cx="500" cy="110" rx="35" ry="12" stroke="#a7f3d0" strokeWidth="1" fill="none" opacity="0.6" transform="rotate(30, 500, 110)" />
        <ellipse cx="500" cy="110" rx="35" ry="12" stroke="#a7f3d0" strokeWidth="1" fill="none" opacity="0.6" transform="rotate(-30, 500, 110)" />
        <circle cx="500" cy="110" r="4" fill="#34d399" />
        
        {/* Educational Checklist/Formula */}
        <text x="240" y="110" fill="#a7f3d0" fontSize="11" fontFamily="sans-serif" opacity="0.6">E = mc²</text>
        <text x="240" y="135" fill="#a7f3d0" fontSize="11" fontFamily="sans-serif" opacity="0.6">H₂O + CO₂ → C₆H₁₂O₆ + O₂</text>
        
        {/* Owl outline drawing in chalk */}
        <ellipse cx="680" cy="110" rx="18" ry="22" stroke="#a7f3d0" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="673" cy="105" r="4" stroke="#a7f3d0" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="687" cy="105" r="4" stroke="#a7f3d0" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M678 122 Q680 126, 682 122" stroke="#a7f3d0" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* Classroom Floor */}
        <rect x="0" y="320" width="800" height="130" fill="#1e293b" />

        {/* DESK ROW / STUDENT SILHOUETTES raising hands in excitement */}
        <g id="students" opacity="0.85">
          {/* Back desks */}
          <rect x="450" y="380" width="350" height="70" fill="#0f172a" />
          
          {/* Happy Student 1 (raising hand) */}
          <path d="M510 450 C510 400, 560 390, 560 450 Z" fill="#334155" />
          <circle cx="535" cy="380" r="14" fill="#334155" />
          {/* Raised hand line */}
          <path d="M545 390 L570 345" stroke="#334155" strokeWidth="10" strokeLinecap="round" />

          {/* Happy Student 2 (raising hand) */}
          <path d="M650 450 C650 405, 700 395, 700 450 Z" fill="#1e293b" />
          <circle cx="675" cy="385" r="14" fill="#1e293b" />
          <path d="M665 390 L640 340" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
        </g>

        {/* Inspiring, Smiling Teacher */}
        <g id="teaching-teacher">
          {/* Torso - wearing smart blue shirt */}
          <path d="M300 450 C305 340, 435 345, 435 450 Z" fill="#1d4ed8" />
          {/* Tie */}
          <path d="M363 365 L372 365 L378 410 L368 415 L358 410 Z" fill="#facc15" />
          {/* Collar */}
          <path d="M348 355 L387 355 L395 368 L340 368 Z" fill="#ffffff" />

          {/* Neck */}
          <path d="M352 325 Q367 330, 383 325 L377 360 L358 360 Z" fill="#fed7aa" />

          {/* Head - smiling and energized */}
          <path d="M330 280 C330 240, 405 240, 405 280 C405 310, 385 330, 368 330 C350 330, 330 310, 330 280 Z" fill="#fed7aa" />
          {/* Hair */}
          <path d="M325 275 C325 235, 365 220, 400 235 C410 245, 412 270, 408 280 C398 275, 388 278, 382 270 C372 275, 358 270, 352 260 C342 265, 334 265, 325 275 Z" fill="#292524" />
          
          {/* Cheerful face */}
          <path d="M345 288 Q355 282, 362 285" stroke="#1c1917" strokeWidth="2" fill="none" />
          <path d="M372 285 Q382 282, 390 288" stroke="#1c1917" strokeWidth="2" fill="none" />
          
          {/* Open happy eyes */}
          <circle cx="352" cy="296" r="3" fill="#1c1917" />
          <circle cx="382" cy="296" r="3" fill="#1c1917" />
          
          {/* Big happy mouth! */}
          <path d="M352 310 Q367 325, 382 310 Z" fill="#e11d48" stroke="#1c1917" strokeWidth="1.5" />

          {/* Arm holding tablet pointing to class */}
          <path d="M310 410 Q260 380, 240 385" stroke="#1d4ed8" strokeWidth="24" strokeLinecap="round" fill="none" />
          {/* Tablet with the Owl logo on it! */}
          <rect x="210" y="360" width="35" height="50" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" transform="rotate(10, 227, 385)" />
          {/* Mini owl logo glowing cyan */}
          <circle cx="225" cy="385" r="8" fill="#06b6d4" transform="rotate(10, 227, 385)" />
        </g>
      </svg>
    </div>
  );
}
