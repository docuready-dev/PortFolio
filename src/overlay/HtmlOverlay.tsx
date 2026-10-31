import {
  Sparkles,
  ArrowRight,
  Layers,
  Cpu,
  Smartphone,
  Award,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Server,
  ArrowUpRight,
} from 'lucide-react'
import { ContactDrawer } from './ContactDrawer'
import { usePortfolioStore } from '../store'

export function HtmlOverlay() {
  const theme = usePortfolioStore((s) => s.theme)
  const projects = usePortfolioStore((s) => s.projects)
  const setActiveProject = usePortfolioStore((s) => s.setActiveProject)
  const isDark = theme === 'dark'

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
    <div className={`w-full text-left ${isDark ? 'text-[#F4F3EF]' : 'text-[#111115]'}`}>
      {/* ============================================================ */}
      {/* SECTION 1: HERO / LANDING (SPATIAL INTRO)                     */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="min-h-screen w-full flex flex-col justify-start pt-24 sm:pt-28 md:pt-32 pb-16 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left"
      >
        {/* Identity & Devanagari Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border mb-5 text-xs font-mono font-semibold tracking-wider uppercase w-fit transition-colors duration-200 border-current/20 bg-current/5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="font-bold">Ashley Ajoy Ghose</span>
          <span className="opacity-40">&bull;</span>
          <span className="font-devanagari text-amber-500 font-bold tracking-normal text-sm">
            ॲशले घोष
          </span>
          <span className="opacity-40 hidden sm:inline">&bull;</span>
          <span className="opacity-70 text-[11px] hidden sm:inline">Maharashtra, IN</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.0] mb-5 max-w-4xl">
          Code, craft, and <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400">
            digital architecture.
          </span>
        </h1>

        {/* Bio Introduction */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed opacity-90 mb-7 max-w-3xl">
          I am <strong className="font-semibold text-current">Ashley Ajoy Ghose</strong>, a
          multidisciplinary developer and designer based out of Maharashtra. I build
          high-impact graphic web designs and robust mobile applications that bridge raw
          technical engineering with striking visual identity.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-8">
          <button
            onClick={() => handleJump('works')}
            className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-500/25 cursor-pointer hover:gap-3"
          >
            <span>Explore Works</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200" />
          </button>
          <button
            onClick={() => handleJump('contact')}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
              isDark
                ? 'bg-white/5 hover:bg-white/15 border-white/20 text-[#F4F3EF]'
                : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#111115]'
            }`}
          >
            <span>Get in Touch</span>
            <Mail className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Editorial Metadata Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-current/15 font-mono text-xs max-w-3xl">
          <div className="p-3.5 rounded-2xl border border-current/10 bg-current/5">
            <div className="text-[10px] opacity-60 uppercase font-semibold">Discipline</div>
            <div className="font-semibold mt-0.5 text-xs sm:text-sm">Graphic Web &bull; Mobile Apps</div>
          </div>
          <div className="p-3.5 rounded-2xl border border-current/10 bg-current/5">
            <div className="text-[10px] opacity-60 uppercase font-semibold">Core Stack</div>
            <div className="font-semibold mt-0.5 text-xs sm:text-sm">React &bull; Node &bull; TypeScript</div>
          </div>
          <div className="p-3.5 rounded-2xl border border-current/10 bg-current/5">
            <div className="text-[10px] opacity-60 uppercase font-semibold">Availability</div>
            <div className="font-semibold mt-0.5 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for Selected Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: ABOUT & PHILOSOPHY (THE APPROACH)                  */}
      {/* ============================================================ */}
      <section
        id="approach"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase mb-6 w-fit">
          <Layers className="w-3.5 h-3.5 text-amber-500" />
          <span>01 // PHILOSOPHY & METHODOLOGY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
          The Approach.
        </h2>

        <p className="text-xl sm:text-3xl font-light leading-relaxed max-w-4xl opacity-90 mb-6">
          Focused purely on high-impact graphic web design and mobile-grade app development.
          Bridging the gap between aesthetic visual design and robust engineering.
        </p>

        <p className="text-sm sm:text-base opacity-70 leading-relaxed max-w-3xl mb-14">
          Every digital product is engineered as a unified visual and architectural system.
          I combine Swiss typographic rigor, tactile component modularity, and scalable
          server architectures into responsive user journeys that convert visitors and scale effortlessly.
        </p>

        {/* Three Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between group hover:border-pink-500/50 transition-colors">
            <div>
              <Palette className="w-6 h-6 text-pink-400 mb-4" />
              <h3 className="text-lg font-bold font-mono mb-2">Design Systems</h3>
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed mb-4">
                Figma, Adobe Illustrator, and comprehensive UI/UX graphic systems. Strict typographic hierarchies and component libraries.
              </p>
            </div>
            <div className="pt-4 border-t border-current/10 text-[11px] font-mono opacity-60">
              FIGMA &bull; ILLUSTRATOR &bull; SYSTEMS
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
            <div>
              <Code2 className="w-6 h-6 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold font-mono mb-2">Frontend Engineering</h3>
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed mb-4">
                React, Vite, Tailwind CSS, and TypeScript. Fluid component state, accessible layouts, and sub-100ms transitions.
              </p>
            </div>
            <div className="pt-4 border-t border-current/10 text-[11px] font-mono opacity-60">
              REACT &bull; VITE &bull; TAILWIND &bull; TS
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between group hover:border-emerald-500/50 transition-colors">
            <div>
              <Server className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold font-mono mb-2">Backend & Cloud</h3>
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed mb-4">
                Node.js, Express, Firebase Firestore, and MongoDB Atlas. Robust RESTful APIs, real-time database sync, and serverless pipelines.
              </p>
            </div>
            <div className="pt-4 border-t border-current/10 text-[11px] font-mono opacity-60">
              NODE &bull; EXPRESS &bull; FIREBASE &bull; MONGO
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: FLAGSHIP WEB PLATFORMS (STROVR & LEARNREADY)       */}
      {/* ============================================================ */}
      <section
        id="web"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase mb-6 w-fit">
          <Cpu className="w-3.5 h-3.5 text-blue-400" />
          <span>02 // FLAGSHIP WEB PLATFORMS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          High-Impact Web Platforms.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          Specialized in production-grade platforms like <strong className="text-blue-400 font-semibold">Strovr</strong> and <strong className="text-emerald-400 font-semibold">LearnReady</strong>. Clean component modularity, instant sub-second page transitions, and AI-accelerated workflows.
        </p>

        {/* Spotlight Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Strovr Spotlight Card */}
          <div className="p-8 rounded-3xl border border-current/15 bg-current/5 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  FLAGSHIP 01 &bull; SAAS & CRM
                </span>
                <a
                  href="https://strovr.space"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold hover:underline text-blue-400"
                >
                  <span>strovr.space</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Strovr
              </h3>
              <p className="text-sm sm:text-base opacity-80 leading-relaxed mb-6 font-medium">
                Email marketing templates, automated lead extraction via SerpApi, and an intuitive customer relationship management workflow.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Vite', 'Node.js', 'Express', 'Firebase', 'SerpApi'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono border border-current/15 bg-current/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs font-mono">
              <span className="text-blue-400 font-semibold">&lt; 100ms Reactive Pacing</span>
              <span className="opacity-60">10x Lead Discovery Speed</span>
            </div>
          </div>

          {/* LearnReady Spotlight Card */}
          <div className="p-8 rounded-3xl border border-current/15 bg-current/5 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  FLAGSHIP 02 &bull; EDTECH & AI
                </span>
                <span className="text-xs font-mono opacity-60">Active Platform</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                LearnReady
              </h3>
              <p className="text-sm sm:text-base opacity-80 leading-relaxed mb-6 font-medium">
                Online educational web application providing structured course curriculum pathways and real-time AI-generated competency assessments.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Firebase', 'AI Assessment'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono border border-current/15 bg-current/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-semibold">100% Custom Engineering</span>
              <span className="opacity-60">Adaptive Chapter Engine</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-current/10 bg-current/5">
            <span className="text-3xl sm:text-4xl font-bold font-mono block text-blue-400">100%</span>
            <span className="text-xs font-mono opacity-70 uppercase mt-1 block">Custom Codebase</span>
          </div>
          <div className="p-5 rounded-2xl border border-current/10 bg-current/5">
            <span className="text-3xl sm:text-4xl font-bold font-mono block text-emerald-400">&lt; 100ms</span>
            <span className="text-xs font-mono opacity-70 uppercase mt-1 block">Sub-Second Pacing</span>
          </div>
          <div className="p-5 rounded-2xl border border-current/10 bg-current/5">
            <span className="text-3xl sm:text-4xl font-bold font-mono block text-amber-400">REST + Realtime</span>
            <span className="text-xs font-mono opacity-70 uppercase mt-1 block">Dual Data Sync</span>
          </div>
          <div className="p-5 rounded-2xl border border-current/10 bg-current/5">
            <span className="text-3xl sm:text-4xl font-bold font-mono block text-indigo-400">SerpApi</span>
            <span className="text-xs font-mono opacity-70 uppercase mt-1 block">Automated Engine</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: MOBILE ARCHITECTURE & CUSTOM APPS                 */}
      {/* ============================================================ */}
      <section
        id="apps"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase mb-6 w-fit">
          <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
          <span>03 // MOBILE-GRADE APP ARCHITECTURE</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Fluid Native Apps & Custom Solutions.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          Architecting mobile-grade applications and custom web solutions. Fluid gesture physics, offline-first data synchronization with Firebase / MongoDB Atlas, and intuitive UI/UX design systems.
        </p>

        {/* Feature Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between">
            <span className="text-3xl font-bold font-mono block text-indigo-400 mb-2">60 FPS</span>
            <span className="text-sm font-bold font-mono uppercase">Gesture Physics</span>
            <p className="text-xs opacity-70 mt-2 leading-relaxed">
              Inertial touch handling and fluid spring micro-interactions tailored for mobile ergonomics.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between">
            <span className="text-3xl font-bold font-mono block text-amber-400 mb-2">Offline First</span>
            <span className="text-sm font-bold font-mono uppercase">Resilient Sync</span>
            <p className="text-xs opacity-70 mt-2 leading-relaxed">
              Local cache persistence backed by cloud Firestore and MongoDB Atlas clusters.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between">
            <span className="text-3xl font-bold font-mono block text-emerald-400 mb-2">Mobile-First</span>
            <span className="text-sm font-bold font-mono uppercase">Responsive Grid</span>
            <p className="text-xs opacity-70 mt-2 leading-relaxed">
              Engineered seamlessly from 320px handheld displays to expansive high-DPI desktop viewports.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between">
            <span className="text-3xl font-bold font-mono block text-pink-400 mb-2">Bespoke UI</span>
            <span className="text-sm font-bold font-mono uppercase">Design Systems</span>
            <p className="text-xs opacity-70 mt-2 leading-relaxed">
              Tailored visual identities, custom iconography, and strict typographic hierarchy.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: FEATURED PROJECTS (INTERACTIVE GALLERY)           */}
      {/* ============================================================ */}
      <section
        id="works"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>04 // CURATED PRODUCTION WORKS</span>
          </div>
          <span className="text-xs font-mono opacity-60">CLICK ANY PROJECT TO INSPECT CASE STUDY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
          Selected Works.
        </h2>
        <p className="text-base sm:text-xl opacity-75 max-w-3xl mb-12 font-medium">
          A curated directory of flagship web platforms, mobile architectures, and graphic systems. Click any entry to inspect comprehensive technical breakdowns.
        </p>

        {/* Editorial Project Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="p-7 rounded-3xl border border-current/15 bg-current/5 hover:bg-current/[0.08] transition-all duration-200 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono opacity-60 mb-3">
                  <span className="font-bold text-current">{proj.number}</span>
                  <span className="uppercase text-[10px] px-2.5 py-0.5 rounded-full border border-current/20 bg-current/5">
                    {proj.domain}
                  </span>
                </div>

                <h3 className="text-2xl font-bold group-hover:text-amber-400 transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-75 line-clamp-3 mb-6 font-medium leading-relaxed">
                  {proj.subtitle}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-current/10 border border-current/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-current/10 flex items-center justify-between text-xs font-mono">
                  <span className="opacity-60">{proj.year}</span>
                  <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform text-amber-400 font-semibold">
                    Inspect Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: CONTACT & CONNECT                                 */}
      {/* ============================================================ */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase mb-6 w-fit">
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>05 // INQUIRIES & PARTNERSHIPS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Let's Build Together.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          Direct callout for project inquiries, custom graphic web design, and mobile-grade app development. Available for selected commissions and technical partnerships.
        </p>

        {/* Interactive Contact Drawer */}
        <div className="w-full mb-16">
          <ContactDrawer />
        </div>

        {/* Editorial Colophon Footer */}
        <footer className="pt-8 border-t border-current/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono opacity-70">
          <div>
            &copy; {new Date().getFullYear()} ASHLEY AJOY GHOSE &bull; ॲशले घोष &bull; MAHARASHTRA, INDIA
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/docuready-dev"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 text-current"
            >
              <span>github.com/docuready-dev</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default HtmlOverlay
