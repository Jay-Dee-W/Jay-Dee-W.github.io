import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 hover:shadow-xl transition"
          >
            <div className="flex items-center mb-4">
              {/* Placeholder icon, replace with a real icon library if desired */}
              <div className="text-blue-600 text-3xl mr-3">🔹</div>
              <h3 className="text-2xl font-semibold text-blue-600">
                {skill.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
