import { motion } from "motion/react";

function About() {
  return (
    <section id="about" className="bg-slate-100 px-6 py-24 dark:bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-3xl"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
          Who I am
        </p>
        <h2 className="mb-6 font-serif text-4xl font-bold text-slate-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          I am a software developer currently completing my internship, with a
          focus on full stack web development. I build web applications using
          React, Node.js, PHP, and MySQL, and I care about clean code,
          responsive design, and solutions that are easy to maintain and deploy.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
