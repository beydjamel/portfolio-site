const projects = [
  {
    title: "Expense Tracker",
    description:
      "A web app for tracking daily expenses, built with React, Node.js/Express, and PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Booking System",
    description:
      "A booking platform built with Laravel on a LAMP stack, including scheduling and admin management.",
    tags: ["Laravel", "PHP", "MySQL"],
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-sm text-sky-400">
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
