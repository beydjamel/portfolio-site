import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
    <main>
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}

export default App;
