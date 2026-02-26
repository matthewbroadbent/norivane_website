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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Exit Strategy{' '}
              <span className="text-teal">Architecture</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Most business owners think about selling their business when they're ready to sell.
              By then, the structural work that creates value — and protects it in a transaction —
              is no longer possible.
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
              Exit Strategy Architecture is the process of building a business that has genuine
              structural optionality — one that could be sold on acceptable terms, even if you
              have no intention of selling now.
            </p>
            <p>
              It is not financial projection. It is not cosmetic improvement. It is not a pitch deck
              built around a target multiple.
            </p>
            <p>
              It is a buyer-perspective analysis of the structural risks embedded in your business —
              the dependencies, concentrations, information gaps and transition uncertainties that
              a professional buyer will find and price into any offer they make.
            </p>
            <p>
              The goal is to find those risks first, and to reduce them systematically, long before
              a transaction is on the table.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What it isn't */}
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
                The difference between a clean exit and a discounted one is almost always structural.
                Owner dependence that creates key-person risk. Customer concentration that creates
                revenue risk. Management gaps that create transition risk. Financial presentation that
                creates scrutiny risk.
              </p>
              <p>
                None of these are resolved quickly. They require time, deliberate change, and evidence
                that the change has held. That is why the work starts years before the conversation
                about a transaction begins.
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
                The analysis works across five structural dimensions: Owner Dependence, Commercial
                Concentration, Financial Scrutiny Readiness, Management Depth, and Systems and Data
                Integrity.
              </p>
              <p>
                Each dimension is assessed against what a buyer — not an accountant, not a growth
                consultant — would find and how they would price it. The output is a regime
                classification that tells you where the business currently sits: Strength, Stable,
                Constraint, or Risk.
              </p>
              <p>
                The lowest-scoring dimension determines the regime. Improving average scores is not
                the objective. Eliminating the constraint that limits the whole picture is.
              </p>
              <p>
                The execution uses AI-driven analysis to process large volumes of operational data,
                surface patterns a manual review would miss, and maintain a living record of structural
                improvement over time. The tool is the infrastructure. The judgement — applied from
                both sides of the transaction table — is what makes it useful.
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
              Preparing for transaction
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                As a business approaches a transaction, the structural work shifts from improving
                to evidencing. Buyers don't take assurances. They interrogate documents, ask questions,
                and form views on risk through the quality and coherence of what they find.
              </p>
              <p>
                For businesses in the final phase of preparation, we build a Business Oracle — a
                queryable knowledge map that transforms how buyers experience due diligence. Not a
                static data room. A living intelligence layer that lets a buyer ask questions and
                receive coherent, sourced answers — reducing the time, cost and uncertainty of a
                transaction.
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
              Find out where your business stands
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://score.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('what_we_do_page')}
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

export default WhatWeDo
