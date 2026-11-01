import { useState } from 'react'
import { ContactDrawer } from './ContactDrawer'
import { usePortfolioStore } from '../store'
import ashleyPortrait from '../assets/ashley/ashley-portrait.jpg'

export function HtmlOverlay() {
  const setActiveImage = usePortfolioStore((s) => s.setActiveImage)
  const [activeProjectTab, setActiveProjectTab] = useState<string>('learnready')

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  const strovrScreenshots = [
    {
      id: 'dashboard',
      title: 'Strovr : Command Dashboard',
      subtitle: 'Real-time pipeline metrics, lead generation & outreach telemetry',
      src: `${base}/screenshots/strovr/01-dashboard-full.png`,
    },
    {
      id: 'email-studio',
      title: 'Strovr : Email Studio & Template Builder',
      subtitle: 'Dynamic responsive email creation and automated campaign dispatch',
      src: `${base}/screenshots/strovr/01-outreach-email-studio.png`,
    },
    {
      id: 'crm-kanban',
      title: 'Strovr : CRM Pipeline & Kanban Board',
      subtitle: 'Interactive lead staging, contact interaction sheets & deal tracking',
      src: `${base}/screenshots/strovr/06-crm-kanban-board.png`,
    },
    {
      id: 'analytics',
      title: 'Strovr : Analytics & Performance Insights',
      subtitle: 'Deliverability analytics, click tracking & conversion metrics',
      src: `${base}/screenshots/strovr/01-analytics-overview.png`,
    },
    {
      id: 'automations',
      title: 'Strovr : Automated Sequences & Workflows',
      subtitle: 'Event-driven multi-step outreach pipelines with SerpApi hooks',
      src: `${base}/screenshots/strovr/01-automations-workflows.png`,
    },
    {
      id: 'integrations',
      title: 'Strovr : Integrations Hub',
      subtitle: 'Cloud webhooks, third-party CRM connectors & data pipes',
      src: `${base}/screenshots/strovr/01-integrations-hub-full.png`,
    },
  ]

  const learnReadyScreenshots = [
    {
      id: 'lr-01',
      title: 'LearnReady : Platform Overview & Curriculum Gateway',
      subtitle: 'Dynamic course registration, assessment overview and student onboarding',
      src: `${base}/screenshots/learnready/screenshot-01-landing-page.png`,
    },
    {
      id: 'lr-02',
      title: 'LearnReady : Student Registration & Cohort Staging',
      subtitle: 'User profile creation with academic level and institution routing',
      src: `${base}/screenshots/learnready/screenshot-02-landing-page-filled.png`,
    },
    {
      id: 'lr-03',
      title: 'LearnReady : Verbal Reasoning Adaptive Assessment',
      subtitle: 'Real-time timed questions with instant comprehension telemetry',
      src: `${base}/screenshots/learnready/screenshot-03-exam-verbal-reasoning.png`,
    },
    {
      id: 'lr-04',
      title: 'LearnReady : Numerical Reasoning & Problem Solving',
      subtitle: 'Algorithmic quantitative evaluations and real-time calculation tests',
      src: `${base}/screenshots/learnready/screenshot-04-exam-numerical-reasoning.png`,
    },
    {
      id: 'lr-05',
      title: 'LearnReady : Spatial & Abstract Competency Engine',
      subtitle: 'Interactive geometric pattern recognition and mental rotation metrics',
      src: `${base}/screenshots/learnready/screenshot-05-exam-spatial-reasoning.png`,
    },
    {
      id: 'lr-06',
      title: 'LearnReady : Occupational Interests Profiler',
      subtitle: 'Psychometric career alignment based on cognitive assessment performance',
      src: `${base}/screenshots/learnready/screenshot-06-exam-occupational-interests.png`,
    },
    {
      id: 'lr-07',
      title: 'LearnReady : Assessment Verification & Submit Modal',
      subtitle: 'Integrity checking and response locking with zero-latency transmission',
      src: `${base}/screenshots/learnready/screenshot-07-exam-submit-dialog.png`,
    },
    {
      id: 'lr-08',
      title: 'LearnReady : AI Career Stream Recommendations',
      subtitle: 'Top-stream suggestions with predicted aptitude and career pathways',
      src: `${base}/screenshots/learnready/screenshot-08-results-top-stream-recommendations.png`,
    },
    {
      id: 'lr-09',
      title: 'LearnReady : Multi-Domain Competency Radar Breakdown',
      subtitle: 'Visual multi-axis breakdown across verbal, numerical and spatial domains',
      src: `${base}/screenshots/learnready/screenshot-09-results-radar-and-domains.png`,
    },
    {
      id: 'lr-10',
      title: 'LearnReady : Cohort Percentile & Bell-Curve Analysis',
      subtitle: 'Comparative statistical distribution and class percentile ranking',
      src: `${base}/screenshots/learnready/screenshot-10-results-bellcurve-and-leaderboard.png`,
    },
    {
      id: 'lr-11',
      title: 'LearnReady : Comprehensive Performance Dossier',
      subtitle: 'Complete student diagnostic summary with printable verified reporting',
      src: `${base}/screenshots/learnready/screenshot-11-results-full-report.png`,
    },
    {
      id: 'lr-14',
      title: 'LearnReady : Institution & Admin Command Dashboard',
      subtitle: 'Cohort analytics, test scheduling, and multi-student performance monitoring',
      src: `${base}/screenshots/learnready/screenshot-14-admin-dashboard.png`,
    },
    {
      id: 'lr-15',
      title: 'LearnReady : Filtered School Analytics & Data Export',
      subtitle: 'Granular drilldown by academic stream, score bands and demographic filters',
      src: `${base}/screenshots/learnready/screenshot-15-admin-dashboard-filtered.png`,
    },
  ]

  const customAppsScreenshots = [
    {
      id: 'ca-01',
      title: 'Custom Apps : Flight Search & Discovery Engine',
      subtitle: 'Multi-city airfare comparison with real-time pricing and carrier filters',
      src: `${base}/screenshots/custom-apps/flights-search.png`,
    },
    {
      id: 'ca-02',
      title: 'Custom Apps : Flight Detail & Seat Selection Flow',
      subtitle: 'Interactive cabin selection, baggage add-ons, and fare tiering',
      src: `${base}/screenshots/custom-apps/flight-detail-page.png`,
    },
    {
      id: 'ca-03',
      title: 'Custom Apps : Global Hotel Discovery & Filter Grid',
      subtitle: 'Location-based property search grid with amenities and instant pricing',
      src: `${base}/screenshots/custom-apps/hotel-search.png`,
    },
    {
      id: 'ca-04',
      title: 'Custom Apps : Luxury Property Showcase & Room Selector',
      subtitle: 'High-conversion visual room gallery with live availability ledger',
      src: `${base}/screenshots/custom-apps/hotel-listing.png`,
    },
    {
      id: 'ca-05',
      title: 'Custom Apps : Reservation Confirmation & Booking Ledger',
      subtitle: 'Payment gateway integration, customer details, and invoice dispatch',
      src: `${base}/screenshots/custom-apps/booking-detail.png`,
    },
    {
      id: 'ca-06',
      title: 'Custom Apps : AI Autonomous Workflow Studio',
      subtitle: 'Custom generative workflow automation and visual agent tooling',
      src: `${base}/screenshots/custom-apps/ai-tool-av.png`,
    },
    {
      id: 'ca-07',
      title: 'Custom Apps : Generative AI Branding & Vector Identity',
      subtitle: 'Vectorized dynamic brand identity and custom generative design marks',
      src: `${base}/screenshots/custom-apps/ai-logo.png`,
    },
  ]

  const kromaScreenshots = [
    {
      id: 'kr-01',
      title: 'Kroma Spatial : Refractive Dichroic Glass Pavilions',
      subtitle: 'Kinetic light dispersion, optical glass totems & museum exterior system',
      src: `${base}/screenshots/kroma/kroma-01-dichroic-facade.jpg`,
    },
    {
      id: 'kr-02',
      title: 'Kroma Spatial : Prismatic Light Dispersion & Wayfinding',
      subtitle: 'Micro-etched typographic acrylics with daylight-responsive spectral shifting',
      src: `${base}/screenshots/kroma/kroma-02-prismatic-refraction.jpg`,
    },
    {
      id: 'kr-03',
      title: 'Kroma Spatial : Basel Museum Exhibition Hall Installation',
      subtitle: 'Spatial wayfinding system with architectural color spectrums & environmental grids',
      src: `${base}/screenshots/kroma/kroma-03-chromatic-spatial-gallery.jpg`,
    },
    {
      id: 'kr-04',
      title: 'Kroma Spatial : Geometric Glass Typology & Monoliths',
      subtitle: 'Photometric raytraced glass monoliths with Swiss-style bilingual typography',
      src: `${base}/screenshots/kroma/kroma-04-geometric-architectural-form.jpg`,
    },
    {
      id: 'kr-05',
      title: 'Kroma Spatial : Spatial Environmental Daylight System',
      subtitle: 'Dynamic sun-tracking typographic reflections and optical environmental guides',
      src: `${base}/screenshots/kroma/kroma-05-spatial-light-pavilion.jpg`,
    },
    {
      id: 'kr-06',
      title: 'Kroma Spatial : Environmental Signage & Optical Grid',
      subtitle: 'Dichroic wayfinding totems deployed across 180,000 visitor exhibition floors',
      src: `${base}/screenshots/kroma/kroma-06-environmental-signage.jpg`,
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
      id: 'kroma-spatial',
      number: '03',
      title: 'Kroma Spatial',
      discipline: 'Exhibition & Spatial Identity System',
      category: 'Architectural Optics & Environmental Wayfinding',
      description:
        'An environmental design program featuring kinetic glass totems, light-dispersing acrylic wayfinding, and a typographic hierarchy that shifts color based on ambient museum sunlight.',
      stack: ['Physical Optics', 'Photometric Raytracing', 'Figma Systems', 'Adobe Illustrator'],
      screenshots: kromaScreenshots,
    },
    {
      id: 'strovr',
      number: '04',
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
      {/* SECTION 3: STROVR SHOWCASE WITH REAL SCREENSHOTS               */}
      {/* ============================================================ */}
      <section
        id="web"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          02. Featured Showcase
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
              Strovr
            </h2>
            <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl">
              An all-in-one growth platform featuring dynamic email marketing templates, automated lead extraction via SerpApi, and an intuitive customer relationship management workflow.
            </p>
          </div>
          <div className="text-xs font-mono opacity-60">
            <a
              href="https://strovr.space"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-100"
            >
              strovr.space ↗
            </a>
          </div>
        </div>

        <p className="text-xs font-mono uppercase tracking-wider opacity-50 mb-6">
          Click any screenshot below to inspect full view
        </p>

        {/* Real Screenshots Grid - Pure image showcase, NO CARDS, NO FRAMES, click to open lightbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strovrScreenshots.map((shot) => (
            <div
              key={shot.id}
              onClick={() => setActiveImage(shot)}
              className="group cursor-zoom-in text-left"
            >
              <div className="overflow-hidden rounded-md bg-black/20 aspect-video mb-3">
                <img
                  src={shot.src}
                  alt={shot.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-bold group-hover:underline transition-all">
                {shot.title}
              </h3>
              <p className="text-xs opacity-70 mt-1 leading-relaxed">
                {shot.subtitle}
              </p>
            </div>
          ))}
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
      {/* SECTION 6: CONTACT & CONNECT                                 */}
      {/* ============================================================ */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          05. Get In Touch
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Let's Work Together.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          Whether you have a new venture in mind, need a bespoke web platform designed and built, or are looking to collaborate on a new digital product, reach out below.
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
