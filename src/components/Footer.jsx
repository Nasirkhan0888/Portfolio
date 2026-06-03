import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import SocialIcons from './SocialIcons'
import { FaHeart } from 'react-icons/fa'

function Footer() {
  const { isDark } = useTheme()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative py-12 px-4">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Glowing Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${isDark ? 'glass' : 'glass-light'} flex items-center justify-center`}>
                <span className="font-orbitron text-lg font-bold gradient-text">N</span>
              </div>
              <span className="font-orbitron text-lg font-bold gradient-text">Nasir Khan</span>
            </div>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              AI & ML Enthusiast | Full Stack Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors hover:text-primary ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <SocialIcons />
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`my-8 h-px ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            © {currentYear} <span className="text-primary font-medium">Nasir Khan</span>. 
            All rights reserved. Crafted with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block mx-1 text-red-500"
            >
              <FaHeart className="w-4 h-4 inline" />
            </motion.span>
            in Abbottabad, Pakistan.
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Designed & Developed by Nasir Khan
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-xl glass flex items-center justify-center pulse-glow z-40 ${
          isDark ? '' : 'shadow-lg'
        }`}
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer