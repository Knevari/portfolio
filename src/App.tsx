import Footer from "./components/footer";
import Stars from "./components/stars";
import StarryText from "./components/starry-text";
import Trailer from "./components/trailer";
import { GameOfLife } from "./components/game-of-life";
import Container from "./components/container";
import Card from "./components/card";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { cx } from "./utils";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [hoveringProjects, setHoveringProjects] = useState(false);

  useEffect(() => {
    const projects = projectsRef.current;

    if (!projects) return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: projects,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        setHoveringProjects(true);
      },
      onLeaveBack: () => {
        setHoveringProjects(false);
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
            <div className="flex items-stretch justify-stretch w-full h-full">
              <Card
                className={cx("min-h-[90vh]", {
                  active: hoveringProjects,
                })}
                title="Super useful side note"
                subtitle="I like to code anything, not just web"
              />
              <div className="ml-8 flex flex-col w-full">
                <h2 className="text-white font-bold text-5xl text-left mb-4">
                  Projects
                </h2>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
                  <div className="bg-[#30333AFA] backdrop-blur-2xl w-full h-full"></div>
                  <div className="bg-[#30333AFA] backdrop-blur-2xl w-full h-full"></div>
                  <div className="bg-[#30333AFA] backdrop-blur-2xl w-full h-full"></div>
                  <div className="bg-[#30333AFA] backdrop-blur-2xl w-full h-full"></div>
                </div>
              </div>
            </div>
          </Container>
        </GameOfLife>
      </section>
      <Trailer />
    </>
  );
}

export default App;
