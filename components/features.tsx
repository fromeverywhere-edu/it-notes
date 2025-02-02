import { motion } from "framer-motion"
import { Feather, Cloud, Zap } from "lucide-react"

const features = [
  { icon: Feather, title: "Intuitive Design", description: "Clean interface for effortless note-taking" },
  { icon: Cloud, title: "Cloud Sync", description: "Access your notes from any device, anywhere" },
  { icon: Zap, title: "Lightning Fast", description: "Blazing fast performance for seamless writing" },
]

export default function Features() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

