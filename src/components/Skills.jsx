const skills = [
  "React",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Express",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Linux",
  "Apache",
  "Git",
];

function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
