import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { trackEvent } from '../utils/analytics'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import { ARTICLES } from '../data/articles'

const MONTH_ORDER = {
  January: 1, February: 2, March: 3, April: 4,
  May: 5, June: 6, July: 7, August: 8,
  September: 9, October: 10, November: 11, December: 12,
}

function parseDateStr(dateStr) {
  const [month, year] = dateStr.split(' ')
  return parseInt(year) * 100 + (MONTH_ORDER[month] || 0)
}

const Insights = () => {
  const breadcrumbs = [{ label: 'Insights', url: null }]

  // Most recent first — sorted explicitly by date, then chapter number descending
  const sorted = [...ARTICLES].sort((a, b) => {
    const dateDiff = parseDateStr(b.date) - parseDateStr(a.date)
    if (dateDiff !== 0) return dateDiff
    const chapterA = parseInt(a.slug.replace('chapter-', '')) || 0
    const chapterB = parseInt(b.slug.replace('chapter-', '')) || 0
    return chapterB - chapterA
  })
  const [featured, ...rest] = sorted

  useEffect(() => {
    trackEvent('insights_page_view', { event_category: 'page_interest' })
  }, [])

  return (
    <div className="min-h-screen bg-dark-blue">
      <SEOHelmet
        title="Insights | Norivane"
        description="Long-form writing on business transferability, exit preparation, and the structural risks that determine what a buyer will pay. Published by The Unemployable Advisor."
        keywords="business exit strategy, owner dependence, saleability, financial scrutiny readiness, UK SME exit, business sale preparation"
        canonicalUrl="/insights"
      />

      <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />

      {/* Page header */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Insights
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Long-form writing on transferability, structural risk, and the issues buyers price before a process begins.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Published on{' '}
            <a
              href="https://theunemployableadvisor.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline transition-colors"
            >
              The Unemployable Advisor
            </a>
            {' '}by Matthew Broadbent
          </p>
        </motion.div>
      </section>

      {/* Featured — most recent article */}
      <section className="pb-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            to={`/insights/${featured.slug}`}
            onClick={() => trackEvent('insight_article_click', { chapter: featured.chapter })}
            className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-teal/40 bg-white/[0.04] transition-all duration-300"
          >
            {/* Image top on mobile, right on desktop */}
            <div className="flex flex-col md:flex-row-reverse">
              {/* Hero image */}
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img
                  src={featured.heroImage.src}
                  alt={featured.heroImage.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span className="text-xs font-bold text-teal bg-teal/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      Latest
                    </span>
                    <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      {featured.chapter}
                    </span>
                    {featured.lens && (
                      <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                        {featured.lens}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{featured.date}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {featured.title}
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-teal font-semibold text-sm">
                  Read article <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Article grid */}
      <section className="pt-4 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <Link
                to={`/insights/${article.slug}`}
                onClick={() => trackEvent('insight_article_click', { chapter: article.chapter })}
                className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-teal/40 bg-white/[0.04] transition-all duration-300 h-full"
              >
                {/* Thumbnail */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={article.heroImage.src}
                    alt={article.heroImage.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-teal uppercase tracking-wider">
                      {article.chapter}
                    </span>
                    {article.lens && (
                      <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                        {article.lens}
                      </span>
                    )}
                    <span className="text-xs text-gray-500 ml-auto">{article.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-teal transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            These articles sit behind the Saleability Diagnostic. The writing explains the framework. The diagnostic applies it directly to your business.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
            <a
              href="https://theunemployableadvisor.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal text-sm font-semibold hover:underline"
            >
              Follow The Unemployable Advisor on Substack <ArrowRight size={14} />
            </a>
            <span className="hidden sm:block text-gray-600 text-sm">·</span>
            <Link
              to="/diagnostic"
              className="inline-flex items-center gap-2 text-teal text-sm font-semibold hover:underline"
            >
              See the diagnostic <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Insights
