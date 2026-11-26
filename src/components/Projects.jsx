import { motion } from "motion/react";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A web app for tracking daily expenses, with a clean interface for adding, editing, and reviewing transactions.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/beydjamel",
    demo: "https://expense-tracker-5fmy.onrender.com/",
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website, built with React, Vite, and Tailwind CSS, featuring animated sections and a working contact form.",
    tags: ["React", "Vite", "Tailwind CSS", "Motion"],
    github: "https://github.com/beydjamel/portfolio-site",
    demo: null,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-100 px-6 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
            Portfolio
          </p>
          <h2 className="mb-12 font-serif text-4xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={card}
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="mb-4 font-serif text-2xl font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-amber-500/30 px-3 py-1 text-xs text-amber-700 dark:text-amber-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 transition hover:text-amber-500 dark:text-slate-200 dark:hover:text-amber-300"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 transition hover:text-amber-500 dark:text-slate-200 dark:hover:text-amber-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
