import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'

const BusinessOracle = () => {
  const breadcrumbs = [
    { label: 'Business Oracle', url: null }
  ]

  const exitBenefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "Faster buyer confidence",
      description: "Buyers get answers instantly, not weeks later. Confidence builds faster and conditions reduce."
    },
    {
      icon: <Shield size={32} />,
      title: "Cleaner deals",
      description: "Fewer conditions. Fewer surprises. A deal that holds together from heads of terms to completion."
    },
    {
      icon: <Zap size={32} />,
      title: "Better offers",
      description: "For angel investors doing smaller transactions it can be transformative - replacing weeks of light-touch DD with genuine interrogation of the business."
    }
  ]

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Business Oracle | Intelligent Knowledge Map for Business Sale | Norivane"
        description="The Business Oracle transforms how businesses prepare for sale - replacing static data rooms with a living, queryable knowledge map."
        keywords="business oracle, due diligence, data room, business sale preparation, knowledge map, exit readiness, UK SME"
        canonicalUrl="/business-oracle"
      />

      <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/business-oracle-hero.jpeg"
            alt="Business Oracle - queryable knowledge map for business sale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-blue/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              What if a buyer could ask your business{' '}
              <span className="text-teal">anything?</span>
            </h1>

            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              The Business Oracle transforms how businesses prepare for sale - replacing
              static data rooms with a living, queryable knowledge map.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-colors duration-200"
            >
              <span>Find Out More</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Traditional due diligence is broken.
            </h2>
            <p className="text-xl text-medium-grey leading-relaxed">
              Buyers arrive with 47 questions and 800 documents that take weeks and
              thousands in professional fees to navigate. Deals fall apart not on
              price but on doubt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - What is a Business Oracle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
                What is a Business Oracle?
              </h2>
              <div className="space-y-6 text-xl text-medium-grey leading-relaxed">
                <p>
                  Every contract, customer relationship, financial decision and
                  operational process your business has ever generated - organised
                  not into folders but into an intelligent knowledge map. Connected.
                  Understood. Queryable in seconds.
                </p>
                <p className="font-semibold text-dark-blue">
                  Not a document dump. A living intelligence layer.
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
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - What it means for your exit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              What it means for your exit
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Faster buyer confidence. Fewer conditions. Cleaner deals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {exitBenefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6 text-dark-blue">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark-blue mb-4">{item.title}</h3>
                <p className="text-medium-grey leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Who builds it */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/business-oracle-portrait.jpg"
                alt="Norivane team - Business Oracle advisors"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
                Who builds it
              </h2>
              <div className="space-y-4 text-xl text-medium-grey leading-relaxed">
                <p>
                  Norivane understands both sides of a business transaction. As buyers,
                  deploying capital into UK SMEs. As sellers, navigating exits under pressure.
                </p>
                <p>
                  The Business Oracle is built during your exit readiness engagement - typically
                  12-36 months before transaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Find out what a Business Oracle could look like for your business
            </h2>

            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BusinessOracle
