import { motion } from "motion/react";

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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
            Toolkit
          </p>
          <h2 className="mb-10 font-serif text-4xl font-bold text-slate-900 dark:text-white">
            Skills
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={chip}
              whileHover={{ y: -3, borderColor: "rgb(245 158 11)" }}
              className="cursor-default rounded-full border border-slate-300 px-5 py-2 text-slate-700 transition hover:text-amber-600 dark:border-slate-700 dark:text-slate-200 dark:hover:text-amber-300"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Skills;
