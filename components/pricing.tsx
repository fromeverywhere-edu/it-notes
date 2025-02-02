import { motion } from "framer-motion"

const plans = [
  { name: "Basic", price: "$9", features: ["Unlimited notes", "Sync across 2 devices", "Basic templates"] },
  {
    name: "Pro",
    price: "$19",
    features: ["Everything in Basic", "Sync across all devices", "Advanced templates", "Collaboration tools"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Everything in Pro", "Dedicated support", "Custom integrations", "Advanced security"],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold text-purple-500 mb-6">{plan.price}</p>
            <ul className="text-left mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

