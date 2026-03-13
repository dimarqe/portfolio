import { motion } from 'framer-motion'
import { fadeInUp } from '../../controllers/animations'

export default function ExperienceCard({ experience }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-bg shadow-[0_0_14px_rgba(34,211,238,0.5)]" />

      {/* Card */}
      <div className="p-5 rounded-xl border border-border border-l-2 bg-surface-2/40 hover:border-border-2 transition-colors duration-300"
        style={{ borderLeftColor: 'rgba(34,211,238,0.4)' }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display font-bold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent leading-tight">
              {experience.role}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <span className="text-accent font-semibold text-sm">{experience.company}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-accent/8 border border-accent/15 font-mono text-xs text-accent/70">
                {experience.type}
              </span>
            </div>
          </div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface border border-border font-mono text-xs text-muted shrink-0">
            {experience.startDate} – {experience.endDate}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
