import { useTranslation } from "react-i18next";

import { useRef } from "react";
import Project from "./project";

import ScrollControls from "../common/scroll-controls";

import { projects } from "./data.json";

export default function Projects() {
  const { t } = useTranslation();
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex w-[95vw] flex-col justify-stretch md:max-w-[70%] xl:h-[90vh] xl:max-h-[972px]">
      <h2 className="mb-4 text-left text-5xl font-bold text-white">
        {t("projects")}
      </h2>
      <div
        ref={projectsContainerRef}
        id="projects"
        className="scrollbar-hide flex h-full flex-col gap-4 md:overflow-x-auto xl:grid xl:grid-flow-col xl:grid-rows-2"
      >
        {projects.map((project) => (
          <Project
            key={project.name}
            href={project.source}
            className="group relative md:min-w-[350px]"
          >
            <video
              width="100%"
              height="100%"
              className="absolute h-full w-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              src={project.thumbnail}
              alt={project.name}
              className="absolute left-0 top-0 h-full w-full object-cover grayscale transition delay-100 duration-500 group-hover:opacity-0 group-hover:grayscale-0"
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
