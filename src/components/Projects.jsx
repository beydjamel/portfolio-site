const projects = [
  {
    title: "Expense Tracker",
    description:
      "A web app for tracking daily expenses, with a clean interface for adding, editing, and reviewing transactions.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website, built with React, Vite, and Tailwind CSS, with animated sections and a working contact form.",
    tags: ["React", "Vite", "Tailwind CSS", "Render"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-100 px-6 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-sky-600 dark:text-sky-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
