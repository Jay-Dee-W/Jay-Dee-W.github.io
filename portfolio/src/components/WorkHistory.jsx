import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import workHistory from "../data/workHistory";

export default function WorkHistory() {
  const [expandedAll, setExpandedAll] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const controls = useAnimation();

  const toggleExpandAll = () => {
    setExpandedAll(!expandedAll);
  };

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");
      if (workSection) {
        const rect = workSection.getBoundingClientRect();
        setShowButton(rect.top < 0 && rect.bottom > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="work" className="py-20 px-4 max-w-6xl mx-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work History</h2>
      <div className="relative pl-6">
        {/* Connecting animated reveal line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-3 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full origin-top"
        ></motion.div>

        {workHistory.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 group"
          >
            <div className="flex flex-col items-start">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white mb-4 shadow-md"
              >
                <span className="text-sm font-bold">{index + 1}</span>
              </motion.div>
              <div className="flex items-center mb-2">
                {/* Insert company logo below */}
                <img
                  src={`../assets/${job.logo}`} // Replace company_name.jpg appropriately
                  alt={`${job.company} Logo`}
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-blue-700">
                  {job.title} @ {" "}
                  {/* Insert hyperlink below by replacing the '#' with your company's URL */}
                  <a  href={job.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">
                    {job.company}
                  </a>
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">{job.dates}</p>
              {(expandedAll || job.id === 1) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-2 group-hover:shadow-xl w-full"
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {job.details}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Expand/Collapse Button */}
      {showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleExpandAll}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition z-50"
        >
          {expandedAll ? "Collapse All" : "Expand All"}
        </motion.button>
      )}
    </section>
  );
}
