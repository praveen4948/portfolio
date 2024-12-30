"use client";
import React, { useState } from "react";
import project1 from "@/public/project1.jpeg";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import { CircleArrowRight } from "lucide-react";
import Heading from "@/app/utils/Heading";

const Card = ({ name, description, img, onClick }) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600"
      onClick={onClick}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="h-[200px] w-full bg-cover bg-center transform hover:rotate-y-3d"
        style={{
          backgroundImage: `url(${img.src})`,
          transform: "rotateY(0deg)",
          transition: "transform 0.5s",
        }}
      ></div>
      <div className="p-6 text-left bg-white bg-opacity-80 backdrop-blur-md">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{name}</h3>
        <p className="text-gray-800 mb-4">{description}</p>
        <div className="mt-4 w-fit text-sm px-4 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded-full flex gap-2 items-center transition duration-300 ease-in-out">
          View Details
        </div>
      </div>
      <div
        className="absolute top-0 right-0 w-12 h-12 bg-white bg-opacity-30 backdrop-blur-md"
        style={{
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
        }}
      ></div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 md:mx-auto relative mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-gray-800">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">{project.name}</h2>
        <p className="mb-2 text-gray-800 text-[16px]">{project.description}</p>
        <ul className="list-disc ml-4 text-gray-700 text-sm flex flex-col gap-y-1">
          {project.descriptionList.map((des, index) => (
            <li key={index} className="text-gray-700 text-sm">
              {des}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Simple E-commerce Website",
      description:
        "A simple E-commerce website to show the product list and give the function to add and delete product from cart.",
      img: project2,
      descriptionList: [
        "User can add and remove products from the cart.",
        "User can perform actions on added cart items.",
        "Show a user-friendly interface.",
      ],
    },
    {
      name: "Weather Forecast",
      description:
        "Show the previous and next two days' weather details. You can see the details by selecting the city name.",
      img: project1,
      descriptionList: [
        "You can select a city from the given dropdown.",
        "Fetch real-time weather data based on the selected city name.",
        "Forecast for multiple days.",
        "You can add a new city to get the weather details.",
        "City is stored in the database with API.",
        "List of cities is fetched from the API.",
        "Use ReactJS, NodeJS and MongoDB",
      ],
    },
    {
      name: "Interview Scheduler",
      description: "To schedule interviews between multiple people. You can also see all scheduled interviews.",
      img: project3,
      descriptionList: [
        "You can schedule interviews at different times.",
        "Interviews can have multiple participants.",
        "View all scheduled interviews on the given UI screen.",
        "Put validation to not allow a single participant in multiple interviews at the same time.",
        "Use ReactJS, NodeJS and MongoDB",
      ],
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-800 to-gray-900" id="project">
      <section id="projects" className="container mx-auto px-4 md:p-0">
        <Heading heading={"Projects"} textColor={"text-slate-300"} />
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8 mx-auto items-center justify-items-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                name={project.name}
                description={project.description}
                img={project.img}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Projects;
