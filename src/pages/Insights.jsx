import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { trackEvent } from '../utils/analytics'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import { ARTICLES } from '../data/articles'

const COMING_SOON = {
  chapter: 'Chapter 5',
  title: 'Revenue Concentration',
  date: '6 March 2026',
  lens: 'Commercial Concentration',
  excerpt:
    'How concentrated your revenue is — across clients, contracts, and channels — is one of the first things a serious buyer prices. This chapter examines what buyer scrutiny of commercial concentration actually looks like, and what it costs when the numbers are exposed.',
  substackUrl: 'https://open.substack.com/pub/theunemployableadvisor/p/chapter-05-revenue-concentration',
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Insights = () => {
  const breadcrumbs = [{ label: 'Insights', url: null }]

  useEffect(() => {
    trackEvent('insights_page_view', { event_category: 'page_interest' })
  }, [])

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Insights | Norivane"
        description="Long-form writing on business transferability, exit preparation, and the structural risks that determine what a buyer will pay. Published by The Unemployable Advisor."
        keywords="business exit strategy, owner dependence, saleability, financial scrutiny readiness, UK SME exit, business sale preparation"
        canonicalUrl="/insights"
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
              Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Long-form writing on the structural risks that determine what a buyer will pay —
              and what founders can do about them before a process starts.
            </p>
            <p className="text-sm text-gray-400 mt-6">
              Published on{' '}
              <a
                href="https://theunemployableadvisor.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                The Unemployable Advisor
              </a>
              {' '}by Matthew Broadbent
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {ARTICLES.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-gray-200 hover:border-teal/40 hover:shadow-md transition-all duration-300 p-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-teal uppercase tracking-wider">
                    {article.chapter}
                  </span>
                  {article.lens && (
                    <span className="text-xs font-semibold bg-teal/10 text-teal px-2.5 py-0.5 rounded-full">
                      {article.lens}
                    </span>
                  )}
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>

                <h2 className="text-2xl font-bold text-dark-blue mb-4">
                  {article.title}
                </h2>

                <p className="text-dark-grey leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <Link
                  to={`/insights/${article.slug}`}
                  onClick={() => trackEvent('insight_article_click', { chapter: article.chapter })}
                  className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read article <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}

            {/* Coming soon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ARTICLES.length * 0.08 }}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-bold text-teal uppercase tracking-wider">
                  {COMING_SOON.chapter}
                </span>
                <span className="text-xs font-semibold bg-teal/10 text-teal px-2.5 py-0.5 rounded-full">
                  {COMING_SOON.lens}
                </span>
                <span className="text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Clock size={11} />
                  Publishing {COMING_SOON.date}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-500 mb-4">
                {COMING_SOON.title}
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {COMING_SOON.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-dark-grey leading-relaxed max-w-2xl mx-auto mb-6">
              These articles are the intellectual foundation behind the Saleability Diagnostic.
              If the framework resonates, the diagnostic applies it directly to your business.
            </p>
            <a
              href="https://theunemployableadvisor.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal font-semibold text-sm hover:underline"
            >
              Follow The Unemployable Advisor on Substack <ArrowRight size={14} className="inline" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Insights
