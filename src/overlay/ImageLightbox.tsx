import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { usePortfolioStore } from '../store'

export function ImageLightbox() {
  const activeImage = usePortfolioStore((s) => s.activeImage)
  const setActiveImage = usePortfolioStore((s) => s.setActiveImage)

  const [zoom, setZoom] = useState<number>(1)
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const dragStart = useRef<{ x: number; y: number; startPanX: number; startPanY: number }>({
    x: 0,
    y: 0,
    startPanX: 0,
    startPanY: 0,
  })
  const containerRef = useRef<HTMLDivElement>(null)

  // Reset zoom and pan whenever a new image is opened
  useEffect(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
    setIsDragging(false)
  }, [activeImage])

  const setClampedZoom = useCallback((newZoom: number) => {
    const clamped = Math.min(5.0, Math.max(1.0, Math.round(newZoom * 10) / 10))
    setZoom(clamped)
    if (clamped === 1.0) {
      setPan({ x: 0, y: 0 })
    }
  }, [])

  const zoomIn = () => setClampedZoom(zoom + 0.5)
  const zoomOut = () => setClampedZoom(zoom - 0.5)
  const resetZoom = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  // Handle keyboard shortcuts (+ / - / 0 / r / ESC / Arrows)
  useEffect(() => {
    if (!activeImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null)
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault()
        setClampedZoom(zoom + 0.5)
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault()
        setClampedZoom(zoom - 0.5)
      } else if (e.key === '0' || e.key === 'r' || e.key === 'R') {
        e.preventDefault()
        resetZoom()
      } else if (zoom > 1) {
        const step = 40
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          setPan((p) => ({ ...p, x: p.x + step }))
        } else if (e.key === 'ArrowRight') {
          e.preventDefault()
          setPan((p) => ({ ...p, x: p.x - step }))
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setPan((p) => ({ ...p, y: p.y + step }))
        } else if (e.key === 'ArrowDown') {
          e.preventDefault()
          setPan((p) => ({ ...p, y: p.y - step }))
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImage, zoom, setClampedZoom, setActiveImage])

  // Wheel zoom handling
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const zoomFactor = -e.deltaY * 0.002
    setZoom((prev) => {
      const next = Math.min(5.0, Math.max(1.0, Math.round((prev + zoomFactor) * 100) / 100))
      if (next === 1.0) {
        setPan({ x: 0, y: 0 })
      }
      return next
    })
  }

  // Double-click cycles zoom: 1x -> 2.5x -> 5x (MAX) -> 1x
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (zoom < 2.0) {
      setZoom(2.5)
    } else if (zoom < 4.5) {
      setZoom(5.0)
    } else {
      resetZoom()
    }
  }

  // Single click when zoomed out to quickly zoom into 2x
  const handleClickImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (zoom === 1) {
      setZoom(2.2)
    }
  }

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      startPanX: pan.x,
      startPanY: pan.y,
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return
    e.preventDefault()
    const deltaX = e.clientX - dragStart.current.x
    const deltaY = e.clientY - dragStart.current.y

    const container = containerRef.current
    const maxPanX = container ? (container.clientWidth * (zoom - 1)) / 1.7 : 800
    const maxPanY = container ? (container.clientHeight * (zoom - 1)) / 1.7 : 600

    setPan({
      x: Math.max(-maxPanX, Math.min(maxPanX, dragStart.current.startPanX + deltaX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, dragStart.current.startPanY + deltaY)),
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const livePlatformLink = activeImage
    ? activeImage.title.toLowerCase().includes('learnready')
      ? { url: 'https://docuready-dev.github.io/LearnReady/', label: 'learnready.space' }
      : activeImage.title.toLowerCase().includes('strovr')
      ? { url: 'https://strovr.space', label: 'strovr.space' }
      : null
    : null

  return (
    <AnimatePresence>
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-3 sm:p-6 backdrop-blur-2xl select-none overflow-hidden"
          style={{ backgroundColor: 'rgba(10, 10, 14, 0.98)' }}
          onClick={() => setActiveImage(null)}
          onMouseUp={handleMouseUp}
        >
          {/* Top Control Bar */}
          <div
            className="w-full max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 text-xs font-mono text-white/80 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title & Metadata */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-bold text-white text-sm sm:text-base tracking-tight">
                  {activeImage.title}
                </span>
                {livePlatformLink && (
                  <a
                    href={livePlatformLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-400/30 text-[11px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm group"
                    title={`Open live platform: ${livePlatformLink.label}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{livePlatformLink.label}</span>
                    <span className="text-[11px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                )}
              </div>
              {activeImage.subtitle && (
                <span className="opacity-60 text-xs hidden sm:inline line-clamp-1">
                  {activeImage.subtitle}
                </span>
              )}
            </div>

            {/* Deep Zoom Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
                <button
                  onClick={zoomOut}
                  disabled={zoom <= 1}
                  className="w-7 h-7 rounded-full hover:bg-white/15 flex items-center justify-center font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  title="Zoom Out (-)"
                >
                  &minus;
                </button>

                <span className="px-2.5 font-bold text-xs tracking-wider min-w-[58px] text-center">
                  {Math.round(zoom * 100)}%
                </span>

                <button
                  onClick={zoomIn}
                  disabled={zoom >= 5}
                  className="w-7 h-7 rounded-full hover:bg-white/15 flex items-center justify-center font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  title="Zoom In (+)"
                >
                  +
                </button>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setClampedZoom(1.0)}
                  className={`px-2.5 py-1 rounded text-[11px] uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                    zoom === 1.0 ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                  title="Fit to Screen"
                >
                  Fit 1x
                </button>

                <button
                  onClick={() => setClampedZoom(2.5)}
                  className={`px-2.5 py-1 rounded text-[11px] uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                    zoom === 2.5 ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                  title="Native 100% 1:1 Scale"
                >
                  2.5x
                </button>

                <button
                  onClick={() => setClampedZoom(5.0)}
                  className={`px-2.5 py-1 rounded text-[11px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    zoom === 5.0
                      ? 'bg-amber-400 text-black shadow-md'
                      : 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-300'
                  }`}
                  title="Maximum 500% Macro Zoom"
                >
                  5x MAX
                </button>

                {zoom > 1 && (
                  <button
                    onClick={resetZoom}
                    className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                    title="Reset Zoom (0)"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="ml-2 px-3.5 py-1 rounded-full bg-white text-black font-bold uppercase tracking-wider text-[11px] hover:bg-white/90 transition-all cursor-pointer shadow-sm"
              >
                Close &times;
              </button>
            </div>
          </div>

          {/* Main Inspection Viewport Canvas */}
          <div
            ref={containerRef}
            className={`relative w-full max-w-7xl h-[76vh] sm:h-[80vh] overflow-hidden flex items-center justify-center rounded-xl bg-black/40 border border-white/10 ${
              zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
            }`}
            onClick={handleClickImage}
            onDoubleClick={handleDoubleClick}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            <div
              className="relative transition-transform select-none max-w-full max-h-full flex items-center justify-center"
              style={{
                transform: `translate3d(${pan.x}px, ${pan.y}px, 0px) scale(${zoom})`,
                transition: isDragging ? 'none' : 'transform 0.16s cubic-bezier(0.16, 1, 0.3, 1)',
                transformOrigin: 'center center',
              }}
            >
              <img
                src={activeImage.src}
                alt={activeImage.title}
                draggable={false}
                className="max-w-[90vw] max-h-[75vh] object-contain shadow-2xl rounded pointer-events-none block"
                style={{ imageRendering: zoom > 2.5 ? 'auto' : 'auto' }}
              />
            </div>

            {/* Visual Zoom Scale Badge Indicator */}
            {zoom > 1 && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold tracking-wider border border-white/20 shadow-lg pointer-events-none">
                {Math.round(zoom * 100)}% {zoom >= 5 ? '[MAX ZOOM]' : ''} &bull; Drag to Pan
              </div>
            )}
          </div>

          {/* Bottom Interactive Guide Bar */}
          <div
            className="w-full max-w-7xl pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/60 text-center sm:text-left gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span>Scroll wheel or buttons to zoom up to <strong>500% (5x MAX)</strong></span>
              <span className="hidden sm:inline"> &bull; Click & drag to pan around image</span>
              <span className="hidden md:inline"> &bull; Double-click to cycle zoom presets</span>
            </div>
            <div className="opacity-80">
              [+] Zoom In &bull; [-] Zoom Out &bull; [R] Reset &bull; [ESC] Close
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageLightbox
