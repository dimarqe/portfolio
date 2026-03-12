import { motion } from 'framer-motion'
import { skillGroups } from '../../models/skills'
import { fadeInUp, staggerContainer } from '../../controllers/animations'
import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Skills"
          subtitle="Technologies and tools I work with across the full stack."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map(group => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              className="p-5 rounded-xl border border-border bg-surface-2/40 hover:border-border-2 transition-colors duration-300"
            >
              <p className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
