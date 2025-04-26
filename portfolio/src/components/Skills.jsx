import React from "react";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Skilled in building responsive and dynamic UIs with React.js, Next.js, and Vue.js. Proficient with TailwindCSS and Material UI for clean and modern design systems."
  },
  {
    title: "Backend Development",
    description:
      "Experienced in creating robust APIs and server-side applications using Node.js, Express.js, and integrating with MongoDB, PostgreSQL, and Firebase."
  },
  {
    title: "Database Administration",
    description:
      "Extensive experience managing SQL Server, PostgreSQL, and NoSQL databases. Focused on performance tuning, backup strategies, and high availability."
  },
  {
    title: "IT Service Management",
    description:
      "30+ years of expertise leading ITSM initiatives. Skilled in Incident, Problem, and Change Management under ITIL frameworks to optimize service delivery."
  },
  {
    title: "Cloud & DevOps",
    description:
      "Knowledgeable in cloud platforms like AWS and Azure. Familiar with containerization (Docker) and CI/CD pipelines to streamline deployments."
  },
  {
    title: "Leadership & Training",
    description:
      "Proven ability to lead remote teams, deliver technical training, and drive continuous improvement initiatives in agile and traditional environments."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              {skill.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
