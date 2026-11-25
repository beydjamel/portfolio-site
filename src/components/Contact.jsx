import { useState } from "react";

const ACCESS_KEY = "d8b1aabd-aa32-4459-a526-0df36efc1fab";

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
    "w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none";

  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-slate-400 mb-8">
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
            className="w-full rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-400 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-400">
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
