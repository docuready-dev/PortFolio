import { ContactDrawer } from './ContactDrawer'
import { usePortfolioStore } from '../store'

export function HtmlOverlay() {
  const theme = usePortfolioStore((s) => s.theme)
  const setActiveImage = usePortfolioStore((s) => s.setActiveImage)
  const isDark = theme === 'dark'

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  const strovrScreenshots = [
    {
      id: 'dashboard',
      title: 'Strovr — Command Dashboard',
      subtitle: 'Real-time pipeline metrics, lead generation & outreach telemetry',
      src: `${base}/screenshots/strovr/01-dashboard-full.png`,
    },
    {
      id: 'email-studio',
      title: 'Strovr — Email Studio & Template Builder',
      subtitle: 'Dynamic responsive email creation and automated campaign dispatch',
      src: `${base}/screenshots/strovr/01-outreach-email-studio.png`,
    },
    {
      id: 'crm-kanban',
      title: 'Strovr — CRM Pipeline & Kanban Board',
      subtitle: 'Interactive lead staging, contact interaction sheets & deal tracking',
      src: `${base}/screenshots/strovr/06-crm-kanban-board.png`,
    },
    {
      id: 'analytics',
      title: 'Strovr — Analytics & Performance Insights',
      subtitle: 'Deliverability analytics, click tracking & conversion metrics',
      src: `${base}/screenshots/strovr/01-analytics-overview.png`,
    },
    {
      id: 'automations',
      title: 'Strovr — Automated Sequences & Workflows',
      subtitle: 'Event-driven multi-step outreach pipelines with SerpApi hooks',
      src: `${base}/screenshots/strovr/01-automations-workflows.png`,
    },
    {
      id: 'integrations',
      title: 'Strovr — Integrations Hub',
      subtitle: 'Cloud webhooks, third-party CRM connectors & data pipes',
      src: `${base}/screenshots/strovr/01-integrations-hub-full.png`,
    },
  ]

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
    <div className={`w-full text-left font-sans ${isDark ? 'text-[#F4F3EF]' : 'text-[#111115]'}`}>
      {/* ============================================================ */}
      {/* SECTION 1: HERO / INTRO                                       */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="min-h-screen w-full flex flex-col justify-start pt-28 sm:pt-36 md:pt-40 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left"
      >
        {/* Simple Identity Line - No icons, no frames */}
        <div className="mb-8 text-xs sm:text-sm font-mono tracking-wider uppercase opacity-60">
          <span>Ashley Ajoy Ghose</span>
          <span className="mx-2">&bull;</span>
          <span className="font-devanagari font-bold text-sm">ॲशले घोष</span>
          <span className="mx-2">&bull;</span>
          <span>Maharashtra, India</span>
        </div>

        {/* Display Headline - Solid editorial typography with Delight, zero gradient text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.98] mb-8 max-w-5xl">
          Code, craft, and digital architecture.
        </h1>

        {/* Bio Introduction */}
        <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed opacity-90 mb-10 max-w-3xl">
          I am <strong className="font-semibold text-current">Ashley Ajoy Ghose</strong>, a
          multidisciplinary developer and designer based out of Maharashtra. I build
          high-impact graphic web designs and robust mobile applications that bridge raw
          technical engineering with striking visual identity.
        </p>

        {/* Action Links - Clean editorial buttons, no icons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={() => handleJump('works')}
            className={`px-8 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase transition-opacity cursor-pointer ${
              isDark
                ? 'bg-white text-[#0B0B0E] hover:opacity-90'
                : 'bg-[#111115] text-[#F4F3EF] hover:opacity-90'
            }`}
          >
            Explore My Works
          </button>
          <button
            onClick={() => handleJump('contact')}
            className={`px-8 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer ${
              isDark
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-black/5 text-[#111115] hover:bg-black/10'
            }`}
          >
            Get in Touch
          </button>
        </div>

        {/* Editorial Information Columns - No card frames */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-current/15 font-mono text-xs max-w-4xl">
          <div>
            <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Specialization</div>
            <div className="font-semibold text-sm">Graphic Web &bull; Mobile Apps</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Core Stack</div>
            <div className="font-semibold text-sm">React &bull; Node.js &bull; TypeScript</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Availability</div>
            <div className="font-semibold text-sm">Open for Projects &bull; 2026</div>
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
      {/* SECTION 5: SELECTED PROJECTS DIRECTORY                        */}
      {/* ============================================================ */}
      <section
        id="works"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="text-xs font-mono tracking-wider uppercase opacity-50 mb-4">
          04. Selected Works
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
          Selected Projects.
        </h2>
        <p className="text-base sm:text-xl opacity-75 max-w-3xl mb-16 font-medium">
          A showcase of products, web platforms, and visual systems I have created.
        </p>

        {/* Editorial Project List - Clean typographic rows, NO CARD FRAMES */}
        <div className="divide-y divide-current/15 border-t border-b border-current/15">
          {/* Project 1 */}
          <div
            onClick={() =>
              setActiveImage({
                src: `${base}/screenshots/strovr/01-dashboard-full.png`,
                title: 'Strovr',
                subtitle: 'Email Marketing, Lead Generation & Growth CRM Platform',
              })
            }
            className="py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group cursor-zoom-in transition-opacity hover:opacity-80"
          >
            <div className="md:w-5/12">
              <span className="text-xs font-mono opacity-50 mr-4">01</span>
              <h3 className="text-2xl sm:text-3xl font-bold inline group-hover:underline">
                Strovr
              </h3>
              <p className="text-xs sm:text-sm opacity-70 mt-2">
                Email marketing templates, lead generation & CRM platform
              </p>
            </div>
            <div className="text-xs font-mono opacity-60 md:w-4/12">
              React &bull; Vite &bull; Node.js &bull; Express &bull; Firebase &bull; SerpApi
            </div>
            <div className="text-xs font-mono text-right md:w-3/12 uppercase tracking-wider opacity-70">
              View Screenshot ↗
            </div>
          </div>

          {/* Project 2 */}
          <div
            onClick={() =>
              setActiveImage({
                src: `${base}/screenshots/strovr/01-outreach-email-studio.png`,
                title: 'LearnReady',
                subtitle: 'AI-Powered Adaptive Learning & Interactive Assessment Engine',
              })
            }
            className="py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group cursor-zoom-in transition-opacity hover:opacity-80"
          >
            <div className="md:w-5/12">
              <span className="text-xs font-mono opacity-50 mr-4">02</span>
              <h3 className="text-2xl sm:text-3xl font-bold inline group-hover:underline">
                LearnReady
              </h3>
              <p className="text-xs sm:text-sm opacity-70 mt-2">
                Online educational platform with structured courses & real-time AI assessments
              </p>
            </div>
            <div className="text-xs font-mono opacity-60 md:w-4/12">
              React &bull; Vite &bull; Tailwind CSS &bull; Node.js &bull; Firebase
            </div>
            <div className="text-xs font-mono text-right md:w-3/12 uppercase tracking-wider opacity-70">
              View Preview ↗
            </div>
          </div>

          {/* Project 3 */}
          <div
            onClick={() =>
              setActiveImage({
                src: `${base}/screenshots/strovr/06-crm-kanban-board.png`,
                title: 'Custom Web & Mobile Solutions',
                subtitle: 'Bespoke High-Impact Graphic Websites & Native-Grade Applications',
              })
            }
            className="py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group cursor-zoom-in transition-opacity hover:opacity-80"
          >
            <div className="md:w-5/12">
              <span className="text-xs font-mono opacity-50 mr-4">03</span>
              <h3 className="text-2xl sm:text-3xl font-bold inline group-hover:underline">
                Custom Web & Apps
              </h3>
              <p className="text-xs sm:text-sm opacity-70 mt-2">
                Bespoke digital products with fluid UI/UX layouts and native-style applications
              </p>
            </div>
            <div className="text-xs font-mono opacity-60 md:w-4/12">
              React &bull; Tailwind CSS &bull; Three.js &bull; Node.js &bull; MongoDB
            </div>
            <div className="text-xs font-mono text-right md:w-3/12 uppercase tracking-wider opacity-70">
              View Preview ↗
            </div>
          </div>

          {/* Project 4 */}
          <div
            onClick={() =>
              setActiveImage({
                src: `${base}/screenshots/strovr/01-analytics-overview.png`,
                title: 'Kroma Spatial',
                subtitle: 'Dynamic Chromatic Exhibition & Environmental System',
              })
            }
            className="py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group cursor-zoom-in transition-opacity hover:opacity-80"
          >
            <div className="md:w-5/12">
              <span className="text-xs font-mono opacity-50 mr-4">04</span>
              <h3 className="text-2xl sm:text-3xl font-bold inline group-hover:underline">
                Kroma Spatial
              </h3>
              <p className="text-xs sm:text-sm opacity-70 mt-2">
                Spatial identity, optical signage & typographic architectural wayfinding
              </p>
            </div>
            <div className="text-xs font-mono opacity-60 md:w-4/12">
              Figma Systems &bull; Adobe Illustrator &bull; Architectural Graphics
            </div>
            <div className="text-xs font-mono text-right md:w-3/12 uppercase tracking-wider opacity-70">
              View Preview ↗
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
          05. Get In Touch
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Let's Work Together.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          Whether you have a new venture in mind, need a bespoke web platform designed and built, or are looking to collaborate on a new digital product — reach out below.
        </p>

        {/* Contact Drawer without card outlines */}
        <div className="w-full mb-16">
          <ContactDrawer />
        </div>

        {/* Personal Colophon Footer */}
        <footer className="pt-8 border-t border-current/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono opacity-60">
          <div>
            &copy; {new Date().getFullYear()} ASHLEY AJOY GHOSE &bull; ॲशले घोष &bull; MAHARASHTRA, INDIA
          </div>
          <div>
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
