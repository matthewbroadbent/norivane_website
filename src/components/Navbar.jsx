import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'The Diagnostic', path: '/diagnostic' },
    { name: 'Exit Architecture', path: '/exit-architecture' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const isHomePage = location.pathname === '/'
  const isLight = isScrolled || !isHomePage

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      isLight
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo
              currentPath={location.pathname}
              variant={isLight ? 'default' : 'white'}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? (isLight ? 'text-teal' : 'text-teal')
                    : (isLight
                        ? 'text-dark-blue hover:text-teal'
                        : 'text-white hover:text-teal')
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://score.norivane.com/free"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-teal text-white hover:bg-teal/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Check Your Score
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md bg-teal text-white hover:bg-teal/90 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-teal bg-teal/10'
                    : 'text-dark-blue hover:text-teal hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="https://score.norivane.com/free"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-3 bg-teal text-white rounded-full font-semibold text-sm hover:bg-teal/90 transition-colors duration-200"
              >
                Check Your Score
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
