import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import './styles/index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#e2e2e2]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
    </div>
  );
}
