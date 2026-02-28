import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import ImageOptimized from '../components/ImageOptimized'
import { trackEvent } from '../utils/analytics'
import { ARTICLES } from '../data/articles'

const InsightArticle = () => {
  const { slug } = useParams()
  const article = ARTICLES.find((a) => a.slug === slug)

  useEffect(() => {
    if (article) {
      trackEvent('insight_article_view', { chapter: article.chapter, slug })
    }
  }, [slug, article])

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-blue mb-4">Article not found</h1>
          <Link to="/insights" className="text-teal font-semibold hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  const breadcrumbs = [
    { label: 'Insights', url: '/insights' },
    { label: article.title, url: null },
  ]

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title={`${article.chapter}: ${article.title} | Norivane`}
        description={article.excerpt}
        keywords={`business exit strategy, ${article.lens ? article.lens.toLowerCase() + ', ' : ''}saleability, UK SME, business sale preparation`}
        canonicalUrl={`/insights/${article.slug}`}
      />

      <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-dark-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-sm font-bold text-teal uppercase tracking-wider">
                {article.chapter}
              </span>
              {article.lens && (
                <span className="text-xs font-semibold bg-teal/20 text-teal px-2.5 py-0.5 rounded-full">
                  {article.lens}
                </span>
              )}
              <span className="text-sm text-gray-400">{article.date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              {article.excerpt}
            </p>

            <p className="text-sm text-gray-500 mt-6">
              By Matthew Broadbent ·{' '}
              <a
                href="https://theunemployableadvisor.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal transition-colors"
              >
                The Unemployable Advisor
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero image — shown when available */}
      {article.heroImage && (
        <div className="bg-dark-blue pb-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ImageOptimized
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              className="w-full rounded-t-2xl"
              priority={true}
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-article"
          >
            {article.sections.map((section, i) => (
              <div key={i} className="mb-10">
                {section.heading && (
                  <h2 className="text-2xl font-bold text-dark-blue mb-4 leading-snug">
                    {section.heading}
                  </h2>
                )}
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-lg text-dark-grey leading-relaxed mb-5 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </motion.article>

          {/* Attribution */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">
              Also published on{' '}
              <a
                href={article.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
                onClick={() => trackEvent('substack_attribution_click', { chapter: article.chapter })}
              >
                The Unemployable Advisor
              </a>
              {' '}· By Matthew Broadbent
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
              The Saleability Diagnostic
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
              This is the framework the diagnostic applies to your business.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
              The articles set out what buyers look for and why it matters. The diagnostic
              runs those same lenses across your specific business — and tells you where
              you stand before a buyer does.
            </p>
            <Link
              to="/diagnostic"
              className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
            >
              Go to the Diagnostic <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back / next nav */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft size={15} /> All Insights
          </Link>
          {(() => {
            const currentIndex = ARTICLES.findIndex((a) => a.slug === slug)
            const next = ARTICLES[currentIndex + 1]
            return next && !next.coming ? (
              <Link
                to={`/insights/${next.slug}`}
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                {next.chapter} <ArrowRight size={15} />
              </Link>
            ) : null
          })()}
        </div>
      </section>
    </div>
  )
}

export default InsightArticle
