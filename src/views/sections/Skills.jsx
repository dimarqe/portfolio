import { skillGroups } from '../../models/skills'
import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="px-6 pb-24">
      <SectionHeading title="Skills" />

      <div className="space-y-8 max-w-lg">
        {skillGroups.map(group => (
          <div key={group.category}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: group.color }}
            >
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded font-mono text-xs transition-colors duration-200 cursor-default"
                  style={{
                    background: `${group.color}12`,
                    border: `1px solid ${group.color}30`,
                    color: `${group.color}cc`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
