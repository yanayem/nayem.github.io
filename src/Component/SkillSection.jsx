import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend,language" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Bootstrap", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 88, category: "frontend" },
    { name: "Node.js", level: 65, category: "backend" },
    { name: "Express.js", level: 25, category: "backend" },
    { name: "Django", level: 84, category: "backend" },
    { name: "Mysql", level: 63, category: "backend" },
    { name: "SQlite", level: 83, category: "backend" },
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Figma", level: 78, category: "tools" },
    { name: "C", level: 84, category: "language" },
    { name: "C++", level: 92, category: "language" },
    { name: "Python", level: 75, category: "language" },
  ];

  const categories = ["all", "frontend", "backend", "tools", "language"];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category.includes(activeCategory));

  return (
    <section id="skills" className="py-24 px-8 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory} // re-animate on category change
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: key * 0.1 }}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
