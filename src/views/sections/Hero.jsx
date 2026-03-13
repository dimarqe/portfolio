import { motion } from 'framer-motion'
import { personal } from '../../models/personal'
import { fadeInUp, staggerContainer, slideInRight } from '../../controllers/animations'
import Button from '../components/Button'
import { LinkedinIcon, EmailIcon, DownloadIcon } from '../components/Icons'

function CodeSnippet() {
  return (
    <motion.div variants={slideInRight} className="relative hidden lg:block">
      {/* Ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-accent/8 to-accent-2/8 rounded-2xl blur-2xl pointer-events-none" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative gradient-border"
      >
        <div className="bg-surface-2 rounded-xl overflow-hidden shadow-2xl shadow-black/70">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-2 font-mono text-xs text-muted">developer.js</span>
          </div>

          {/* Code */}
          <div className="p-6 font-mono text-sm leading-[1.9] select-none">
            <div>
              <span className="text-accent-2">const</span>{' '}
              <span className="text-accent">developer</span>{' '}
              <span className="text-muted-2">=</span>{' '}
              <span className="text-primary">{'{'}</span>
            </div>
            <div className="ml-5">
              <span className="text-primary">name</span>
              <span className="text-muted-2">: </span>
              <span className="text-green-400">"Dimitri Russell"</span>
              <span className="text-muted-2">,</span>
            </div>
            <div className="ml-5">
              <span className="text-primary">role</span>
              <span className="text-muted-2">: </span>
              <span className="text-green-400">"Full-Stack Developer"</span>
              <span className="text-muted-2">,</span>
            </div>
            <div className="ml-5">
              <span className="text-primary">stack</span>
              <span className="text-muted-2">: [</span>
            </div>
            <div className="ml-10">
              <span className="text-green-400">"Java"</span>
              <span className="text-muted-2">, </span>
              <span className="text-green-400">"Spring Boot"</span>
              <span className="text-muted-2">,</span>
            </div>
            <div className="ml-10">
              <span className="text-green-400">"JavaScript"</span>
              <span className="text-muted-2">, </span>
              <span className="text-green-400">"React"</span>
              <span className="text-muted-2">, </span>
              <span className="text-green-400">"AWS"</span>
            </div>
            <div className="ml-10">
              <span className="text-green-400">"PHP"</span>
              <span className="text-muted-2">, </span>
              <span className="text-green-400">"Laravel"</span>
              <span className="text-muted-2">, </span>
              <span className="text-green-400">"Flutter"</span>
            </div>
            <div className="ml-5">
              <span className="text-muted-2">],</span>
            </div>
            <div className="ml-5">
              <span className="text-primary">experience</span>
              <span className="text-muted-2">: </span>
              <span className="text-orange-400">4</span>
              <span className="text-muted">, // years</span>
            </div>
            <div className="ml-5">
              <span className="text-primary">available</span>
              <span className="text-muted-2">: </span>
              <span className="text-accent-2">true</span>
            </div>
            <div><span className="text-primary">{'}'}</span></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-50" />
        {/* Large glow blobs */}
        <div className="absolute -top-60 -right-60 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-60 w-[600px] h-[600px] bg-accent-2/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/25 bg-green-500/5 font-mono text-xs text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Pre-label */}
            <motion.p variants={fadeInUp} className="font-body text-muted text-lg mb-2">
              Hi, I'm
            </motion.p>

            {/* Name — ghost first, vibrant last */}
            <motion.h1 variants={fadeInUp} className="font-display font-extrabold leading-[0.9] mb-5">
              <span className="block text-[4.5rem] lg:text-[6rem] xl:text-[7rem] text-ghost tracking-tight">
                Dimitri
              </span>
              <span className="inline-block text-[4.5rem] lg:text-[6rem] xl:text-[7rem] bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent tracking-tight pr-3">
                Russell
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p variants={fadeInUp} className="font-mono text-accent text-base lg:text-lg mb-6">
              {'<'} Full-Stack Software Developer {' />'}
            </motion.p>

            {/* Bio */}
            <motion.p variants={fadeInUp} className="text-muted leading-relaxed max-w-lg mb-8">
              Building scalable backend systems and intuitive interfaces — from microservices
              to enterprise systems — across 4+ years of professional experience.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button href="#contact" variant="ghost">
                Get In Touch
              </Button>
              <Button href={personal.resumeUrl} variant="muted" external>
                <DownloadIcon className="w-3.5 h-3.5" />
                Resume
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Code snippet */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <CodeSnippet />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
