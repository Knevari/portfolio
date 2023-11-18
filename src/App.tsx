import { ReactLenis } from "@studio-freight/react-lenis";

import Trailer from "./components/common/trailer";
import Hero from "./sections/hero";
import AboutMe from "./sections/about-me";
import Projects from "./sections/projects";

function App() {
  return (
    <ReactLenis root>
      <Hero />
      <AboutMe />
      <Projects />
      <Trailer />
    </ReactLenis>
  );
}

export default App;
