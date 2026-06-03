import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { 
  FaClock, 
  FaHandshake, 
  FaHeart, 
  FaHardHat, 
  FaBolt, 
  FaUsers 
} from 'react-icons/fa'

const traits = [
  {
    name: 'Punctual',
    icon: FaClock,
    color: '#6366F1',
    description: 'Value time and always meet deadlines',
  },
  {
    name: 'Honest',
    icon: FaHandshake,
    color: '#06B6D4',
    description: 'Integrity in every interaction',
  },
  {
    name: 'Loyal',
    icon: FaHeart,
    color: '#EC4899',
    description: 'Dedicated to commitments and people',
  },
  {
    name: 'Hardworking',
    icon: FaHardHat,
    color: '#F59E0B',
    description: 'Go the extra mile for excellence',
  },
  {
    name: 'Fast Learner',
    icon: FaBolt,
    color: '#8B5CF6',
    description: 'Quickly adapt to new technologies',
  },
  {
    name: 'Team Player',
    icon: FaUsers,
    color: '#10B981',
    description: 'Collaborate effectively in groups',
  },
]

function TraitCard({ trait, index }) {
  const { isDark } = useTheme()
  const Icon = trait.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        boxShadow: `0 25px 50px ${trait.color}20`,
      }}
      className={`group relative glass rounded-2xl p-6 text-center card-hover overflow-hidden ${
        isDark ? '' : 'bg-white/50'
      }`}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${trait.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Floating Icon Container */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          delay: index * 0.2,
          ease: 'easeInOut'
        }}
        className={`relative w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center`}
        style={{
          background: `linear-gradient(135deg, ${trait.color}20, ${trait.color}10)`,
          boxShadow: `0 10px 30px ${trait.color}30`,
        }}
      >
        <Icon className="w-10 h-10" style={{ color: trait.color }} />
        
        {/* Glow Ring */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-colors"
          style={{ borderColor: `${trait.color}40` }}
        />
      </motion.div>

      {/* Trait Name */}
      <h3 className={`font-orbitron text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {trait.name}
      </h3>

      {/* Description */}
      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {trait.description}
      </p>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${trait.color}, transparent)`,
        }}
      />
    </motion.div>
  )
}

function Personality() {
  const { isDark } = useTheme()

  return (
    <section id="personality" className="py-20 px-4 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/30 mb-4">
            Who I Am
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Personality <span className="gradient-text">Traits</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Beyond technical skills, these are the qualities that define my character
            and drive my success.
          </p>
        </motion.div>

        {/* Traits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {traits.map((trait, index) => (
            <TraitCard key={trait.name} trait={trait} index={index} />
          ))}
        </div>

        {/* Additional Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-16 text-center p-8 rounded-2xl glass ${isDark ? '' : 'bg-white/50'}`}
        >
          <div className="font-mono text-lg md:text-xl italic max-w-3xl mx-auto">
            <span className="text-4xl text-primary opacity-50">"</span>
            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              I believe in continuous growth, treating every challenge as an opportunity to learn
              and every failure as a stepping stone to success. My journey in tech is driven by
              curiosity and a desire to make a positive impact.
            </span>
            <span className="text-4xl text-primary opacity-50">"</span>
          </div>
          <p className="mt-4 font-orbitron text-sm text-primary">— Nasir Khan</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Personality