import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { usePortfolioStore } from '../store'

const NAV_ITEMS = [
  { label: 'About', id: 'hero' },
  { label: 'Approach', id: 'approach' },
  { label: 'Web', id: 'web' },
  { label: 'Apps', id: 'apps' },
  { label: 'Projects', id: 'works' },
  { label: 'Contact', id: 'contact' },
]

export function NavigationBar() {
  const theme = usePortfolioStore((s) => s.theme)
  const setTheme = usePortfolioStore((s) => s.setTheme)
  const isDark = theme === 'dark'
  const [activeSection, setActiveSection] = useState('hero')

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0.1,
      }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[95vw]">
      <div
        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 shadow-2xl transition-all duration-300 border backdrop-blur-xl ${
          isDark
            ? 'bg-[#121218]/85 border-white/15 text-[#F4F3EF] shadow-black/50'
            : 'bg-white/90 border-black/10 text-[#111115] shadow-black/5'
        }`}
      >
        {/* Navigation Menus Only - No icons, no name */}
        <nav className="flex items-center gap-0.5 sm:gap-1 text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleJump(item.id)}
                className={`px-2.5 sm:px-3.5 py-1.5 rounded-full uppercase tracking-wider text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-white text-[#0B0B0E] shadow-sm'
                      : 'bg-[#111115] text-[#F4F3EF] shadow-sm'
                    : isDark
                    ? 'text-white/60 hover:text-white hover:bg-white/10'
                    : 'text-[#111115]/60 hover:text-[#111115] hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Subtle Divider */}
        <div
          className={`w-[1px] h-4 mx-0.5 sm:mx-1 shrink-0 ${
            isDark ? 'bg-white/20' : 'bg-black/15'
          }`}
        />

        {/* Theme Toggle: Textless Icon Only */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 ${
            isDark
              ? 'hover:bg-white/15 text-amber-400'
              : 'hover:bg-black/5 text-indigo-600'
          }`}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
          )}
        </button>
      </div>
    </header>
  )
}

export default NavigationBar
