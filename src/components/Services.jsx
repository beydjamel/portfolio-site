import { motion } from "motion/react";

const services = [
  {
    title: "Web Application Development",
    description:
      "Custom web applications built with React and modern tools, designed to be fast, responsive, and easy to maintain.",
  },
  {
    title: "Backend & Database",
    description:
      "Server-side logic, REST APIs, and database design using Node.js, Express, PHP, MySQL, and PostgreSQL.",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Setting up and deploying websites on platforms like Render, with a clean build and deployment process.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Services() {
  return (
    <section
      id="services"
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
            What I offer
          </p>
          <h2 className="mb-12 font-serif text-4xl font-bold text-slate-900 dark:text-white">
            Services
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={card}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 dark:border-slate-800 dark:bg-slate-950"
            >
              <span className="mb-6 block font-serif text-5xl font-bold text-amber-500/30 transition group-hover:text-amber-500/60">
                0{index + 1}
              </span>
              <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
