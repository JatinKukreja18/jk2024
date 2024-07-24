import React from "react";
import { ProjectType } from "../data/projects";

type ProjectCardType = {
  project: ProjectType;
};

export default function ProjectCard({ project, ...props }: ProjectCardType) {
  return (
    <div className="w-full py-4 lg:py-10 ">
      <div className="clip-card duration-500 relative group">
        <img className="w-full h-full object-cover duration-500" src={project.banner} alt="" />
        <span className="text-xl w-full h-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 duration-500 -translate-y-1/2 z-1 opacity-0 group-hover:opacity-100">
          {project.title}
        </span>
      </div>
    </div>
  );
}
