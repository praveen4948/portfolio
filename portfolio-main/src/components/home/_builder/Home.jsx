import React from "react";
import backgroundImage from "@/public/img.jpg";
import { Download } from "lucide-react";
import ParticleAnimation from "./ParticleAnimation";

const Home = () => {
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
          <div className=" mx-auto  w-fit md:mx-0">
            {/* Main heading color adjusted for better contrast */}
            <h1 className="text-left text-3xl md:text-5xl font-bold mb-4 text-slate-300">
              Hi, I'm <br />
              <span className="text-yellow-300 text-4xl md:text-6xl"> Praveen Maurya</span>
            </h1>
            {/* Subheading color adjusted for better readability */}
            <p className="text-lg md:text-2xl mb-8 text-gray-300">Full Stack Developer</p>
            {/* Button color adjusted for vibrancy and better contrast */}
            <div className="flex flex-wrap gap-4 items-center h-fit">
              <div>
                <a
                  href="./pdf/PraveenResume.pdf"
                  className="px-6 py-2 bg-orange-600 text-white rounded-full md:text-lg hover:bg-orange-700 transition duration-300 flex gap-2 items-center"
                  target="_blank"
                >
                  Resume {<Download height={20} width={20} />}
                </a>
              </div>
              <div>
                <a
                  href="#project"
                  className="px-6 py-2 bg-orange-600 text-white rounded-full md:text-lg hover:bg-orange-700 transition duration-300 flex"
                >
                  Explore Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
