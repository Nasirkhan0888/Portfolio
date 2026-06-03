import { motion } from 'framer-motion'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://www.facebook.com/share/1BVcnabpKG/',
    color: '#1877F2',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/in/nasir-khan-9a5412366',
    color: '#0A66C2',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Nasirkhan0888',
    color: '#ffffff',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:nasirraqeeb0@gmail.com',
    color: '#EA4335',
  },
]

function SocialIcon({ link, index }) {
  const Icon = link.icon

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
      whileHover={{ 
        scale: 1.2, 
        rotate: 360,
        boxShadow: `0 0 20px ${link.color}40, 0 0 40px ${link.color}20`
      }}
      whileTap={{ scale: 0.9 }}
      className="relative group"
    >
      {/* Glow effect behind icon */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${link.color}30 0%, transparent 70%)`,
          filter: 'blur(8px)',
        }}
      />
      
      {/* Icon Container */}
      <div className={`relative w-12 h-12 rounded-xl glass flex items-center justify-center border border-white/10 group-hover:border-transparent transition-all duration-300`}>
        <Icon 
          className="w-5 h-5 relative z-10 transition-colors duration-300" 
          style={{ color: link.color }}
        />
        
        {/* Animated ring */}
        <div 
          className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-30 transition-all duration-300"
          style={{ borderColor: link.color }}
        />
      </div>

      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium bg-black/80 text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {link.name}
      </motion.span>
    </motion.a>
  )
}

function SocialIcons({ horizontal = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center ${horizontal ? 'justify-center' : 'justify-start'} gap-4`}
    >
      {socialLinks.map((link, index) => (
        <SocialIcon key={link.name} link={link} index={index} />
      ))}
    </motion.div>
  )
}

export default SocialIcons