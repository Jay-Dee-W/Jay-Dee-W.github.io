import React from "react";
import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="block bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-6"
          >
            {project.image && (
              <img
                src={`../assets/${project.image}`}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div>
              <h4 className="font-semibold text-sm mb-1">Key Features:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 mb-3">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <h4 className="font-semibold text-sm mb-1">Tech Stack:</h4>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {project.techStack.join(", ")}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
