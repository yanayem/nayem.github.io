import React from "react";

const Footer = () => {
  return (
    <footer 
      id="footer" 
      className="relative overflow-hidden border-t dark:border-whilte/10 border-gray-400 bg-gray-100 dark:bg-black/20 backdrop-blur-xl py-8 px-6 transition-all duration-300"
    >
      {/* Subtle background glow to make the glass effect visible */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-24 bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left side - Copyright with a clean mono font look */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
              Final Thoughts
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} <span className="text-primary font-black">YANB</span>. All rights reserved.
            </p>
          </div>

          {/* Right side - Developer Name with High-Highlight span */}
          <div className="flex flex-col items-center md:items-end">
             <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
              Architecture
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Developed by{" "}
              <span className="text-foreground font-bold hover:text-primary transition-colors cursor-default">
                Yeasin Arafat Nayem Bhuiyan
              </span>
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;