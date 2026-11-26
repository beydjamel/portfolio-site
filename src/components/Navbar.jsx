import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-amber-500/20 bg-white/85 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-slate-950/85"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="font-serif text-xl font-bold tracking-wide text-slate-900 dark:text-white"
        >
          Bey <span className="text-amber-500">Djamel</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm tracking-wide text-slate-600 transition hover:text-amber-500 dark:text-slate-300 dark:hover:text-amber-300"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-amber-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-slate-800 md:hidden dark:text-slate-100"
          >
            <span className="block text-2xl leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-amber-500/20 bg-white/95 backdrop-blur-xl md:hidden dark:bg-slate-950/95"
          >
            {links.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-slate-700 transition hover:text-amber-500 dark:text-slate-200"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
            <li className="px-6 py-5">
              <ThemeToggle />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
