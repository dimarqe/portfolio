import { personal } from '../../models/personal'
import SectionHeading from '../components/SectionHeading'
import { LinkedinIcon, EmailIcon, PhoneIcon } from '../components/Icons'

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-24">
      <SectionHeading title="Contact" />

      <div className="max-w-lg space-y-4">
        <p className="text-muted leading-relaxed">
          I'm open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
        </p>

        <div className="space-y-3 pt-2">
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-3 text-muted hover:text-primary transition-colors duration-200"
          >
            <EmailIcon className="w-4 h-4 text-accent shrink-0" />
            <span className="text-sm group-hover:underline underline-offset-4">{personal.email}</span>
          </a>

          <div className="flex items-center gap-3 text-muted">
            <PhoneIcon className="w-4 h-4 text-accent shrink-0" />
            <span className="text-sm">{personal.phone}</span>
          </div>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-muted hover:text-primary transition-colors duration-200"
          >
            <LinkedinIcon className="w-4 h-4 text-accent shrink-0" />
            <span className="text-sm group-hover:underline underline-offset-4">dimitri-russell-649a74198</span>
          </a>
        </div>
      </div>
    </section>
  )
}
