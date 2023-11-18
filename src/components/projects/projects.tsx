import { useRef } from "react";
import Project from "./project";

import ScrollControls from "../common/scroll-controls";

import { projects } from "./data.json";

export default function Projects() {
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex w-[95vw] flex-col justify-stretch md:max-w-[70%] xl:h-[90vh] xl:max-h-[972px]">
      <h2 className="mb-4 text-left text-5xl font-bold text-white">Projects</h2>
      <div
        ref={projectsContainerRef}
        id="projects"
        className="scrollbar-hide flex h-full flex-col gap-4 md:overflow-x-auto xl:grid xl:grid-flow-col xl:grid-rows-2"
      >
        {projects.map((project) => (
          <Project
            key={project.name}
            href={project.source}
            className="group md:min-w-[350px]"
          >
            <img
              src={project.thumbnail}
              alt={project.name}
              className="relative h-full w-full object-contain grayscale transition duration-500 group-hover:grayscale-0"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-br from-gray to-grayer px-4 py-2">
              <p className="font-semibold text-white">{project.name}</p>
            </div>
          </Project>
        ))}
      </div>
      <ScrollControls elementRef={projectsContainerRef} />
    </div>
  );
}
