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
  title: "Hospital Appointment and Patient Management System",
  description: "A web-based system for managing hospital appointments, patient records, and doctor scheduling.",
  tags: ["Html", "Tailwind", "Django", "Sqlite", "Animation"],
  demoUrl: "https://hospital-appointment-and-patient.onrender.com/",
  githubUrl: "#",
  image: img7,
},
    {
      title: "Pet Shop",
      description:
        "A sleek personal portfolio built with React, Vite, and Tailwind CSS. Features dark mode, animated backgrounds, and smooth scroll navigation.",
      tags: ["React", "Vite", "Tailwind", "Dark Mode", "Animation"],
      demoUrl: "https://petshop012.netlify.app/",
      githubUrl: "#",
      image: img1,
    },
    {
      title: "Blackbang hacks Portfolio",
      description:
        "A productivity web app for managing tasks and projects. Includes drag-and-drop UI, theme toggles, and local storage persistence.",
      tags: [
        "React",
        "Tailwind",
        "LocalStorage",
        "Drag & Drop",
        "Theme Toggle",
      ],
      demoUrl: "https://blackbanghacks.netlify.app/",
      githubUrl: "#",
      image: img2,
    },
    {
      title: "Nature Blog",
      description:
        "A GitHub user search tool using the GitHub API. Responsive design with light/dark mode, error handling, and animated transitions.",
      tags: ["React", "API", "Tailwind", "Dark Mode", "Responsive"],
      demoUrl: "https://imageinactive.netlify.app/",
      githubUrl: "#",
      image: img3,
    },
    {
      title: "REEN",
      description:
        "REEN is a high-quality solution for those who want a beautiful website in no time. It's fully responsive and will adapt itself to any mobile device. iPad, iPhone, Android, it doesn't matter. Your content will always look its absolute best.",
      tags: ["React", "API", "Tailwind", "Responsive"],
      demoUrl: "https://reen-project-react-js.vercel.app/",
      githubUrl: "https://github.com/yanayem/REEN-project-ReactJS",
      image: img4,
    },
    {
      title: "Nature Blog",
      description:
        "A GitHub user search tool using the GitHub API. Responsive design with light/dark mode, error handling, and animated transitions.",
      tags: ["React", "API", "Tailwind", "Responsive"],
      demoUrl: "https://projccet-viccas.vercel.app/",
      githubUrl: "https://github.com/yanayem/projccet-Biccas",
      image: img5,
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive slidesPerView
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

  // Get visible projects
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-900 text-sm md:text-lg max-w-2xl mx-auto">
            Here are some recent projects
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden ">
          <div className="flex transition-transform duration-500 gap-x-6 justify-center">
            {visibleProjects.map((project, idx) => (
              <div
                key={idx}
                className={`rounded-2xl shadow-sm  dark:bg-gray-800 p-5 transition-transform hover:-translate-y-2 ${slidesPerView === 1
                    ? "w-full"
                    : slidesPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
              >
                {/* Project Card */}
                <div className="h-48 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-800 dark:text-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 transition-transform duration-200 hover:text-primary hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>

                    {project.githubUrl && project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 transition-transform duration-200 dark:text-gray-300 hover:text-primary hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      <span
                        className="opacity-50 cursor-not-allowed"
                        title="Private or unavailable"
                      >
                        <Github size={20} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Navigation Buttons  outside area*/}

          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + projects.length) % projects.length
              )
            }
            className="hidden lg:flex absolute top-1/2 left-1 transform -translate-y-1/2 bg-fifth text-black p-3 rounded-full shadow-lg transition"
          >
            &#10094;
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % projects.length)
            }
            className="hidden lg:flex absolute top-1/2 right-1 transform -translate-y-1/2 bg-fifth text-black p-3 rounded-full shadow-lg transition"
          >
            &#10095;
          </button>

        </div>
        {/* Pagination Dots (outside card area) */}
        <div className="mt-6 flex justify-center space-x-3">
          {Array.from({ length: projects.length }).map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full transition ${idx === currentIndex
                  ? "bg-primary scale-110"
                  : "bg-fifth hover:bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/yanayem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold transition-colors text-primary hover:text-fourth"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
