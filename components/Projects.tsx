
import React from 'react';
import { ExternalLink, Github, ArrowRight, ShieldCheck, Code, Search, Palette } from 'lucide-react';

const projects = [
  {
    title: "Online Food Ordering System",
    type: "Full Stack (MERN)",
    icon: Code,
    description: "A professional food delivery application with user authentication, cart management, and order tracking. Focuses on seamless data flow and responsive design.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    link: "https://github.com/kalyanigujar532-droid/online-food-ordering"
  },
  {
    title: "Student Management System",
    type: "Software Testing (QA)",
    icon: ShieldCheck,
    description: "Conducted extensive Manual and Functional testing. Created comprehensive Test Plans, Test Cases, and performed Regression testing to ensure bug-free academic record handling.",
    tech: ["Manual Testing", "SQL", "Functional Testing", "Regression"],
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    link: "https://github.com/kalyanigujar532-droid/student-management-system"
  },
  {
    title: "Student Learning Interface",
    type: "UI/UX & Frontend",
    icon: Palette,
    description: "A clean, modern learning platform interface designed with Figma and built with React. Focuses on user-centric design principles and smooth navigation.",
    tech: ["React", "Tailwind CSS", "Figma", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    link: "https://github.com/kalyanigujar"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Featured <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-zinc-400">
            Showcasing my expertise in both Web Development and Quality Assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-3xl overflow-hidden flex flex-col hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-[9px] font-black uppercase rounded-full tracking-widest flex items-center gap-1">
                    <project.icon size={10} /> {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[9px] text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded uppercase font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-500 font-bold text-sm group/link mt-auto"
                >
                  View Repository
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-400 mb-8 italic">Exploring more repositories on GitHub...</p>
          <a 
            href="https://github.com/kalyanigujar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 glass text-white font-bold rounded-full hover:bg-zinc-900 transition-all border border-zinc-800"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
