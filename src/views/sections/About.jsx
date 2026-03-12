import { motion } from 'framer-motion'
import { personal } from '../../models/personal'
import { education } from '../../models/experience'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../../controllers/animations'
import SectionHeading from '../components/SectionHeading'
import { GraduationIcon } from '../components/Icons'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="About Me"
          subtitle="A little background on who I am and how I work."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={slideInLeft} className="text-muted leading-relaxed mb-5">
              {personal.bio}
            </motion.p>
            <motion.p variants={slideInLeft} className="text-muted leading-relaxed">
              I enjoy working at the intersection of backend reliability and clean frontend experience.
              Whether it's architecting a serverless API on AWS or building a responsive UI in React,
              I bring the same attention to detail and commitment to quality.
            </motion.p>
          </motion.div>

          {/* Right: Stats + Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            {/* Stats row */}
            <motion.div
              variants={slideInRight}
              className="grid grid-cols-3 gap-4"
            >
              {personal.stats.map(stat => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center p-4 rounded-xl border border-border bg-surface-2/50 text-center"
                >
                  <span className="font-display font-extrabold text-3xl text-accent">{stat.value}</span>
                  <span className="font-mono text-xs text-muted mt-1 leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Education card */}
            <motion.div
              variants={slideInRight}
              className="flex gap-4 p-5 rounded-xl border border-border bg-surface-2/50"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <GraduationIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-mono text-xs text-accent tracking-wider uppercase mb-1">Education</p>
                <p className="font-display font-semibold text-primary text-sm leading-snug">
                  {education.degree}
                </p>
                <p className="text-muted text-sm mt-1">{education.institution}</p>
                <p className="font-mono text-xs text-muted-2 mt-1">
                  {education.startDate} – {education.endDate}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
