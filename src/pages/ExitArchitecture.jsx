import React, { useEffect } from 'react'
import { trackEvent, trackScoreToolClick } from '../utils/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const REGIMES = [
  {
    name: 'Strength',
    description:
      'All six structural dimensions are performing above the threshold that triggers buyer concern. The business would withstand professional due diligence without structural conditions or re-trades on price.',
    implication:
      "A transaction is achievable on terms that reflect the business's true value. The work now is maintaining the profile and preparing for process.",
  },
  {
    name: 'Stable',
    description:
      'No dimension is at critical risk, but one or more are below the level that creates genuine buyer confidence. The business is saleable, but the deal is likely to carry conditions.',
    implication:
      'Addressable with focused remediation. The regime can be moved to Strength within a defined programme of work.',
  },
  {
    name: 'Constraint',
    description:
      'One dimension is materially weak and is determining the overall regime. A buyer will identify this dimension early and price it, either as a reduced multiple or as a condition on completion.',
    implication:
      'The constraint must be addressed before a transaction process begins. Attempting to sell in a Constraint regime typically produces the worst outcome.',
  },
  {
    name: 'Risk',
    description:
      'One or more dimensions carry risk that would cause a professional buyer to decline, re-trade, or impose conditions that materially reduce the final value.',
    implication:
      'The business is not currently in a position to achieve a transaction on acceptable terms. A structured remediation programme is the only path forward.',
  },
]

const ExitArchitecture = () => {
  const breadcrumbs = [{ label: 'Exit Architecture', url: null }]

  useEffect(() => {
    trackEvent('exit_architecture_page_view', { event_category: 'page_interest' })
  }, [])

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Exit Architecture | Structural Optionality for Business Owners | Norivane"
        description="Exit Architecture is the process of building a business that could be sold on acceptable terms, even before you're ready to sell. Structural optionality, regime logic, and pre-process preparation."
        keywords="exit architecture, structural optionality, business sale, regime classification, exit planning, UK SME, pre-transaction preparation"
        canonicalUrl="/exit-architecture"
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
              Exit <span className="text-teal">Architecture</span>
            </h1>
            <div className="space-y-5 max-w-3xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                Building a business that could be sold, even when you are not selling,
                is one of the most valuable things a business owner can do.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Exit Architecture is the discipline of reducing structural friction
                before time pressure, buyer scrutiny or circumstance forces the issue.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structural Optionality */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">
              Structural optionality
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Structural optionality means having a business that keeps your options
                open. A business that could be sold, stepped back from, passed to a
                management team, or partially exited without forcing the outcome or
                accepting the terms that come with urgency.
              </p>
              <p>
                Most owners do not build optionality deliberately. The founder becomes
                the business. Revenue concentrates around a handful of clients. Processes
                live in people&apos;s heads. Reporting serves tax efficiency rather than
                scrutiny readiness. What looks workable in ordinary trading conditions
                becomes expensive when a buyer starts testing transferability.
              </p>
              <p>
                None of this matters until it does. By the time it does, the window to
                fix it is usually shorter, more expensive and more visible than the
                owner expected.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regime logic */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-4">The four regimes</h2>
            <p className="text-lg text-dark-grey leading-relaxed">
              Every business sits in one of four regimes at any given time. The regime
              is determined by the weakest of the six structural dimensions, not the
              average. One weak dimension can override strength elsewhere because that
              is how buyer risk works in real transactions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {REGIMES.map((regime, i) => (
              <motion.div
                key={regime.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-dark-blue mb-3">{regime.name}</h3>
                <p className="text-dark-grey leading-relaxed mb-4">
                  {regime.description}
                </p>
                <p className="text-medium-grey text-sm leading-relaxed border-l-2 border-teal/40 pl-4">
                  {regime.implication}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Six dimensions context */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">
              What determines the regime
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Norivane assesses six structural dimensions: Owner Dependence,
                Commercial Concentration, Financial Scrutiny Readiness, Management
                Depth, Systems and Data Integrity, and Proprietary Advantage.
              </p>
              <p>
                Proprietary Advantage is the lens that tests what is genuinely
                defensible in the business: what it owns, controls or knows that
                competitors cannot easily replicate. That may be formal intellectual
                property, but often it is embedded process, exclusive data, trust
                architecture, know-how or commercial position.
              </p>
              <p>
                Exit Architecture is the work of strengthening these dimensions before
                a process begins, so that a buyer encounters evidence rather than
                dependence, coherence rather than founder memory, and defensibility
                rather than assumption.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pre-process preparation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">
              The difference pre-process preparation makes
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                A business that enters a sale process in a Constraint or Risk regime
                will almost always exit that process at a lower price than the owner
                expected, or not at all. The conditions attached to an offer in these
                regimes compound: earn-outs, retention requirements, price adjustments,
                deferred consideration, seller support and tighter protections.
              </p>
              <p>
                A business that enters the same process in a Strength or Stable regime
                typically completes faster, with fewer conditions, and at a price that
                reflects the business&apos;s actual earnings rather than a buyer&apos;s
                estimate of structural risk.
              </p>
              <p>
                The preparation that moves a business from Constraint to Stable, or
                from Stable to Strength, rarely happens during a transaction. It
                happens in the years before one. That is what Exit Architecture is for.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Oracle link */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">
              Preparing for the transaction itself
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Once a business has reached the Strength or Stable regime and a
                transaction is approaching, the focus shifts from improving the
                structure to evidencing it. This is where the Business Oracle becomes
                relevant: a queryable knowledge layer that replaces the traditional
                static data room and changes the buyer&apos;s experience of diligence.
              </p>
              <Link
                to="/business-oracle"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn about the Business Oracle <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Start with a conversation, then assess the structure properly
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Most founders do not need more theory first. They need to know which
              regime they are in, what is causing it, and what should be fixed before
              a buyer is allowed to discover it for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/matthew-norivane/mb-30-minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
              >
                Book a 30-minute call
              </a>
              <Link
                to="/diagnostic"
                className="text-white hover:text-teal border-b border-white/30 hover:border-teal pb-0.5 font-medium text-lg transition-all duration-300"
              >
                See the diagnostic options →
              </Link>
            </div>
            <div className="mt-6">
              <a
                href="https://app.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('exit_architecture_page')}
                className="text-gray-300 hover:text-white text-sm border-b border-gray-400/30 hover:border-white pb-0.5 transition-all duration-300"
              >
                Or start with the free Owner Dependence Score
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ExitArchitecture
