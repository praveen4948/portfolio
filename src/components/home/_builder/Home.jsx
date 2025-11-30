"use client";
import React from "react";
import backgroundImage from "@/public/img.jpg";
import { Download } from "lucide-react";
import ParticleAnimation from "./ParticleAnimation";
import { motion, useAnimate, stagger } from "framer-motion";

const Home = () => {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    // Physical stagger: uses a spring so motion propagates naturally between items
    animate(
      ".stagger-item",
      { opacity: 1, y: 0, scale: 1 },
      {
        delay: stagger(0.09, { from: 0 }),
        type: "spring",
        stiffness: 160,
        damping: 18,
        mass: 0.6,
      }
    );
  }, [animate]);

  return (
    <>
      <section
        id="home"
        className="relative text-white h-screen flex justify-evenly items-center bg-cover bg-fixed bg-center w-screen"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 ">
          <ParticleAnimation style={{ zIndex: 15 }} />
        </div>
        {/* Background overlay with a slight color instead of solid black */}
        <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

        <div className="z-20 md:w-[70%] w-[80%]">
          <div ref={scope} className=" mx-auto  w-fit md:mx-0">
            {/* Main heading color adjusted for better contrast */}
            <motion.h1 className="stagger-item opacity-0 translate-y-6 scale-[0.98] text-left text-3xl md:text-5xl font-bold mb-4 text-slate-300">
              Hi, I'm <br />
              <span className="text-amber-400 text-4xl md:text-6xl"> Praveen Maurya</span>
            </motion.h1>
            {/* Subheading color adjusted for better readability */}
            <motion.p className="stagger-item opacity-0 translate-y-6 scale-[0.98] text-lg md:text-2xl mb-8 text-gray-300">
              Full Stack Developer
            </motion.p>
            {/* Button color adjusted for vibrancy and better contrast */}
            <motion.div className="stagger-item opacity-0 translate-y-6 scale-[0.98] flex flex-wrap gap-4 items-center h-fit">
              <div>
                <a
                  href="./pdf/Praveen_Resume_10.pdf"
                  className="px-6 py-2 bg-amber-600 text-white rounded-full md:text-lg hover:bg-amber-700 transition duration-300 flex gap-2 items-center"
                  target="_blank"
                >
                  Resume {<Download height={20} width={20} />}
                </a>
              </div>
              <div>
                <a
                  href="#project"
                  className="px-6 py-2 bg-amber-600 text-white rounded-full md:text-lg hover:bg-amber-700 transition duration-300 flex"
                >
                  Explore Work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
