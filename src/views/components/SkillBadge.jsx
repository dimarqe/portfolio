export default function SkillBadge({ skill, color = '#22d3ee' }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-md font-mono text-xs transition-all duration-200 cursor-default"
      style={{
        background: `${color}0d`,
        border: `1px solid ${color}28`,
        color: `${color}b3`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}1a`
        e.currentTarget.style.borderColor = `${color}55`
        e.currentTarget.style.color = color
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${color}0d`
        e.currentTarget.style.borderColor = `${color}28`
        e.currentTarget.style.color = `${color}b3`
      }}
    >
      {skill}
    </span>
  )
}
