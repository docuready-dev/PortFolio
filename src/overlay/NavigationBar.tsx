import { useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'

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

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const docHeight = document.documentElement.scrollHeight

    // Bottom of the page check: highlight Contact when reached
    if (scrollY + windowHeight >= docHeight - 90) {
      setActiveSection('contact')
      return
    }

    // Reading zone threshold: 36% down the viewport
    const triggerPoint = scrollY + windowHeight * 0.36

    let current = NAV_ITEMS[0].id
    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item.id)
      if (el) {
        if (el.offsetTop <= triggerPoint) {
          current = item.id
        }
      }
    }
    setActiveSection(current)
  }, [])

  const handleJump = (id: string) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (!el) return
    const lenis = (window as any).__LENIS__
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(el, { offset: -25, duration: 1.1 })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    updateActiveSection()

    const onScroll = () => {
      updateActiveSection()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    const lenis = (window as any).__LENIS__
    if (lenis && typeof lenis.on === 'function') {
      lenis.on('scroll', onScroll)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (lenis && typeof lenis.off === 'function') {
        lenis.off('scroll', onScroll)
      }
    }
  }, [updateActiveSection])

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 pointer-events-auto max-w-[96vw]">
      <div className="px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full flex items-center shadow-lg shadow-black/5 backdrop-blur-xl bg-[#FAF9F5]/90 text-[#111115] border border-black/5">
        <nav className="flex items-center gap-0.5 sm:gap-1 text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleJump(item.id)}
                className="relative px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-wider text-[11px] sm:text-xs font-semibold cursor-pointer transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#111115] rounded-full z-0 shadow-sm"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-150 ${
                    isActive
                      ? 'text-[#F4F3EF]'
                      : 'text-[#111115]/65 hover:text-[#111115]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar
