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

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-100 px-6 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
          Services
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="mb-3 text-lg font-semibold text-sky-600 dark:text-sky-400">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
