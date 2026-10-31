import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Layers, Cpu, Award, Sparkles, CheckCircle2 } from 'lucide-react'
import { usePortfolioStore } from '../store'

export function ProjectModal() {
  const activeProject = usePortfolioStore((s) => s.activeProject)
  const setActiveProject = usePortfolioStore((s) => s.setActiveProject)
  const theme = usePortfolioStore((s) => s.theme)
  const isDark = theme === 'dark'

  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setActiveProject])

  return (
    <AnimatePresence>
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Frosted Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className={`relative w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-panel rounded-3xl p-7 sm:p-10 shadow-2xl border z-10 custom-scrollbar ${
              isDark
                ? 'bg-[#121218]/95 border-white/15 text-[#F4F3EF]'
                : 'bg-white/95 border-white/80 text-[#111115]'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-current transition-colors duration-200 cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header: Project Index & Meta */}
            <div className="flex items-center gap-3 mb-4 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-indigo-500 text-white font-semibold tracking-wider">
                {activeProject.number}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-current/80 uppercase tracking-wider font-semibold">
                {activeProject.domain} Architecture
              </span>
              <span className="opacity-60 ml-auto font-mono">
                {activeProject.year} &bull; {activeProject.client}
              </span>
            </div>

            {/* Main Title & Subtitle */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-current mb-2">
              {activeProject.title}
            </h2>
            <p className="text-base sm:text-lg opacity-75 font-medium mb-6">
              {activeProject.subtitle}
            </p>

            {/* Role & Core Impact Banner */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider opacity-60 block">
                  Project Leadership & Role
                </span>
                <span className="text-sm font-semibold text-current">
                  {activeProject.role}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/15 px-3 py-1.5 rounded-full w-fit border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Production Verified</span>
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-8">
              <h3 className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-500" />
                Executive Summary & Design Brief
              </h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-85">
                {activeProject.description}
              </p>
            </div>

            {/* System Architecture & Engineering Breakdown */}
            <div className="mb-8">
              <h3 className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                Technical Architecture Breakdown
              </h3>
              <div className="space-y-2.5">
                {activeProject.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm opacity-90 leading-relaxed font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mb-8">
              <h3 className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3">
                Core Production Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/10 border border-white/15 text-current font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics & Recognition */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Key Metrics & Engineering Production
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProject.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-current flex items-center gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Modal Action Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono opacity-60">
                Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20">ESC</kbd> to return to 3D space
              </span>
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-semibold transition-colors duration-200 cursor-pointer shadow-md"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
