import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Footer from "./components/footer";
import Stars from "./components/stars";
import StarryText from "./components/starry-text";
import Trailer from "./components/trailer";
import { GameOfLife } from "./components/game-of-life";
import Container from "./components/container";
import Card from "./components/card";
import Projects from "./components/projects";
import { FaPython, FaReact, FaRust } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

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
      <section className="min-h-screen">
        <Stars />
        <Container>
          <h1 className="text-7xl lg:text-[180px] font-bold leading-relaxed text-white">
            Knevari
          </h1>
          <p className="text-lg sm:text-4xl font-bold leading-tight max-w-4xl pointer-events-none text-white">
            Hey! I'm a web developer. I like music, programming,{" "}
            <StarryText>stars</StarryText> and cats 🐱
          </p>
          <Footer />
        </Container>
      </section>
      <section ref={projectsRef} className="min-h-screen relative">
        <GameOfLife>
          <Container className="flex items-center">
            <div className="flex items-stretch justify-stretch w-full h-full gap-6 2xl:gap-8">
              <Card
                isActive={insideProjects}
                className="h-[90vh] max-h-[972px] w-[30%]"
              >
                <Card.Title>My Stack</Card.Title>
                <Card.Subtitle>
                  <br />I have used{" "}
                  <a href="https://react.dev" target="_blank" title="ReactJS">
                    <FaReact className="inline" />
                  </a>{" "}
                  during my entire career. Lately{" "}
                  <a
                    href="https://docs.nestjs.com/"
                    target="_blank"
                    title="NestJS"
                  >
                    <SiNestjs className="inline" />
                  </a>{" "}
                  has been my primary choice for developing backend
                  applications.
                  <br />
                  <br />I have been learning{" "}
                  <a
                    href="https://www.rust-lang.org/"
                    target="_blank"
                    title="NestJS"
                  >
                    <FaRust className="inline" />
                  </a>{" "}
                  and sometimes I code in{" "}
                  <a
                    href="https://www.python.org/"
                    target="_blank"
                    title="NestJS"
                  >
                    <FaPython className="inline" />
                  </a>{" "}
                  for fun
                </Card.Subtitle>
              </Card>
              <Projects />
            </div>
          </Container>
        </GameOfLife>
      </section>
      <Trailer />
    </>
  );
}

export default App;
