import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import img1 from "../assets/img_1.png";
import img2 from "../assets/img_2.png";
import img3 from "../assets/img_3.png";
import img4 from "../assets/img_4.png";
import img5 from "../assets/img_5.png";
import img6 from "../assets/Screenshot 2025-11-19 010951.png"
import img7 from "../assets/Screenshot 2025-12-18 212321.png";

const ProjectSection = () => {
  // --- LOGIC: UNTOUCHED ---
  const projects = [
    {
      title: "Soil Monitoring",
      description: "A real-time soil condition monitoring system with dark mode UI and Django backend.",
      tags: ["Html", "Tailwind", "Dark Mode", "Django", "Sqlite", "Animation"],
      demoUrl: "https://soil-monitoring.onrender.com/",
      githubUrl: "https://github.com/yanayem",
      image: img6,
    },
    {
      title: "Hospital Management",
      description: "A web-based system for managing hospital appointments, patient records, and doctor scheduling.",
      tags: ["Html", "Tailwind", "Django", "Sqlite", "Animation"],
      demoUrl: "https://hospital-appointment-and-patient.onrender.com/",
      githubUrl: "#",
      image: img7,
    },
    {
      title: "Pet Shop",
      description: "A sleek personal portfolio built with React, Vite, and Tailwind CSS. Features dark mode and smooth scroll.",
      tags: ["React", "Vite", "Tailwind", "Dark Mode", "Animation"],
      demoUrl: "https://petshop012.netlify.app/",
      githubUrl: "#",
      image: img1,
    },
    {
      title: "Blackbang hacks Portfolio",
      description: "A productivity web app for managing tasks and projects. Includes drag-and-drop UI and theme toggles.",
      tags: ["React", "Tailwind", "LocalStorage", "Drag & Drop", "Theme Toggle"],
      demoUrl: "https://blackbanghacks.netlify.app/",
      githubUrl: "#",
      image: img2,
    },
    {
      title: "Nature Blog",
      description: "A GitHub user search tool using the GitHub API. Responsive design with light/dark mode and animations.",
      tags: ["React", "API", "Tailwind", "Dark Mode", "Responsive"],
      demoUrl: "https://imageinactive.netlify.app/",
      githubUrl: "#",
      image: img3,
    },
    {
      title: "REEN",
      description: "REEN is a high-quality solution for those who want a beautiful website. Fully responsive and adaptive.",
      tags: ["React", "API", "Tailwind", "Responsive"],
      demoUrl: "https://reen-project-react-js.vercel.app/",
      githubUrl: "https://github.com/yanayem/REEN-project-ReactJS",
      image: img4,
    },
    {
      title: "Nature Blog",
      description: "A GitHub user search tool using the GitHub API. Responsive design with light/dark mode.",
      tags: ["React", "API", "Tailwind", "Responsive"],
      demoUrl: "https://projccet-viccas.vercel.app/",
      githubUrl: "https://github.com/yanayem/projccet-Biccas",
      image: img5,
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  // --- UI: MODERNIZED CSS ---
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-[#fafafa] dark:bg-[#030712] transition-colors duration-500">
      
      {/* 2050 Background Ambient Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">PROJECTS</span>
          </h2>
          <div className="flex justify-center items-center gap-3">
            <div className="h-[1px] w-12 bg-blue-500/50"></div>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
               Explore a selection of my recent work, blending design and functionality.
            </p>
            <div className="h-[1px] w-12 bg-blue-500/50"></div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative group/container">
          <div className="flex transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] gap-10 justify-center">
            {visibleProjects.map((project, idx) => (
              <div
                key={idx}
                className={`group/card relative rounded-[2rem] p-[1px] bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 dark:to-transparent overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-4 ${
                  slidesPerView === 1 ? "w-full" : slidesPerView === 2 ? "w-1/2" : "w-1/3"
                }`}
              >
                {/* Glass Card Inner */}
                <div className="relative h-full w-full bg-white dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] overflow-hidden flex flex-col border border-white/20 dark:border-white/5">
                  
                  {/* Image with Hover Zoom */}
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/5 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform transition-transform duration-1000 group-hover/card:scale-110 group-hover/card:rotate-1"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
                  </div>

                  {/* Text Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[9px] font-black tracking-widest uppercase py-1.5 px-3 rounded-full border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/5 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-8 font-medium">
                      {project.description}
                    </p>

                    {/* Footer Actions */}
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                      <div className="flex gap-2">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-1"
                        >
                          <ExternalLink size={18} />
                        </a>
                        {project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            className="p-3 border border-slate-200 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all hover:-translate-y-1"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                      
                      <button className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 translate-x-4 group-hover/card:translate-x-0 transition-all">
                        Deep Dive &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floated Navigation Buttons */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)}
            className="hidden xl:flex absolute top-1/2 -left-20 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-200 dark:border-white/10 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
          >
            &#10094;
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
            className="hidden xl:flex absolute top-1/2 -right-20 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-200 dark:border-white/10 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
          >
            &#10095;
          </button>
        </div>

        {/* Modern Progress Indicators */}
        <div className="mt-20 flex justify-center items-center gap-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === currentIndex 
                  ? "w-12 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]" 
                  : "w-3 bg-slate-300 dark:bg-slate-800 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>

        {/* Global Footer CTA */}
        <div className="mt-24 text-center">
          <a
            href="https://github.com/yanayem"
            target="_blank"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-transparent border-2 border-slate-900 dark:border-white rounded-full text-slate-900 dark:text-white font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 shadow-xl"
          >
            Terminal View
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;