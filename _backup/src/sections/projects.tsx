import { useRef } from "react";

import Container from "../components/common/container";
import MyStack from "../components/my-stack";
import Projects from "../components/projects";

export default function ProjectsSection() {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={projectsRef}
      className="relative mx-auto my-10 min-h-screen w-full md:mb-0 md:mt-10"
    >
      <Container className="flex flex-col items-center md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-stretch gap-6 md:flex-row md:items-stretch 2xl:gap-8">
          <MyStack />
          <Projects />
        </div>
      </Container>
    </section>
  );
}
