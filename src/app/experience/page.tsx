export default function Experience() {
  return (
    <section id="experience" className="space-y-4">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">Full-Stack Developer @ [Company Name]</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Jan 2022 – Present</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Built and maintained full-stack applications using Next.js, Prisma, and PostgreSQL. Led frontend architecture decisions and improved performance by 30%.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">Frontend Developer @ [Company Name]</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Jul 2020 – Dec 2021</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Developed reusable component libraries in React & TypeScript, collaborated with designers, and ensured accessibility across the platform.
          </p>
        </div>
      </div>
    </section>
  );
}