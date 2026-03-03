import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { trackScoreToolClick } from '../utils/analytics'
import Logo from './Logo'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matthewatnorivanedotcom/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61574886929311',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/bro43704',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/unemployableadvisor/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Substack',
    href: 'https://substack.com/@theunemployableadvisor',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 17.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
]

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-gray-400 mb-5 max-w-sm leading-relaxed">
              The strategic partner for ambitious business owners.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-teal transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/what-we-do" className="text-gray-400 hover:text-teal transition-colors duration-200 text-sm">What We Do</Link></li>
              <li><Link to="/diagnostic" className="text-gray-400 hover:text-teal transition-colors duration-200 text-sm">The Diagnostic</Link></li>
              <li><Link to="/exit-architecture" className="text-gray-400 hover:text-teal transition-colors duration-200 text-sm">Exit Architecture</Link></li>
              <li><Link to="/business-oracle" className="text-gray-400 hover:text-teal transition-colors duration-200 text-sm">Business Oracle</Link></li>
              <li>
                <a
                  href="https://app.norivane.com/free"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackScoreToolClick('footer')}
                  className="text-gray-400 hover:text-teal transition-colors duration-200 text-sm"
                >
                  Free Score Check
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-teal flex-shrink-0" />
                <a href="mailto:us@norivane.co.uk" className="text-gray-400 hover:text-teal transition-colors duration-200 text-sm">
                  us@norivane.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-teal flex-shrink-0" />
                <a href="tel:+447736105055" className="text-gray-400 hover:text-teal transition-colors duration-200 text-sm">
                  +44 (0) 7736 105 055
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-teal flex-shrink-0" />
                <span className="text-gray-400 text-sm">Swansea, Wales, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/60 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Norivane. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-teal transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-teal transition-colors duration-200 text-sm">
              About
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-teal transition-colors duration-200 text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
