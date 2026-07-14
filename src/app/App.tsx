import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { RateCard } from './components/RateCard';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import './styles/index.css';
import Beams from './components/Beams';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <RateCard />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
