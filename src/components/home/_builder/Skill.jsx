"use client";
import Heading from "@/app/utils/Heading";
import React from "react";
import skillBg from "@/public/skillbg-2.jpg";
import { motion, stagger } from "framer-motion";

const skills = [
  { name: "HTML", description: "Markup language for creating web pages.", score: 90 },
  { name: "CSS", description: "Style sheet language for designing web pages.", score: 85 },
  { name: "JavaScript", description: "Programming language for web development.", score: 95 },
  { name: "React", description: "JavaScript library for building user interfaces.", score: 90 },
  { name: "Next.js", description: "React framework for server-side rendering.", score: 80 },
  { name: "PHP", description: "Server-side scripting language for web development.", score: 70 },
  { name: "Node.js", description: "JavaScript runtime for server-side programming.", score: 85 },
  { name: "Django", description: "Python framework for web development.", score: 75 },
  { name: "C++", description: "General-purpose programming language with high performance.", score: 65 },
  { name: "Python", description: "High-level programming language known for its readability.", score: 90 },
];

const SkillBox = ({ skill_name = "test", skill_description = "test_d", skill_score = 8 }) => {
  return (
    <>
      <motion.li
        className="bg-white bg-opacity-5 backdrop-blur-md text-slate-300 rounded-[8px] p-8
        flex items-center justify-center h-40 w-[300px] mx-auto relative border border-[#ffffff33]"
        variants={{
          hidden: { opacity: 0, y: 18, scale: 0.98 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 160, damping: 18 },
          },
        }}
        whileHover={{
          scale: 1.03,
          rotateX: -4,
          rotateY: 6,
          boxShadow: "0px 12px 30px rgba(0,0,0,0.35)",
        }}
        whileTap={{ scale: 0.98 }}
        style={{ transformStyle: "preserve-3d", perspective: 800 }}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{skill_name}</h2>
          <p className="text-gray-200 text-sm mb-4">{skill_description}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
          <motion.div
            className="h-2.5 rounded-full bg-amber-600"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill_score}%` }}
            whileHover={{ width: `${skill_score}%` }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          />
        </div>
      </motion.li>
    </>
  );
};

const Skill = () => {
  return (
    <section
      id="about"
      className="relative py-16 h-fit bg-cover bg-center"
      style={{
        backgroundImage: `url(${skillBg.src})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

      <div className="container mx-auto text-white relative z-10">
        <Heading heading={"Skills"} />
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <SkillBox
              key={index}
              skill_name={skill.name}
              skill_description={skill.description}
              skill_score={skill.score}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skill;
