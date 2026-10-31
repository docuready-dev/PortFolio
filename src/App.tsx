import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { NavigationBar } from './overlay/NavigationBar'
import { HtmlOverlay } from './overlay/HtmlOverlay'
import { ImageLightbox } from './overlay/ImageLightbox'
import { usePortfolioStore } from './store'

export default function App() {
  const theme = usePortfolioStore((s) => s.theme)
  const setScrollProgress = usePortfolioStore((s) => s.setScrollProgress)
  const setTheme = usePortfolioStore((s) => s.setTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    // Keep html & body backgrounds synchronized with active theme
    if (isDark) {
      document.documentElement.classList.add('dark-theme')
      document.body.style.backgroundColor = '#0B0B0E'
      document.body.style.color = '#F4F3EF'
    } else {
      document.documentElement.classList.remove('dark-theme')
      document.body.style.backgroundColor = '#F4F3EF'
      document.body.style.color = '#111115'
    }
  }, [isDark])

  useEffect(() => {
    // Check initial query params for deep-linked section or theme
    const params = new URLSearchParams(window.location.search)
    const qTheme = params.get('theme')
    if (qTheme === 'light' || qTheme === 'dark') {
      setTheme(qTheme)
    }

    const targetId = params.get('section') || window.location.hash.replace('#', '')
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          const lenis = (window as any).__LENIS__
          if (lenis) lenis.scrollTo(el, { immediate: true })
          else el.scrollIntoView()
        }
      }, 200)
    }
  }, [setTheme])

  useEffect(() => {
    // Initialize Lenis smooth momentum scroll engine (Artemii Lebedev / Awwwards standard)
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.4,
      infinite: false,
    })

    ;(window as any).__LENIS__ = lenis

    lenis.on('scroll', (e: any) => {
      setScrollProgress(e.progress)
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as any).__LENIS__
    }
  }, [setScrollProgress])

  return (
    <div
      className={`min-h-screen w-full select-none transition-colors duration-500 overflow-x-hidden ${
        isDark ? 'bg-[#0B0B0E] text-[#F4F3EF] dark-theme' : 'bg-[#F4F3EF] text-[#111115]'
      }`}
    >
      {/* Floating Centered Minimalist Navigation Bar */}
      <NavigationBar />

      {/* Full-Screen Image Lightbox (Click to View Screenshot) */}
      <ImageLightbox />

      {/* Main Left-Aligned Smooth Scrolling Content Stream */}
      <main className="w-full">
        <HtmlOverlay />
      </main>
    </div>
  )
}
