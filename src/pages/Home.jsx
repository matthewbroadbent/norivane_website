import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import SpiderDiagram from '../components/SpiderDiagram'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Norivane — Exit Strategy Architecture for UK Business Owners"
        description="Norivane helps UK business owners understand what a buyer sees before they do. Structural analysis, regime diagnosis, and exit readiness built years before you need it."
        keywords="exit strategy, business sale, owner dependence, saleability diagnostic, exit architecture, UK SME, business valuation"
        canonicalUrl="/"
      />

      {/* Section 1 — Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-dark-blue">
        <div className="absolute inset-0 bg-dark-blue" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Your business may be profitable.{' '}
              <span className="text-teal">That doesn't mean it's transferable.</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Most founders discover the structural risks after the buyer does. We find them first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://score.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Check Your Owner Dependence Score — Free
              </a>

              <Link
                to="/exit-architecture"
                className="text-white hover:text-teal border-b border-white/30 hover:border-teal pb-0.5 font-medium text-lg transition-all duration-300"
              >
                What is Exit Strategy Architecture?
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown size={28} className="animate-bounce text-white/40" />
          </motion.div>
        </div>
      </section>

      {/* Section 2 — The Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xl md:text-2xl text-dark-grey leading-relaxed">
              Buyers don't pay for revenue. They pay for a business that works without the founder.
              Most businesses fail that test — not because they're unprofitable, but because they're
              structurally dependent. That dependence has a price. It shows up as a discount, a
              re-trade, or a deal that doesn't complete.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — The Five Lenses */}
      <section className="py-24 bg-dark-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What buyers actually price
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SpiderDiagram />
          </motion.div>

          <motion.p
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-400 text-sm mt-10 max-w-xl mx-auto"
          >
            The lowest lens score determines the regime. One weak dimension can collapse the whole picture.
          </motion.p>
        </div>
      </section>

      {/* Section 4 — Owner Dependence Hook */}
      <section className="py-24 bg-teal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start here. It takes 8 minutes.
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Owner Dependence is the most common regime-determining constraint.
              Answer the free diagnostic. Get your score. Understand what a buyer sees.
            </p>
            <a
              href="https://score.norivane.com/free"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl"
            >
              <span>Check Your Owner Dependence Score — Free</span>
              <ArrowRight size={20} />
            </a>
            <p className="text-white/60 text-sm mt-4">
              Name and email required. No payment. Takes 8 minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — Product Ladder */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              How the diagnostic works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">Free</div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Owner Dependence Score</h3>
              <p className="text-medium-grey text-sm leading-relaxed mb-6 flex-1">
                One lens. Your score. An explanation of what it means to a buyer — and why it matters
                before you think you need it.
              </p>
              <a
                href="https://score.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Start now <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Tier 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-blue rounded-2xl p-8 shadow-sm flex flex-col"
            >
              <div className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">£497 + VAT</div>
              <h3 className="text-xl font-bold text-white mb-3">Saleability Diagnostic</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                All five lenses. A written report. Your regime classification. A prioritised roadmap of
                what to address — and in what order — before a transaction.
              </p>
              <Link
                to="/diagnostic"
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Learn more <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Tier 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">£2,500 + VAT</div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Diagnostic + Private Briefing</h3>
              <p className="text-medium-grey text-sm leading-relaxed mb-6 flex-1">
                Everything in Tier 2, plus a 90-minute private briefing with Matthew. Contextual analysis.
                A clear action pathway. If you have already completed the Saleability Diagnostic, you can
                upgrade within 30 days for £2,000 + VAT.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-dark-blue font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Get in touch <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 — Why Matthew */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-10">
              The person doing the work
            </h2>

            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                I've sat in your chair. I know what it feels like to run an SME as the owner in the
                room — the decisions that don't leave, the clients that are really yours, the financials
                that look fine until someone looks properly.
              </p>
              <p>
                I've also sat across the table from the buyer. As a Deloitte-trained Chartered Accountant,
                as a fund manager deploying UK government capital into SMEs, as a private investor, and
                across roughly 50 transactions over 30 years — corporate recovery, acquisitions, exits,
                restructuring.
              </p>
              <p>
                I helped the UK Green Investment Bank define what 'green' meant before they made their
                first investment. I know how institutions think about structural risk before they commit
                capital.
              </p>
              <p>
                That dual perspective — owner and buyer — is what Norivane is built on.
              </p>
            </div>

            <div className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200"
              >
                Read more about the methodology <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="py-24 bg-dark-blue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Where do you want to start?
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
                Go straight to the full diagnostic →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
