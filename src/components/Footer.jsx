import { motion } from "motion/react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/djamel-bey28" },
  { label: "GitHub", href: "https://github.com/beydjamel" },
  { label: "WhatsApp", href: "https://wa.me/213562178855" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-500/10 bg-slate-100 px-6 pb-8 pt-20 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-3"
      >
        <motion.div variants={fadeUp}>
          <a
            href="#"
            className="font-serif text-2xl font-bold text-slate-900 dark:text-white"
          >
            Bey <span className="text-amber-500">Djamel</span>
          </a>
          <p className="mt-4 max-w-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Software developer crafting full stack web applications with clean
            design and reliable performance.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="mb-5 text-sm uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
            Navigation
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-600 transition hover:text-amber-500 dark:text-slate-300 dark:hover:text-amber-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="mb-5 text-sm uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
            Connect
          </h4>
          <ul className="space-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition hover:text-amber-500 dark:text-slate-300 dark:hover:text-amber-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs tracking-wide text-slate-500 md:flex-row dark:border-slate-800"
      >
        <p>© {new Date().getFullYear()} Bey Djamel. All rights reserved.</p>
        <a
          href="#"
          className="transition hover:text-amber-500 dark:hover:text-amber-300"
        >
          Back to top ↑
        </a>
      </motion.div>
    </footer>
  );
}

export default Footer;
