import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import SpiderDiagram from '../components/SpiderDiagram'
import FAQSection from '../components/FAQSection'
import { useScrollDepth } from '../hooks/useScrollDepth'
import { trackScoreToolClick } from '../utils/analytics'

const HOME_FAQS = [
  {
    question: 'What is the Saleability Diagnostic?',
    answer: 'A structured assessment of your business across five dimensions that determine what a buyer sees when they look at it. It does not tell you what your business is worth. It tells you where a buyer would apply a discount, demand a protection, or walk away — before they do.',
  },
  {
    question: 'Who is this for?',
    answer: 'Established founder-led businesses with turnover between £1m and £25m, who are considering an exit within the next five years and want to understand where they stand before a process starts. It is not for startups. It is not for owners who want reassurance rather than scrutiny.',
  },
  {
    question: 'How long does it take?',
    answer: 'The free Owner Dependence Score takes eight minutes. The full Saleability Diagnostic questionnaire takes 25–40 minutes. The written report is delivered within one to three hours of completion, reviewed before release. There are text boxes for you to add comments and context to your answers within the questionnaire. The more information you can give in these areas, the better quality information you will receive back in the report.',
  },
  {
    question: 'Is this a valuation?',
    answer: 'No. A valuation tells you what your business might be worth. The diagnostic tells you where that number would be discounted — and why. Those are different questions. The diagnostic is a buyer-style structural interpretation, not a financial assessment.',
  },
  {
    question: 'What happens after I receive the report?',
    answer: 'That depends on what it finds. Some owners take the report and act on it directly. Others want to work through the implications — that is what the Private Briefing is for. There is no obligation to do anything further.',
  },
  {
    question: 'Why would I do this now rather than when I am closer to selling?',
    answer: 'Because most of what the diagnostic identifies cannot be fixed quickly. Owner dependence, management depth, commercial concentration — these are structural. They take months to years to address properly. A founder who starts two years before a transaction has options. A founder who starts six months before does not.',
  },
  {
    question: 'How is this different from speaking to a business broker or adviser?',
    answer: "A broker will normally put a value on your business with a view to getting you to sign up and join their brokerage site. 90% of businesses offered for sale on brokers' sites do not sell. Whereas, those business owners who properly prepare for a business sale and follow a business exit strategy are, on average, likely to increase the value of their business by 25% compared to a business owner who does not prepare for sale.",
  },
  {
    question: 'What is the Private Briefing?',
    answer: 'A 90-minute working session with Matthew Broadbent following the written diagnostic. It is not a presentation of the report. It is a conversation about what the findings mean for your specific situation — your sector, your timeline, your likely buyer profile — and what to address first given where you are now.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Home = () => {
  useScrollDepth()

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Norivane — Exit Strategy Architecture for UK Business Owners"
        description="Norivane helps UK business owners understand what a buyer sees before they do. Structural analysis, regime diagnosis, and exit readiness built years before you need it."
        keywords="exit strategy, business sale, owner dependence, saleability diagnostic, exit architecture, UK SME, business valuation"
        canonicalUrl="/"
      />

      {/* Section 1 — Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-dark-blue">
        <div className="absolute inset-0 bg-dark-blue" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
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
                href="https://app.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('home_hero')}
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
              href="https://app.norivane.com/free"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackScoreToolClick('home_cta_section')}
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
      <section id="how-it-works" className="py-24 bg-gray-50">
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
            {/* Tier 3 — shown first */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-dark-blue rounded-2xl p-8 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-teal text-white text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">Recommended</span>
                <span className="text-sm font-semibold text-teal uppercase tracking-wider">£2,500 + VAT</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Diagnostic + Private Briefing</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                All five lenses. A written report. Plus a 90-minute private briefing with Matthew — contextual
                analysis of your specific situation and a clear action pathway. Already have the Diagnostic?
                Upgrade within 30 days for £2,000 + VAT.
              </p>
              <a
                href="https://score.norivane.com/premium"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Book the Briefing <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Tier 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">£497 + VAT</div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Saleability Diagnostic</h3>
              <p className="text-medium-grey text-sm leading-relaxed mb-6 flex-1">
                All five lenses. A written report. Your regime classification. A prioritised roadmap of
                what to address — and in what order — before a transaction.
              </p>
              <Link
                to="/diagnostic"
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Get the Diagnostic <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Free tier — de-emphasised */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col opacity-80"
            >
              <div className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">Free</div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Owner Dependence Score</h3>
              <p className="text-medium-grey text-sm leading-relaxed mb-6 flex-1">
                Not ready to commit? Start here. One lens, 8 minutes, no payment. It tells you where
                the most common buyer constraint sits in your business.
              </p>
              <a
                href="https://app.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('home_product_ladder')}
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Start for free <ArrowRight size={15} />
              </a>
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

            <div className="mt-10 space-y-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200"
              >
                Read more about the methodology <ArrowRight size={16} />
              </Link>
              <p className="text-dark-grey">
                If this is the lens you want applied to your business,{' '}
                <Link to="/diagnostic" className="text-teal font-semibold hover:underline">
                  start with the Diagnostic
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote: 'One of a rare breed who demonstrates not only a high level of financial expertise, but also a high degree of business acumen. He translates the financial aspects of running a business to both the strategic and tactical needs of the organisation.',
                attribution: 'Managing Director, construction sector',
              },
              {
                quote: 'Hard-won through years in boardrooms, high-stakes meetings, late-night document reviews, reading people acutely, and skilfully navigating conversations to uncover the truth. Time spent in Matthew\'s company is always an investment.',
                attribution: 'Senior Technology Professional',
              },
              {
                quote: 'Robust financial analysis of investment opportunities, helpful strategic input, absolute integrity.',
                attribution: 'Finance and Investment Director, property sector',
              },
            ].map((t) => (
              <div key={t.attribution} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <p className="text-dark-grey text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-teal text-xs font-semibold uppercase tracking-wider">{t.attribution}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={HOME_FAQS}
        title="Common questions"
      />

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
              Ready to see what a buyer sees?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/diagnostic"
                className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
              >
                Go to the Diagnostic
              </Link>

              <a
                href="https://app.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScoreToolClick('home_final_cta')}
                className="text-white hover:text-teal border-b border-white/30 hover:border-teal pb-0.5 font-medium text-lg transition-all duration-300"
              >
                Or check your Owner Dependence Score free first →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
