import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import SocialIcons from './SocialIcons'
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPaperPlane 
} from 'react-icons/fa'

function Contact() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Abbottabad, Pakistan',
      link: 'https://maps.google.com/?q=Abbottabad,Pakistan',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'nasirraqeeb0@gmail.com',
      link: 'mailto:nasirraqeeb0@gmail.com',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

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
            Get In Touch
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind or want to collaborate? Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                className={`glass rounded-xl p-6 flex items-center space-x-4 card-hover ${
                  isDark ? '' : 'bg-white/50'
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {info.title}
                  </h4>
                  <p className="text-primary">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`glass rounded-xl p-6 ${isDark ? '' : 'bg-white/50'}`}
            >
              <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Connect With Me
              </h4>
              <SocialIcons />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className={`glass rounded-2xl p-8 ${isDark ? '' : 'bg-white/50'}`}>
              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl glass border transition-all duration-300 ${
                      isDark 
                        ? 'bg-white/5 border-white/10 focus:border-primary' 
                        : 'bg-white border-slate-200 focus:border-primary'
                    } focus:outline-none`}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl glass border transition-all duration-300 ${
                      isDark 
                        ? 'bg-white/5 border-white/10 focus:border-primary' 
                        : 'bg-white border-slate-200 focus:border-primary'
                    } focus:outline-none`}
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl glass border transition-all duration-300 ${
                      isDark 
                        ? 'bg-white/5 border-white/10 focus:border-primary' 
                        : 'bg-white border-slate-200 focus:border-primary'
                    } focus:outline-none`}
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl glass border transition-all duration-300 resize-none ${
                      isDark 
                        ? 'bg-white/5 border-white/10 focus:border-primary' 
                        : 'bg-white border-slate-200 focus:border-primary'
                    } focus:outline-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold btn-shine relative overflow-hidden flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
                      <FaPaperPlane className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                >
                  ✨ Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact