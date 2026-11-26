import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pt-20 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10" />
      </div>

      <div className="max-w-3xl text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 font-serif text-5xl font-bold text-slate-900 md:text-7xl dark:text-white"
        >
          Bey Djamel
        </motion.h1>

        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 text-xl tracking-wide text-slate-700 dark:text-slate-300"
        >
          Software Developer
        </motion.p>

        <motion.p
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        >
          Crafting full stack web applications with React, PHP, and MySQL, with
          a focus on clean design and reliable performance.
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
            className="rounded-md bg-amber-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="rounded-md border border-amber-500/50 px-8 py-3 font-semibold text-amber-600 transition hover:border-amber-400 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-200"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
