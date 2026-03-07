import React, { useState } from 'react'
import { trackContactFormSubmit } from '../utils/analytics'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import { sendContactForm } from '../utils/emailService'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'call',
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const breadcrumbs = [{ label: 'Contact', url: null }]

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactForm(formData)
      if (result.success) {
        trackContactFormSubmit(formData.interest)
        setFormStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          interest: 'call',
        })
        setTimeout(() => setFormStatus(''), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus(''), 5000)
      }
    } catch {
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Contact | Norivane"
        description="Speak to Norivane about the Saleability Diagnostic, exit readiness, Exit Architecture, or the Business Oracle. Book a call or send a message."
        keywords="contact norivane, saleability diagnostic, exit readiness, Matthew Broadbent, exit architecture"
        canonicalUrl="/contact"
      />

      <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />

      {/* Hero */}
      <section className="pt-24 pb-20 bg-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Contact <span className="text-teal">Norivane</span>
            </h1>
            <div className="space-y-5 max-w-3xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                Most founders start with a conversation. The point is to understand
                where buyers would press, and what the sensible next step is.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Book a 30-minute call, or send a message below if you would prefer
                to write first.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/matthew-norivane/mb-30-minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
              >
                Book a 30-minute call <ArrowRight size={20} />
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-blue transition-all duration-300"
              >
                Send a message <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact details + form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact details */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-dark-blue mb-8">Start here</h2>

              <div className="mb-10 p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <h3 className="text-lg font-bold text-dark-blue mb-3">
                  Prefer to speak first?
                </h3>
                <p className="text-dark-grey leading-relaxed mb-5">
                  A short call is usually the fastest way to understand where the
                  business sits, what buyers are likely to focus on, and whether a
                  diagnostic is the right next step.
                </p>
                <a
                  href="https://calendly.com/matthew-norivane/mb-30-minutes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200"
                >
                  Book a 30-minute call <ArrowRight size={16} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-dark-blue mb-6">Contact details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-teal mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-dark-blue">Email</div>
                    <a
                      href="mailto:us@norivane.co.uk"
                      className="text-medium-grey hover:text-teal transition-colors duration-200"
                    >
                      us@norivane.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-teal mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-dark-blue">Phone</div>
                    <a
                      href="tel:+447736105055"
                      className="text-medium-grey hover:text-teal transition-colors duration-200"
                    >
                      +44 (0) 7736 105 055
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-teal mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-dark-blue">Location</div>
                    <span className="text-medium-grey">Swansea, Wales, UK</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-3"
            >
              {formStatus === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={28} className="text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-3">Message sent</h3>
                  <p className="text-medium-grey">
                    Thank you. We&apos;ll be in touch within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold text-dark-blue mb-3">
                      Send a message
                    </h2>
                    <p className="text-medium-grey leading-relaxed">
                      Use the form if you would rather outline the situation first.
                      Keep it simple. A few lines is enough.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-dark-blue mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal text-dark-grey"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark-blue mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal text-dark-grey"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark-blue mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal text-dark-grey"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-dark-blue mb-1.5">
                      I&apos;m enquiring about
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal text-dark-grey"
                    >
                      <option value="call">A 30-minute call</option>
                      <option value="diagnostic">The Saleability Diagnostic</option>
                      <option value="briefing">Diagnostic + Private Briefing</option>
                      <option value="exit">Exit Architecture</option>
                      <option value="oracle">The Business Oracle</option>
                      <option value="general">General enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-blue mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal text-dark-grey resize-vertical"
                      placeholder="Tell us briefly what you would like to discuss."
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">
                        Something went wrong. Please try again or email us directly at
                        us@norivane.co.uk.
                      </p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
