import "./App.css";
import Contact from "./modules/Hero/Contact/Contact";
import Footer from "./modules/Hero/Footer/Footer";
import Hero from "./modules/Hero/Hero";
import Projects from "./modules/Hero/Projects/Projects";
import Skills from "./modules/Hero/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
