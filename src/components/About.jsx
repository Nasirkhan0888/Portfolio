import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaGraduationCap, FaMapMarkerAlt, FaUserGraduate } from 'react-icons/fa'

const educationData = [
  {
    period: '2014 - 2016',
    title: 'Middle School',
    institution: 'Government High School Gayal Darel',
    location: 'District Diamer, Gilgit Baltistan',
    icon: FaGraduationCap,
  },
  {
    period: '2016 - 2018',
    title: 'Matriculation',
    institution: 'Pilot Higher Secondary School',
    location: 'Iqbal Town, Lahore',
    icon: FaGraduationCap,
  },
  {
    period: '2018 - 2020',
    title: 'ICS (Intermediate in Computer Science)',
    institution: 'Abbottabad Board',
    location: 'Abbottabad',
    icon: FaGraduationCap,
  },
  {
    period: '2022 - Present',
    title: 'Bachelor of Computer Science',
    institution: 'Abbottabad University of Science and Technology',
    location: 'Abbottabad, Pakistan',
    icon: FaUserGraduate,
    isCurrent: true,
  },
]

function About() {
  const { isDark } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/30 mb-4">
            Get To Know Me
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`glass rounded-2xl p-8 ${isDark ? '' : 'shadow-xl'}`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary p-1">
                  <div className={`w-full h-full rounded-xl ${isDark ? 'bg-bg-dark' : 'bg-white'} flex items-center justify-center`}>
                    <FaUserGraduate className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold gradient-text">Nasir Khan</h3>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Computer Science Student</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Location</p>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Gayal Darel, District Diamer, Gilgit Baltistan, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaUserGraduate className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Father's Name</p>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Abdul Raqeeb (Respected Teacher)</p>
                  </div>
                </div>
              </div>

              <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>My Story</h4>
                <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  My name is <span className="text-primary font-medium">Nasir Khan</span>, son of <span className="text-secondary font-medium">Abdul Raqeeb</span>, who is a respected teacher. 
                  I belong to <span className="text-accent font-medium">Gayal Darel, District Diamer, Gilgit Baltistan, Pakistan</span>. 
                  With a strong passion for technology and innovation, I'm pursuing my dream of becoming a skilled computer scientist 
                  specializing in Artificial Intelligence and Machine Learning. Currently studying at Abbottabad University of Science and Technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <h3 className="font-orbitron text-xl font-bold mb-8 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-1 mr-4">
                <div className={`w-full h-full rounded-xl ${isDark ? 'bg-bg-dark' : 'bg-white'} flex items-center justify-center`}>
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </div>
              </span>
              Education Timeline
            </h3>

            {/* Timeline Line */}
            <div className={`absolute left-[25px] top-10 bottom-0 w-0.5 ${isDark ? 'bg-gradient-to-b from-primary via-secondary to-accent' : 'bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50'}`} />

            {/* Timeline Items */}
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-0 top-2 w-12 h-12 rounded-xl ${
                      edu.isCurrent 
                        ? 'bg-gradient-to-br from-primary to-secondary glow-primary' 
                        : isDark ? 'glass' : 'bg-white shadow-lg'
                    } flex items-center justify-center`}
                  >
                    <edu.icon className={`w-5 h-5 ${edu.isCurrent ? 'text-white' : 'text-primary'}`} />
                  </motion.div>

                  {/* Timeline Content */}
                  <div className={`glass rounded-xl p-5 card-hover ${edu.isCurrent ? 'border-primary/50' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {edu.period}
                      </span>
                      {edu.isCurrent && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className={`font-semibold text-lg mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {edu.title}
                    </h4>
                    <p className={`font-medium mb-1 ${isDark ? 'text-primary' : 'text-primary'}`}>
                      {edu.institution}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {edu.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About