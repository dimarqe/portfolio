import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../controllers/animations'
import { ExternalLinkIcon } from './Icons'

function ProjectPreview({ image, title }) {
  const [status, setStatus] = useState(image ? 'loading' : 'placeholder')

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-surface mb-5 aspect-video">
      {/* Placeholder — shown when no image is provided yet */}
      {status === 'placeholder' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-2">
          {/* Browser chrome mockup */}
          <div className="w-full px-4 absolute top-0 left-0">
            <div className="flex items-center gap-1.5 py-2 border-b border-border">
              <div className="w-2 h-2 rounded-full bg-border-2" />
              <div className="w-2 h-2 rounded-full bg-border-2" />
              <div className="w-2 h-2 rounded-full bg-border-2" />
              <div className="ml-2 flex-1 h-3 rounded-sm bg-border max-w-[120px]" />
            </div>
          </div>
          <span className="font-mono text-xs text-muted-2 mt-4">add screenshot to</span>
          <span className="font-mono text-xs text-muted">public/images/projects/</span>
        </div>
      )}

      {/* Loading skeleton */}
      {status === 'loading' && (
        <div className="absolute inset-0 bg-surface-2 animate-pulse" />
      )}

      {/* Error fallback */}
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-surface-2">
          <div className="w-full px-4 absolute top-0 left-0">
            <div className="flex items-center gap-1.5 py-2 border-b border-border">
              <div className="w-2 h-2 rounded-full bg-border-2" />
              <div className="w-2 h-2 rounded-full bg-border-2" />
              <div className="w-2 h-2 rounded-full bg-border-2" />
            </div>
          </div>
          <span className="font-mono text-xs text-muted-2">image not found</span>
        </div>
      )}

      {/* Screenshot */}
      {image && (
        <img
          src={image}
          alt={`Preview of ${title}`}
          className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}

      {/* Bottom gradient overlay */}
      {status === 'loaded' && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/20 pointer-events-none" />
      )}
    </div>
  )
}

export default function ProjectCard({ project }) {
  if (project.placeholder) {
    return (
      <motion.div
        variants={fadeInUp}
        className="relative flex flex-col items-center justify-center p-8 rounded-xl border border-border bg-surface-2/30 min-h-[260px] opacity-40"
      >
        <div className="w-10 h-10 rounded-full border border-border-2 flex items-center justify-center mb-4">
          <span className="text-muted font-mono text-lg">+</span>
        </div>
        <p className="font-display font-semibold text-muted text-lg">Coming Soon</p>
        <p className="text-muted-2 text-sm mt-2 text-center">More projects on the way</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col p-5 rounded-xl border border-border bg-surface-2/50 card-hover"
    >
      {/* Page preview */}
      <ProjectPreview image={project.image} title={project.title} />

      {/* Live badge */}
      {project.live && (
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-green-400 tracking-wider uppercase">Live</span>
        </div>
      )}

      {/* Title row */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display font-bold text-lg text-primary group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-muted hover:text-accent transition-colors duration-200 mt-0.5"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-accent/8 border border-accent/15 font-mono text-xs text-accent/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
