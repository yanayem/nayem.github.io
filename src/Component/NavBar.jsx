import React, { useState, useEffect, useMemo } from "react";
import { cn } from "../lib/utils";
import {
  X, Menu, Home, User, Code, Briefcase, Cpu, Mail, Github, Linkedin, Twitter
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  // --- THEME LOGIC ---
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // ------------------

  const navItems = useMemo(() => [
    { name: "Home", href: "#hero", id: "hero", icon: <Home size={20} /> },
    { name: "About", href: "#about", id: "about", icon: <User size={20} /> },
    { name: "Skills", href: "#skills", id: "skills", icon: <Cpu size={20} /> },
    { name: "Service", href: "#service", id: "service", icon: <Briefcase size={20} /> },
    { name: "Projects", href: "#projects", id: "projects", icon: <Code size={20} /> },
    { name: "Contact", href: "#contact", id: "contact", icon: <Mail size={20} /> },
  ], []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [navItems]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6",
          isScrolled
            ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="group flex items-center gap-1 text-2xl font-black tracking-tighter relative z-[60]">
            <span className="text-secondary transition-transform duration-300 group-hover:-rotate-12">Nayem</span>
            <span className="text-foreground ml-1.5 uppercase tracking-[0.2em] text-[10px] font-bold opacity-60">
              Portfolio
            </span>
          </a>

          <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/40 p-1.5 rounded-full border border-black/5 dark:border-white/5 backdrop-blur-md">
            {navItems.map(({ name, href, id }) => (
              <a
                key={name}
                href={href}
                className={cn(
                  "px-5 py-2 text-sm font-semibold transition-all rounded-full",
                  activeSection === id
                    ? "text-white bg-secondary shadow-lg shadow-secondary/20"
                    : "text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                {name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:block bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95">
              Hire Me
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative z-[60] p-1 md:hidden text-foreground bg-white/20 dark:bg-slate-800/40 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl transition-all active:scale-90"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-500 md:hidden",
          isMenuOpen
            ? "bg-slate-950/30 backdrop-blur-[3px] opacity-100 pointer-events-auto"
            : "bg-transparent backdrop-blur-0 opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-[110] h-screen w-[260px] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden flex flex-col",
          "bg-white/80 dark:bg-slate-950/80 backdrop-blur-[20px] border-r border-white/30 dark:border-white/10 shadow-2xl",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/20 dark:border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-secondary/30">N</div>
            <p className="font-bold text-[clamp(0.6rem,2vw,0.75rem)] tracking-widest uppercase opacity-70">Nayem <span className="font-normal opacity-50">Portfolio</span></p>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-foreground transition-all active:rotate-90">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map(({ name, href, id, icon }) => (
            <a
              key={name}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group border border-transparent",
                activeSection === id
                  ? "bg-secondary/15 text-secondary border-secondary/10 shadow-sm"
                  : "text-foreground/60 hover:bg-white/40 dark:hover:bg-white/5 hover:text-foreground"
              )}
            >
              <span className={cn(
                "w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300",
                activeSection === id
                  ? "bg-secondary text-white scale-110 shadow-lg shadow-secondary/30"
                  : "bg-white/50 dark:bg-slate-900/50 border border-black/5 dark:border-white/5 group-hover:scale-110"
              )}>
                {icon}
              </span>
              <span className="text-sm font-bold tracking-tight">{name}</span>
            </a>
          ))}
        </nav>

        <div className="p-6 mt-auto border-t border-white/20 dark:border-white/5 bg-white/10 dark:bg-black/10">
          
          {/* WORKING THEME TOGGLE */}
          <div className="flex flex-row justify-center mb-6">
            <label htmlFor="dark-toggle" className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  name="dark-mode"
                  id="dark-toggle"
                  className="checkbox hidden"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <div className={cn(
                    "block border-[1px] w-12 h-7 rounded-full transition-colors",
                    theme === "dark" ? "border-secondary bg-secondary/10" : "border-foreground/30"
                )}></div>
                <div className={cn(
                    "dot absolute left-1 top-1 w-5 h-5 rounded-full transition-all transform duration-300",
                    theme === "dark" ? "translate-x-5 bg-white shadow-md" : "translate-x-0 bg-slate-800"
                )}></div>
              </div>
              <div className="ml-3 dark:text-white text-slate-900 font-bold text-[10px] uppercase tracking-wider opacity-60">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </div>
            </label>
          </div>

          <div className="flex justify-between px-2 mb-6">
            <a href="https://github.com/yanayem" target="_blank" rel="noreferrer" className="p-2 text-foreground/40 hover:text-secondary hover:scale-125 transition-all"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/yeasin-arafat-nayem-bhuiyan/" target="_blank" rel="noreferrer" className="p-2 text-foreground/40 hover:text-secondary hover:scale-125 transition-all"><Linkedin size={18} /></a>
            <a href="https://x.com/nayem_ya" target="_blank" rel="noreferrer" className="p-2 text-foreground/40 hover:text-secondary hover:scale-125 transition-all"><Twitter size={18} /></a>
          </div>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center w-full bg-secondary text-white py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.15em] shadow-lg shadow-secondary/20 active:scale-95 transition-all brightness-110">
            Start a Project
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;