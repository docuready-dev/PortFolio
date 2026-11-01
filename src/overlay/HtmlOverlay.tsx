import { useState } from 'react'
import { ContactDrawer } from './ContactDrawer'
import { usePortfolioStore } from '../store'
import ashleyPortrait from '../assets/ashley/ashley-portrait.webp'

export function HtmlOverlay() {
  const setActiveImage = usePortfolioStore((s) => s.setActiveImage)
  const [activeProjectTab, setActiveProjectTab] = useState<string>('learnready')
  const [activeFontTab, setActiveFontTab] = useState<string>('delight')
  const [activePaletteTab, setActivePaletteTab] = useState<string>('alabaster')
  const [copiedHex, setCopiedHex] = useState<string | null>(null)

  const handleCopyHex = (hex: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(hex).then(() => {
        setCopiedHex(hex)
        setTimeout(() => setCopiedHex(null), 2200)
      })
    }
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  const strovrScreenshots = [
    {
      id: 'dashboard',
      title: 'Strovr : Command Dashboard',
      subtitle: 'Real-time pipeline metrics, lead generation & outreach telemetry',
      src: `${base}/screenshots/strovr/01-dashboard-full.webp`,
    },
    {
      id: 'email-studio',
      title: 'Strovr : Email Studio & Template Builder',
      subtitle: 'Dynamic responsive email creation and automated campaign dispatch',
      src: `${base}/screenshots/strovr/01-outreach-email-studio.webp`,
    },
    {
      id: 'crm-kanban',
      title: 'Strovr : CRM Pipeline & Kanban Board',
      subtitle: 'Interactive lead staging, contact interaction sheets & deal tracking',
      src: `${base}/screenshots/strovr/06-crm-kanban-board.webp`,
    },
    {
      id: 'analytics',
      title: 'Strovr : Analytics & Performance Insights',
      subtitle: 'Deliverability analytics, click tracking & conversion metrics',
      src: `${base}/screenshots/strovr/01-analytics-overview.webp`,
    },
    {
      id: 'automations',
      title: 'Strovr : Automated Sequences & Workflows',
      subtitle: 'Event-driven multi-step outreach pipelines with SerpApi hooks',
      src: `${base}/screenshots/strovr/01-automations-workflows.webp`,
    },
    {
      id: 'integrations',
      title: 'Strovr : Integrations Hub',
      subtitle: 'Cloud webhooks, third-party CRM connectors & data pipes',
      src: `${base}/screenshots/strovr/01-integrations-hub-full.webp`,
    },
  ]

  const learnReadyScreenshots = [
    {
      id: 'lr-01',
      title: 'LearnReady : Platform Overview & Curriculum Gateway',
      subtitle: 'Dynamic course registration, assessment overview and student onboarding',
      src: `${base}/screenshots/learnready/screenshot-01-landing-page.webp`,
    },
    {
      id: 'lr-02',
      title: 'LearnReady : Student Registration & Cohort Staging',
      subtitle: 'User profile creation with academic level and institution routing',
      src: `${base}/screenshots/learnready/screenshot-02-landing-page-filled.webp`,
    },
    {
      id: 'lr-03',
      title: 'LearnReady : Verbal Reasoning Adaptive Assessment',
      subtitle: 'Real-time timed questions with instant comprehension telemetry',
      src: `${base}/screenshots/learnready/screenshot-03-exam-verbal-reasoning.webp`,
    },
    {
      id: 'lr-04',
      title: 'LearnReady : Numerical Reasoning & Problem Solving',
      subtitle: 'Algorithmic quantitative evaluations and real-time calculation tests',
      src: `${base}/screenshots/learnready/screenshot-04-exam-numerical-reasoning.webp`,
    },
    {
      id: 'lr-05',
      title: 'LearnReady : Spatial & Abstract Competency Engine',
      subtitle: 'Interactive geometric pattern recognition and mental rotation metrics',
      src: `${base}/screenshots/learnready/screenshot-05-exam-spatial-reasoning.webp`,
    },
    {
      id: 'lr-06',
      title: 'LearnReady : Occupational Interests Profiler',
      subtitle: 'Psychometric career alignment based on cognitive assessment performance',
      src: `${base}/screenshots/learnready/screenshot-06-exam-occupational-interests.webp`,
    },
    {
      id: 'lr-07',
      title: 'LearnReady : Assessment Verification & Submit Modal',
      subtitle: 'Integrity checking and response locking with zero-latency transmission',
      src: `${base}/screenshots/learnready/screenshot-07-exam-submit-dialog.webp`,
    },
    {
      id: 'lr-08',
      title: 'LearnReady : AI Career Stream Recommendations',
      subtitle: 'Top-stream suggestions with predicted aptitude and career pathways',
      src: `${base}/screenshots/learnready/screenshot-08-results-top-stream-recommendations.webp`,
    },
    {
      id: 'lr-09',
      title: 'LearnReady : Multi-Domain Competency Radar Breakdown',
      subtitle: 'Visual multi-axis breakdown across verbal, numerical and spatial domains',
      src: `${base}/screenshots/learnready/screenshot-09-results-radar-and-domains.webp`,
    },
    {
      id: 'lr-10',
      title: 'LearnReady : Cohort Percentile & Bell-Curve Analysis',
      subtitle: 'Comparative statistical distribution and class percentile ranking',
      src: `${base}/screenshots/learnready/screenshot-10-results-bellcurve-and-leaderboard.webp`,
    },
    {
      id: 'lr-11',
      title: 'LearnReady : Comprehensive Performance Dossier',
      subtitle: 'Complete student diagnostic summary with printable verified reporting',
      src: `${base}/screenshots/learnready/screenshot-11-results-full-report.webp`,
    },
    {
      id: 'lr-14',
      title: 'LearnReady : Institution & Admin Command Dashboard',
      subtitle: 'Cohort analytics, test scheduling, and multi-student performance monitoring',
      src: `${base}/screenshots/learnready/screenshot-14-admin-dashboard.webp`,
    },
    {
      id: 'lr-15',
      title: 'LearnReady : Filtered School Analytics & Data Export',
      subtitle: 'Granular drilldown by academic stream, score bands and demographic filters',
      src: `${base}/screenshots/learnready/screenshot-15-admin-dashboard-filtered.webp`,
    },
  ]

  const customAppsScreenshots = [
    {
      id: 'ca-01',
      title: 'Custom Apps : Flight Search & Discovery Engine',
      subtitle: 'Multi-city airfare comparison with real-time pricing and carrier filters',
      src: `${base}/screenshots/custom-apps/flights-search.webp`,
    },
    {
      id: 'ca-02',
      title: 'Custom Apps : Flight Detail & Seat Selection Flow',
      subtitle: 'Interactive cabin selection, baggage add-ons, and fare tiering',
      src: `${base}/screenshots/custom-apps/flight-detail-page.webp`,
    },
    {
      id: 'ca-03',
      title: 'Custom Apps : Global Hotel Discovery & Filter Grid',
      subtitle: 'Location-based property search grid with amenities and instant pricing',
      src: `${base}/screenshots/custom-apps/hotel-search.webp`,
    },
    {
      id: 'ca-04',
      title: 'Custom Apps : Luxury Property Showcase & Room Selector',
      subtitle: 'High-conversion visual room gallery with live availability ledger',
      src: `${base}/screenshots/custom-apps/hotel-listing.webp`,
    },
    {
      id: 'ca-05',
      title: 'Custom Apps : Reservation Confirmation & Booking Ledger',
      subtitle: 'Payment gateway integration, customer details, and invoice dispatch',
      src: `${base}/screenshots/custom-apps/booking-detail.webp`,
    },
    {
      id: 'ca-06',
      title: 'Custom Apps : AI Autonomous Workflow Studio',
      subtitle: 'Custom generative workflow automation and visual agent tooling',
      src: `${base}/screenshots/custom-apps/ai-tool-av.webp`,
    },
    {
      id: 'ca-07',
      title: 'Custom Apps : Generative AI Branding & Vector Identity',
      subtitle: 'Vectorized dynamic brand identity and custom generative design marks',
      src: `${base}/screenshots/custom-apps/ai-logo.webp`,
    },
  ]

  const projectsData = [
    {
      id: 'learnready',
      number: '01',
      title: 'LearnReady',
      discipline: 'EdTech & AI Evaluation Platform',
      category: 'Web Application & Assessment Engine',
      description:
        'A comprehensive educational web application I conceived and engineered, delivering structured interactive courses and real-time AI-generated assessments tailored to individual student mastery.',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Firebase', 'Algorithmic AI'],
      screenshots: learnReadyScreenshots,
    },
    {
      id: 'custom-apps',
      number: '02',
      title: 'Custom Web & Apps',
      discipline: 'Travel Suite & Generative AI Tools',
      category: 'Custom Engineering & Microservices',
      description:
        'Bespoke production platforms engineered for high-intent customer transactions, featuring multi-city flight discovery, global hotel booking engines, and autonomous AI workflow tooling.',
      stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'REST APIs'],
      screenshots: customAppsScreenshots,
    },
    {
      id: 'strovr',
      number: '03',
      title: 'Strovr',
      discipline: 'Growth Marketing & CRM Telemetry',
      category: 'B2B SaaS Platform',
      description:
        'An all-in-one growth platform featuring dynamic email marketing templates, automated lead extraction via SerpApi, and an intuitive customer relationship management workflow.',
      stack: ['React', 'Vite', 'Node.js', 'Express', 'Firebase', 'SerpApi'],
      screenshots: strovrScreenshots,
    },
  ]

  const currentProject = projectsData.find((p) => p.id === activeProjectTab) || projectsData[0]

  const fontSpecimens = [
    {
      id: 'delight',
      name: 'Delight',
      classification: 'Geometric Modern Sans',
      foundry: 'LeadPulse Core Identity',
      fontClass: 'font-delight',
      badge: 'Primary Brand Typeface',
      displayHeadline: 'Geometric clarity engineered for monumental and sub-pixel scale.',
      quote:
        'Delight bridges the razor-sharp precision of mid-century Swiss geometry with the warmth of humanist proportions. Every apex, counter, and terminal is optimized for effortless cadence across complex digital systems.',
      characterReel: 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789 & # $ € @ % ! ?',
      weights: ['Light (300)', 'Regular (400)', 'Medium (500)', 'SemiBold (600)', 'Bold (700)', 'Black (900)'],
      curatorNote:
        'My go-to cornerstone typeface. Its optical neutrality never competes with product content, while its subtle curved terminals bestow unmistakable bespoke warmth.',
      appliedIn: ['Ashley Ghose Portfolio', 'LeadPulse SaaS Suite', 'LearnReady Architecture'],
    },
    {
      id: 'mercado',
      name: 'Mercado',
      classification: 'Haute Couture Editorial Serif',
      foundry: 'Storytype Studio',
      fontClass: 'font-mercado',
      badge: 'High-Fashion Editorial Display',
      displayHeadline: 'Sculptural elegance born of vertical tension and razor-sharp contrast.',
      quote:
        'Mercado embodies the dramatic gravitas of Parisian luxury ateliers and bespoke horology volumes. Its dramatic thick-to-thin stroke transition and tapered bracketed hairlines turn solitary words into sculptural artifacts.',
      characterReel: 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789 & “ ” « » §',
      weights: ['Regular (400)', 'Medium (500)', 'Italic (400i)', 'Bold (700)'],
      curatorNote:
        'When a client brand demands uncompromising prestige, Mercado establishes an instant aura of heritage, luxury, and high-editorial confidence.',
      appliedIn: ['Luxury Identity Marques', 'Editorial Monographs', 'Prestige Title Cards'],
    },
    {
      id: 'creato',
      name: 'Creato Display',
      classification: 'Architectural Neogrotesk',
      foundry: 'Definite Precision Heritage',
      fontClass: 'font-creato',
      badge: 'Swiss Modernist Precision',
      displayHeadline: 'Mathematical order and tight mechanical cadence.',
      quote:
        'Creato Display strips away all superfluous ornament in pursuit of absolute structural truth. Designed with tight tracking, ink-traps, and rationalist geometry, it is the purest instrument for data-dense telemetry.',
      characterReel: '01 02 03 04 05 06 [SYSTEM READY] // COORD: 18.9220° N, 72.8347° E • LATENCY 0.12ms',
      weights: ['Thin (100)', 'Light (300)', 'Regular (400)', 'Medium (500)', 'Bold (700)', 'Black (900)'],
      curatorNote:
        'Indispensable for technical dashboards, spatial wayfinding, and micro-metric indices where information density must read with instant clarity.',
      appliedIn: ['Spatial Architecture & Wayfinding', 'Flight Booking Ledgers', 'Enterprise Analytics'],
    },
    {
      id: 'milligram',
      name: 'Milligram Macro',
      classification: 'Heavy Monolithic Display',
      foundry: 'Zetafonts Foundry',
      fontClass: 'font-milligram',
      badge: 'Monumental Physical Weight',
      displayHeadline: 'Monumental weight that commands physical and digital space.',
      quote:
        'Milligram Macro by Zetafonts reclaims the tactile power of 20th-century woodblock posters and architectural monoliths. Its dense letterforms lock together with sculptural tension, providing singular visual authority.',
      characterReel: 'MONOLITHIC SCALE • ARCHITECTURAL DISPLAY • HEAVY IMPACT 2026',
      weights: ['Regular (400)', 'Bold (700)', 'Heavy (900)'],
      curatorNote:
        'The ultimate accent for bold architectural wayfinding and spatial signage. It creates monumental visual anchors that demand attention.',
      appliedIn: ['Spatial Exhibition Totems', 'Architectural Banners', 'Hero Title Treatments'],
    },
    {
      id: 'cormorant',
      name: 'Cormorant Garamond',
      classification: 'Classic Literary Poise',
      foundry: 'Christian Thalmann & Claude Garamont Heritage',
      fontClass: 'font-cormorant',
      badge: 'Timeless Literary Poise',
      displayHeadline: 'The quiet, intellectual whisper of classical editorial proportions.',
      quote:
        'Derived from Claude Garamont’s 16th-century masterworks, Cormorant breathes traditional bookcraft into contemporary digital screens. Its fluid terminals, delicate ligatures, and graceful italic rhythm evoke timeless intellectual prestige.',
      characterReel: '“Design is not merely what it looks like and feels like. Design is how it works.” — Claude Garamont Tradition',
      weights: ['Light (300)', 'Regular (400)', 'Medium (500)', 'SemiBold (600)', 'Bold (700)'],
      curatorNote:
        'I weave Cormorant into long-form editorial essays, project manifestos, and artist colophons to give readers a pause of reflective literary calm.',
      appliedIn: ['Design Philosophy Essays', 'Artist Colophons', 'Architectural Monographs'],
    },
  ]

  const palettesData = [
    {
      id: 'alabaster',
      name: 'Warm Alabaster & Obsidian Ink',
      theme: 'Editorial Art Monograph',
      concept: 'Physical Japanese washi parchment, warm alabaster linen, and deep obsidian carbon ink. Timeless restraint with zero digital glare.',
      canvasBg: '#F4F3EF',
      cardBg: '#FFFFFF',
      textPrimary: '#111115',
      textMuted: '#686870',
      accentColor: '#D4AF37',
      accentLabel: 'Champagne Gold',
      swatches: [
        { name: 'Alabaster Canvas', hex: '#F4F3EF', role: 'Ambient Background' },
        { name: 'Obsidian Ink', hex: '#111115', role: 'Display Typography' },
        { name: 'Muted Slate', hex: '#686870', role: 'Secondary Metadata' },
        { name: 'Architectural Rule', hex: '#E8E6DF', role: 'Structural Dividers' },
        { name: 'Champagne Gold', hex: '#D4AF37', role: 'Bespoke Accent' },
      ],
    },
    {
      id: 'terracotta',
      name: 'Terracotta Solstice & Sandstone',
      theme: 'Organic Tactile Warmth',
      concept: 'Sun-baked Mediterranean earthenware, warm sandstone plaster, and rich espresso typography. Grounded human-first warmth.',
      canvasBg: '#F8F5F0',
      cardBg: '#FFFFFF',
      textPrimary: '#241E1C',
      textMuted: '#857469',
      accentColor: '#C05C35',
      accentLabel: 'Terracotta Sienna',
      swatches: [
        { name: 'Sandstone Silk', hex: '#F8F5F0', role: 'Ambient Background' },
        { name: 'Terracotta Sienna', hex: '#C05C35', role: 'Focal Accent' },
        { name: 'Deep Espresso', hex: '#241E1C', role: 'Primary Typography' },
        { name: 'Warm Greige', hex: '#857469', role: 'Secondary Metadata' },
        { name: 'Raw Linen', hex: '#E2D7C8', role: 'Divider & Borders' },
      ],
    },
    {
      id: 'prismatic',
      name: 'Prismatic Dichroic & Cyan',
      theme: 'Spatial Refraction & Optics',
      concept: 'Kinetic optical glass, daylight prism raytracing, and high-frequency luminescence over obsidian void.',
      canvasBg: '#0D1117',
      cardBg: '#161B22',
      textPrimary: '#F4F5F8',
      textMuted: '#8B949E',
      accentColor: '#38E1FF',
      accentLabel: 'Prismatic Cyan',
      swatches: [
        { name: 'Cosmic Obsidian', hex: '#0D1117', role: 'Ambient Void' },
        { name: 'Prismatic Cyan', hex: '#38E1FF', role: 'Optical Refraction' },
        { name: 'Dichroic Violet', hex: '#8B5CF6', role: 'Chromatic Shift' },
        { name: 'Starlight Glaze', hex: '#F4F5F8', role: 'Display Typography' },
        { name: 'Sub-pixel Slate', hex: '#8B949E', role: 'Telemetry Metadata' },
      ],
    },
    {
      id: 'sage',
      name: 'Forest Sage & Raw Silk',
      theme: 'Botanical Architectural Poise',
      concept: 'Alpine evergreen forests, misty eucalyptus, and raw undyed silk. Serene architectural sanctuary for conscious digital experiences.',
      canvasBg: '#F3F5F2',
      cardBg: '#FFFFFF',
      textPrimary: '#19241E',
      textMuted: '#5A7A68',
      accentColor: '#2E4F3E',
      accentLabel: 'Alpine Cypress',
      swatches: [
        { name: 'Raw Silk Canvas', hex: '#F3F5F2', role: 'Ambient Background' },
        { name: 'Alpine Cypress', hex: '#2E4F3E', role: 'Primary Anchor' },
        { name: 'Misty Eucalyptus', hex: '#5A7A68', role: 'Secondary Tone' },
        { name: 'Deep Spruce', hex: '#19241E', role: 'Sharp Typography' },
        { name: 'Lichen Neutral', hex: '#DDE4DC', role: 'Borders & Rules' },
      ],
    },
  ]

  const currentFont = fontSpecimens.find((f) => f.id === activeFontTab) || fontSpecimens[0]
  const currentPalette = palettesData.find((p) => p.id === activePaletteTab) || palettesData[0]

  const handleJump = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const lenis = (window as any).__LENIS__
    if (lenis) {
      lenis.scrollTo(el, { offset: -30, duration: 1.2 })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full text-left font-sans text-[#111115]">
      {/* ============================================================ */}
      {/* SECTION 1: HERO / INTRO (BACKGROUND IMAGE + FOREGROUND TEXT)  */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="min-h-screen w-full relative flex flex-col justify-center pt-28 sm:pt-36 md:pt-40 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden text-right"
      >
        {/* Full Hero Background Image & Readability Scrims */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Hero Background Photo */}
          <img
            src={ashleyPortrait}
            alt="Ashley Ajoy Ghose"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-top sm:object-[15%_center] lg:object-[20%_center]"
          />

          {/* Base Readability Scrim: Soft ambient wash ensuring mobile legibility while preserving punch on desktop */}
          <div className="absolute inset-0 bg-[#F4F3EF]/65 sm:bg-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-[#F4F3EF]/85 sm:to-[#F4F3EF]/98" />

          {/* Selective backdrop blur on the right side to dissolve background illustrations & text */}
          <div className="absolute inset-y-0 right-0 w-full sm:w-3/4 lg:w-3/5 backdrop-blur-sm sm:backdrop-blur-md bg-gradient-to-r from-transparent via-[#F4F3EF]/50 to-[#F4F3EF]/95" />

          {/* Top subtle blend for floating navbar */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F4F3EF]/85 via-[#F4F3EF]/40 to-transparent" />

          {/* Bottom smooth dissolve into Section 2 (#approach) */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#F4F3EF] via-[#F4F3EF]/90 to-transparent" />
        </div>

        {/* Foreground Content: Exclusively Right-Aligned & High Contrast */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-end text-right">
          <div className="flex flex-col items-end text-right w-full lg:max-w-2xl xl:max-w-3xl ml-auto">
            {/* Simple Identity Line */}
            <div className="mb-6 text-xs sm:text-sm font-mono tracking-wider uppercase opacity-70 flex flex-wrap items-center justify-end gap-x-2">
              <span className="font-semibold">Ashley Ajoy Ghose</span>
              <span>&bull;</span>
              <span className="font-devanagari font-bold text-sm">ॲशले घोष</span>
              <span>&bull;</span>
              <span>Mumbai, India</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.98] mb-8 text-right max-w-4xl text-[#111115]">
              Code, craft, and digital architecture.
            </h1>

            {/* Bio Introduction */}
            <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed opacity-95 mb-10 max-w-2xl text-right text-[#111115]">
              I am <strong className="font-semibold text-current">Ashley Ajoy Ghose</strong>, a
              multidisciplinary developer and designer based out of Mumbai. I build
              high-impact graphic web designs and robust mobile applications that bridge raw
              technical engineering with striking visual identity.
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center justify-end gap-4 mb-16">
              <button
                onClick={() => handleJump('works')}
                className="px-8 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase bg-[#111115] text-[#F4F3EF] hover:opacity-90 transition-opacity cursor-pointer shadow-md shadow-black/10"
              >
                Explore My Works
              </button>
              <button
                onClick={() => handleJump('contact')}
                className="px-8 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase bg-black/5 text-[#111115] border border-black/15 hover:bg-black/10 transition-colors cursor-pointer backdrop-blur-sm"
              >
                Get in Touch
              </button>
            </div>

            {/* Editorial Information Columns: Right-Aligned */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-black/15 font-mono text-xs w-full max-w-2xl text-right">
              <div>
                <div className="text-[10px] uppercase tracking-wider opacity-60 mb-1">Specialization</div>
                <div className="font-semibold text-sm">Graphic Web &bull; Mobile Apps</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider opacity-60 mb-1">Core Stack</div>
                <div className="font-semibold text-sm">React &bull; Node.js &bull; TypeScript</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider opacity-60 mb-1">Availability</div>
                <div className="font-semibold text-sm">Open for Projects &bull; 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: ABOUT & CRAFT                                      */}
      {/* ============================================================ */}
      <section
        id="approach"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          01. About Me & Craft
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
          The Approach.
        </h2>

        <p className="text-xl sm:text-3xl font-light leading-relaxed max-w-4xl opacity-90 mb-6">
          Focused purely on high-impact graphic web design and mobile-grade app development.
          Bridging the gap between aesthetic visual design and robust engineering.
        </p>

        <p className="text-base sm:text-lg opacity-75 leading-relaxed max-w-3xl mb-16">
          I view design and code as two complementary halves of the same creative craft.
          Too often, visually striking designs lack engineering depth, or technically solid
          applications feel clunky and uninspired. My approach is combining Swiss typographic
          discipline, tactile micro-interactions, and scalable cloud architectures so every
          product feels memorable, fast, and effortless to use.
        </p>

        {/* Three Editorial Columns - No card outlines/frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8 border-t border-current/15">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-2">01</div>
            <h3 className="text-xl font-bold mb-3">Design Systems</h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Designing bespoke visual systems in Figma and Adobe Illustrator. Precise typographic scales, cohesive color palettes, and component modularity.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-2">02</div>
            <h3 className="text-xl font-bold mb-3">Frontend Engineering</h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Translating ideas into fluid web applications using React, Vite, Tailwind CSS, and TypeScript with fast sub-100ms interactions.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-2">03</div>
            <h3 className="text-xl font-bold mb-3">Backend & Cloud</h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Building dependable architectures with Node.js, Express, Firebase Firestore, and MongoDB Atlas for real-time synchronization.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: PLANNING, ARCHITECTURE & EXECUTION                  */}
      {/* ============================================================ */}
      <section
        id="execution"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          02. Strategic Delivery & Architecture
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Planning & Execution.
        </h2>

        <p className="text-xl sm:text-3xl font-light leading-relaxed max-w-4xl opacity-90 mb-6">
          A disciplined, production-tested delivery framework turning ambitious concepts into robust, beautifully engineered digital realities.
        </p>

        <p className="text-base sm:text-lg opacity-75 leading-relaxed max-w-3xl mb-16 font-light">
          I do not believe in fragmented handoffs between design and engineering. Every platform I construct follows a tightly coupled roadmap where system architecture, UX micro-interactions, database performance, and brand aesthetics evolve concurrently from day one.
        </p>

        {/* 4-Step Strategic Execution Roadmap - Editorial Frameless Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 border-t border-current/15 mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-2">
              Phase 01
            </div>
            <h3 className="text-xl font-bold mb-3">Discovery & Architecture</h3>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              Mapping data entities, API telemetry, user intent flows, and state machines before a single line of client UI is written.
            </p>
            <div className="text-xs font-mono opacity-60">
              System Schemas &bull; Wireframe Blueprinting &bull; Stack Selection
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-2">
              Phase 02
            </div>
            <h3 className="text-xl font-bold mb-3">Design System & Type</h3>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              Establishing rigorous typographic scales in Delight & Mercado, tactile spatial proportions, and cohesive light/dark color harmonics.
            </p>
            <div className="text-xs font-mono opacity-60">
              Figma Systems &bull; Micro-interactions &bull; Accessibility
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-2">
              Phase 03
            </div>
            <h3 className="text-xl font-bold mb-3">Full-Stack Build</h3>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              Translating blueprints into high-speed React / Vite frontends backed by Node.js, Express, Firebase Firestore, and resilient REST microservices.
            </p>
            <div className="text-xs font-mono opacity-60">
              Sub-100ms Telemetry &bull; Real-Time Data &bull; Clean Code
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-2">
              Phase 04
            </div>
            <h3 className="text-xl font-bold mb-3">Rigorous QA & Launch</h3>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              Multi-device touch ergonomics, Lighthouse asset minification, zero-downtime deployment pipelines, and continuous telemetry monitoring.
            </p>
            <div className="text-xs font-mono opacity-60">
              60 FPS Optimization &bull; CI/CD Pipelines &bull; Production Scale
            </div>
          </div>
        </div>

        {/* Ashley's Execution Principles - Frameless Minimalist Specimen */}
        <div className="pt-10 border-t border-current/15">
          <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-6">
            Guiding Execution Principles
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="border-l-2 border-black/20 pl-5">
              <h4 className="text-lg font-bold mb-1">Zero Overhead & Pure Signal</h4>
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed">
                No unnecessary dependencies, no boilerplate cruft. Every component and utility has a measurable functional and aesthetic purpose.
              </p>
            </div>
            <div className="border-l-2 border-black/20 pl-5">
              <h4 className="text-lg font-bold mb-1">Tactile Sub-100ms Latency</h4>
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed">
                Micro-interactions, state updates, and page transitions must feel immediate, tactile, and physically responsive to human touch.
              </p>
            </div>
            <div className="border-l-2 border-black/20 pl-5">
              <h4 className="text-lg font-bold mb-1">End-to-End Ownership</h4>
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed">
                From initial whiteboard concept to production cloud cluster, I maintain singular responsibility over both design fidelity and code integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: MOBILE & APP CRAFT                                 */}
      {/* ============================================================ */}
      <section
        id="apps"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          03. Mobile Architecture
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Fluid Mobile & Custom Apps.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-16">
          When developing mobile applications and custom web solutions, I prioritize tactile interaction. Inertial touch physics, offline resilience, and fluid 60 FPS transitions make software feel alive.
        </p>

        {/* 4 Pillars - Clean typography without frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-current/15">
          <div>
            <div className="text-2xl font-bold font-mono mb-2">60 FPS</div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2">Gesture Physics</div>
            <p className="text-xs opacity-75 leading-relaxed">
              Inertial touch handling and fluid spring micro-interactions tailored for mobile ergonomics.
            </p>
          </div>

          <div>
            <div className="text-2xl font-bold font-mono mb-2">Offline First</div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2">Resilient Sync</div>
            <p className="text-xs opacity-75 leading-relaxed">
              Local cache persistence backed by cloud Firestore and MongoDB Atlas clusters.
            </p>
          </div>

          <div>
            <div className="text-2xl font-bold font-mono mb-2">Responsive</div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2">Adaptive Grid</div>
            <p className="text-xs opacity-75 leading-relaxed">
              Engineered seamlessly from 320px handheld displays to ultrawide desktop monitors.
            </p>
          </div>

          <div>
            <div className="text-2xl font-bold font-mono mb-2">Bespoke UI</div>
            <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2">Visual Hierarchy</div>
            <p className="text-xs opacity-75 leading-relaxed">
              Tailored visual identities, strict typographic scales, and high contrast.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: SELECTED PROJECTS & INTERACTIVE GALLERIES          */}
      {/* ============================================================ */}
      <section
        id="works"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          04. Selected Works & System Galleries
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
          Selected Projects.
        </h2>
        <p className="text-base sm:text-xl opacity-75 max-w-3xl mb-12 font-medium">
          Interactive galleries of bespoke products, platforms, and spatial systems I have designed and engineered.
        </p>

        {/* Interactive Project Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-6 border-b border-current/15">
          {projectsData.map((project) => {
            const isActive = activeProjectTab === project.id
            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectTab(project.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#111115] text-[#F4F3EF] shadow-md shadow-black/10'
                    : 'bg-black/5 text-[#111115] hover:bg-black/10 border border-black/10'
                }`}
              >
                {project.title} <span className="opacity-60 ml-1">({project.screenshots.length})</span>
              </button>
            )
          })}
        </div>

        {/* Active Project Dossier */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-1">
                {currentProject.number} &bull; {currentProject.discipline}
              </div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
                {currentProject.title}
              </h3>
            </div>
            <div className="text-xs font-mono opacity-70 flex flex-wrap gap-2">
              {currentProject.stack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-black/5 border border-black/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <p className="text-base sm:text-lg opacity-85 max-w-4xl leading-relaxed mb-6 font-light">
            {currentProject.description}
          </p>
          <div className="text-xs font-mono uppercase tracking-wider opacity-50 flex items-center gap-2">
            <span>Interactive Gallery</span>
            <span>&bull;</span>
            <span>Click any screenshot to inspect full view</span>
            <span>↗</span>
          </div>
        </div>

        {/* Gallery Grid for Active Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {currentProject.screenshots.map((shot) => (
            <div
              key={shot.id}
              onClick={() => setActiveImage(shot)}
              className="group cursor-zoom-in text-left transition-opacity hover:opacity-95"
            >
              <div className="overflow-hidden rounded-xl bg-black/10 aspect-video mb-3 shadow-md shadow-black/5 border border-black/5">
                <img
                  src={shot.src}
                  alt={shot.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="text-sm sm:text-base font-bold group-hover:underline transition-all">
                {shot.title}
              </h4>
              <p className="text-xs opacity-70 mt-1 leading-relaxed">
                {shot.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Complete Project Archive Directory */}
        <div className="pt-8 border-t border-current/15">
          <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-6">
            Project Directory &bull; Click any entry to inspect its gallery
          </div>
          <div className="divide-y divide-current/15 border-t border-b border-current/15">
            {projectsData.map((project) => {
              const isActive = activeProjectTab === project.id
              return (
                <div
                  key={project.id}
                  onClick={() => {
                    setActiveProjectTab(project.id)
                    const el = document.getElementById('works')
                    if (el) {
                      const lenis = (window as any).__LENIS__
                      if (lenis) lenis.scrollTo(el, { offset: -30, duration: 1.0 })
                      else el.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className={`py-6 sm:py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group cursor-pointer transition-colors ${
                    isActive ? 'opacity-100 font-semibold' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="md:w-5/12">
                    <span className="text-xs font-mono opacity-50 mr-4">{project.number}</span>
                    <h4 className="text-xl sm:text-2xl font-bold inline group-hover:underline">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm opacity-70 mt-1">
                      {project.discipline}
                    </p>
                  </div>
                  <div className="text-xs font-mono opacity-60 md:w-4/12">
                    {project.stack.join(' • ')}
                  </div>
                  <div className="text-xs font-mono text-right md:w-3/12 uppercase tracking-wider opacity-80 group-hover:underline">
                    {isActive ? '● Currently Active' : `View ${project.screenshots.length} Screens ↗`}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: CREATIVE DIRECTION, PALETTES & TYPOGRAPHY          */}
      {/* ============================================================ */}
      <section
        id="aesthetics"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          05. Creative Direction, Palettes & Typography
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          The Art of Modern Chromatics & Exquisite Type.
        </h2>

        <p className="text-xl sm:text-3xl font-light leading-relaxed max-w-4xl opacity-90 mb-6">
          I hold a deep reverence for visual atmosphere. Code gives digital platforms their heartbeat, but typography and color give them emotional authority.
        </p>

        <p className="text-base sm:text-lg opacity-75 leading-relaxed max-w-3xl mb-16 font-light">
          When curating fonts and composing chromatic palettes, I never settle for default system stacks or cold SaaS boilerplates. I obsess over the tactile dialogue between geometric sans-serifs, high-fashion display serifs, and quiet, deliberate color undertones that evoke immediate visceral trust and utter premiumness.
        </p>

        {/* ------------------------------------------------------------ */}
        {/* SUBSECTION A: EXQUISITE FONTS SHOWCASE                        */}
        {/* ------------------------------------------------------------ */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-current/15 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider opacity-60 block mb-1">
                Specimen Collection
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Exquisite Typefaces & Anatomical Character.
              </h3>
            </div>
            <div className="text-xs font-mono opacity-50 uppercase tracking-wider">
              Select any typeface to inspect live specimen
            </div>
          </div>

          {/* Typeface Switcher Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-6 border-b border-current/15">
            {fontSpecimens.map((font) => {
              const isActive = activeFontTab === font.id
              return (
                <button
                  key={font.id}
                  onClick={() => setActiveFontTab(font.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111115] text-[#F4F3EF] shadow-md shadow-black/10'
                      : 'bg-black/5 text-[#111115] hover:bg-black/10 border border-black/10'
                  }`}
                >
                  {font.name} <span className="opacity-60 ml-1">({font.classification.split(' ')[0]})</span>
                </button>
              )
            })}
          </div>

          {/* Active Typeface Specimen Stage */}
          <div className="space-y-10">
            {/* Header: Name, Classification, Weights */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-current/10">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2">
                  {currentFont.classification} &bull; {currentFont.foundry}
                </div>
                <div className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight ${currentFont.fontClass}`}>
                  {currentFont.name}
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider opacity-50">
                  Available Weights
                </span>
                <div className="flex flex-wrap gap-1.5 justify-start lg:justify-end">
                  {currentFont.weights.map((w) => (
                    <span
                      key={w}
                      className="px-2.5 py-1 rounded bg-black/5 text-[11px] font-mono opacity-80"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Monumental Display Headline Specimen */}
            <div className="py-6">
              <span className="text-[11px] font-mono uppercase tracking-wider opacity-50 block mb-3">
                Live Display Specimen
              </span>
              <p
                className={`text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#111115] ${currentFont.fontClass}`}
              >
                {currentFont.displayHeadline}
              </p>
            </div>

            {/* Editorial Body Quote & Curator Note */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-current/10">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider opacity-50 block mb-2">
                  Anatomical Essence & Rhythm
                </span>
                <p className="text-base sm:text-lg opacity-85 leading-relaxed font-light">
                  {currentFont.quote}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider opacity-50 block mb-2">
                  Why I Curate This Typeface
                </span>
                <p className="text-base sm:text-lg opacity-85 leading-relaxed font-light mb-4">
                  {currentFont.curatorNote}
                </p>
                <div className="text-xs font-mono opacity-60">
                  <span className="opacity-50">Applied in:</span> {currentFont.appliedIn.join(' • ')}
                </div>
              </div>
            </div>

            {/* Character Set & Glyph Reel */}
            <div className="p-6 sm:p-8 rounded-2xl bg-black/[0.03] border border-black/10">
              <div className="text-[11px] font-mono uppercase tracking-wider opacity-50 mb-3">
                Glyph & Character Set
              </div>
              <div
                className={`text-lg sm:text-2xl tracking-widest break-words leading-loose opacity-90 ${currentFont.fontClass}`}
              >
                {currentFont.characterReel}
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* SUBSECTION B: MODERN ELEGANT COLOR PALETTES                   */}
        {/* ------------------------------------------------------------ */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-current/15 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider opacity-60 block mb-1">
                Atmospheric Chromatics
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Curated Palettes for Modern Elegance.
              </h3>
            </div>
            <div className="text-xs font-mono opacity-50 uppercase tracking-wider">
              Click any swatch to copy HEX code &bull; Preview updates live
            </div>
          </div>

          {/* Palette Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-6 border-b border-current/15">
            {palettesData.map((pal) => {
              const isActive = activePaletteTab === pal.id
              return (
                <button
                  key={pal.id}
                  onClick={() => setActivePaletteTab(pal.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111115] text-[#F4F3EF] shadow-md shadow-black/10'
                      : 'bg-black/5 text-[#111115] hover:bg-black/10 border border-black/10'
                  }`}
                >
                  {pal.name}
                </button>
              )
            })}
          </div>

          {/* Palette Details & Swatches */}
          <div className="space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider opacity-60 block mb-1">
                  Palette Inspiration: {currentPalette.theme}
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-[#111115]">
                  {currentPalette.name}
                </h4>
              </div>
              <p className="text-sm sm:text-base opacity-75 max-w-xl font-light leading-relaxed">
                {currentPalette.concept}
              </p>
            </div>

            {/* Swatch Strip with Click-to-Copy */}
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="uppercase tracking-wider opacity-50">Chromatic Swatches (5 Tones)</span>
                {copiedHex && (
                  <span className="text-emerald-700 font-bold uppercase tracking-wider">
                    Copied {copiedHex} to clipboard! ✓
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {currentPalette.swatches.map((swatch) => (
                  <div
                    key={swatch.hex}
                    onClick={() => handleCopyHex(swatch.hex)}
                    className="group cursor-pointer p-4 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-md transition-all text-left"
                  >
                    <div
                      className="w-full h-24 rounded-xl mb-3 shadow-inner border border-black/5 transition-transform group-hover:scale-[1.02]"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="text-xs font-bold font-mono text-[#111115] flex items-center justify-between">
                      <span>{swatch.hex}</span>
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 uppercase tracking-wider transition-opacity text-emerald-700 font-semibold">
                        Copy
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#111115] mt-1">
                      {swatch.name}
                    </div>
                    <div className="text-[11px] font-mono opacity-55 mt-0.5">
                      {swatch.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Interactive Specimen Harmony Canvas */}
            <div
              className="p-8 sm:p-12 rounded-3xl transition-colors duration-500 border shadow-lg"
              style={{
                backgroundColor: currentPalette.canvasBg,
                borderColor: currentPalette.swatches[3]?.hex || '#E8E6DF',
                color: currentPalette.textPrimary,
              }}
            >
              <div className="flex items-center justify-between pb-6 mb-8 border-b" style={{ borderColor: currentPalette.swatches[3]?.hex || '#E8E6DF' }}>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: currentPalette.accentColor }}
                  />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold opacity-80">
                    Live Palette Harmonics &bull; {currentPalette.name}
                  </span>
                </div>
                <div className="text-[11px] font-mono opacity-60 uppercase tracking-wider">
                  WCAG AAA Contrast
                </div>
              </div>

              <div className="max-w-3xl space-y-6">
                <div
                  className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: currentPalette.swatches[3]?.hex || '#E8E6DF',
                    color: currentPalette.textPrimary,
                  }}
                >
                  {currentPalette.theme} Specimen
                </div>

                <h5
                  className="text-3xl sm:text-5xl font-black tracking-tight leading-tight"
                  style={{ color: currentPalette.textPrimary }}
                >
                  Atmosphere, contrast, and quiet tactile authority.
                </h5>

                <p
                  className="text-base sm:text-lg font-light leading-relaxed max-w-2xl"
                  style={{ color: currentPalette.textMuted }}
                >
                  This harmonic spectrum unites deep legibility with bespoke elegance. Every button, heading, and hairline divider is tuned to feel effortless, memorable, and authentically human.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <div
                    className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider shadow-sm"
                    style={{
                      backgroundColor: currentPalette.accentColor,
                      color: currentPalette.id === 'prismatic' ? '#0B0C10' : '#FFFFFF',
                    }}
                  >
                    {currentPalette.accentLabel} Accent
                  </div>

                  <div
                    className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border"
                    style={{
                      borderColor: currentPalette.textPrimary,
                      color: currentPalette.textPrimary,
                    }}
                  >
                    Secondary Control
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: CONTACT & CONNECT                                 */}
      {/* ============================================================ */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          06. Direct Engagement & Enquiry
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Start a Conversation.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          Whether you have a new venture in mind, need a bespoke web platform designed and built, or are looking to collaborate on high-impact digital experiences, dispatch your enquiry directly below.
        </p>

        {/* Contact Drawer without card outlines */}
        <div className="w-full mb-16">
          <ContactDrawer />
        </div>

        {/* Personal Colophon Footer */}
        <footer className="pt-8 border-t border-current/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono opacity-70">
          <div>
            &copy; {new Date().getFullYear()} ASHLEY AJOY GHOSE &bull; ॲशले घोष &bull; MUMBAI, INDIA
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:ashleyghose64@gmail.com"
              className="hover:underline"
            >
              ashleyghose64@gmail.com
            </a>
            <span>&bull;</span>
            <a
              href="https://wa.me/919004804043"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp (+91 90048 04043) ↗
            </a>
            <span>&bull;</span>
            <a
              href="https://github.com/docuready-dev"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              github.com/docuready-dev ↗
            </a>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default HtmlOverlay
