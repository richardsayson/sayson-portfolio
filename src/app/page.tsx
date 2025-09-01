// src/app/page.tsx

import About from "./about/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Techstack from "./techstack/page";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-36 scroll-smooth">
      {/* Home / Hero Section */}
      <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12">
        {/* Text Section */}
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            I&apos;m <span className="text-blue-600">Richard Sayson</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            I&apos;m a full-stack and mobile developer with a strong focus on building high-performance applications. I work across the stack using technologies like React, Node.js, TypeScript, Laravel (including Livewire), and Tailwind CSS. On the mobile side, I develop native apps using Java, Kotlin, and Swift — delivering clean, efficient, and scalable solutions across platforms.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#projects" className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src="/assets/profile2.JPG" // Replace with your actual image path
            alt="Richard Sayson"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-600 shadow-lg"
          />
        </div>
      </section>


      {/* About Me Section */}
      <About/>

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Tech Stack Section */}
      <Techstack />
    </main>
  );
}
