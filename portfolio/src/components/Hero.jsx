import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-7xl mx-auto py-20 px-4">
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover border-4 border-blue-600 shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Welcome!
        </h1>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl">
          I'm an IT professional with 30 years of extensive, multi-disciplinary experience. I have a proven track record in IT service management, database administration, and full-stack web development. Throughout my career, I've consistently demonstrated leadership in both traditional IT environments and modern agile settings. I've successfully implemented process improvements and technology solutions across a variety of organizations. My diverse background—spanning technical training, consulting, and executive management—reflects my commitment to delivering real-world, impactful solutions.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          See My Work
        </a>
      </div>
    </section>
  );
}