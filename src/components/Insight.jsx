import { motion } from 'framer-motion'

const Insight = () => {
  const cards = [
    {
      title: '📱 iPhone Launch',
      desc: 'Touchscreens & apps change mobile computing forever.',
      stats: '1B+ iPhone users',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: '📘 Facebook',
      desc: 'Social networks connect 3B+ people worldwide.',
      stats: '3B monthly users',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: '📺 YouTube',
      desc: 'User-generated video becomes dominant internet content.',
      stats: '2.5B users',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <section className="section bg-gradient-to-tl from-gray-800/40 via-black/20 to-blue-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-black text-white mb-24 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
        Social & Mobile (2004)
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="card cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -20,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon/Emoji */}
              <motion.div 
                className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                animate={{ rotate: index * 10 }}
              >
                {card.title.split(' ')[0].slice(1,2)}
              </motion.div>
              
              <h3 className={`text-2xl md:text-3xl font-black mb-6 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                {card.title.split(' ').slice(1).join(' ')}
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {card.desc}
              </p>
              
              <div className="flex items-baseline justify-between">
                <div className={`text-2xl font-black bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                  {card.stats}
                </div>
                <motion.span 
                  className="text-purple-400 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Learn More →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parallax background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl -z-10 -rotate-12" />
        </div>
      </div>
    </section>
  )
}

export default Insight
