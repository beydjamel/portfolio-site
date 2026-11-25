function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sky-400 font-medium mb-4">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Your Name
        </h1>
        <p className="text-xl text-slate-400 mb-8">
          Full Stack Web Developer building fast, reliable web applications.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-400 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
