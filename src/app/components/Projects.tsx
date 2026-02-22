import { ExternalLink, Figma, FigmaIcon, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Built with React, Node.js, and MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind CSS', 'Express'],
      image: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTQ3ODc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      github: 'https://github.com/iftanafinayet/ecommerce-app',
      live: '#',
    },
    {
      title: 'UI/UX Design Marketplace',
      description: 'A UI/UX design marketplace for selling a merchandise with user-friendly interface, secure payment processing, and personalized recommendations.',
      tech: ['Figma'],
      image: 'https://images.unsplash.com/photo-1770368787779-8472da646193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE0ODI5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      FigmaIcon: 'https://www.figma.com/proto/5jD3rCC1e0XQ3jdo4IkhTX?node-id=0-1&t=9E3telUQAI8ev4Oz-6',
      live: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts, interactive maps, weather alerts, and 7-day predictions using OpenWeather API.',
      tech: ['React', 'OpenWeather API', 'MongoDB', 'Express', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      github: 'https://github.com/iftanafinayet/mern-weather-glass-app',
      live: '#',
    },
    {
      title: 'Lauk Restauran',
      description: 'Discover and save your favorite recipes with advanced search filters, meal planning features, and nutrition information integration.',
      tech: ['PHP', 'MySQL', 'PhpMyAdmin'],
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      github: 'https://github.com/iftanafinayet/lauk_restoran',
      live: '#',
    },
    {
      title: 'Expense Tracker',
      description: 'Content management system for portfolio websites with drag-and-drop builder, customizable themes, and SEO optimization tools.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      github: 'https://github.com/iftanafinayet/mern-expense-tracker-app',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <ScrollReveal>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-white/90 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-semibold">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
