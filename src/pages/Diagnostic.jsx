import React, { useEffect } from 'react'
import { trackEvent, trackScoreToolClick } from '../utils/analytics'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const sixDimensions = [
  {
    title: 'Owner Dependence',
    description:
      'How far does the business rely on the founder for decisions, sales, delivery or continuity?',
  },
  {
    title: 'Commercial Concentration',
    description:
      'How exposed is the business to customer, supplier, sector or channel concentration?',
  },
  {
    title: 'Financial Scrutiny Readiness',
    description:
      'How credible, consistent and diligence-ready are the numbers behind the business?',
  },
  {
    title: 'Management Depth',
    description:
      'Is there real operating capability below founder level, or does decision-making still collapse upward?',
  },
  {
    title: 'Systems and Data Integrity',
    description:
      'Do the systems, workflows and data create confidence, or do they depend on workarounds and memory?',
  },
  {
    title: 'Proprietary Advantage',
    description:
      'What does the business actually own, control or know that competitors cannot easily replicate?',
  },
]

const founderRealityPoints = [
  'I have all these thoughts. I need someone to turn the chaos into structure.',
  'I know my network is valuable. I just need someone to show me how to make it transferable.',
  'I want an exit in three to five years. I am not sure what that actually requires right now.',
  'I keep getting asked what my one metric is. I have not defined it yet.',
]

const Diagnostic = () => {
  const breadcrumbs = [{ label: 'The Diagnostic', url: null }]

  useEffect(() => {
    trackEvent('diagnostic_page_view', { event_category: 'page_interest' })
  }, [])

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="The Saleability Diagnostic | Norivane"
        description="A pre-diligence assessment built around six structural dimensions buyers assess during diligence. Start with a conversation, a free score check, a written diagnostic, or a private briefing."
        keywords="saleability diagnostic, exit readiness, owner dependence score, business sale preparation, UK SME diagnostic, pre-diligence review"
        canonicalUrl="/diagnostic"
      />

      <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />

      {/* Hero */}
      <section className="pt-24 pb-20 bg-dark-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              The <span className="text-teal">Saleability Diagnostic</span>
            </h1>

            <div className="space-y-5 max-w-4xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                A structured pre-diligence assessment built around the six structural
                dimensions buyers assess during diligence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This is not a quiz and it is not a valuation. It is a buyer-style
                view of where a business may attract confidence, delay, discount,
                protection demands or concern.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Most founders start with a conversation first. The point is to
                understand where buyers would press, and which level of diagnostic
                work is actually appropriate.
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
                href="#diagnostic-options"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-blue transition-all duration-300"
              >
                See diagnostic options <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Six dimensions */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
                Six structural dimensions buyers assess during diligence
              </h2>
              <p className="text-lg text-dark-grey leading-relaxed">
                The diagnostic tests the structural issues that affect transferability,
                buyer confidence and deal friction. Proprietary Advantage is the
                newest articulated lens within the framework, designed to test what
                is genuinely defensible in the business, not merely familiar to the founder.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sixDimensions.map((dimension) => (
                <div
                  key={dimension.title}
                  className="rounded-2xl border border-gray-200 p-6 bg-gray-50"
                >
                  <h3 className="text-xl font-bold text-dark-blue mb-3">
                    {dimension.title}
                  </h3>
                  <p className="text-dark-grey leading-relaxed">
                    {dimension.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder reality */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">
                What comes up in every diagnostic
              </h2>
              <p className="text-lg text-dark-grey leading-relaxed">
                Founders rarely arrive with a neat problem statement. They arrive
                with a sense that something is structurally exposed, but not yet
                organised into buyer language.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {founderRealityPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-white border border-gray-200 p-6"
                >
                  <p className="text-dark-grey leading-relaxed">&ldquo;{point}&rdquo;</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Options */}
      <section id="diagnostic-options" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
                Choose the right level of scrutiny
              </h2>
              <p className="text-lg text-dark-grey leading-relaxed">
                Most founders begin with a conversation. From there, you can decide
                whether a free score check, a structured diagnostic, or a deeper
                private briefing is the right next step.
              </p>
            </div>

            <div className="space-y-8">
              {/* Call first */}
              <div className="rounded-3xl border-2 border-teal bg-teal/5 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-teal text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Recommended first step
                  </span>
                  <span className="text-sm font-semibold text-teal uppercase tracking-wider">
                    30 minutes
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                  Book a 30-minute call
                </h3>

                <div className="space-y-4 text-lg text-dark-grey leading-relaxed mb-6">
                  <p>
                    For founders who want to talk through the business first before
                    choosing the right level of diagnostic work.
                  </p>
                  <p>
                    The objective is simple: identify where buyers are most likely
                    to press, what that means commercially, and whether the free
                    score, the written diagnostic or the private briefing is the
                    sensible next step.
                  </p>
                </div>

                <a
                  href="https://calendly.com/matthew-norivane/mb-30-minutes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
                >
                  Book a 30-minute call <ArrowRight size={20} />
                </a>
              </div>

              {/* Tier 2 */}
              <div className="rounded-3xl bg-dark-blue p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-6">
                  <h3 className="text-3xl font-bold text-white">
                    Saleability Diagnostic
                  </h3>
                  <span className="text-sm font-semibold text-teal uppercase tracking-wider">
                    £497 + VAT
                  </span>
                </div>

                <div className="space-y-5 text-lg text-gray-300 leading-relaxed mb-8">
                  <p>
                    A structured written assessment covering all six structural
                    dimensions: Owner Dependence, Commercial Concentration,
                    Financial Scrutiny Readiness, Management Depth, Systems and
                    Data Integrity, and Proprietary Advantage.
                  </p>
                  <p>
                    The output is a written report showing where buyers are likely
                    to discount price, delay process, demand protections or lose
                    confidence altogether.
                  </p>
                  <p>
                    You receive a lens-by-lens breakdown, regime classification,
                    exposure ranking, and a prioritised roadmap sequenced by impact,
                    not activity.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'All six structural dimensions assessed',
                    'Written diagnostic report',
                    'Exposure ranking and regime classification',
                    'Prioritised remediation roadmap',
                    'Buyer-style view of where value risk and deal friction sit',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-200">
                      <Check size={18} className="text-teal mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://score.norivane.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
                >
                  Get the Saleability Diagnostic <ArrowRight size={20} />
                </a>
              </div>

              {/* Tier 3 */}
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="bg-teal text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Deepest review
                  </span>
                  <span className="text-sm font-semibold text-teal uppercase tracking-wider">
                    £2,500 + VAT
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-dark-blue mb-6">
                  Diagnostic + Private Briefing
                </h3>

                <div className="space-y-5 text-lg text-dark-grey leading-relaxed mb-8">
                  <p>
                    The full written diagnostic, plus a 90-minute private briefing
                    with Matthew Broadbent.
                  </p>
                  <p>
                    This is not a presentation of the report. It is a working
                    session focused on your specific business, the structural
                    constraints the review identifies, and the practical sequence
                    for reducing them.
                  </p>
                  <p>
                    Already completed the Saleability Diagnostic? Upgrade within
                    30 days and the cost is £2,000 + VAT. Your Tier 2 fee is offset
                    against the total.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Full written Saleability Diagnostic',
                    '90-minute private briefing with Matthew Broadbent',
                    'Contextual analysis of your specific situation',
                    'Clear action pathway aligned to your timeline and objectives',
                    'Upgrade within 30 days for £2,000 + VAT after Tier 2',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark-grey">
                      <Check size={18} className="text-teal mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://score.norivane.com/premium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
                >
                  Book a Private Briefing <ArrowRight size={20} />
                </a>
              </div>

              {/* Free tier */}
              <div className="rounded-3xl border border-gray-200 bg-white p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                      Free
                    </span>
                    <h3 className="text-2xl font-bold text-dark-blue mt-2 mb-3">
                      Owner Dependence Score
                    </h3>
                    <p className="text-dark-grey leading-relaxed">
                      Want an initial view first? Start with the free Owner
                      Dependence Score. It tests one lens only, takes around
                      8 minutes, and gives you an early signal on the most common
                      buyer constraint in founder-led businesses. Useful as a
                      starting point, but not a substitute for the full diagnostic.
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href="https://app.norivane.com/free"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackScoreToolClick('diagnostic_page')}
                      className="inline-flex items-center gap-2 border-2 border-teal text-teal px-6 py-3 rounded-full font-semibold hover:bg-teal hover:text-white transition-all duration-300"
                    >
                      Start for free <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What this is not */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">
                What this is not
              </h2>
              <div className="space-y-4 text-lg text-dark-grey leading-relaxed">
                <p>This is not a formal valuation.</p>
                <p>This is not a growth strategy workshop.</p>
                <p>This is not generic coaching or a marketing exercise.</p>
                <p>
                  It is a structured view of how a rational buyer would assess
                  transferability, defensibility and risk before a transaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start with a conversation, then choose the right level of scrutiny
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Founders rarely need more information first. They need the problem
              organised properly. A short conversation usually makes the next step obvious.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/matthew-norivane/mb-30-minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
              >
                Book a 30-minute call <ArrowRight size={20} />
              </a>

              <a
                href="https://app.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('diagnostic_page_final_cta')}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-blue transition-all duration-300"
              >
                Start with the free score <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Diagnostic
