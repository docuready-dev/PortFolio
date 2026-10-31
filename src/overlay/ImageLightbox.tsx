import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { usePortfolioStore } from '../store'

export function ImageLightbox() {
  const activeImage = usePortfolioStore((s) => s.activeImage)
  const setActiveImage = usePortfolioStore((s) => s.setActiveImage)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setActiveImage])

  return (
    <AnimatePresence>
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 bg-black/92 backdrop-blur-md cursor-zoom-out select-none"
          onClick={() => setActiveImage(null)}
        >
          {/* Top Bar with Minimalist Close text button */}
          <div
            className="w-full max-w-6xl flex items-center justify-between pb-4 text-xs font-mono text-white/70"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="font-semibold text-white">{activeImage.title}</span>
              {activeImage.subtitle && (
                <span className="opacity-60 ml-3 hidden sm:inline">{activeImage.subtitle}</span>
              )}
            </div>
            <button
              onClick={() => setActiveImage(null)}
              className="text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white px-3 py-1 rounded border border-white/20 hover:border-white/50 transition-colors cursor-pointer"
            >
              Close [ESC]
            </button>
          </div>

          {/* Main Full-Size Image Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
            className="relative max-w-6xl max-h-[82vh] overflow-hidden rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="w-full h-auto max-h-[82vh] object-contain block bg-[#111115]"
            />
          </motion.div>

          <p className="mt-3 text-[11px] font-mono text-white/50 text-center">
            Click anywhere outside or press ESC to dismiss
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageLightbox
