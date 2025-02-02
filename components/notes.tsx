import { motion } from "framer-motion"
import { Download } from "lucide-react"

const notes = [
  {
    title: "Operating System",
    description: "Comprehensive notes covering OS concepts, processes, memory management, and more.",
    doodle: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.3 7l8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    title: "Database",
    description: "In-depth notes on database design, SQL, normalization, and database management systems.",
    doodle: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.5 2 2 3.8 2 6s4.5 4 10 4 10-1.8 10-4-4.5-4-10-4z" />
        <path d="M2 6v4c0 2.2 4.5 4 10 4s10-1.8 10-4V6" />
        <path d="M2 10v4c0 2.2 4.5 4 10 4s10-1.8 10-4v-4" />
        <path d="M2 14v4c0 2.2 4.5 4 10 4s10-1.8 10-4v-4" />
      </svg>
    ),
  },
  {
    title: "Network Security",
    description: "Detailed notes on cybersecurity, encryption, firewalls, and security protocols.",
    doodle: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Networking",
    description: "Extensive notes covering network architectures, protocols, and network administration.",
    doodle: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="8" height="8" />
        <rect x="14" y="2" width="8" height="8" />
        <rect x="2" y="14" width="8" height="8" />
        <rect x="14" y="14" width="8" height="8" />
      </svg>
    ),
  },
]

export default function Notes() {
  return (
    <section id="notes" className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-reenie text-ink text-center">Available Notes</h2>
        <div className="h-px bg-[rgb(var(--line))] w-48 mx-auto mt-1 opacity-30" />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-[rgb(var(--paper))] shadow-notecard rounded-sm p-4 sm:p-6 relative group border border-[rgb(var(--line))] border-opacity-30"
          >
            <div className="flex flex-col h-full">
              <motion.div
                className="text-[rgb(var(--line))] opacity-70 mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {note.doodle}
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-reenie mb-2 text-ink">{note.title}</h3>
              <p className="text-lg sm:text-xl text-ink/70 mb-6 font-reenie leading-relaxed">{note.description}</p>
              <div className="mt-auto space-y-4">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(var(--line), 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 border border-[rgb(var(--line))] border-opacity-30 text-ink/70 px-4 py-2 rounded-sm text-xl font-reenie transition duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Sample
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgb(var(--line))",
                    borderColor: "rgb(var(--line))",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border border-[rgb(var(--line))] border-opacity-30 bg-[rgb(var(--line))] bg-opacity-20 text-ink px-4 py-2 rounded-sm text-xl font-reenie transition-all duration-300"
                >
                  Buy Now - ₹29
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

