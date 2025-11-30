"use client";
import Heading from "@/app/utils/Heading";
import { SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experienceBG from "@/public/experienceBG.jpg";
import { motion } from "framer-motion";

const VerticalTimelineElementComponent = ({
  visible = true,
  backgroundColor = "rgba(17, 24, 39, 0.9)",
  textcolor = "text-slate-200",
  dateRange,
  heading,
  subHeading,
  description,
  link,
  isCurrent = false,
  slideDir = "left",
}) => {
  const dx = slideDir === "right" ? 140 : -140;
  return (
    <VerticalTimelineElement
      visible={visible}
      className={`vertical-timeline-element--work ${textcolor}  hover:scale-105 duration-300`}
      contentStyle={{
        background: isCurrent ? "rgba(17, 24, 39, 0.95)" : backgroundColor,
        color: "inherit",
        padding: "20px",
        border: isCurrent ? "1px solid rgba(251, 191, 36, 0.45)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: isCurrent ? "0 0 0 1px rgba(251,191,36,0.25), 0 10px 25px rgba(0,0,0,0.4)" : "none",
      }}
      contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
      // date={dateRange}
      iconStyle={{
        background: isCurrent ? "rgba(17, 24, 39, 1)" : backgroundColor,
        color: "inherit",
        border: isCurrent ? "1px solid rgba(251, 191, 36, 0.45)" : "1px solid rgba(255,255,255,0.08)",
      }}
      icon={<WorkflowIcon />}
    >
      <motion.div
        initial={{ opacity: 0, x: dx, scale: 0.98 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 150, damping: 18 }}
      >
        <Link href={link}>
          <h3 className={`vertical-timeline-element-title text-xl font-bold flex justify-between items-center`}>
            <span className="flex items-center gap-2">{heading}</span>
            <span className="text-sm ">({dateRange})</span>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-sm">{subHeading}</h4>
          <div className="mt-3 text-[15px]">
            {description}{" "}
            <span className="underline underline-offset-2 text-amber-500 hover:text-amber-600">view details</span>
          </div>
        </Link>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div
      className="relative mx-auto py-16"
      id="experience"
      style={{
        backgroundImage: `url(${experienceBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10">
        <Heading heading={"Experience"} textColor={"text-slate-200"} />

        <VerticalTimeline className="">
          <VerticalTimelineElementComponent
            dateRange={"07 Feb 2024 - Present"}
            heading={"Nat Habit"}
            subHeading={"SDE - I"}
            description={
              "Work with Django and Next.js to maintain the dashboard and website, adding new features as needed."
            }
            backgroundColor={"rgba(17, 24, 39, 0.9)"}
            textcolor="text-slate-200"
            link={"/experience/nat-habit"}
            isCurrent={true}
            slideDir="left"
          />
          <VerticalTimelineElementComponent
            dateRange={"01 Aug 2023 - 14 Dec 2023"}
            heading={"Velocity Solution Pvt. Lmt."}
            subHeading={"Trainee Software Engineer"}
            description={
              "Work on PHP to handle the client’s website and fix issues that occur when a module is installed on the e-commerce website."
            }
            backgroundColor={"rgba(17, 24, 39, 0.9)"}
            textcolor="text-slate-200"
            link={"/experience/velocity"}
            slideDir="right"
          />
          <VerticalTimelineElementComponent
            dateRange={"02 Jan 2023 - 02 Jul 2023"}
            heading={"Scaler Academy"}
            subHeading={"Backend Developer || Intern"}
            description={
              "Worked as a backend developer using Ruby on Rails to add new features and optimize code in the dashboard."
            }
            backgroundColor={"rgba(17, 24, 39, 0.9)"}
            textcolor="text-slate-200"
            link={"/experience/scaler"}
            slideDir="left"
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
