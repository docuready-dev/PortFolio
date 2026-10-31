import { useState } from 'react'
import { motion } from 'motion/react'

export function ContactDrawer() {
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
    <div className="w-full py-8 text-left text-[#111115]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Info & Channels */}
        <div className="lg:w-5/12 flex flex-col justify-between self-stretch">
          <div>
            <div className="text-xs font-mono font-medium tracking-wider uppercase opacity-50 mb-3">
              Direct Contact
            </div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Start a Conversation.
            </h3>
            <p className="text-base opacity-80 leading-relaxed mb-8">
              I am available for bespoke web designs, mobile applications, and technical partnerships. Send an enquiry using the form or reach out directly to my personal channels.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider opacity-50 mb-1">
                  Personal Email
                </div>
                <a
                  href="mailto:ashley@docuready.dev"
                  className="text-lg font-bold hover:underline text-[#111115]"
                >
                  ashley@docuready.dev
                </a>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider opacity-50 mb-1">
                  Base & Location
                </div>
                <div className="text-sm font-semibold font-mono opacity-90">
                  Mumbai, India &bull; Remote Globally
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="pt-6 border-t border-black/10 flex flex-wrap gap-4 text-xs font-mono">
            <a
              href="https://github.com/docuready-dev"
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-semibold text-[#111115] opacity-80 hover:opacity-100"
            >
              github.com/docuready-dev ↗
            </a>
          </div>
        </div>

        {/* Right Column: Boxed Out Enquiry Column */}
        <div className="w-full lg:w-7/12">
          <div className="bg-white p-7 sm:p-10 rounded-2xl border border-black/10 shadow-lg shadow-black/[0.03]">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-black/5">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold opacity-70">
                Project Enquiry
              </span>
              <span className="text-[11px] font-mono opacity-40">Direct Dispatch</span>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-10 text-left"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 mb-2 font-semibold">
                  Enquiry Dispatched
                </div>
                <h4 className="text-2xl font-bold mb-3">Thank you for reaching out.</h4>
                <p className="text-sm opacity-80 max-w-md mb-6 leading-relaxed">
                  I will personally review your project note and reply to your email within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-wider underline hover:opacity-75 cursor-pointer font-semibold"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider opacity-70 mb-2 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-black/10 text-[#111115] text-sm placeholder:opacity-35 focus:outline-hidden focus:border-black/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider opacity-70 mb-2 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-black/10 text-[#111115] text-sm placeholder:opacity-35 focus:outline-hidden focus:border-black/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Scope Selection */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider opacity-70 mb-2 font-semibold">
                    Project Scope
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {domainOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, domain: opt })}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                          formData.domain === opt
                            ? 'bg-[#111115] text-[#F4F3EF] font-semibold shadow-xs'
                            : 'bg-[#F8F7F4] border border-black/10 opacity-75 hover:opacity-100 hover:bg-black/5'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider opacity-70 mb-2 font-semibold">
                    Project Vision & Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your graphic web design or mobile app development requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-black/10 text-[#111115] text-sm placeholder:opacity-35 focus:outline-hidden focus:border-black/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-opacity cursor-pointer bg-[#111115] text-[#F4F3EF] hover:opacity-90 disabled:opacity-50 shadow-md"
                >
                  {isSubmitting ? 'Transmitting Enquiry...' : 'Send Enquiry to Ashley'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDrawer
