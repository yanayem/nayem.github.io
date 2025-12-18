import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left - Intro */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p>
              With over 5 years of experience in crafting modern, scalable, and
              visually stunning web applications.
            </p>
            <p>
              I am passionate about blending design and functionality to create
              exceptional user experiences.
            </p>

            {/* Get in Touch Section */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const contact = document.getElementById("contact");
                    if (contact) {
                      contact.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="cosmic-button rounded-full px-6 py-2 bg-primary hover:bg-fourth transition-colors duration-200"
                >
                  Get In Touch
                </button>
                <a
                  href="https://1drv.ms/b/c/4b83bb33d9e6a435/IQBWw2ojxrIESKtgDKn5mPEmAfAc0WLNesMx6HdE3mYrjds?e=I9k1tB"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:text-fourth hover:brightness-135 transition-colors duration-200"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Building responsive and dynamic websites.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                <p className="text-muted-foreground">
                  Creating user-friendly and visually appealing designs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground">
                  Leading projects from concept to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
