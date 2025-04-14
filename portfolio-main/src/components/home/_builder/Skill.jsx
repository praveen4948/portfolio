import Heading from "@/app/utils/Heading";
import React from "react";
import skillBg from "@/public/skillbg-2.jpg";

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
      <li
        className="bg-white bg-opacity-5 backdrop-blur-md text-slate-300 rounded-[4px] p-8
        flex items-center justify-center h-40 w-[300px] mx-auto relative group border border-[#ffffff33]"
      >
        <div className="text-center transform transition-transform duration-700 ease-in-out hover:scale-125 ">
          <h2 className="text-2xl font-bold mb-2">{skill_name}</h2>
          <p className="text-gray-200 text-sm mb-4">{skill_description}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <div className={`bg-teal-600 h-2.5 rounded-full`} style={{ width: `${skill_score}%` }}></div>
        </div>
      </li>
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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-14">
          {skills.map((skill, index) => (
            <SkillBox
              key={index}
              skill_name={skill.name}
              skill_description={skill.description}
              skill_score={skill.score}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;
