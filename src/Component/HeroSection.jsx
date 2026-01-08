import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-background"
    >
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* FIX: Added pb-32 on mobile to prevent overlap with the Explore button. 
          The md:pb-0 removes it on larger screens where there is plenty of space.
      */}
      <div className="container z-10 max-w-4xl mx-auto space-y-10 text-center pb-32 md:pb-0">
        <div className="space-y-6">
          <h1 className="inline-block text-4xl font-bold tracking-tight md:text-6xl leading-tight text-foreground animate-in fade-in duration-700">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-primary">Yeasin</span>
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-primary/20 -z-10" />
            </span>{" "}
            <span className="text-secondary bg-clip-text bg-gradient-to-r from-secondary via-secondary/80 to-secondary">
              Arafat Nayem
            </span>{" "}
            <span className="text-primary">Bhuiyan</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 delay-300 duration-700">
            I craft intuitive web experiences with HTML, CSS, and JavaScript,
            solve algorithmic challenges in C and C++, and build smart logic
            with Python and SQL. Whether it's designing sleek interfaces or
            decoding complex problems, I thrive at the intersection of
            creativity and code.
          </p>
        </div>

        <div className="pt-4 animate-in fade-in zoom-in-95 delay-500 duration-700">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold transition-all duration-300 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
          >
            View My Projects
          </a>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      {/* FIX: Reduced size slightly on mobile (w-8 h-8) to save space */}
      <button
        onClick={scrollToFooter}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 group cursor-pointer"
        aria-label="Scroll to footer"
      >
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground group-hover:text-primary transition-colors">
          Explore
        </span>
        <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-border group-hover:border-primary transition-all animate-bounce">
          <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;