import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToHashElement from "./components/utils/ScrollToHashElement";
import Stack from "./components/Stack";

export default function App() {
  return (
    <div>
      <ScrollToHashElement />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </div>
  )
}