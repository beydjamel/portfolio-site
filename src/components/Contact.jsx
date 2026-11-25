import { useState } from "react";

const ACCESS_KEY = "d8b1aabd-aa32-4459-a526-0df36efc1fab";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/djamel-bey28",
  },
  {
    label: "GitHub",
    href: "https://github.com/beydjamel",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/213562178855",
  },
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
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400";

  return (
    <section id="contact" className="bg-white px-6 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
          Contact
        </h2>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
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
            className="w-full rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 disabled:opacity-50"
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

        <div className="mt-12 flex flex-wrap gap-6 border-t border-slate-200 pt-8 dark:border-slate-800">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-600 hover:underline dark:text-sky-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
