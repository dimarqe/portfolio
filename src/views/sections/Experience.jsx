import { motion } from 'framer-motion'
import { experiences } from '../../models/experience'
import { staggerContainer } from '../../controllers/animations'
import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Work Experience"
          subtitle="Where I've worked and what I've built."
        />

        <div className="max-w-3xl">
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-4 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
