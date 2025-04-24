import React from "react";
import profilePic from "../assets/profile.jpg"; // Make sure this path matches where your image is stored

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-12 px-4 text-center md:text-left">
      <div className="flex-shrink-0">
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bridging IT Expertise & Web Innovation
        </h1>
        <p className="text-lg md:text-xl mb-6">
          I'm a seasoned IT leader turned web developer, blending decades of systems experience
          with modern frontend tools to build reliable, user-focused digital solutions.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
