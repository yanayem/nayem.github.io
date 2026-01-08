import { Briefcase, Code, User, Terminal, Cpu, Globe } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-transparent overflow-hidden">
      {/* 2050 Visual Anchors */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-[2px] w-12 bg-primary/40 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Detailed Intro */}
          <div className="space-y-8">
            <div className="relative p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 bg-transparent backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Status: Available for Innovation
              </div>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                Passionate Web Developer & Tech Creator
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  With over 5 years of experience in crafting modern, scalable, and
                  visually stunning web applications.
                </p>
                <p>
                  I am passionate about blending design and functionality to create
                  exceptional user experiences. My approach focuses on clean architecture
                  and user-centric patterns.
                </p>
              </div>

              {/* Extra Info Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-6 mt-8 pt-8 border-t border-slate-100 dark:border-white/5">
                {/* Location Section */}
                <div className="flex flex-col">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-bold">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-semibold dark:text-slate-200 flex items-center gap-1.5 transition-colors hover:text-primary">
                    <Globe size={14} className="text-primary shrink-0" />
                    <span>Dhaka, BD</span>
                  </p>
                </div>

                {/* Specialization Section */}
                <div className="flex flex-col">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-bold">
                    Specialization
                  </p>
                  <p className="text-xs sm:text-sm font-semibold dark:text-slate-200 flex items-center gap-1.5 transition-colors hover:text-primary">
                    <Cpu size={14} className="text-primary shrink-0" />
                    <span>Full-Stack JS</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative rounded-full px-8 py-3 bg-primary text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:scale-105 active:scale-95"
              >
                Get In Touch
              </button>
              <a
                href="#"
                className="px-8 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary/5 transition-all text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-slate-400 font-black mb-4 px-2">
              Core Competencies
            </h4>

            {[
              {
                icon: <Code size={20} />,
                title: "Web Development",
                desc: "Building responsive and dynamic websites.",
                tags: ["HTML", "React", "Node.js", "Next.js"]
              },
              {
                icon: <User size={20} />,
                title: "UI/UX Design",
                desc: "Creating user-friendly and visually appealing designs.",
                tags: ["Figma", "Tailwind", "Motion"]
              },
              {
                icon: <Briefcase size={20} />,
                title: "Project Management",
                desc: "Leading projects from concept to launch.",
                tags: ["Agile", "Git", "DevOps"]
              }
            ].map((skill, i) => (
              <div
                key={i}
                className="group relative p-4 sm:p-6 rounded-[1.2rem] sm:rounded-[1.5rem] border border-slate-200 dark:border-white/10 bg-transparent backdrop-blur-sm transition-all duration-500 hover:border-primary/50 md:hover:translate-x-2"
              >
                {/* Icon and Content Flex wrapper */}
                <div className="flex flex-row items-start gap-4 sm:gap-5">

                  {/* Responsive Icon Container */}
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white shadow-inner shrink-0">
                    {React.cloneElement(skill.icon, { size: "inherit", className: "w-5 h-5 sm:w-6 sm:h-6" })}
                  </div>

                  <div className="flex-1 min-w-0"> {/* min-w-0 prevents flex items from overflowing */}
                    <h4 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white mb-1 tracking-tight truncate">
                      {skill.title}
                    </h4>

                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-snug mb-3 line-clamp-2 sm:line-clamp-none">
                      {skill.desc}
                    </p>

                    {/* Modern Tag Display with wrapping for small screens */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skill.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[8px] sm:text-[9px] font-bold text-primary/70 bg-primary/5 px-2 py-0.5 rounded border border-primary/10 whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;