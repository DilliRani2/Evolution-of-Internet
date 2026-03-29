import { useState } from 'react'
import { motion } from 'framer-motion'

const Exploration = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [pipelineVisible, setPipelineVisible] = useState(false)

  const steps = [
    { title: 'Websites', icon: '🌐', desc: 'Static HTML pages emerge' },
    { title: 'E-commerce', icon: '🛒', desc: 'Amazon & eBay revolutionize shopping' },
    { title: 'Bubble', icon: '💥', desc: '2000 crash resets expectations' }
  ]

  const handleExplore = () => {
    setPipelineVisible(true)
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
    }, 1500)
    setTimeout(() => {
      clearInterval(timer)
      setPipelineVisible(false)
      setActiveStep(0)
    }, 5000)
  }

  return (
    <section className="section bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-black text-white mb-20 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        Dot-com Era (1995)
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-20">
          {/* Interactive buttons */}
          <motion.button
            className="btn-primary text-xl px-10 py-6 mb-8 lg:mb-0 shadow-2xl"
            onClick={handleExplore}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Dot-com Boom 🚀
          </motion.button>

          {/* Pipeline visualization */}
          <motion.div 
            className="flex items-center space-x-4 lg:space-x-8 pipeline"
            initial={false}
            animate={pipelineVisible ? { opacity: 1 } : { opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`p-6 rounded-2xl transition-all duration-500 ${
                  activeStep === index 
                    ? 'bg-white/20 backdrop-blur-lg scale-110 shadow-2xl border-2 border-white/50' 
                    : 'bg-white/10 backdrop-blur-lg border border-white/20'
                }`}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
                {activeStep === index && (
                  <motion.div 
                    className="w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 mt-4 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Watch as data flows through the neural network, transforming raw input into intelligent output.
        </motion.p>
      </div>
    </section>
  )
}

export default Exploration
