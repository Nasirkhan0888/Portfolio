import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { 
  FaBrain, 
  FaCode, 
  FaReact, 
  FaJava, 
  FaDatabase,
  FaGitAlt,
  FaBootstrap,
  FaPython
} from 'react-icons/fa'
import { 
  SiMongodb, 
  SiMysql,
  SiTalend,
  SiTensorflow,
  SiPytorch
} from 'react-icons/si'

const skillsData = [
  {
    category: 'AI & Machine Learning',
    items: [
      { name: 'Artificial Intelligence', icon: FaBrain, level: 85, color: '#6366F1' },
      { name: 'Machine Learning', icon: SiTensorflow, level: 80, color: '#FF6F00' },
      { name: 'Deep Learning', icon: SiPytorch, level: 75, color: '#EE4C2C' },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'Web Development', icon: FaCode, level: 90, color: '#06B6D4' },
      { name: 'React.js', icon: FaReact, level: 85, color: '#61DAFB' },
      { name: 'Bootstrap', icon: FaBootstrap, level: 80, color: '#7952B3' },
    ],
  },
  {
    category: 'Programming & Backend',
    items: [
      { name: 'Java', icon: FaJava, level: 85, color: '#007396' },
      { name: 'Python', icon: FaPython, level: 80, color: '#3776AB' },
      { name: 'Data Engineering', icon: SiTalend, level: 70, color: '#F57C00' },
    ],
  },
  {
    category: 'Database & Tools',
    items: [
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#4DB33D' },
      { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
      { name: 'Git & GitHub', icon: FaGitAlt, level: 90, color: '#F05032' },
    ],
  },
]

function SkillCard({ skill, index }) {
  const { isDark } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, boxShadow: `0 20px 40px ${skill.color}20` }}
      className={`glass rounded-xl p-5 card-hover ${isDark ? '' : 'bg-white/50'}`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ 
            background: `${skill.color}20`,
            boxShadow: `0 0 20px ${skill.color}30`
          }}
        >
          <Icon className="w-6 h-6" style={{ color: skill.color }} />
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {skill.name}
          </h4>
          <span className="text-sm font-medium" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
            boxShadow: `0 0 10px ${skill.color}50`
          }}
        >
          <div className="absolute inset-0 shimmer rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function Skills() {
  const { isDark } = useTheme()

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            What I Know
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A combination of technical expertise and creative problem-solving abilities,
            honed through countless hours of learning and building.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-orbitron text-lg font-bold mb-6 flex items-center">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-primary to-secondary mr-3" />
                {category.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={categoryIndex * 3 + skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '15+', label: 'Technologies' },
            { value: '50+', label: 'Projects Completed' },
            { value: '3+', label: 'Years Learning' },
            { value: '100%', label: 'Passion' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center p-6 rounded-xl glass ${isDark ? '' : 'bg-white/50'}`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: index * 0.1 }}
                className="font-orbitron text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills