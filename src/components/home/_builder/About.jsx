import React from "react";
import aboutImage from "@/public/about.jpg";
import Image from "next/image";
import faceImage from "@/public/face1.png";
import Heading from "@/app/utils/Heading";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 h-fit"
      style={{
        backgroundImage: `url(${aboutImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-10">
        <div className="container mx-auto w-full text-center">
          {/* <div className="flex flex-wrap justify-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-400">About Me</h2>
          </div> */}
          <Heading heading={"About Me"} />
          <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 justify-center items-center w-full">
            <div className="flex-shrink-0">
              <Image
                src={faceImage}
                height={100}
                width={100}
                className="rounded-full w-[12rem] sm:w-[18rem] aspect-square md:w-70 opacity-80 border-[3px] object-cover p-[2px]"
                alt="Face Image"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base sm:text-lg lg:text-xl max-w-2xl text-gray-400 text-left tracking-wide w-full">
                I'm a passionate full-stack developer with a strong background in building scalable, high-performance
                web applications and crafting seamless user experiences. I specialize in modern technologies like
                React, Next.js, and Django, with expertise in Node.js for server-side development and RESTful API
                integrations. My approach to development emphasizes clean, maintainable code and best practices,
                ensuring both frontend and backend systems work efficiently together.
              </p>
              <p className="text-base sm:text-lg lg:text-xl max-w-2xl text-gray-400 text-left tracking-wide w-full">
                I thrive on solving complex problems and enjoy working on both the client and server sides, delivering
                end-to-end solutions that are intuitive, responsive, and optimized for performance. Additionally, I
                have experience with database management, API development, authentication systems. My goal is to create
                impactful and dynamic user interfaces while ensuring the application architecture is robust, secure,
                and scalable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
