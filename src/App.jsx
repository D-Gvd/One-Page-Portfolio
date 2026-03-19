import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Git', level: 85 }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts',
      tech: ['React', 'API', 'CSS'],
      github: '#'
    },
    {
      title: 'Task Manager',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['React', 'Firebase', 'Material-UI'],
      github: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Hello, I'm
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-light mb-8 text-gray-300"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I create beautiful, interactive web experiences with modern technologies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating innovative web applications.
                With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life
                through clean, efficient code.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30"
                >
                  Problem Solver
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30"
                >
                  Team Player
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-green-500/20 rounded-full text-green-300 border border-green-500/30"
                >
                  Continuous Learner
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-8xl opacity-50"
                >
                  💻
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-2xl font-bold text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-red-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group hover:border-white/20 transition-all"
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-6xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  View Code →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects.
              Let's create something amazing together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">your.email@example.com</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/yourprofile</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="text-4xl mb-4">🐙</div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/yourusername</p>
            </motion.div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            Send Message
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2024 Portfolio. Built with React, Vite & Tailwind CSS.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

export default App
