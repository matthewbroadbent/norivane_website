import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const oracleBenefits = [
  {
    icon: <TrendingUp size={32} />,
    title: 'Faster buyer confidence',
    description:
      'Buyers get coherent answers more quickly. The process moves faster because the business is easier to understand under scrutiny.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Cleaner diligence',
    description:
      'Fewer gaps, fewer contradictions, and less time lost chasing information across documents, inboxes and memory.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Less avoidable friction',
    description:
      'Questions are answered with structure and evidence rather than improvisation. That reduces avoidable doubt during process.',
  },
]

const BusinessOracle = () => {
  const breadcrumbs = [{ label: 'Business Oracle', url: null }]

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Business Oracle | Norivane"
        description="The Business Oracle helps businesses prepare for due diligence by turning fragmented information into a structured, queryable knowledge layer. Built as part of later-stage exit preparation."
        keywords="business oracle, due diligence preparation, data room, business sale preparation, exit readiness, UK SME"
        canonicalUrl="/business-oracle"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
              The <span className="text-teal">Business Oracle</span>
            </h1>

            <div className="space-y-5 max-w-3xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                The Business Oracle is Norivane&apos;s later-stage diligence
                preparation system. It turns fragmented business information into
                a structured, queryable knowledge layer.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Not a static data room. Not a document dump. A clearer way for a
                buyer to understand how the business works, what supports it, and
                why the answers hold together.
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

              <Link
                to="/what-we-do"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-blue transition-all duration-300"
              >
                See how Norivane works <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-8">
              Why it exists
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                As a transaction approaches, the work changes. The issue is no
                longer only improving the structure of the business. It is
                evidencing that structure clearly enough for a buyer to trust it.
              </p>
              <p>
                Traditional diligence often becomes slower and more expensive than
                it needs to be because the knowledge inside the business is
                scattered. Contracts sit in one place. Financial explanations in
                another. Operational logic in people&apos;s heads. Context is
                missing, and confidence erodes in the gaps.
              </p>
              <p>
                The Business Oracle is designed to reduce that friction. It helps
                the business present coherent answers, supported by evidence, in a
                way that stands up better under buyer questioning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-8">
                What it is
              </h2>
              <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
                <p>
                  A Business Oracle organises the important knowledge inside the
                  company so that it can be queried, traced and explained more
                  coherently during diligence.
                </p>
                <p>
                  That may include contracts, customer relationships, financial
                  logic, operational processes, governance records, system
                  dependencies and the evidence behind key claims.
                </p>
                <p className="font-semibold text-dark-blue">
                  It is not there to create theatre. It is there to make scrutiny
                  easier to withstand.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/business-oracle-network.jpeg"
                alt="Business Oracle knowledge network map"
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What it changes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
              What it changes in a process
            </h2>
            <p className="text-lg text-medium-grey max-w-3xl mx-auto leading-relaxed">
              The value is not novelty. The value is reducing confusion, delay and
              avoidable doubt when a buyer starts asking sharper questions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {oracleBenefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6 text-dark-blue">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                  {item.title}
                </h3>
                <p className="text-medium-grey leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When it is built */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/business-oracle-portrait.jpg"
                alt="Norivane advisors preparing a business for due diligence"
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-8">
                When it becomes relevant
              </h2>
              <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
                <p>
                  The Business Oracle is not the first step. It becomes relevant
                  later, when a business has already done the structural work and
                  is moving closer to a real transaction process.
                </p>
                <p>
                  In other words, this sits downstream of the diagnostic and the
                  broader exit preparation work. First, the business has to become
                  more transferable. Then it has to evidence that transferability
                  well.
                </p>
                <p>
                  That is where the Oracle earns its place.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relationship to Norivane */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-8">
              How it fits within Norivane
            </h2>
            <div className="space-y-6 text-lg text-dark-grey leading-relaxed">
              <p>
                Norivane begins with buyer-style scrutiny of the business itself:
                the structural weaknesses, dependencies and credibility gaps that
                affect value and process.
              </p>
              <p>
                The Business Oracle comes later. It is part of final-stage
                preparation, when the task is no longer just to improve the
                business, but to make its evidence easier for a buyer to examine
                and trust.
              </p>
              <p>
                It is not a separate theory. It is the final expression of the
                same discipline: reduce friction, improve clarity, and withstand
                scrutiny better.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Start with a conversation
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Most businesses are not ready for a Business Oracle on day one. The
              first question is whether the structure itself would withstand buyer
              scrutiny. A short conversation usually makes that clear.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/matthew-norivane/mb-30-minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
              >
                Book a 30-minute call <ArrowRight size={20} />
              </a>

              <Link
                to="/diagnostic"
                className="text-white hover:text-teal border-b border-white/30 hover:border-teal pb-0.5 font-medium text-lg transition-all duration-300"
              >
                See diagnostic options →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BusinessOracle
