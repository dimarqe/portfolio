import { personal } from '../../models/personal'
import { LinkedinIcon, EmailIcon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {year} {personal.fullName}. Built with React & Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors duration-200"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted hover:text-accent transition-colors duration-200"
          >
            <EmailIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
