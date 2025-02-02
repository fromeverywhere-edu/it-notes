import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-reenie text-ink">Boost Your Tech Knowledge Today</h2>
          <div className="h-px bg-ink/50 w-48 mx-auto mt-1" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-emerald-600 font-reenie mb-8"
        >
          Get high-quality notes on Operating Systems, Databases,
          <br />
          Network Security, and Networking for just ₹29 each.
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
          Get Your Notes Now →
        </motion.a>
      </div>
    </section>
  )
}

