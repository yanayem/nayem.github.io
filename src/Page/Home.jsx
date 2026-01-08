import React from "react";
import ThemeToggle from "../Component/ThemeToggle";
import StarBackground from "../Component/StarBackground";
import Navbar from "../Component/NavBar";
import HeroSection from "../Component/HeroSection";
import AboutMe from "../Component/AboutMe";
import SkillSection from "../Component/SkillSection";
import SeviceArea from "../Component/ServiceArea";
import ProjectSection from "../Component/ProjectSection";
import ScrollToTop from "../Component/ScrollToTop";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      
      {/* Theme Toggle - Fixed and High Z-Index */}
      <div className="hidden md:block fixed top-24 right-6 z-[60] md:top-6 md:right-10">
        <ThemeToggle />
      </div>

      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutMe />
        <SkillSection />
        <SeviceArea />
        <ProjectSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
