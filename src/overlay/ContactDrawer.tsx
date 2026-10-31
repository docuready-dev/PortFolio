import { useState } from 'react'
import { motion } from 'motion/react'
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
    'Full-Stack Applications',
    'Design Systems & UI/UX',
  ]

  return (
    <div
      className={`w-full py-8 text-left transition-colors duration-300 ${
        isDark ? 'text-[#F4F3EF]' : 'text-[#111115]'
      }`}
    >
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        {/* Left Column: Direct Info & Socials */}
        <div className="md:w-5/12 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-medium tracking-wider uppercase opacity-50 mb-3">
              Direct Contact
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Start a Conversation.
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-8">
              I am available for bespoke web designs, mobile applications, and technical partnerships. Drop a note here or reach out directly to my personal channels.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider opacity-50 mb-1">
                  Personal Email
                </div>
                <a
                  href="mailto:ashley@docuready.dev"
                  className="text-base font-semibold hover:underline text-current font-sans"
                >
                  ashley@docuready.dev
                </a>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider opacity-50 mb-1">
                  Location & Availability
                </div>
                <div className="text-sm opacity-80 font-mono">
                  Maharashtra, India &bull; Remote Globally
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="pt-6 border-t border-current/15 flex flex-wrap gap-4 text-xs font-mono">
            <a
              href="https://github.com/docuready-dev"
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-semibold text-current opacity-80 hover:opacity-100"
            >
              github.com/docuready-dev ↗
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="md:w-7/12">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-left"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                Message Dispatched
              </div>
              <h4 className="text-2xl font-bold mb-3">Thank you for reaching out.</h4>
              <p className="text-sm opacity-80 max-w-md mb-6 leading-relaxed">
                I will personally review your project note and reply to your email within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-mono uppercase tracking-wider underline hover:opacity-75 cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider opacity-60 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-3 rounded-lg bg-current/5 text-current text-sm placeholder:opacity-30 focus:outline-hidden focus:bg-current/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider opacity-60 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-lg bg-current/5 text-current text-sm placeholder:opacity-30 focus:outline-hidden focus:bg-current/10 transition-colors"
                  />
                </div>
              </div>

              {/* Project Scope Selection */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider opacity-60 mb-2">
                  Project Domain
                </label>
                <div className="flex flex-wrap gap-2">
                  {domainOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, domain: opt })}
                      className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer ${
                        formData.domain === opt
                          ? isDark
                            ? 'bg-white text-[#0B0B0E] font-semibold'
                            : 'bg-[#111115] text-[#F4F3EF] font-semibold'
                          : 'bg-current/5 opacity-70 hover:opacity-100 hover:bg-current/10'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider opacity-60 mb-2">
                  Project Vision & Scope
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your graphic web design or mobile app development goals..."
                  className="w-full px-4 py-3 rounded-lg bg-current/5 text-current text-sm placeholder:opacity-30 focus:outline-hidden focus:bg-current/10 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase transition-opacity cursor-pointer ${
                  isDark
                    ? 'bg-white text-[#0B0B0E] hover:opacity-90'
                    : 'bg-[#111115] text-[#F4F3EF] hover:opacity-90'
                } disabled:opacity-50`}
              >
                {isSubmitting ? 'Transmitting Message...' : 'Send Message to Ashley'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactDrawer
