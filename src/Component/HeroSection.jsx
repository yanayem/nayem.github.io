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

      <div className="container z-10 max-w-4xl mx-auto space-y-10 text-center">
        {/* Heading - Preserved original sizes with modern styling */}
        <div className="space-y-6">
          <h1 className="inline-block text-4xl font-bold tracking-tight opacity-0 md:text-6xl animate-fade-in fill-mode-forwards leading-tight">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-primary">Yeasin</span>
              {/* Subtle underline deco */}
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-primary/20 -z-10" />
            </span>{" "}
            <span className="text-secondary bg-clip-text bg-gradient-to-r from-secondary via-secondary/80 to-secondary">
              Arafat Nayem
            </span>{" "}
            <span className="text-primary">Bhuiyan</span>
          </h1>

          {/* Paragraph - Improved readability */}
          <p className="max-w-2xl mx-auto text-lg leading-relaxed opacity-0 md:text-xl text-muted-foreground animate-fade-in animate-delay-500 fill-mode-forwards">
            I craft intuitive web experiences with HTML, CSS, and JavaScript,
            solve algorithmic challenges in C and C++, and build smart logic
            with Python and SQL. Whether it's designing sleek interfaces or
            decoding complex problems, I thrive at the intersection of
            creativity and code.
          </p>
        </div>

        {/* Button - Modern Glass-Shadow style */}
        <div className="pt-4 opacity-0 animate-fade-in animate-delay-1000 fill-mode-forwards">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold transition-all duration-300 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
          >
            View My Projects
          </a>
        </div>

        {/* Scroll Indicator - Minimalist Modern UI */}
        <button
          onClick={scrollToFooter}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer"
          aria-label="Scroll to footer"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground group-hover:text-primary transition-colors">
            Explore
          </span>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-primary transition-all animate-bounce-slow">
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;