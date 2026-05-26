import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
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

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const navBg = isDark
    ? scrolled
      ? 'bg-royal-black/95 backdrop-blur-sm border-b border-royal-burgundy/30'
      : 'bg-royal-black border-b border-royal-burgundy/20'
    : scrolled
    ? 'bg-royal-cream/95 backdrop-blur-sm border-b border-royal-gold/30'
    : 'bg-royal-cream border-b border-royal-gold/20'

  const textBase = isDark ? 'text-royal-cream/50' : 'text-royal-muted'
  const textActive = isDark ? 'text-royal-gold' : 'text-royal-burgundy'
  const burgerColor = isDark ? 'text-royal-cream' : 'text-royal-black'

  const mobileMenu = menuOpen
    ? createPortal(
        <div
          className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center ${
            isDark ? 'bg-royal-black' : 'bg-royal-cream'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
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
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-4xl sm:text-5xl transition-colors duration-200 ${
                      isActive
                        ? 'text-royal-gold'
                        : isDark
                        ? 'text-royal-cream hover:text-royal-gold'
                        : 'text-royal-black hover:text-royal-burgundy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="px-8 md:px-20 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center h-10" onClick={() => setMenuOpen(false)}>
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
                        : `${textBase} hover:text-royal-burgundy`
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`md:hidden ${burgerColor}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenu}
    </>
  )
}
