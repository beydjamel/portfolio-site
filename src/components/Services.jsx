const services = [
  {
    title: "Web Application Development",
    description:
      "Custom web applications built with React and modern tooling, designed to be fast and maintainable.",
  },
  {
    title: "Backend & Database",
    description:
      "Server-side logic, APIs, and database design using Node.js, PHP, and MySQL.",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Setting up and deploying your site on platforms like Render, with a clean build process.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-10">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-800 p-6"
            >
              <h3 className="text-lg font-semibold text-sky-400 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
