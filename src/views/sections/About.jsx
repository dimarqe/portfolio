import { personal } from '../../models/personal'
import { education } from '../../models/experience'
import SectionHeading from '../components/SectionHeading'
import { GraduationIcon } from '../components/Icons'

export default function About() {
  return (
    <section id="about" className="px-6 pt-16 pb-24 lg:pt-24">
      <SectionHeading title="About" />

      <div className="space-y-5 max-w-lg">
        <p className="text-muted leading-relaxed">
          {personal.bio}
        </p>

        {/* Education */}
        <div className="flex gap-4 pt-4">
          <div className="shrink-0 w-9 h-9 rounded bg-accent/10 flex items-center justify-center">
            <GraduationIcon className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-accent mb-1">Education</p>
            <p className="text-primary text-sm font-medium leading-snug">{education.degree}</p>
            <p className="text-muted text-sm">{education.institution}</p>
            <p className="font-mono text-xs text-muted-2 mt-0.5">
              {education.startDate} – {education.endDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
