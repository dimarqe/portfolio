import { useState } from 'react'
import { ExternalLinkIcon } from './Icons'

function ProjectImage({ image, title, link }) {
  const [status, setStatus] = useState(image ? 'loading' : 'placeholder')

  return (
    <div className="relative overflow-hidden rounded border border-border/50 aspect-video shrink-0 w-full sm:w-36 lg:w-44 group/img">
      {(status === 'placeholder' || status === 'error') && (
        <div className="absolute inset-0 bg-surface flex items-center justify-center">
          <span className="font-mono text-xs text-muted-2">no preview</span>
        </div>
      )}
      {status === 'loading' && (
        <div className="absolute inset-0 bg-surface animate-pulse" />
      )}
      {image && (
        <img
          src={image}
          alt={`Preview of ${title}`}
          className={`w-full h-full object-cover object-top transition-all duration-500 group-hover/img:scale-105 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
      {status === 'loaded' && link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-bg/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <ExternalLinkIcon className="w-5 h-5 text-accent" />
        </a>
      )}
    </div>
  )
}

export default function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col sm:flex-row gap-5 p-4 rounded-lg transition-all duration-300 hover:bg-surface/60 hover:shadow-lg -mx-4">
      {/* Thumbnail */}
      <ProjectImage image={project.image} title={project.title} link={project.link} />

      {/* Content */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          {project.live && (
            <span className="flex items-center gap-1 font-mono text-[10px] text-green-400 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
        </div>

        <div className="flex items-start gap-2 mb-2">
          <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-200 leading-tight">
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
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="px-2.5 py-1 rounded font-mono text-xs bg-accent/10 text-accent border border-accent/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
