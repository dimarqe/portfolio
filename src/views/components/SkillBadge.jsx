export default function SkillBadge({ skill }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-surface border border-border font-mono text-xs text-muted hover:border-accent/40 hover:text-accent/80 transition-colors duration-200 cursor-default">
      {skill}
    </span>
  )
}
