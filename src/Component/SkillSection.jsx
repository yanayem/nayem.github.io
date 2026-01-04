import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

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
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="text-glow">Skills</span></h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 capitalize border",
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-card/50 text-muted-foreground border-border hover:border-primary/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FIXED GRID: min-height prevents the page from jumping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px] content-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // Forces a fresh start for the whole grid
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="contents" // Grid child wrapper
            >
              {filteredSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="glass-card p-6 h-fit border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-foreground">{skill.name}</h3>
                    <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-muted/40 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;