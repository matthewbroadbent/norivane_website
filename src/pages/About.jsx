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
        description="Matthew Broadbent is a Deloitte-trained Chartered Accountant with 30 years across both sides of the transaction table. Norivane applies that perspective to exit readiness and structural scrutiny for UK business owners."
        keywords="Matthew Broadbent, Norivane, chartered accountant, exit planning, Deloitte, SME transactions, business sale preparation"
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
              About <span className="text-teal">Norivane</span>
            </h1>
            <div className="space-y-5 max-w-3xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                Norivane is built on a simple premise: the most useful perspective
                on your business is the one a buyer brings, and most owners do not
                get access to it until it is too late.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This is not transaction marketing. It is pre-transaction scrutiny:
                understanding how a rational buyer would assess transferability,
                defensibility and risk before a process begins.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why this perspective matters */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">
              Why this perspective matters
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Most founders know their business intimately. That is not the same
                thing as knowing how it will read under scrutiny.
              </p>
              <p>
                Buyer concern rarely begins with the headline numbers. It begins
                with what sits underneath them: dependence on the founder,
                concentration, weak management depth, reporting that does not stand
                up to inspection, systems that rely on memory, or an advantage that
                is less defensible than it first appears.
              </p>
              <p>
                Norivane exists to surface those issues early enough to do
                something useful about them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Matthew's story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-10">
              Matthew Broadbent
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                I have sat in both seats.
              </p>
              <p>
                I know what it feels like to run an SME with decisions that do not
                leave, relationships that are personal, and numbers that look fine
                until someone starts asking sharper questions.
              </p>
              <p>
                I have also sat across the table from the owner. As a
                Deloitte-trained Chartered Accountant, a fund manager deploying UK
                government capital into SMEs, a private investor, and across roughly
                50 transactions over 30 years in recovery, acquisitions, exits and
                restructuring.
              </p>
              <p>
                I helped the UK Green Investment Bank define what &apos;green&apos;
                meant before it made its first investment. I understand how
                institutions think about structural risk before they commit capital.
              </p>
              <p>
                That dual perspective, owner and buyer, is what Norivane is built
                on. The methodology is not theoretical. It comes from what
                professional buyers actually find, how they price it, and what they
                do when they do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-10">
              Credentials
            </h2>
            <div className="space-y-0">
              {[
                'Chartered Accountant (ICAEW), trained at Deloitte',
                'Fund manager deploying UK government capital into SMEs',
                'Private investor across acquisitions, restructuring and exits',
                'Approximately 50 transactions over 30 years',
                'Adviser to the UK Green Investment Bank on investment criteria',
                'Corporate recovery, turnaround and distressed asset management',
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">
              Why Norivane exists
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Many services that claim to help owners prepare for sale approach
                the problem from the wrong end.
              </p>
              <p>
                Some work backwards from valuation multiples. Others are brokers
                with an incentive to list rather than prepare. Neither approach
                necessarily means sitting with a business and working through it the
                way a serious buyer would, dimension by dimension, asking what would
                trigger a condition, a re-trade, or a walk-away.
              </p>
              <p>
                Norivane does that work early enough to be useful. It applies a
                structured buyer lens before the process starts, because that is
                when value can still be protected and optionality still improved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UA relationship */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-8">
              The Unemployable Advisor
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                The public writing lives at The Unemployable Advisor. That is where
                the ideas, observations and field notes are published.
              </p>
              <p>
                Norivane is where those ideas become structured diagnostic and
                advisory work.
              </p>
              <p>
                One explains the thinking. The other applies it.
              </p>
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
              Most founders do not need a longer explanation first. They need to
              understand where buyers would press, and what the right next step is.
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
                See diagnostic options <ArrowRight size={16} className="inline ml-1" />
              </Link>
            </div>
            <div className="mt-6">
              <a
                href="https://app.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('about_page')}
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

export default About
