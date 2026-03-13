import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../controllers/animations'

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-16"
    >
      {label && (
        <motion.p
          variants={fadeInUp}
          className="flex items-center gap-2 font-mono text-xs text-accent tracking-[0.25em] uppercase mb-4"
        >
          <span className="w-5 h-px bg-accent inline-block" />
          {label}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="font-display font-bold text-4xl lg:text-5xl bg-gradient-to-r from-primary via-primary to-accent/70 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-muted mt-4 max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
