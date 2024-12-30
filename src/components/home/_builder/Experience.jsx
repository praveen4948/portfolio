"use client";
import Heading from "@/app/utils/Heading";
import { SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const VerticalTimelineElementComponent = ({
  visible = true,
  backgroundColor = "#f1faff",
  textcolor = "text-slate-600",
  dateRange,
  heading,
  subHeading,
  description,
  link,
}) => {
  return (
    <VerticalTimelineElement
      visible={visible}
      className={`vertical-timeline-element--work ${textcolor}  hover:scale-105 duration-300`}
      contentStyle={{ background: backgroundColor, color: textcolor, padding: "20px" }}
      contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
      // date={dateRange}
      iconStyle={{ background: backgroundColor, color: textcolor }}
      icon={<WorkflowIcon />}
    >
      <Link href={link}>
        <h3 className={`vertical-timeline-element-title text-xl font-bold flex justify-between`}>
          {heading}
          <span className="text-sm ">({dateRange})</span>
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-sm">{subHeading}</h4>
        <div className="mt-3 text-[15px]">
          {description}{" "}
          <span className="underline underline-offset-2 text-blue-500 hover:text-blue-700">view details</span>
        </div>
      </Link>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className=" mx-auto py-16 bg-gradient-to-br from-slate-400 to-slate-600" id="experience">
      <Heading heading={"Experience"} textColor={"text-slate-700"} />

      <VerticalTimeline className="">
        <VerticalTimelineElementComponent
          dateRange={"07 Feb 2024 - Present"}
          heading={"Nat Habit"}
          subHeading={"Full Stack Developer"}
          description={
            "Work with Django and Next.js to maintain the dashboard and website, adding new features as needed."
          }
          backgroundColor={"#80ff80"}
          textcolor="text-slate-600"
          link={"/experience/nat-habit"}
        />
        <VerticalTimelineElementComponent
          dateRange={"01 Aug 2023 - 14 Dec 2023"}
          heading={"Velocity Solution Pvt. Lmt."}
          subHeading={"Full Stack Developer"}
          description={
            "Work on PHP to handle the client’s website and fix issues that occur when a module is installed on the e-commerce website."
          }
          link={"/experience/velocity"}
        />
        <VerticalTimelineElementComponent
          dateRange={"02 Jan 2023 - 02 Jul 2023"}
          heading={"Scaler Academy"}
          subHeading={"Backend Developer"}
          description={
            "Worked as a backend developer using Ruby on Rails to add new features and optimize code in the dashboard."
          }
          link={"/experience/scaler"}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
