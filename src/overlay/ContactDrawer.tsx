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
  const [hasCopied, setHasCopied] = useState(false)

  const domainOptions = [
    'Graphic Web Design',
    'Mobile App Development',
    'Full-Stack Applications',
    'Design Systems & UI/UX',
  ]

  // Formatted message payload for WhatsApp & Email
  const getFormattedMessage = () => {
    return [
      `*New Project Enquiry — Ashley Ghose Portfolio*`,
      `• Client Name: ${formData.name.trim() || 'Client'}`,
      `• Email Address: ${formData.email.trim() || 'Not specified'}`,
      `• Project Scope: ${formData.domain}`,
      `• Project Vision & Goals:`,
      `${formData.message.trim() || 'No additional details provided'}`,
      `• Location Target: Mumbai, India (Global Remote)`,
    ].join('\n')
  }

  const getWhatsAppUrl = () => {
    const text = getFormattedMessage()
    return `https://wa.me/919004804043?text=${encodeURIComponent(text)}`
  }

  const getMailtoUrl = () => {
    const subject = `Project Enquiry [${formData.domain}]: ${formData.name.trim() || 'New Client'}`
    const body = getFormattedMessage().replace(/\*/g, '')
    return `mailto:ashleyghose64@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const waUrl = getWhatsAppUrl()
    const mailUrl = getMailtoUrl()
    const rawText = getFormattedMessage().replace(/\*/g, '')

    // 1. Copy formatted text to clipboard
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(rawText).catch(() => {})
      }
    } catch (_) {}

    // 2. Open WhatsApp directly in new tab/app
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    } catch (_) {}

    // 3. Trigger default email client via hidden anchor
    setTimeout(() => {
      try {
        const link = document.createElement('a')
        link.href = mailUrl
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (_) {}
    }, 400)

    // 4. Show success confirmation hub
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  const copyToClipboard = () => {
    const text = getFormattedMessage().replace(/\*/g, '')
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setHasCopied(true)
        setTimeout(() => setHasCopied(false), 2500)
      })
    }
  }

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
                  href="mailto:ashleyghose64@gmail.com"
                  className="text-lg font-bold hover:underline text-[#111115]"
                >
                  ashleyghose64@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider opacity-50 mb-1">
                  WhatsApp & Direct Line
                </div>
                <a
                  href="https://wa.me/919004804043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:underline text-[#111115]"
                >
                  +91 90048 04043
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

          {/* Direct Channels */}
          <div className="pt-6 border-t border-black/10 flex flex-wrap gap-5 text-xs font-mono">
            <a
              href="mailto:ashleyghose64@gmail.com"
              className="hover:underline font-semibold text-[#111115] opacity-80 hover:opacity-100"
            >
              Email ↗
            </a>
            <a
              href="https://wa.me/919004804043"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold text-[#111115] opacity-80 hover:opacity-100"
            >
              WhatsApp ↗
            </a>
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
              <span className="text-[11px] font-mono opacity-60 text-emerald-700 font-medium">
                Dual Dispatch: WhatsApp + Email
              </span>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-4 text-left"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4 font-semibold">
                  ✓ Dispatch Activated
                </div>
                <h4 className="text-2xl sm:text-3xl font-black mb-3">Enquiry Prepared for Ashley.</h4>
                <p className="text-sm opacity-80 max-w-lg mb-6 leading-relaxed">
                  We have prepared and opened your project brief. To ensure Ashley receives it immediately, you can confirm via WhatsApp or Email below:
                </p>

                {/* Direct Channel Action Buttons */}
                <div className="space-y-3 mb-6">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#111115] text-[#F4F3EF] hover:opacity-90 transition-opacity font-mono text-xs font-bold uppercase tracking-wider"
                  >
                    <span>Send on WhatsApp (+91 90048 04043)</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={getMailtoUrl()}
                    className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-black/5 border border-black/15 text-[#111115] hover:bg-black/10 transition-colors font-mono text-xs font-bold uppercase tracking-wider"
                  >
                    <span>Send via Email (ashleyghose64@gmail.com)</span>
                    <span>↗</span>
                  </a>
                </div>

                {/* Copy Text Option */}
                <div className="p-4 rounded-xl bg-[#F8F7F4] border border-black/10 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider opacity-60">
                      Formatted Brief Preview
                    </span>
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="text-xs font-mono font-semibold underline cursor-pointer hover:opacity-75"
                    >
                      {hasCopied ? 'Copied to Clipboard! ✓' : 'Copy Brief Text'}
                    </button>
                  </div>
                  <pre className="text-xs font-mono opacity-80 whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
                    {getFormattedMessage().replace(/\*/g, '')}
                  </pre>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-wider underline hover:opacity-75 cursor-pointer font-semibold"
                >
                  Edit Brief & Send Another
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

                <div className="space-y-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer bg-[#111115] text-[#F4F3EF] hover:opacity-90 disabled:opacity-50 shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Routing Directly...' : 'Dispatch Enquiry Directly (WhatsApp & Email)'}</span>
                    <span>↗</span>
                  </button>
                  <div className="text-[11px] font-mono text-center opacity-55">
                    Routes directly to Ashley's WhatsApp (+91 90048 04043) and personal email
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDrawer
