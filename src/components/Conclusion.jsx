import { motion } from 'framer-motion'

const Conclusion = () => {
  const futureStats = [
    { num: 'Web3', label: 'Decentralized Internet' },
    { num: '100B', label: 'Connected Devices' },
    { num: 'AI Everywhere', label: 'Intelligent Web' }
  ]

  return (
    <section className="section bg-gradient-to-t from-black via-gray-900 to-purple-900/50 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent)]" />
        {[0,1,2,3].map(i => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + i*25}%`,
              top: `${10 + i*15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white mb-12 pb-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        The Next Internet (2030+)
        </motion.h2>

        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-2xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Web3, AI, Metaverse - the decentralized future.
          <br />
          <span className="text-purple-400 font-black">The internet becomes intelligent and owned by users.</span>
        </motion.p>

        {/* Future stats */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {futureStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl md:text-7xl font-black text-white mb-4">
                {stat.num}
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-semibold tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button 
          className="btn-primary text-xl px-16 py-8 shadow-2xl backdrop-blur-lg bg-white/10 hover:bg-white/20 border-white/20"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 35px 60px -12px rgba(255,255,255,0.3)',
            backgroundColor: 'rgba(255,255,255,0.2)'
          }}
          whileTap={{ scale: 0.98 }}
        >
        Enter the Web3 Era
        </motion.button>

        <motion.div 
          className="mt-24 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Scroll to explore the journey ↑
        </motion.div>
      </div>
    </section>
  )
}

export default Conclusion
