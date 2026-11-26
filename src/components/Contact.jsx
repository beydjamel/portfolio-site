import { useState } from "react";
import { motion } from "motion/react";
const ACCESS_KEY = "d8b1aabd-aa32-4459-a526-0df36efc1fab";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/djamel-bey28" },
  { label: "GitHub", href: "https://github.com/beydjamel" },
  { label: "WhatsApp", href: "https://wa.me/213562178855" },
];

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.target);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New message from portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) event.target.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-amber-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-amber-400";

  return (
    <section id="contact" className="bg-white px-6 py-24 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
          Get in touch
        </p>
        <h2 className="mb-4 font-serif text-4xl font-bold text-slate-900 dark:text-white">
          Contact
        </h2>
        <p className="mb-10 leading-relaxed text-slate-600 dark:text-slate-400">
          Have a project in mind? Send me a message and I will get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className={inputClass}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
            className={inputClass}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 dark:text-green-400">
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 dark:text-red-400">
            Something went wrong. Please try again.
          </p>
        )}

        <div className="mt-14 flex flex-wrap gap-8 border-t border-amber-500/20 pt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-slate-700 transition hover:text-amber-500 dark:text-slate-200 dark:hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
