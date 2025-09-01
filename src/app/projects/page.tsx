export default function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            A scalable e-commerce site built with Next.js, Stripe, and Supabase. Includes admin dashboard, authentication, and responsive design.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold">Personal Blog Platform</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Markdown-based blog engine using Next.js App Router, MDX, and PostgreSQL. Supports comments and SEO optimization.
          </p>
        </div>
      </div>
    </section>
  );
}