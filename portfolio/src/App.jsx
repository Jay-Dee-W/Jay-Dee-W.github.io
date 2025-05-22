import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import WorkHistory from "./components/WorkHistory.jsx";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="p-4">
        <Hero />
        <About />
        <Skills />
        <WorkHistory />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
