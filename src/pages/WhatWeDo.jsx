import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { trackScoreToolClick } from '../utils/analytics'
import { ArrowRight } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const WhatWeDo = () => {
  const breadcrumbs = [{ label: 'What We Do', url: null }]

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="What We Do | Exit Strategy Architecture | Norivane"
        description="Norivane builds exit readiness into businesses years before a transaction. Structural analysis from a buyer's perspective — not financial projection, not cosmetic improvement."
        keywords="exit strategy architecture, business sale preparation, structural optionality, UK SME, exit readiness"
        canonicalUrl="/what-we-do"
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              What We Do
            </h1>
            <p className="text-teal text-xl font-medium mb-8">
              Exit Architecture for founders who want options before they need them.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Most owners start thinking seriously about sale only when they are ready to sell.
              By then, much of the structural work that protects value and improves buyer
              confidence is harder, slower and more visible than it should have been.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 text-lg text-dark-grey leading-relaxed"
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">What it is</h2>
            <p>
              Norivane helps founders build a business that could withstand buyer scrutiny
              before a transaction is on the table.
            </p>
            <p>
              That means genuine structural optionality — a business that could be sold on
              acceptable terms, stepped back from, or partially exited without forcing the
              outcome or accepting the terms that come with urgency.
            </p>
            <p>
              It is not financial projection. It is not cosmetic improvement. It is not a pitch
              deck built around a target multiple.
            </p>
            <p>
              It is a buyer-perspective assessment of the structural risks embedded in your
              business — the dependencies, concentrations, information gaps and transition
              uncertainties that a professional buyer will find and price into any offer they make.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why timing matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">Why timing matters</h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Structural optionality must be built before it is needed. A business that becomes
                saleable under pressure — when the founder is ready to leave, when a health event
                forces the issue, when an approach arrives unexpectedly — will rarely achieve the
                terms a well-prepared business commands.
              </p>
              <p>
                The difference between a clean exit and a discounted one is almost always
                structural. Owner dependence that creates key-person risk. Customer concentration
                that creates revenue risk. Management gaps that create transition risk. Financial
                presentation that creates scrutiny risk. Competitive advantage held personally by
                the founder, rather than embedded in the company, that creates defensibility risk.
              </p>
              <p>
                None of these are resolved quickly. They require time, deliberate change, and
                evidence that the change has held. That is why the work starts years before the
                conversation about a transaction begins.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">The methodology</h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                The analysis works across six structural dimensions: Owner Dependence, Commercial
                Concentration, Financial Scrutiny Readiness, Management Depth, Systems and Data
                Integrity, and Proprietary Advantage.
              </p>
              <p>
                Proprietary Advantage is the lens that tests what is genuinely defensible in the
                business — what it owns, controls or knows that competitors cannot easily replicate,
                and whether that advantage belongs to the company or to the founder personally.
              </p>
              <p>
                Each dimension is assessed against the way a rational buyer would test it in
                diligence, and what weakness in that dimension is likely to do to price, process
                or deal terms.
              </p>
              <p>
                The output is a regime classification: Strength, Stable, Constraint, or Risk. The
                lowest-scoring dimension determines the regime. Improving average scores is not the
                objective. Eliminating the constraint that limits the whole picture is.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Oracle mention */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">
              When preparation becomes process
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                As a business approaches a transaction, the work shifts from improving the
                structure to evidencing it. Buyers do not take assurances. They test documents,
                ask questions, and form views on risk through the coherence of what they find.
              </p>
              <p>
                For businesses entering that phase, we build a Business Oracle — a queryable
                knowledge layer that transforms how buyers experience due diligence and reduces
                the time, cost and uncertainty of a transaction.
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
              Start with a conversation
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Most founders do not need more context first. They need to understand where buyers
              would press, and what the right next step is.
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
                See diagnostic options →
              </Link>
            </div>
            <div className="mt-6">
              <a
                href="https://app.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('what_we_do_page')}
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

export default WhatWeDo
