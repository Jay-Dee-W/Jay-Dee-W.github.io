import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-blue-600 font-bold text-2xl">John-Desmond(JD) Wilson</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block text-gray-700 hover:text-blue-500">About</a>
            <a href="#skills" className="block text-gray-700 hover:text-blue-500">Skills</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}