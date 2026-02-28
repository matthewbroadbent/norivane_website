import React, { useEffect } from 'react'
import { trackEvent, trackScoreToolClick } from '../utils/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Diagnostic = () => {
  const breadcrumbs = [{ label: 'The Diagnostic', url: null }]

  useEffect(() => {
    trackEvent('diagnostic_page_view', { event_category: 'page_interest' })
  }, [])

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="The Saleability Diagnostic | Norivane"
        description="Three levels of diagnostic analysis for business owners preparing for sale. From a free Owner Dependence score to a full written saleability report with private briefing."
        keywords="saleability diagnostic, exit readiness, owner dependence score, business sale preparation, UK SME diagnostic"
        canonicalUrl="/diagnostic"
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              The{' '}
              <span className="text-teal">Diagnostic</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Three levels of analysis. Each one tells you more about what a buyer will find —
              and what it will cost you if they find it before you do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tier 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-semibold text-teal uppercase tracking-wider">Free</span>
              <h2 className="text-3xl font-bold text-dark-blue">Owner Dependence Score</h2>
            </div>

            <div className="space-y-5 text-lg text-dark-grey leading-relaxed mb-8">
              <p>
                Owner Dependence is the dimension buyers interrogate first. It is the most common
                constraint that determines a business's regime — and the one that takes the longest
                to address.
              </p>
              <p>
                The free diagnostic covers this single lens. It takes 8 minutes. It produces a score,
                a regime classification (Strength, Stable, Constraint, or Risk), and an explanation
                of what a buyer sees in that dimension and why it matters to a transaction.
              </p>
              <p>
                No roadmap. No remediation advice. Just an honest read of where this dimension stands
                from a buyer's perspective.
              </p>
            </div>

            <ul className="space-y-2 mb-8">
              {[
                'One lens: Owner Dependence',
                'Score and regime classification',
                'Buyer-perspective explanation of your result',
                'Takes 8 minutes',
                'No payment required',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark-grey">
                  <Check size={18} className="text-teal mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.norivane.com/free"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackScoreToolClick('diagnostic_page')}
              className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
            >
              Start the Assessment <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tier 2 */}
      <section className="py-20 bg-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-semibold text-teal uppercase tracking-wider">£497 + VAT</span>
              <h2 className="text-3xl font-bold text-white">Saleability Diagnostic</h2>
            </div>

            <div className="space-y-5 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                The full diagnostic covers all five structural dimensions: Owner Dependence, Commercial
                Concentration, Financial Scrutiny Readiness, Management Depth, and Systems and Data Integrity.
              </p>
              <p>
                The output is a written report that gives you your score across each dimension, your overall
                regime classification, and a prioritised roadmap of what to address and in what sequence.
              </p>
              <p>
                The roadmap is sequenced by impact — not by difficulty or cost — because the objective is
                to move the regime, not to generate activity. Buyers who complete the free Owner Dependence
                diagnostic first have their answers carried forward automatically and begin from the second
                dimension.
              </p>
            </div>

            <ul className="space-y-2 mb-8">
              {[
                'All five structural lenses assessed',
                'Written diagnostic report',
                'Regime classification with supporting analysis',
                'Prioritised remediation roadmap',
                'Owner Dependence results carried forward from the free diagnostic',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <Check size={18} className="text-teal mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
            >
              Get the Full Diagnostic <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tier 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-semibold text-teal uppercase tracking-wider">£2,500 + VAT</span>
              <h2 className="text-3xl font-bold text-dark-blue">Diagnostic + Private Briefing</h2>
            </div>

            <div className="space-y-5 text-lg text-dark-grey leading-relaxed mb-8">
              <p>
                The full written diagnostic, plus a 90-minute private briefing with Matthew Broadbent.
              </p>
              <p>
                The briefing is not a presentation of the report. It is a working session — contextual
                analysis of your specific situation, discussion of the constraints the report identifies,
                and a clear action pathway tailored to your timeline and objectives.
              </p>
              <p>
                Already completed the Saleability Diagnostic? Upgrade within 30 days and the cost
                is £2,000 + VAT — your Tier 2 fee is offset against the total.
              </p>
            </div>

            <ul className="space-y-2 mb-8">
              {[
                'Full written Saleability Diagnostic',
                '90-minute private briefing with Matthew Broadbent',
                'Contextual analysis of your specific business situation',
                'Clear action pathway with timeline',
                'Upgrade within 30 days of Tier 2 for £2,000 + VAT — Tier 2 fee offset against total',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark-grey">
                  <Check size={18} className="text-teal mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-dark-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-dark-blue/90 transition-all duration-300 shadow-lg"
            >
              Book a Private Briefing <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Diagnostic
