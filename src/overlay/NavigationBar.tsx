import { Moon, Sun } from 'lucide-react'
import { usePortfolioStore } from '../store'

const NAV_ITEMS = [
  { label: 'Hero', targetOffset: 0.0 },
  { label: 'Approach', targetOffset: 0.20 },
  { label: 'Web', targetOffset: 0.40 },
  { label: 'Apps', targetOffset: 0.60 },
  { label: 'Works', targetOffset: 0.80 },
  { label: 'Contact', targetOffset: 1.0 },
]

export function NavigationBar() {
  const scrollProgress = usePortfolioStore((s) => s.scrollProgress)
  const theme = usePortfolioStore((s) => s.theme)
  const setTheme = usePortfolioStore((s) => s.setTheme)
  const isDark = theme === 'dark'

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
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 pointer-events-auto max-w-[95vw]">
      <div className="glass-panel px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 shadow-2xl border border-white/15 backdrop-blur-2xl">
        {/* Navigation Menus */}
        <nav className="flex items-center gap-0.5 sm:gap-1 text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive =
              (item.label === 'Hero' && scrollProgress < 0.10) ||
              (item.label === 'Approach' && scrollProgress >= 0.10 && scrollProgress < 0.30) ||
              (item.label === 'Web' && scrollProgress >= 0.30 && scrollProgress < 0.50) ||
              (item.label === 'Apps' && scrollProgress >= 0.50 && scrollProgress < 0.70) ||
              (item.label === 'Works' && scrollProgress >= 0.70 && scrollProgress < 0.90) ||
              (item.label === 'Contact' && scrollProgress >= 0.90)

            return (
              <button
                key={item.label}
                onClick={() => handleJump(item.targetOffset)}
                className={`px-2.5 sm:px-3.5 py-1.5 rounded-full uppercase tracking-wider text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-white/90 text-[#0B0B0E] shadow-xs'
                      : 'bg-ink text-alabaster shadow-xs'
                    : 'text-current/60 hover:text-current hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Subtle Vertical Divider */}
        <div className="w-[1px] h-4 bg-current/15 mx-0.5 sm:mx-1 shrink-0" />

        {/* Theme Toggle Icon Only */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="p-1.5 sm:p-2 rounded-full hover:bg-white/15 transition-all duration-200 cursor-pointer text-current flex items-center justify-center shrink-0"
          aria-label="Toggle theme"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>
      </div>
    </header>
  )
}

export default NavigationBar
