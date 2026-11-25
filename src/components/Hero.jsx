import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 via-transparent to-indigo-100 dark:from-sky-900/30 dark:to-indigo-900/30" />

      <div className="max-w-3xl text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-4 font-medium text-sky-600 dark:text-sky-400"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-4 text-5xl font-bold text-slate-900 md:text-6xl dark:text-white"
        >
          Bey Djamel
        </motion.h1>

        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 text-2xl font-semibold text-sky-600 dark:text-sky-400"
        >
          Software Developer
        </motion.p>

        <motion.p
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mb-8 max-w-xl text-lg text-slate-600 dark:text-slate-400"
        >
          Currently in an internship, building web applications with React, PHP,
          and MySQL.
        </motion.p>

        <motion.div
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
