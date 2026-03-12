import { motion } from 'framer-motion'
import { fadeInUp } from '../../controllers/animations'

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-accent bg-bg shadow-[0_0_12px_rgba(34,211,238,0.4)]" />

      {/* Card */}
      <div className="p-5 rounded-xl border border-border bg-surface-2/40 hover:border-border-2 transition-colors duration-300">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
          <div>
            <h3 className="font-display font-bold text-primary text-lg leading-tight">
              {experience.role}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-accent font-medium text-sm">{experience.company}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-accent/8 border border-accent/15 font-mono text-xs text-accent/70">
                {experience.type}
              </span>
            </div>
          </div>
          <span className="font-mono text-xs text-muted shrink-0 mt-1">
            {experience.startDate} – {experience.endDate}
          </span>
        </div>

        {/* Bullets */}
        <ul className="mt-4 space-y-2">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="shrink-0 text-accent mt-1.5 text-xs">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
