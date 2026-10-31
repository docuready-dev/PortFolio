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
      {/* SECTION 1: HERO / INTRO                                       */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="min-h-screen w-full flex flex-col justify-start pt-24 sm:pt-28 md:pt-32 pb-16 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left"
      >
        {/* Personal Identity & Devanagari Pill */}
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

        {/* Main Personal Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.0] mb-5 max-w-4xl">
          Code, craft, and <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400">
            digital architecture.
          </span>
        </h1>

        {/* Author Bio Statement */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed opacity-90 mb-7 max-w-3xl">
          I am <strong className="font-semibold text-current">Ashley Ajoy Ghose</strong>, a
          multidisciplinary developer and designer based out of Maharashtra. I build
          high-impact graphic web designs and robust mobile applications that bridge raw
          technical engineering with striking visual identity.
        </p>

        {/* Personal CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-8">
          <button
            onClick={() => handleJump('works')}
            className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-500/25 cursor-pointer hover:gap-3"
          >
            <span>Explore My Works</span>
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
            <span>Get in Touch With Me</span>
            <Mail className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Personal Details & Availability Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-current/15 font-mono text-xs max-w-3xl">
          <div className="p-3.5 rounded-2xl border border-current/10 bg-current/5">
            <div className="text-[10px] opacity-60 uppercase font-semibold">Specialization</div>
            <div className="font-semibold mt-0.5 text-xs sm:text-sm">Graphic Web Design &bull; Mobile Apps</div>
          </div>
          <div className="p-3.5 rounded-2xl border border-current/10 bg-current/5">
            <div className="text-[10px] opacity-60 uppercase font-semibold">Primary Stack</div>
            <div className="font-semibold mt-0.5 text-xs sm:text-sm">React &bull; Node.js &bull; TypeScript</div>
          </div>
          <div className="p-3.5 rounded-2xl border border-current/10 bg-current/5">
            <div className="text-[10px] opacity-60 uppercase font-semibold">Status</div>
            <div className="font-semibold mt-0.5 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: ABOUT ME & PHILOSOPHY                              */}
      {/* ============================================================ */}
      <section
        id="approach"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase mb-6 w-fit">
          <Layers className="w-3.5 h-3.5 text-amber-500" />
          <span>01 // ABOUT ME & MY CRAFT</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
          The Approach.
        </h2>

        <p className="text-xl sm:text-3xl font-light leading-relaxed max-w-4xl opacity-90 mb-6">
          Focused purely on high-impact graphic web design and mobile-grade app development.
          Bridging the gap between aesthetic visual design and robust engineering.
        </p>

        <p className="text-sm sm:text-base opacity-70 leading-relaxed max-w-3xl mb-14">
          I treat design and code as two complementary halves of the same creative craft.
          Too often, visually striking designs lack engineering depth, or technically solid
          applications feel clunky and uninspired. My focus is combining Swiss typographic
          discipline, tactile micro-interactions, and scalable cloud architectures so every
          product feels memorable, fast, and effortless to use.
        </p>

        {/* Three Core Skills & Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between group hover:border-pink-500/50 transition-colors">
            <div>
              <Palette className="w-6 h-6 text-pink-400 mb-4" />
              <h3 className="text-lg font-bold font-mono mb-2">Design & Visual Systems</h3>
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed mb-4">
                Designing tailored visual identities in Figma and Adobe Illustrator. Strict typographic scales, cohesive color palettes, and reusable component libraries.
              </p>
            </div>
            <div className="pt-4 border-t border-current/10 text-[11px] font-mono opacity-60">
              FIGMA &bull; ILLUSTRATOR &bull; UI/UX
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
            <div>
              <Code2 className="w-6 h-6 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold font-mono mb-2">Frontend Craft</h3>
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed mb-4">
                Translating intricate designs into responsive, sub-100ms web applications using React, Vite, Tailwind CSS, and TypeScript with fluid motion.
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
                Architecting resilient backends with Node.js, Express, Firebase Firestore, and MongoDB Atlas. Real-time data sync, secure APIs, and clean serverless functions.
              </p>
            </div>
            <div className="pt-4 border-t border-current/10 text-[11px] font-mono opacity-60">
              NODE &bull; EXPRESS &bull; FIREBASE &bull; MONGO
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: WEB PLATFORMS I'VE BUILT                           */}
      {/* ============================================================ */}
      <section
        id="web"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase mb-6 w-fit">
          <Cpu className="w-3.5 h-3.5 text-blue-400" />
          <span>02 // WEB PLATFORMS I'VE BUILT</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Web Platforms I've Built.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          Two major platforms I've conceived, designed, and engineered from scratch: <strong className="text-blue-400 font-semibold">Strovr</strong> and <strong className="text-emerald-400 font-semibold">LearnReady</strong>. Clean modular architecture, instant sub-second transitions, and real utility.
        </p>

        {/* Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Strovr Spotlight Card */}
          <div className="p-8 rounded-3xl border border-current/15 bg-current/5 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  FLAGSHIP 01 &bull; GROWTH SAAS
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
                An all-in-one growth platform I designed and engineered featuring dynamic email marketing templates, automated lead extraction via SerpApi, and an intuitive customer relationship management workflow.
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
                An interactive educational web application I built to deliver structured course curricula, adaptive chapter progression, and real-time AI-generated competency assessments.
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

        {/* Personal Craft Philosophy Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-current/10 bg-current/5">
            <span className="text-3xl sm:text-4xl font-bold font-mono block text-blue-400">100%</span>
            <span className="text-xs font-mono opacity-70 uppercase mt-1 block">Full-Stack Ownership</span>
          </div>
          <div className="p-5 rounded-2xl border border-current/10 bg-current/5">
            <span className="text-3xl sm:text-4xl font-bold font-mono block text-emerald-400">&lt; 100ms</span>
            <span className="text-xs font-mono opacity-70 uppercase mt-1 block">Sub-Second Pacing</span>
          </div>
          <div className="p-5 rounded-2xl border border-current/10 bg-current/5">
            <span className="text-3xl sm:text-4xl font-bold font-mono block text-amber-400">Tactile</span>
            <span className="text-xs font-mono opacity-70 uppercase mt-1 block">Component Design</span>
          </div>
          <div className="p-5 rounded-2xl border border-current/10 bg-current/5">
            <span className="text-3xl sm:text-4xl font-bold font-mono block text-indigo-400">Bespoke</span>
            <span className="text-xs font-mono opacity-70 uppercase mt-1 block">Zero Generic Templates</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: MOBILE & APP ARCHITECTURE                          */}
      {/* ============================================================ */}
      <section
        id="apps"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase mb-6 w-fit">
          <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
          <span>03 // MOBILE & APP CRAFT</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Fluid Mobile & Custom Apps.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          When developing mobile applications and custom web solutions, I prioritize how the interface feels under your thumb. Tactile gesture physics, offline resilience, and fluid 60 FPS transitions make software feel alive.
        </p>

        {/* Feature Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-6 rounded-2xl border border-current/15 bg-current/5 flex flex-col justify-between">
            <span className="text-3xl font-bold font-mono block text-indigo-400 mb-2">60 FPS</span>
            <span className="text-sm font-bold font-mono uppercase">Gesture Physics</span>
            <p className="text-xs opacity-70 mt-2 leading-relaxed">
              Inertial touch handling and spring micro-interactions tailored for physical hand ergonomics.
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
      {/* SECTION 5: SELECTED WORKS (PORTFOLIO GALLERY)                */}
      {/* ============================================================ */}
      <section
        id="works"
        className="min-h-screen w-full flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto text-left border-t border-current/15"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/20 bg-current/5 text-xs font-mono font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>04 // MY SELECTED WORKS</span>
          </div>
          <span className="text-xs font-mono opacity-60">CLICK ANY PROJECT TO INSPECT CASE STUDY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
          Selected Projects.
        </h2>
        <p className="text-base sm:text-xl opacity-75 max-w-3xl mb-12 font-medium">
          A showcase of products, web applications, and visual systems I have created. Click any entry to inspect the full design and engineering case study.
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
                  <span className="opacity-60">{proj.role}</span>
                  <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform text-amber-400 font-semibold">
                    Inspect <ArrowRight className="w-3.5 h-3.5" />
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
          <span>05 // GET IN TOUCH</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Let's Work Together.
        </h2>

        <p className="text-lg sm:text-2xl font-light opacity-85 leading-relaxed max-w-3xl mb-12">
          Whether you have a new venture in mind, need a bespoke web platform designed and built, or are looking to bring a multidisciplinary designer-developer onto your team — my inbox is always open.
        </p>

        {/* Interactive Contact Drawer */}
        <div className="w-full mb-16">
          <ContactDrawer />
        </div>

        {/* Personal Colophon Footer */}
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
