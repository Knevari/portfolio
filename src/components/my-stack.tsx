import { SiNestjs } from "react-icons/si";
import { FaPython, FaReact, FaRust } from "react-icons/fa";

import Card from "./card";

export default function MyStack({ inViewport }: { inViewport: boolean }) {
  return (
    <Card isActive={inViewport} className="h-[90vh] max-h-[972px]">
      <Card.Title>My Stack</Card.Title>
      <Card.Subtitle>
        <br />I have used{" "}
        <a href="https://react.dev" target="_blank" title="ReactJS">
          <FaReact className="inline" />
        </a>{" "}
        during my entire career. Lately{" "}
        <a href="https://docs.nestjs.com/" target="_blank" title="NestJS">
          <SiNestjs className="inline" />
        </a>{" "}
        has been my primary choice for developing backend applications.
        <br />
        <br />
        Currently learning{" "}
        <a href="https://www.rust-lang.org/" target="_blank" title="NestJS">
          <FaRust className="inline" />
        </a>{" "}
        and sometimes I code in{" "}
        <a href="https://www.python.org/" target="_blank" title="NestJS">
          <FaPython className="inline" />
        </a>{" "}
        4 fun
      </Card.Subtitle>
    </Card>
  );
}
