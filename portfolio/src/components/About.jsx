import React from "react";
import { motion } from "framer-motion";
import aboutCards from "../data/about";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
      <motion.div
        className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {aboutCards.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center hover:shadow-md transition"
          >
            <div className="text-3xl mb-2">{card.icon}</div>
            <h3 className="text-md font-semibold mb-1">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-snug">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
