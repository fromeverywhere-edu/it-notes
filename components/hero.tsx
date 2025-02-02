import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-reenie mb-2 text-ink">
            Tech Notes for Success
          </h1>
          <div className="h-px bg-ink/50 w-full mt-1" />
        </motion.div>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-emerald-600 font-reenie mt-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          High-quality notes on Operating Systems, Databases,
          <br />
          Network Security, and Networking
        </motion.p>
        <motion.a
          href="#notes"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-600 text-paper px-8 py-3 rounded-full text-xl sm:text-2xl font-reenie hover:bg-emerald-700 transition-colors duration-300 inline-block"
        >
          View Notes →
        </motion.a>
      </motion.div>
    </section>
  )
}

