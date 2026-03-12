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
          className="font-mono text-accent text-xs tracking-[0.25em] uppercase mb-3"
        >
          / {label}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="font-display font-bold text-3xl lg:text-4xl text-primary"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-muted mt-3 max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
