import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Personality from './components/Personality'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const { isDark } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-bg-dark text-slate-100' : 'bg-bg-light text-slate-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 ${isDark ? 'animated-gradient-bg' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'}`} />
        <ParticleBackground />
      </div>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  rotateY: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1"
              >
                <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center">
                  <span className="font-orbitron text-2xl font-bold gradient-text">N</span>
                </div>
              </motion.div>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-orbitron text-sm text-slate-400 tracking-widest"
              >
                LOADING...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <>
          <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          
          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-xl md:hidden"
              >
                <motion.nav
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="flex flex-col items-center justify-center h-full space-y-8"
                >
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-orbitron text-2xl text-white hover:text-primary transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>

          <main>
            <Hero />
            <About />
            <Skills />
            <Personality />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  )
}

export default App