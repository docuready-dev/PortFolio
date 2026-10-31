import { Columns2, Sparkles, Moon, Sun } from 'lucide-react'
import { usePortfolioStore } from '../store'

const NAV_ITEMS = [
  { label: 'HERO', targetOffset: 0.0, domain: 'all' as const },
  { label: 'APPROACH', targetOffset: 0.20, domain: 'graphic' as const },
  { label: 'WEB', targetOffset: 0.40, domain: 'web' as const },
  { label: 'APPS', targetOffset: 0.60, domain: 'app' as const },
  { label: 'WORKS', targetOffset: 0.80, domain: 'all' as const },
  { label: 'CONTACT', targetOffset: 1.0, domain: 'all' as const },
]

export function NavigationBar() {
  const scrollProgress = usePortfolioStore((s) => s.scrollProgress)
  const isShiftedLayout = usePortfolioStore((s) => s.isShiftedLayout)
  const setIsShiftedLayout = usePortfolioStore((s) => s.setIsShiftedLayout)
  const blurIntensity = usePortfolioStore((s) => s.blurIntensity)
  const setBlurIntensity = usePortfolioStore((s) => s.setBlurIntensity)
  const theme = usePortfolioStore((s) => s.theme)
  const setTheme = usePortfolioStore((s) => s.setTheme)
  const isDark = theme === 'dark'

  const handleJump = (targetOffset: number) => {
    // Access Drei scroll DOM container exposed on window
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
    <header className="fixed top-5 left-4 md:left-8 right-4 md:right-8 flex items-center justify-between pointer-events-auto z-40 gap-2">
      {/* Brand & Identity: Ashley Ajoy Ghose / ॲशले घोष */}
      <div
        onClick={() => handleJump(0)}
        className="glass-panel px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-all duration-200"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shrink-0" />
        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-current whitespace-nowrap">
            ASHLEY AJOY GHOSE
          </span>
          <span className="text-[11px] font-devanagari text-amber-500 font-bold hidden sm:inline">
            ॲशले घोष
          </span>
        </div>
      </div>

      {/* Center Minimalist Jump Navigation */}
      <nav className="glass-panel px-3 py-1.5 rounded-full hidden lg:flex items-center gap-1 text-xs font-mono">
        {NAV_ITEMS.map((item) => {
          const isActive =
            (item.label === 'HERO' && scrollProgress < 0.10) ||
            (item.label === 'APPROACH' && scrollProgress >= 0.10 && scrollProgress < 0.30) ||
            (item.label === 'WEB' && scrollProgress >= 0.30 && scrollProgress < 0.50) ||
            (item.label === 'APPS' && scrollProgress >= 0.50 && scrollProgress < 0.70) ||
            (item.label === 'WORKS' && scrollProgress >= 0.70 && scrollProgress < 0.90) ||
            (item.label === 'CONTACT' && scrollProgress >= 0.90)

          return (
            <button
              key={item.label}
              onClick={() => handleJump(item.targetOffset)}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? isDark
                    ? 'bg-white/90 text-[#0B0B0E] font-semibold shadow-xs'
                    : 'bg-ink text-alabaster font-semibold shadow-xs'
                  : 'text-current/60 hover:text-current hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* Visual Optimization Controls & Progress Pill */}
      <div className="flex items-center gap-2">
        {/* Theme Switcher: Dark Obsidian vs Alabaster */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="glass-panel px-3 py-2 rounded-full flex items-center gap-1.5 text-xs font-mono transition-all duration-200 cursor-pointer text-current hover:opacity-80"
          title="Toggle Dark Obsidian vs Light Alabaster Theme"
        >
          {isDark ? (
            <>
              <Moon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="hidden sm:inline">THEME:</span>
              <span className="font-semibold text-indigo-300">DARK</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="hidden sm:inline">THEME:</span>
              <span className="font-semibold text-amber-700">LIGHT</span>
            </>
          )}
        </button>

        {/* Toggle 3D Spatial Shift (Split vs Centered) */}
        <button
          onClick={() => setIsShiftedLayout(!isShiftedLayout)}
          className={`glass-panel px-3 py-2 rounded-full flex items-center gap-1.5 text-xs font-mono transition-all duration-200 cursor-pointer ${
            isShiftedLayout
              ? isDark
                ? 'bg-white/90 text-[#0B0B0E] font-semibold'
                : 'bg-ink text-alabaster font-semibold'
              : 'text-current/60 hover:text-current hover:bg-white/10'
          }`}
          title="Toggle 3D lateral offset vs centered immersion"
        >
          <Columns2 className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">3D:</span>
          <span>{isShiftedLayout ? 'SPLIT' : 'CENTER'}</span>
        </button>

        {/* Toggle Frosted Background Blur Intensity */}
        <button
          onClick={() =>
            setBlurIntensity(blurIntensity === 'frosted' ? 'deep' : 'frosted')
          }
          className="glass-panel px-3 py-2 rounded-full hidden sm:flex items-center gap-1.5 text-xs font-mono text-current/70 hover:text-current transition-all duration-200 cursor-pointer"
          title="Toggle frosted glass diffusion blur intensity"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="hidden md:inline">BLUR:</span>
          <span className="uppercase font-semibold text-current">{blurIntensity}</span>
        </button>

        {/* Live Scroll Telemetry */}
        <div className="glass-panel px-3.5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 text-xs font-mono text-current">
          <span className="opacity-60 hidden xs:inline">SCROLL</span>
          <span className="font-semibold w-8 text-right font-mono">
            {(scrollProgress * 100).toFixed(0)}%
          </span>
        </div>
      </div>
    </header>
  )
}

export default NavigationBar
