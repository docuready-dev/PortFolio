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
} from 'lucide-react'
import { ContactDrawer } from './ContactDrawer'
import { usePortfolioStore } from '../store'

export function HtmlOverlay() {
  const blurIntensity = usePortfolioStore((s) => s.blurIntensity)
  const theme = usePortfolioStore((s) => s.theme)
  const projects = usePortfolioStore((s) => s.projects)
  const setActiveProject = usePortfolioStore((s) => s.setActiveProject)
  const isDark = theme === 'dark'
  const cardGlassClass =
    blurIntensity === 'deep' ? 'glass-card-editorial-deep' : 'glass-card-editorial'

  const handleJump = (targetOffset: number) => {
    const ds = (window as any).__DREI_SCROLL__
    if (ds && ds.el) {
      const maxScroll = ds.el.scrollHeight - ds.el.clientHeight
      ds.el.scrollTo({
        top: maxScroll * targetOffset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={`w-full select-none ${isDark ? 'text-[#F4F3EF]' : 'text-ink'}`}>
      {/* ============================================================ */}
      {/* PAGE 1: HERO / LANDING                                       */}
      {/* ============================================================ */}
      <section className="h-screen w-full relative px-6 md:px-16 flex flex-col justify-start pt-24 sm:pt-28 md:pt-32 pb-8 pointer-events-none">
        <div className="w-full max-w-3xl mx-auto pointer-events-auto">
          <div className={`p-6 sm:p-8 md:p-9 rounded-3xl ${cardGlassClass}`}>
            {/* Identity & Devanagari Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-semibold tracking-wider uppercase mb-3.5 sm:mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="text-current font-bold">Ashley Ajoy Ghose</span>
              <span className="opacity-40">&bull;</span>
              <span className="font-devanagari text-amber-500 font-bold tracking-normal text-sm">
                ॲशले घोष
              </span>
            </div>

            {/* Main Headline Tagline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-3.5 sm:mb-4">
              Code, craft, and <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400">
                digital architecture.
              </span>
            </h1>

            {/* Bio Introduction */}
            <p className="text-sm sm:text-base md:text-lg opacity-85 leading-relaxed font-sans mb-5 sm:mb-6">
              I am <span className="font-semibold text-current">Ashley Ajoy Ghose</span>, a
              multidisciplinary developer and designer based out of Maharashtra. I build
              high-impact graphic web designs and robust mobile applications that bridge raw
              technical engineering with striking visual identity.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-6">
              <button
                onClick={() => handleJump(0.8)}
                className="px-5 sm:px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-500/25 cursor-pointer"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleJump(1.0)}
                className="px-5 sm:px-6 py-3 rounded-full glass-panel hover:bg-white/20 text-current font-semibold text-sm transition-all duration-200 flex items-center gap-2 border border-current/20 cursor-pointer"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Core Credentials & Discipline Metadata */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-current/10 font-mono text-[11px] opacity-80">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[9px] opacity-60 uppercase font-semibold">Discipline</div>
                <div className="font-semibold mt-0.5 text-[10px] sm:text-[11px] truncate">Graphic Web &bull; Apps</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[9px] opacity-60 uppercase font-semibold">Core Stack</div>
                <div className="font-semibold mt-0.5 text-[10px] sm:text-[11px] truncate">React &bull; Node &bull; TypeScript</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[9px] opacity-60 uppercase font-semibold">Base</div>
                <div className="font-semibold mt-0.5 text-[10px] sm:text-[11px] truncate">Maharashtra, IN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PAGE 2: ABOUT & PHILOSOPHY (THE APPROACH)                     */}
      {/* ============================================================ */}
      <section className="h-screen w-full relative px-6 md:px-16 flex flex-col justify-center pointer-events-none">
        <div className="w-full max-w-3xl mx-auto pointer-events-auto">
          <div className={`p-6 sm:p-8 md:p-10 rounded-3xl ${cardGlassClass}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-current text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              <span>01 // PHILOSOPHY & METHODOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
              The Approach.
            </h2>

            <p className="text-base sm:text-lg opacity-85 leading-relaxed font-medium mb-6">
              Focused purely on high-impact graphic web design and mobile-grade app development.
              Bridging the gap between aesthetic visual design and robust engineering.
            </p>

            <p className="text-sm opacity-70 leading-relaxed font-sans mb-8">
              Every digital product is engineered as a unified visual and architectural system.
              I combine Swiss typographic rigor, tactile component modularity, and scalable
              server architectures into responsive user journeys that convert visitors and scale effortlessly.
            </p>

            {/* Three Technical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Palette className="w-4 h-4 text-pink-400 mb-2" />
                <span className="text-xs font-bold font-mono block">Design Systems</span>
                <span className="text-[11px] opacity-70">Figma, Adobe Illustrator, Graphic Systems</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Code2 className="w-4 h-4 text-blue-400 mb-2" />
                <span className="text-xs font-bold font-mono block">Frontend Engineering</span>
                <span className="text-[11px] opacity-70">React, Vite, Tailwind CSS, TypeScript</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Server className="w-4 h-4 text-emerald-400 mb-2" />
                <span className="text-xs font-bold font-mono block">Backend & Cloud</span>
                <span className="text-[11px] opacity-70">Node.js, Express, Firebase, MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PAGE 3: WEB PLATFORMS & SAAS (STROVR & LEARNREADY)           */}
      {/* ============================================================ */}
      <section className="h-screen w-full relative px-6 md:px-16 flex flex-col justify-center pointer-events-none">
        <div className="w-full max-w-3xl mx-auto pointer-events-auto">
          <div className={`p-6 sm:p-8 md:p-10 rounded-3xl ${cardGlassClass}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-current text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>02 // FLAGSHIP WEB PLATFORMS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
              High-Impact Web Platforms & Intelligent SaaS.
            </h2>

            <p className="text-base sm:text-lg opacity-85 leading-relaxed font-medium mb-6">
              Specialized in production-grade platforms like <span className="text-blue-400 font-semibold">Strovr</span> and <span className="text-emerald-400 font-semibold">LearnReady</span>. Clean component modularity, instant sub-second page transitions, and AI-accelerated workflows.
            </p>

            {/* Highlights Matrix */}
            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <div>
                  <div className="text-xs font-mono font-bold flex items-center gap-2">
                    <a
                      href="https://strovr.space"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:underline text-blue-400"
                    >
                      <span>STROVR (strovr.space)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">Live</span>
                  </div>
                  <p className="text-xs opacity-75 mt-1">
                    Email marketing templates, automated SerpApi lead generation, and full-cycle CRM platform (React, Vite, Node, Express, Firebase, SerpApi).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <div className="text-xs font-mono font-bold flex items-center gap-2">
                    <span>LEARNREADY</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Live</span>
                  </div>
                  <p className="text-xs opacity-75 mt-1">
                    Online educational web app with structured course tracks, adaptive chapters, and AI-generated assessments (React, Vite, Node, Firebase).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold font-mono block text-blue-400">100%</span>
                <span className="text-xs font-mono opacity-70 uppercase">Custom Codebase</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold font-mono block text-emerald-400">&lt; 100ms</span>
                <span className="text-xs font-mono opacity-70 uppercase">Vite Reactive Pacing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PAGE 4: APP DEVELOPMENT & MOBILE ARCHITECTURE                */}
      {/* ============================================================ */}
      <section className="h-screen w-full relative px-6 md:px-16 flex flex-col justify-center pointer-events-none">
        <div className="w-full max-w-3xl mx-auto pointer-events-auto">
          <div className={`p-6 sm:p-8 md:p-10 rounded-3xl ${cardGlassClass}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-current text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
              <span>03 // MOBILE-GRADE APP ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Fluid Native Apps & Custom Web Solutions.
            </h2>

            <p className="text-base sm:text-lg opacity-85 leading-relaxed font-medium mb-8">
              Architecting mobile-grade applications and custom web solutions. Fluid gesture physics, offline-first data synchronization with Firebase / MongoDB Atlas, and intuitive UI/UX design systems.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold font-mono block text-indigo-400">60 FPS</span>
                <span className="text-xs font-mono opacity-70 uppercase">Gesture Physics</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold font-mono block text-amber-400">Mobile-First</span>
                <span className="text-xs font-mono opacity-70 uppercase">Responsive Grid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PAGE 5: FEATURED PROJECTS (INTERACTIVE GALLERY)              */}
      {/* ============================================================ */}
      <section className="h-screen w-full relative px-6 md:px-16 flex flex-col justify-center pointer-events-none">
        <div className="w-full max-w-4xl mx-auto pointer-events-auto space-y-4">
          <div className={`p-6 sm:p-7 rounded-3xl ${cardGlassClass}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-current text-xs font-mono font-semibold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>04 // FEATURED PROJECTS &bull; INTERACTIVE GALLERY</span>
              </div>
              <span className="text-xs font-mono opacity-60">CLICK TO INSPECT CASE STUDY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 leading-tight">
              Curated Production Works.
            </h2>
            <p className="text-xs sm:text-sm opacity-80 font-medium">
              Click any flagship project below to inspect comprehensive tech stack architecture, SerpApi pipelines, and engineering breakdowns.
            </p>
          </div>

          {/* Interactive Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`p-4 rounded-2xl ${cardGlassClass} hover:bg-white/15 transition-all duration-200 cursor-pointer border border-white/10 flex flex-col justify-between group hover:-translate-y-1 shadow-lg`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono opacity-60 mb-2">
                    <span className="font-bold text-current">{proj.number}</span>
                    <span className="uppercase text-[10px] px-2 py-0.5 rounded-full bg-white/10">{proj.domain}</span>
                  </div>
                  <h3 className="text-base font-bold group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs opacity-75 mt-1 line-clamp-2">
                    {proj.subtitle}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-current/70">
                  <span className="text-[10px] opacity-60 truncate max-w-[140px]">{proj.stack.slice(0, 2).join(' • ')}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-amber-400 font-semibold shrink-0">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PAGE 6: EXPERTISE, TECH PIT & CONTACT CONNECT                */}
      {/* ============================================================ */}
      <section className="h-screen w-full relative px-6 md:px-16 flex flex-col justify-center items-center pointer-events-none">
        {/* Interactive Contact Drawer */}
        <div className="w-full max-w-4xl pointer-events-auto">
          <ContactDrawer />
        </div>

        {/* Editorial Colophon Footer */}
        <footer className="mt-6 text-center text-xs font-mono opacity-70 pointer-events-auto">
          <div className="inline-block px-5 py-2 rounded-full glass-panel">
            &copy; {new Date().getFullYear()} ASHLEY AJOY GHOSE &bull; ॲशले घोष &bull; MAHARASHTRA &bull; GITHUB: github.com/docuready-dev
          </div>
        </footer>
      </section>
    </div>
  )
}

export default HtmlOverlay
