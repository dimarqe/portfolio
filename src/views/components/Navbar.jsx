import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollSpy } from '../../controllers/useScrollSpy'
import { personal } from '../../models/personal'
import Button from './Button'
import { MenuIcon, CloseIcon } from './Icons'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1))

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    function onResize() { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/25 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-200">
              <span className="font-mono text-xs font-bold text-accent">DR</span>
            </div>
            <span className="font-display font-semibold text-primary text-sm hidden sm:block">
              Dimitri Russell
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const isActive = activeId === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-md font-body text-sm transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-muted hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md bg-accent/8 border border-accent/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Desktop resume CTA */}
          <div className="hidden md:block">
            <Button href={personal.resumeUrl} variant="ghost" external>
              Resume
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted hover:text-primary transition-colors p-1"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-surface/95 backdrop-blur-xl border-b border-border shadow-xl md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg font-body text-sm transition-colors duration-200 ${
                    activeId === link.href.slice(1)
                      ? 'text-accent bg-accent/8 border border-accent/15'
                      : 'text-muted hover:text-primary hover:bg-surface-2'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border mt-1">
                <Button href={personal.resumeUrl} variant="ghost" external className="w-full justify-center">
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
