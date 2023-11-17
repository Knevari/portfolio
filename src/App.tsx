import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "./components/footer";
import Stars from "./components/stars";
import StarryText from "./components/starry-text";
import Trailer from "./components/trailer";
import { GameOfLife } from "./components/game-of-life";
import Container from "./components/container";
import Projects from "./components/projects";
import Galaxy from "./components/galaxy";
import MyStack from "./components/my-stack";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [insideProjects, setInsideProjects] = useState(false);

  useEffect(() => {
    const projects = projectsRef.current;

    if (!projects) return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: projects,
      start: "top center",
      end: "bottom center",
      markers: false,
      onEnter: () => {
        setInsideProjects(true);
      },
      onEnterBack: () => {
        setInsideProjects(true);
      },
      onLeaveBack: () => {
        setInsideProjects(false);
      },
      onLeave: () => {
        setInsideProjects(false);
      },
    });
  }, []);

  return (
    <>
      <section className="h-screen overflow-x-hidden">
        <Stars />
        <Container className="flex justify-start text-center md:text-start lg:justify-center flex-col gap-4">
          <div className="flex flex-col justify-start md:justify-center gap-4 flex-1">
            <h1 className="mt-10 lg:mt-0 text-7xl lg:text-[180px] font-bold leading-none whitespace-nowrap text-white">
              Knevari
            </h1>
            <p className="text-lg sm:text-4xl font-bold leading-tight max-w-4xl pointer-events-none text-white">
              Hey! I'm a web developer. I like music, programming,{" "}
              <StarryText>stars</StarryText> and cats 🐱
            </p>
          </div>
          <Galaxy />
          <div className="absolute bottom-[40px] md:bottom-0 shrink-0 pb-8 flex justify-center md:justify-start w-full">
            <Footer />
          </div>
        </Container>
      </section>

      <section className="min-h-screen relative">
        <GameOfLife>
          <Container className="flex items-center justify-between px-4">
            <div>
              <h2 className="text-white font-bold text-3xl md:text-5xl text-left mb-4">
                About me
              </h2>
              <p className="text-white font-semibold md:text-2xl w-full md:w-[45ch]">
                I'm a software developer with a few years of experience on my
                back. I have a Bsc in Computer Science and I like building
                things that matter to other people, I strive for becoming a
                better professional everyday and I love to learn and teach
                people about programming.
              </p>
            </div>
          </Container>
        </GameOfLife>
      </section>
      <section
        ref={projectsRef}
        className="min-h-screen relative my-10 mx-auto w-full"
      >
        <Container className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-stretch w-full h-full gap-6 2xl:gap-8">
            <MyStack inViewport={insideProjects} />
            <Projects />
          </div>
        </Container>
      </section>
      <Trailer />
    </>
  );
}

export default App;
