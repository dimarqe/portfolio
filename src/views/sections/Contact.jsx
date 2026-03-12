import { motion } from 'framer-motion'
import { personal } from '../../models/personal'
import { fadeInUp, staggerContainer } from '../../controllers/animations'
import SectionHeading from '../components/SectionHeading'
import { LinkedinIcon, EmailIcon, PhoneIcon } from '../components/Icons'

const contactItems = [
  {
    icon: EmailIcon,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: personal.phone,
    href: null,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'dimitri-russell-649a74198',
    href: personal.linkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="I'm open to new opportunities and collaborations. Reach out through any of the channels below."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl"
        >
          {contactItems.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <div className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-primary text-sm truncate group-hover:text-accent transition-colors duration-200">
                    {value}
                  </p>
                </div>
              </>
            )

            const cls =
              'group flex flex-col gap-3 p-5 rounded-xl border border-border bg-surface-2/40 transition-all duration-200' +
              (href ? ' hover:border-accent/30 hover:bg-surface-2/70' : '')

            return href ? (
              <motion.a
                key={label}
                variants={fadeInUp}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cls}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div key={label} variants={fadeInUp} className={cls}>
                {inner}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
