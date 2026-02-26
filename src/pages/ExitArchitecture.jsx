import React from 'react'
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
      'All five dimensions are performing above the threshold that triggers buyer concern. The business would withstand professional due diligence without structural conditions or re-trades on price.',
    implication: 'A transaction is achievable on terms that reflect the business\'s true value. The work now is maintaining the profile and preparing for transaction.',
  },
  {
    name: 'Stable',
    description:
      'No dimension is at critical risk, but one or more are below the level that creates genuine buyer confidence. The business is saleable, but the deal is likely to carry conditions.',
    implication: 'Addressable with focused remediation. The regime can be moved to Strength within a defined programme of work.',
  },
  {
    name: 'Constraint',
    description:
      'One dimension is materially weak and is determining the overall regime. A buyer will identify this dimension early and price it — either as a reduced multiple or as a condition on completion.',
    implication: 'The constraint must be addressed before a transaction process begins. Attempting to sell in a Constraint regime typically produces the worst outcome.',
  },
  {
    name: 'Risk',
    description:
      'One or more dimensions carry risk that would cause a professional buyer to either decline, re-trade, or impose conditions that materially reduce the final value.',
    implication: 'The business is not currently in a position to achieve a transaction on acceptable terms. A structured remediation programme is the only path forward.',
  },
]

const ExitArchitecture = () => {
  const breadcrumbs = [{ label: 'Exit Architecture', url: null }]

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Exit Architecture | Structural Optionality for Business Owners | Norivane"
        description="Exit Architecture is the process of building a business that could be sold on acceptable terms — even before you're ready to sell. Structural optionality, regime logic, and pre-process preparation."
        keywords="exit architecture, structural optionality, business sale, regime classification, exit planning, UK SME"
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
              Exit{' '}
              <span className="text-teal">Architecture</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Building a business that could be sold — even when you're not selling — is one
              of the most valuable things a business owner can do.
            </p>
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
            <h2 className="text-3xl font-bold text-dark-blue mb-8">Structural optionality</h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Structural optionality means having a business that keeps your options open. A business
                that could be sold, stepped back from, passed to a management team, or partially
                exited — without forcing the outcome or accepting the terms that come with urgency.
              </p>
              <p>
                Most business owners build optionality accidentally, or not at all. The founder becomes
                the business. Revenue concentrates around a handful of clients. Processes live in
                people's heads. Financial reporting serves tax efficiency rather than scrutiny readiness.
              </p>
              <p>
                None of this is a problem — until it is. And when it becomes a problem, the window
                to fix it has usually closed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The four regimes */}
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
            <p className="text-lg text-dark-grey">
              Every business sits in one of four regimes at any given time. The regime is determined
              by the weakest of the five structural dimensions — not the average.
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
                <p className="text-dark-grey leading-relaxed mb-4">{regime.description}</p>
                <p className="text-medium-grey text-sm leading-relaxed border-l-2 border-teal/40 pl-4">
                  {regime.implication}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-process preparation */}
      <section className="py-20 bg-white">
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
                A business that enters a sale process in a Constraint or Risk regime will almost
                always exit that process at a lower price than the owner expected — or not at all.
                The conditions attached to an offer in these regimes compound: earn-outs, retention
                requirements, price adjustments, seller loans.
              </p>
              <p>
                A business that enters the same process in a Strength or Stable regime typically
                completes faster, with fewer conditions, and at a price that reflects the business's
                actual earnings rather than a buyer's estimate of structural risk.
              </p>
              <p>
                The preparation that moves a business from Constraint to Stable — or from Stable
                to Strength — rarely happens during a transaction. It happens in the years before
                one. That is what Exit Architecture is for.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Oracle link */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">Preparing for the transaction itself</h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Once a business has reached the Strength or Stable regime and a transaction is approaching,
                the focus shifts from improving the structure to evidencing it. This is where the Business
                Oracle becomes relevant — a queryable knowledge layer that replaces the traditional static
                data room and transforms the buyer's experience of due diligence.
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Find out which regime your business is in
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://score.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
              >
                Check Your Score Free
              </a>
              <Link
                to="/diagnostic"
                className="text-white hover:text-teal border-b border-white/30 hover:border-teal pb-0.5 font-medium text-lg transition-all duration-300"
              >
                See the full diagnostic →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ExitArchitecture
