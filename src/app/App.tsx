import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import './styles/tailwind.css';
import 'tw-animate-css';
import './styles/theme.css';
import './styles/fonts.css';
import './styles/index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
