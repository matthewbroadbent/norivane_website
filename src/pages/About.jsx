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

const About = () => {
  const breadcrumbs = [{ label: 'About', url: null }]

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="About | Matthew Broadbent | Norivane"
        description="Matthew Broadbent is a Deloitte-trained Chartered Accountant with 30 years across both sides of the transaction table. Norivane applies that dual perspective to exit readiness for UK business owners."
        keywords="Matthew Broadbent, Norivane, chartered accountant, exit planning, Deloitte, UK Green Investment Bank, SME transactions"
        canonicalUrl="/about"
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
              About{' '}
              <span className="text-teal">Norivane</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Norivane is built on a single premise: that the most useful perspective on your
              business is the one a buyer brings — and that most business owners never get access
              to it until it is too late.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Matthew's story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-10">Matthew Broadbent</h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                I've sat in your chair. I know what it feels like to run an SME as the owner in
                the room — the decisions that don't leave, the clients that are really yours, the
                financials that look fine until someone looks properly.
              </p>
              <p>
                I've also sat across the table from the buyer. As a Deloitte-trained Chartered
                Accountant, as a fund manager deploying UK government capital into SMEs, as a
                private investor, and across roughly 50 transactions over 30 years — corporate
                recovery, acquisitions, exits, restructuring.
              </p>
              <p>
                I helped the UK Green Investment Bank define what 'green' meant before they made
                their first investment. I know how institutions think about structural risk before
                they commit capital.
              </p>
              <p>
                That dual perspective — owner and buyer — is what Norivane is built on. The
                methodology is not theoretical. It is derived from what professional buyers
                actually find, how they price it, and what they do with it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-10">Credentials</h2>
            <div className="space-y-0">
              {[
                'Chartered Accountant (ICAEW), trained at Deloitte',
                'Fund manager, UK government capital deployment into SMEs',
                'Private investor across acquisitions, restructuring and exits',
                'Approximately 50 transactions over 30 years',
                'Adviser to the UK Green Investment Bank on investment criteria',
                'Corporate recovery, turnaround, and distressed asset management',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-4 border-b border-gray-200 last:border-0"
                >
                  <div className="w-2 h-2 rounded-full bg-teal mt-2.5 flex-shrink-0" />
                  <span className="text-dark-grey">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Norivane exists */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">Why Norivane exists</h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Most advisory services that claim to help business owners prepare for sale are
                either financial modellers working backwards from a target multiple, or brokers
                with an incentive to list rather than prepare.
              </p>
              <p>
                Neither role involves sitting with a business and working through it the way a
                serious buyer would — dimension by dimension, looking for what would cause a
                condition, a re-trade, or a walk-away.
              </p>
              <p>
                Norivane does that work. It does it early enough to be useful, and it applies
                the same analytical framework that institutional buyers use — because that is the
                framework that actually matters when the time comes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UA relationship */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">The Unemployable Advisor</h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                My public writing and education lives at The Unemployable Advisor — a publication
                for business owners who think seriously about what their business is worth and how
                it behaves under scrutiny.
              </p>
              <p>
                Norivane is where the work gets done.
              </p>
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
              Start with the free diagnostic
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://score.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('about_page')}
                className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
              >
                Check Your Score Free
              </a>
              <Link
                to="/contact"
                className="text-white hover:text-teal border-b border-white/30 hover:border-teal pb-0.5 font-medium text-lg transition-all duration-300"
              >
                Get in touch <ArrowRight size={16} className="inline ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
