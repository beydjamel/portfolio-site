const skills = [
  "React",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "PHP",
  "MySQL",
  "Linux",
  "Apache",
  "Git",
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200"
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
