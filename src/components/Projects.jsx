import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { 
  FaRobot, 
  FaGlobe, 
  FaDatabase as DbIcon, 
  FaJava,
  FaExternalLinkAlt,
  FaCode
} from 'react-icons/fa'

const projects = [
  {
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot using Natural Language Processing for automated customer support and information retrieval.',
    category: 'AI & ML',
    icon: FaRobot,
    tags: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    color: '#6366F1',
    status: 'Completed',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, product management, and payment integration.',
    category: 'Web Application',
    icon: FaGlobe,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#06B6D4',
    status: 'Completed',
  },
  {
    title: 'Student Management System',
    description: 'Comprehensive database system for managing student records, attendance, and academic performance.',
    category: 'Database System',
    icon: DbIcon,
    tags: ['Java', 'MySQL', 'JavaFX'],
    color: '#8B5CF6',
    status: 'Completed',
  },
  {
    title: 'Inventory Management App',
    description: 'Desktop application for tracking inventory, sales, and generating reports for businesses.',
    category: 'Java Application',
    icon: FaJava,
    tags: ['Java', 'Swing', 'MySQL'],
    color: '#F59E0B',
    status: 'Completed',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking application with interactive maps and forecasts using external APIs.',
    category: 'Web Application',
    icon: FaGlobe,
    tags: ['React', 'API', 'Chart.js'],
    color: '#10B981',
    status: 'In Progress',
  },
  {
    title: 'Image Classification Model',
    description: 'Deep learning model for classifying images with high accuracy using CNN architectures.',
    category: 'AI & ML',
    icon: FaRobot,
    tags: ['Python', 'PyTorch', 'OpenCV'],
    color: '#EC4899',
    status: 'Completed',
  },
]

function ProjectCard({ project, index }) {
  const { isDark } = useTheme()
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative glass rounded-2xl overflow-hidden ${
        isDark ? '' : 'bg-white/50'
      }`}
    >
      {/* Gradient Top Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ 
          background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`,
        }}
      />

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ 
              background: `${project.color}20`,
              boxShadow: `0 0 30px ${project.color}30`,
            }}
          >
            <Icon className="w-7 h-7" style={{ color: project.color }} />
          </div>
          
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              background: `${project.color}20`,
              color: project.color 
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Title & Category */}
        <div className="mb-3">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className={`font-orbitron text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isDark 
                  ? 'bg-white/10 text-slate-300' 
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-300"
          style={{
            background: `${project.color}15`,
            color: project.color,
            border: `1px solid ${project.color}30`,
          }}
        >
          <span>View Project</span>
          <FaExternalLinkAlt className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Hover Overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${project.color}10, transparent)`,
        }}
      />
    </motion.div>
  )
}

function Projects() {
  const { isDark } = useTheme()

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

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
            My Work
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A showcase of my technical skills and creative problem-solving abilities
            through real-world applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Nasirkhan0888"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl glass border border-primary/50 hover:border-primary transition-colors"
          >
            <FaCode className="w-5 h-5 text-primary" />
            <span className={isDark ? 'text-white' : 'text-slate-900'}>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects