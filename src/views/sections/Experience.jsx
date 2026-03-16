import { experiences } from '../../models/experience'
import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className="px-6 pb-24">
      <SectionHeading title="Experience" />

      <div className="space-y-2 max-w-2xl">
        {experiences.map(exp => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  )
}
