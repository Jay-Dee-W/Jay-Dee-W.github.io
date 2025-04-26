import React from "react";

const aboutCards = [
  {
    icon: "🔥",
    title: "Experience",
    description: "30+ years across IT and Web Development"
  },
  {
    icon: "🌍",
    title: "Location",
    description: "Cape Town, South Africa"
  },
  {
    icon: "🎓",
    title: "Education",
    description: "IT Certifications & Diploma in Information Technology"
  },
  {
    icon: "🛠",
    title: "Specializations",
    description: "ITSM, Full-stack Web Development, Database Administration"
  },
  {
    icon: "📜",
    title: "Certifications",
    description: "ITIL Foundation, Microsoft Certified - IT Professional - SQL DBA - Trainer, Web Development"
  },
  {
    icon: "💬",
    title: "Languages",
    description: "English & Afrikaans"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {aboutCards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center hover:shadow-md transition"
          >
            <div className="text-3xl mb-2">{card.icon}</div>
            <h3 className="text-md font-semibold mb-1">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-snug">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}