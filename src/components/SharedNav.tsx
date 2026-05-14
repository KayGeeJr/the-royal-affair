'use client'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

interface SharedNavProps {
  variant: 'light' | 'dark'
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/tra-creations', label: 'TRA Creations' },
  { to: '/trac-magazine', label: 'TRAC Magazine' },
  { to: '/princess', label: 'Princess M' },
]

export default function SharedNav({ variant }: SharedNavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isDark = variant === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = isDark
    ? scrolled
      ? 'bg-royal-black/95 backdrop-blur-sm border-b border-royal-dark-border'
      : 'bg-royal-black border-b border-royal-dark-border'
    : scrolled
    ? 'bg-royal-cream/95 backdrop-blur-sm border-b border-royal-border'
    : 'bg-royal-cream border-b border-royal-border'

  const textBase = isDark ? 'text-royal-cream/50' : 'text-royal-muted'
  const textActive = isDark ? 'text-royal-gold' : 'text-royal-black'
  const burgerColor = isDark ? 'text-royal-cream' : 'text-royal-black'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="px-8 md:px-20 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center h-10">
            <img
              src={isDark
                ? '/images/tra_creations/WHITE TRACreations LOGO.png'
                : '/images/tra_creations/BLACK TRAC LOGO 2.png'}
              alt="The Royal Affair"
              className="h-7 w-auto object-contain"
            />
          </NavLink>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-body text-[10px] tracking-[0.3em] uppercase transition-all duration-200 ${
                      isActive
                        ? `${textActive} underline underline-offset-4 decoration-royal-gold decoration-1`
                        : `${textBase} hover:text-royal-gold`
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className={`md:hidden ${burgerColor}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={`fixed inset-0 z-[60] ${isDark ? 'bg-royal-black' : 'bg-royal-cream'} flex flex-col items-center justify-center`}>
          <button
            className={`absolute top-5 right-8 ${burgerColor}`}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="w-8 border-t border-royal-gold mb-8" />

          <ul className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-5xl hover:text-royal-gold transition-colors duration-200 ${
                    isDark ? 'text-royal-cream' : 'text-royal-black'
                  }`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
