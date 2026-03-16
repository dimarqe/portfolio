export default function ExperienceCard({ experience }) {
  return (
    <div className="group relative grid sm:grid-cols-[7rem_1fr] gap-3 sm:gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-surface/60 hover:shadow-lg -mx-4">
      {/* Date */}
      <p className="font-mono text-xs text-muted-2 pt-1 shrink-0">
        {experience.startDate} — {experience.endDate}
      </p>

      {/* Content */}
      <div>
        <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-200 leading-tight mb-0.5">
          {experience.role}
        </h3>
        <p className="text-sm text-muted mb-3">
          {experience.company}
          <span className="ml-2 text-xs font-mono text-muted-2">· {experience.type}</span>
        </p>

        <p className="text-sm text-muted leading-relaxed mb-4">
          {experience.description}
        </p>

        {experience.tech?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.tech.map(t => (
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
