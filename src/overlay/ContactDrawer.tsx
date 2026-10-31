import { useState } from 'react'
import { motion } from 'motion/react'
import { Send, CheckCircle2, ArrowUpRight, Mail, Terminal, MapPin } from 'lucide-react'
import { usePortfolioStore } from '../store'

export function ContactDrawer() {
  const theme = usePortfolioStore((s) => s.theme)
  const isDark = theme === 'dark'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Graphic Web Design',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const domainOptions = [
    'Graphic Web Design',
    'Mobile App Development',
    'Full-Stack SaaS (Strovr / LearnReady)',
    'Design Systems & 3D WebGL',
  ]

  return (
    <div
      className={`w-full rounded-3xl p-8 sm:p-12 border transition-all duration-300 ${
        isDark
          ? 'bg-[#121218]/90 border-white/15 text-[#F4F3EF]'
          : 'bg-white/90 border-black/10 text-[#111115]'
      }`}
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Column: Direct Info & Socials */}
        <div className="md:w-5/12 flex flex-col justify-between">
          <div>
            <span className="px-3 py-1 rounded-full bg-white/10 text-current text-[11px] font-mono font-semibold tracking-wider inline-block mb-4 border border-white/10">
              DIRECT // INBOX
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Start a Conversation.
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6 font-medium">
              I am available for bespoke web designs, mobile applications, and technical partnerships. Drop a note below or reach out directly to my personal email.
            </p>

            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono opacity-60">PERSONAL CHANNELS</div>
              <a
                href="mailto:ashley@docuready.dev"
                className="flex items-center gap-2 text-sm font-semibold hover:underline text-current"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>ashley@docuready.dev</span>
              </a>
              <div className="flex items-center gap-2 text-xs font-mono opacity-80">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>MAHARASHTRA, INDIA &bull; REMOTE GLOBALLY</span>
              </div>
            </div>
          </div>

          {/* Social Network Pills */}
          <div className="pt-6 border-t border-current/10 flex flex-wrap gap-2 text-xs font-mono">
            <a
              href="https://github.com/docuready-dev"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-2 transition-all group"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-semibold">github.com/docuready-dev</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="md:w-7/12">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white/5 border border-emerald-500/30"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-2">Inquiry Dispatched</h4>
              <p className="text-sm opacity-80 max-w-xs mb-6">
                Thank you for reaching out. Ashley will review your project parameters and respond within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2 rounded-full bg-white/15 hover:bg-white/25 text-current text-xs font-mono font-medium border border-white/10 cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider opacity-70 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-current text-sm placeholder:opacity-40 focus:outline-hidden focus:border-indigo-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider opacity-70 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-current text-sm placeholder:opacity-40 focus:outline-hidden focus:border-indigo-400 transition-colors"
                  />
                </div>
              </div>

              {/* Project Scope Selection */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider opacity-70 mb-2">
                  Project Domain / Scope
                </label>
                <div className="flex flex-wrap gap-2">
                  {domainOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, domain: opt })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        formData.domain === opt
                          ? 'bg-indigo-500 text-white font-semibold shadow-xs'
                          : 'bg-white/10 border border-white/10 opacity-75 hover:opacity-100 hover:bg-white/15'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider opacity-70 mb-1.5">
                  Briefing & Project Vision
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your graphic web design or mobile app development goals..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-current text-sm placeholder:opacity-40 focus:outline-hidden focus:border-indigo-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 active:scale-[0.99] transition-all shadow-md disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE TO ASHLEY</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactDrawer
