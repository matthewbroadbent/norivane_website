import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { trackEvent } from '../utils/analytics'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const ARTICLES = [
  {
    chapter: 'Chapter 1',
    title: 'Your Business Is Worth Whatever You Need It to Be',
    date: 'February 2026',
    lens: null,
    description:
      'Most owners approach valuation from the wrong end — starting with a sector multiple and working backwards. The right starting point is your own balance sheet: what retirement costs, what you have, what the shortfall is. That number is what determines whether a transaction will actually work for you. Misaligned shareholder objectives and unchallenged forecasts are two of the most common reasons deals fail before they start.',
    url: 'https://theunemployableadvisor.substack.com/p/your-business-is-worth-whatever-you',
    coming: false,
  },
  {
    chapter: 'Chapter 2',
    title: 'The Self-Governing Asset',
    date: 'February 2026',
    lens: 'Owner Dependence',
    description:
      'By 2030, buyers will not be purchasing a team — they will be purchasing an Agentic Infrastructure. The Human-to-Revenue ratio is already replacing EBITDA as the primary M&A metric in AI-native markets. Businesses that continue to rely on human judgement for over 40% of core decisions face valuation discounts that compound over time. The window to address this is narrower than most founders assume.',
    url: 'https://theunemployableadvisor.substack.com/p/chapter-2-the-self-governing-asset',
    coming: false,
  },
  {
    chapter: 'Chapter 3',
    title: 'The First Glance Economy',
    date: 'February 2026',
    lens: 'Financial Scrutiny Readiness',
    description:
      'The most consequential moments in a business sale happen before any spreadsheet is opened. Buyers form a thesis from the earliest signals: financial consistency, compliance posture, the professionalism of initial interactions. Once that thesis is set, it filters everything that follows. UK median EBITDA multiples sit at 5.4x — but the range within any sector varies by 3x or more. The difference is rarely operational. It is structural.',
    url: 'https://theunemployableadvisor.substack.com/p/chapter-7-the-first-glance-economy',
    coming: false,
  },
  {
    chapter: 'Chapter 4',
    title: 'Financial Scrutiny Readiness: Prove Your Numbers',
    date: 'February 2026',
    lens: 'Financial Scrutiny Readiness',
    description:
      'Buyers do not check whether your files exist. They stress-test whether your numbers hold up. Management accounts formatted for founder comfort, tax optimisation strategies that suppress profit, and HMRC arrears left to accumulate all become leverage in the wrong hands at the wrong moment. Financial Scrutiny Readiness is one of the five lenses the Saleability Diagnostic assesses. This article explains what it looks like when it fails.',
    url: 'https://theunemployableadvisor.substack.com/p/chapter-4-prove-your-numbers-are',
    coming: false,
  },
  {
    chapter: 'Chapter 5',
    title: 'Revenue Concentration',
    date: '6 March 2026',
    lens: 'Commercial Concentration',
    description:
      'How concentrated your revenue is — across clients, contracts, and channels — is one of the first things a serious buyer prices. This chapter examines what buyer scrutiny of commercial concentration actually looks like, and what it costs when the numbers are exposed.',
    url: 'https://open.substack.com/pub/theunemployableadvisor/p/chapter-05-revenue-concentration',
    coming: true,
  },
]

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
                key={article.chapter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-2xl border p-8 ${
                  article.coming
                    ? 'bg-gray-50 border-gray-200'
                    : 'bg-white border-gray-200 hover:border-teal/40 hover:shadow-md transition-all duration-300'
                }`}
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
                  {article.coming && (
                    <span className="text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Clock size={11} />
                      Publishing {article.date}
                    </span>
                  )}
                  {!article.coming && (
                    <span className="text-xs text-gray-400">{article.date}</span>
                  )}
                </div>

                <h2 className={`text-2xl font-bold mb-4 ${article.coming ? 'text-gray-500' : 'text-dark-blue'}`}>
                  {article.title}
                </h2>

                <p className={`leading-relaxed mb-6 ${article.coming ? 'text-gray-400' : 'text-dark-grey'}`}>
                  {article.description}
                </p>

                {article.coming ? (
                  <span className="inline-flex items-center gap-2 text-gray-400 text-sm font-semibold">
                    Available 6 March 2026
                  </span>
                ) : (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('insight_article_click', { chapter: article.chapter })}
                    className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200"
                  >
                    Read on The Unemployable Advisor <ArrowRight size={16} />
                  </a>
                )}
              </motion.div>
            ))}
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
