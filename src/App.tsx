import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";

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
    <ReactLenis root>
      <section className="min-h-screen overflow-x-hidden">
        <Stars />
        <Container>
          <h1 className="text-7xl lg:text-[180px] font-bold leading-relaxed text-white">
            Knevari
          </h1>
          <p className="text-lg sm:text-4xl font-bold leading-tight max-w-4xl pointer-events-none text-white">
            Hey! I'm a web developer. I like music, programming,{" "}
            <StarryText>stars</StarryText> and cats 🐱
          </p>
          <Galaxy />
          <Footer />
        </Container>
      </section>
      <section className="min-h-screen relative">
        <GameOfLife>
          <Container className="flex items-center justify-between">
            <div>
              <h2 className="text-white font-bold text-5xl text-left mb-4">
                About me
              </h2>
              <p className="text-white font-semibold text-2xl w-[45ch]">
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
      <section ref={projectsRef} className="min-h-screen relative mt-10">
        <Container className="flex items-center">
          <div className="flex items-stretch justify-stretch w-full h-full gap-6 2xl:gap-8">
            <MyStack inViewport={insideProjects} />
            <Projects />
          </div>
        </Container>
      </section>
      <Trailer />
    </ReactLenis>
  );
}

export default App;
