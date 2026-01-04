import React, { useState, useEffect, useMemo } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = useMemo(() => [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Service", href: "#service", id: "service" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ], []);

  // Handle Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Intersection Observer logic for Active State
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-3",
        isScrolled 
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-b border-white/20 shadow-lg py-2" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#hero" className="group flex items-center gap-1 text-2xl font-black tracking-tighter">
          <span className="text-secondary transition-transform group-hover:-rotate-12">Nayem</span>
          <span className="text-foreground ml-1.5 uppercase tracking-[0.2em] text-sm font-light opacity-80">
                Portfolio
              </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-slate-200/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-white/10">
          <div className="flex space-x-1">
            {navItems.map(({ name, href, id }) => (
              <a
                key={name}
                href={href}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full",
                  activeSection === id 
                    ? "text-white bg-secondary shadow-sm" 
                    : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                )}
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Action Button (Optional but modern) */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 p-2 md:hidden text-foreground overflow-hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navItems.map(({ name, href, id }, index) => (
            <a
              key={name}
              href={href}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={cn(
                "text-4xl font-bold transition-all transform",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                activeSection === id ? "text-secondary" : "text-foreground/50 hover:text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;