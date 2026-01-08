import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    // Small timeout to trigger the bar fill animation after render
    const timer = setTimeout(() => setIsAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const skills = [
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 60, category: "frontend,language" },
    { name: "React", level: 80, category: "frontend,framework" },
    { name: "Bootstrap", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend,framework" },
    { name: "Node.js", level: 65, category: "backend" },
    { name: "Express.js", level: 25, category: "backend,framework" },
    { name: "Django", level: 70, category: "backend,framework" },
    { name: "Mysql", level: 85, category: "database" },
    { name: "MongoDB", level: 70, category: "database" },
    { name: "SQlite", level: 83, category: "database" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Figma", level: 78, category: "tools" },
    { name: "C", level: 80, category: "language" },
    { name: "C++", level: 90, category: "language" },
    { name: "Python", level: 65, category: "language" },
    { name: "Java", level: 50, category: "language" },
  ];

  const categories = ["all", "frontend", "backend", "tools", "language", "database", "framework"];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category.includes(activeCategory));

  return (
    <section id="skills" className="py-24 px-6 bg-transparent relative overflow-hidden">
      {/* High-Contrast Mesh Background for Glass Effect */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[160px] rounded-full" />


      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tighter gap-2 text-slate-900 dark:text-white">
            Technical  <span className="ml-2 text-indigo-600 dark:text-indigo-400/20 bg-none dark:bg-clip-text bg-gradient-to-r from-primary to-indigo-400"> Proficiency</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-indigo-500 mx-auto shadow-[0_0_150px_50px_rgba(79,70,229,0.3)] rounded-full" />
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setIsAnimate(false);
                setActiveCategory(cat);
              }}
              className={cn(
                "px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 capitalize border",
                activeCategory === cat
                  ? "bg-white/10  text-blue-700 dark:text-primary border-blue-900/50 backdrop-blur-md shadow-[0_0_20px_rgba(var(--primary),0.1)]"
                  : "bg-transparent text-stone-950 dark:text-slate-200 border-black/5 hover:border-black/20 hover:text-slate-700  dark:hover:border-white/20 dark:hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ULTRA GLASS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group  relative p-8 rounded-[2.5rem] border border-black/30  bg-black/[0.03] hover:bg-black/[0.07] hover:border-black/20  dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.07] dark:hover:border-white/20 transition-all duration-500"
            >
              {/* Transparent Glass Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2.5rem] 
            bg-gradient-to-br from-white/[0.08] to-transparent 
          ring-1 ring-inset ring-white/20 
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
              />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl text-black/90 group-hover:text-black dark:text-white/90 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs md:text-sm font-black font-mono text-primary">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Highlighted Level Bar */}
                <div className="relative w-full bg-black/40 h-3.5 rounded-2xl p-[3px] border border-white/5 shadow-inner">
                  <div
                    className="h-full rounded-2xl transition-all duration-[1800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] relative"
                    style={{
                      width: isAnimate ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%)`, // Indigo to Cyan highlight
                      boxShadow: '0 0 20px rgba(79, 70, 229, 0.6), inset 0 1px 1px rgba(255,255,255,0.3)'
                    }}
                  >
                    {/* Animated Reflection Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;