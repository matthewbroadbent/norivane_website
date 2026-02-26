import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { trackScoreToolClick } from '../utils/analytics'
import Logo from './Logo'

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
            <p className="text-gray-400 mb-4 max-w-sm leading-relaxed">
              The strategic partner for ambitious business owners.
            </p>
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
                  href="https://score.norivane.com/free"
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
