"use client";
import React, { useState } from "react";
import Image from "next/image";
import project1 from "@/public/project1.jpeg";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import project4 from "@/public/project4.png";
import { CircleArrowRight, Github, Globe } from "lucide-react";
import Heading from "@/app/utils/Heading";
import { motion } from "framer-motion";
import projectsBG from "@/public/img.avif";

const Card = ({ name, description, img, onClick, delay = 0 }) => {
  return (
    <motion.div
      className="group cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, x: -160 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 150, damping: 18, mass: 2.5, delay }}
    >
      <div className="relative rounded-2xl overflow-hidden h-[480px] flex flex-col bg-white/5 backdrop-blur-xl border border-white/15 shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-white/25">
        <div className="relative h-[220px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 brightness-75 saturate-75 group-hover:brightness-90 group-hover:saturate-100"
            style={{ backgroundImage: `url(${img.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
        </div>
        <div className="p-6 text-left flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
          <p
            className="text-slate-300 mb-6"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>
          <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors">
            <span>View details</span>
            <CircleArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
        <div className="pointer-events-none absolute -top-12 -left-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="relative mx-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gray-900/90 shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white transition"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="relative h-64 w-full">
          <Image src={project.img} alt={project.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/10 to-transparent" />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-white">{project.name}</h2>
          <p className="mb-5 text-slate-300 text-[16px]">{project.description}</p>
          <ul className="max-h-[35vh] overflow-y-auto list-disc pl-5 text-slate-200 text-sm space-y-2 mb-6">
            {project.descriptionList.map((des, index) => (
              <li key={index} className="text-sm leading-6">
                {des}
              </li>
            ))}
          </ul>
          {(project.github || project.website) && (
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/15 border border-white/15 transition"
                >
                  <Github size={18} /> View on GitHub
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 transition"
                >
                  <Globe size={18} /> Visit Website
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Studio Management",
      description: "A website to manage the studio and the bookings of the studio.",
      img: project2,
      github: "https://github.com/praveen6387/rd-studio-fe",
      website: "https://rd-studio.in",
      descriptionList: [
        "Marketing UI for the shop",
        "Admin UI to manage the studio and the bookings.",
        "Admin can make flipbook by uploading the images on dashboard.",
        "Use NestJS, TailwindCSS, Dajngo, PostgreSQL",
      ],
    },
    {
      name: "Bharat PG",
      description: "A simple UI to show the details of the PG.",
      img: project4,
      github: "https://github.com/praveen4948/bharatPg",
      website: "https://bharat-pg--phi.vercel.app/",
      descriptionList: [
        "You can see the details of the PG.",
        "User can see the list of all the rooms available in the PG.",
        "User can see the list of all the facilities provided by the PG according to the room type.",
        "user can see price of the room according to the room type.",
        "Use NestJS, NodeJS and MongoDB",
      ],
    },
    {
      name: "Weather Forecast",
      description:
        "Show the previous and next two days' weather details. You can see the details by selecting the city name.",
      img: project1,
      github: "",
      website: "",
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
      github: "",
      website: "",
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
    <div
      className="relative py-16"
      id="project"
      style={{
        backgroundImage: `url(${projectsBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/90"></div>
      <section id="projects" className="relative z-10 container mx-auto px-4 md:px-6">
        <Heading heading={"Projects"} textColor={"text-slate-200"} />
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mx-auto items-stretch">
            {projects.map((project, index) => (
              <Card
                key={index}
                name={project.name}
                description={project.description}
                img={project.img}
                delay={index * 0.08}
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
