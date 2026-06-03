import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import SocialIcons from './SocialIcons'

function TypingEffect({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setIsComplete(true)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-blink text-primary">|</span>}
    </span>
  )
}

function Hero() {
  const { isDark } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? 'visible' : 'hidden'}
        className="text-center z-10 px-4 max-w-5xl mx-auto"
      >
        {/* Social Icons */}
        <motion.div variants={itemVariants} className="mb-8">
          <SocialIcons />
        </motion.div>

        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/30">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="font-orbitron text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Hi, I'm </span>
          <span className="gradient-text">Nasir Khan</span>
        </motion.h1>

        {/* Subtitle with Typing Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-mono text-lg sm:text-xl md:text-2xl text-slate-400">
            <TypingEffect 
              text="AI & ML Enthusiast | Full Stack Developer | Computer Science Student" 
              speed={40} 
            />
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
        >
          Crafting intelligent solutions and building the future, one line of code at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold btn-shine relative overflow-hidden"
          >
            <span>View Projects</span>
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold glass border border-primary/50 hover:border-primary transition-colors ${
              isDark 
                ? 'bg-primary/10 text-white hover:bg-primary/20' 
                : 'bg-primary/5 text-slate-900 hover:bg-primary/10'
            }`}
          >
            <span>Contact Me</span>
            <FaArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${isDark ? 'border-slate-500' : 'border-slate-400'}`}
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero