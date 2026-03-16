import { projects } from '../../models/projects'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="px-6 pb-24">
      <SectionHeading title="Projects" />

      <div className="space-y-2 max-w-2xl">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
