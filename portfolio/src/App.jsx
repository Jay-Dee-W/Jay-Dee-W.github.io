import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="p-4">
        <Hero />
        <About />
        <Projects
          projects={[
            {
              title: "Inventory Manager / Expense Tracker",
              description: "A CRUD app showcasing local storage/backend integration, form handling and validation, real-time UI updates, and modular design.",
              tech: ["React", "Node.js", "LocalStorage", "Express"]
            },
            {
              title: "Real-Time Chat App",
              description: "Built with Firebase or WebSocket stack, includes OAuth/JWT auth, real-time updates, and a clean Vue UI.",
              tech: ["Vue", "Firebase", "Socket.io", "OAuth", "JWT"]
            },
            {
              title: "E-commerce Store",
              description: "A full store with Stripe/PayPal integration, global state management, strong validation, and reusable components.",
              tech: ["React", "Redux", "Stripe", "Tailwind"]
            },
            {
              title: "SaaS Dashboard",
              description: "Admin panel with charts, KPIs, role-based access, and Node/Django/Laravel backend integration.",
              tech: ["Next.js", "Chart.js", "Node", "Django", "Tailwind"]
            }
          ]}
        />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
