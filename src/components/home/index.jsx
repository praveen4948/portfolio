import React from "react";
import Home from "./_builder/Home";
import About from "./_builder/About";
import Projects from "./_builder/Projects";
import Contact from "./_builder/Contact";
import Experience from "./_builder/Experience";
import Skill from "./_builder/Skill";

export const HomeIndex = () => {
  return (
    <main className="bg-gray-100 text-gray-800 ">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skill />
      <Contact />
    </main>
  );
};
