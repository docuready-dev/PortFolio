import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { NavigationBar } from './overlay/NavigationBar'
import { HtmlOverlay } from './overlay/HtmlOverlay'
import { ImageLightbox } from './overlay/ImageLightbox'
import { usePortfolioStore } from './store'

export default function App() {
  const setScrollProgress = usePortfolioStore((s) => s.setScrollProgress)

  useEffect(() => {
    // Light theme only
    document.documentElement.classList.remove('dark', 'dark-theme')
    document.body.style.backgroundColor = '#F4F3EF'
    document.body.style.color = '#111115'
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
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
  }, [])

  useEffect(() => {
    // Initialize Lenis smooth momentum scroll engine
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
    <div className="min-h-screen w-full select-none bg-[#F4F3EF] text-[#111115] overflow-x-hidden font-sans">
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
