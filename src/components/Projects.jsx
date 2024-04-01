import React, { useState } from "react";
import ProjectCard from "./utils/ProjectCard";
import PrimaryButton from "./utils/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import projects from "../data.json";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="projects" className="relative z-0 flex h-screen w-full flex-col items-center justify-center bg-neutral-900">
      <div className="relative flex h-4/6 w-3/4 flex-col items-center justify-center ">
        <div className="relative mb-12 font-poppins-extrabold text-4xl text-white">
          My
          <span className="ml-2 bg-gradient-to-b from-darkblue to-lightblue bg-clip-text text-transparent">
            Projects
          </span>
        </div>
        <div className="relative flex w-full flex-row items-center justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.displayName}
              img={project.imagePath}
              url={project.url}
            />
          ))}
        </div>
        <div className="relative mt-4 box-border flex w-full flex-row-reverse pr-24">
          <PrimaryButton onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
            <a href="https://github.com/capy-on-caffeine" className="ml-4">Explore Github</a>
            <ChevronRightIcon className={`transition-all ${isHovered ? 'animate-swipe' : ''}`} fontSize="large" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Projects;
