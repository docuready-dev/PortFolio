import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'About', id: 'hero' },
  { label: 'Approach', id: 'approach' },
  { label: 'Execution', id: 'execution' },
  { label: 'Apps', id: 'apps' },
  { label: 'Projects', id: 'works' },
  { label: 'Aesthetics', id: 'aesthetics' },
  { label: 'Contact', id: 'contact' },
]

export function NavigationBar() {
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
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 pointer-events-auto max-w-[95vw]">
      <div className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full flex items-center shadow-lg shadow-black/5 backdrop-blur-xl bg-white/95 text-[#111115] border border-black/5">
        {/* Navigation Menus Only - Light Theme, Zero Icons */}
        <nav className="flex items-center gap-0.5 sm:gap-1 text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleJump(item.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-wider text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111115] text-[#F4F3EF] shadow-xs'
                    : 'text-[#111115]/65 hover:text-[#111115] hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar
