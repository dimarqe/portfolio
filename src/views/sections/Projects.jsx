import { motion } from 'framer-motion'
import { projects } from '../../models/projects'
import { staggerContainer } from '../../controllers/animations'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Projects"
          subtitle="Real work I've designed, built, and shipped."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
