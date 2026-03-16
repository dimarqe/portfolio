import { personal } from '../../models/personal'
import { useScrollSpy } from '../../controllers/useScrollSpy'
import { LinkedinIcon, EmailIcon } from './Icons'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1))

export default function Sidebar() {
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between px-6 lg:px-0 pt-16 pb-12 lg:py-24">
      <div>
        {/* Available badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-3">
          Dimitri Russell
        </h1>

        {/* Title */}
        <h2 className="text-lg font-medium text-primary/70 mb-5">
          Full-Stack Software Developer
        </h2>

        {/* Bio excerpt */}
        <p className="text-muted text-sm leading-relaxed max-w-xs">
        
        </p>

        {/* Desktop nav */}
        <nav className="mt-14 hidden lg:block" aria-label="In-page navigation">
          <ul className="space-y-5">
            {NAV_LINKS.map(link => {
              const isActive = activeId === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`group flex items-center gap-4 transition-all duration-300 ${
                      isActive ? 'text-primary' : 'text-muted hover:text-primary'
                    }`}
                  >
                    <span
                      className={`h-px bg-current transition-all duration-300 ${
                        isActive ? 'w-16' : 'w-8 group-hover:w-16'
                      }`}
                    />
                    <span className="text-xs font-bold tracking-widest uppercase">
                      {link.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-5 mt-10 lg:mt-0">
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted hover:text-primary transition-colors duration-200"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${personal.email}`}
          aria-label="Email"
          className="text-muted hover:text-primary transition-colors duration-200"
        >
          <EmailIcon className="w-5 h-5" />
        </a>
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors duration-200 border border-muted/30 hover:border-primary/50 px-3 py-1.5 rounded"
        >
          Resume ↗
        </a>
      </div>
    </aside>
  )
}
