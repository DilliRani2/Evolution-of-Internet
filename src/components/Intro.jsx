import { motion } from 'framer-motion'

const Intro = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1
      }
    })
  }

  const sentences = [
    "Artificial Intelligence isn't just code.",
    "It's a partner that learns, adapts, and creates.",
    "From conversations to curing diseases - AI reshapes our world.",
    "But what happens inside the mind of a machine?",
  ]

  return (
    <section className="section bg-gradient-to-b from-gray-900/50 to-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-black text-white mb-20 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        ARPANET (1969)
        </motion.h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {sentences.map((sentence, index) => (
            <motion.p
              key={index}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              custom={index}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {sentence}
            </motion.p>
          ))}
        </div>

        {/* Scroll reveal elements */}
        <motion.div 
          className="mt-24 grid md:grid-cols-3 gap-6 opacity-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          <div className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
          <div className="h-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
