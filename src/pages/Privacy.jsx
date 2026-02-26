import React from 'react'
import SEOHelmet from '../components/SEOHelmet'

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#0F1F3D' }}>
      {title}
    </h2>
    {children}
  </div>
)

const P = ({ children }) => (
  <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1rem' }}>
    {children}
  </p>
)

const Privacy = () => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem', background: '#f8fafc' }}>
      <SEOHelmet
        title="Privacy Policy | Norivane"
        description="Privacy policy for Norivane Limited. How we collect, use, and protect your personal data under UK GDPR."
        canonicalUrl="/privacy"
      />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#0F1F3D', marginBottom: '0.75rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
            Last updated: February 2026
          </p>
        </div>

        <div style={{ background: '#fff', borderRadius: '1.25rem', padding: '3rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>

          <Section title="1. Who we are">
            <P>
              Norivane Limited is the data controller responsible for your personal data.
              We are a UK-based Exit Strategy Architecture firm.
            </P>
            <P>
              <strong>Contact:</strong> Matthew Broadbent, Norivane Limited<br />
              <strong>Email:</strong> us@norivane.com
            </P>
          </Section>

          <Section title="2. What data we collect and why">
            <P>
              When you use our Owner Dependence Assessment or Saleability Diagnostic tools, we collect:
            </P>
            <ul style={{ color: '#64748b', lineHeight: 2, marginBottom: '1rem', paddingLeft: '1.5rem' }}>
              <li>Your name and email address — to deliver your results and, with your consent, to send related communications</li>
              <li>Your company name — to personalise your assessment and report</li>
              <li>Your questionnaire responses — to calculate your diagnostic score and generate your report</li>
              <li>Your exit timeline — to contextualise your results</li>
            </ul>
            <P>
              We collect this data on the legal basis of <strong>contract performance</strong> (to deliver the
              service you have requested) and, where you have given explicit consent, on the basis of
              <strong> consent</strong> for marketing communications.
            </P>
          </Section>

          <Section title="3. Marketing communications">
            <P>
              We will only send you marketing emails if you have explicitly checked the consent box
              when registering. You can withdraw consent and unsubscribe at any time by emailing
              us@norivane.com or clicking the unsubscribe link in any email we send.
            </P>
            <P>
              We record when consent was given and will not send marketing communications without it.
            </P>
          </Section>

          <Section title="4. How we store and protect your data">
            <P>
              Your data is stored securely in Supabase, a cloud database provider with servers
              based in the European Economic Area. Access is restricted to authorised personnel only,
              using encrypted connections and service-role authentication.
            </P>
            <P>
              We do not sell, rent, or share your personal data with third parties for their own
              marketing purposes.
            </P>
          </Section>

          <Section title="5. Third-party processors">
            <P>We use the following third-party services to operate our diagnostic tools:</P>
            <ul style={{ color: '#64748b', lineHeight: 2, marginBottom: '1rem', paddingLeft: '1.5rem' }}>
              <li><strong>Supabase</strong> — secure data storage</li>
              <li><strong>Vercel</strong> — application hosting</li>
              <li><strong>Resend</strong> — transactional email delivery</li>
              <li><strong>Stripe</strong> — payment processing (paid tiers only)</li>
            </ul>
            <P>
              Each processor operates under appropriate data processing agreements and complies
              with UK GDPR requirements.
            </P>
          </Section>

          <Section title="6. How long we keep your data">
            <P>
              We retain your assessment responses and contact details for up to three years from
              the date of your last interaction with Norivane. After this period, your data will
              be deleted or anonymised unless we are required by law to retain it longer.
            </P>
          </Section>

          <Section title="7. Your rights under UK GDPR">
            <P>You have the right to:</P>
            <ul style={{ color: '#64748b', lineHeight: 2, marginBottom: '1rem', paddingLeft: '1.5rem' }}>
              <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong>Rectification</strong> — ask us to correct inaccurate or incomplete data</li>
              <li><strong>Erasure</strong> — ask us to delete your personal data ("right to be forgotten")</li>
              <li><strong>Restriction</strong> — ask us to limit how we use your data</li>
              <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
              <li><strong>Withdraw consent</strong> — at any time, for any processing based on consent</li>
              <li><strong>Object</strong> — to processing based on legitimate interests</li>
            </ul>
            <P>
              To exercise any of these rights, email us@norivane.com. We will respond within
              30 days.
            </P>
          </Section>

          <Section title="8. Complaints">
            <P>
              If you are not satisfied with how we handle your personal data, you have the right
              to lodge a complaint with the UK Information Commissioner's Office (ICO):
            </P>
            <P>
              <strong>ICO website:</strong> ico.org.uk<br />
              <strong>ICO helpline:</strong> 0303 123 1113
            </P>
          </Section>

          <Section title="9. Changes to this policy">
            <P>
              We may update this policy from time to time. The date at the top of this page
              reflects when it was last revised. Continued use of our services after any update
              constitutes acceptance of the revised policy.
            </P>
          </Section>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginTop: '1rem' }}>
            <P>
              Questions about this policy? Email us at{' '}
              <a href="mailto:us@norivane.com" style={{ color: '#0D9488', textDecoration: 'none', fontWeight: 600 }}>
                us@norivane.com
              </a>
            </P>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Privacy
