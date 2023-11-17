import Masonry from "masonry-layout";
import { useEffect } from "react";

const Project = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="p p-px bg-gray bg-colorful-gradient bg-3x bg-[0%_0%] hover:bg-[100%_100%] transition-bg-pos-transform duration-500 ease"
    >
      <div className="bg-[#30333A90] backdrop-blur-2xl w-full h-full overflow-hidden">
        {children}
      </div>
    </a>
  );
};

export default function Projects() {
  useEffect(() => {
    new Masonry("#projects", {
      itemSelector: ".project",
      columnWidth: ".grid-sizer",
      horizontalOrder: true,
      percentPosition: true,
    });
  });
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-white font-bold text-5xl text-left mb-4">Projects</h2>
      <div
        id="projects"
        className="grid col-auto grid-flow-row gap-4 w-full h-full"
      >
        <div className="grid-sizer" style={{ width: "20%" }} />
        <Project href="https://github.com/Knevari/advanced-lane-lines">
          <img
            src="/projects/all.png"
            alt="Transit lane lines detector"
            className="w-full h-full object-contain relative"
          />
          <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
            <h5 className="font-semibold text-white">Lane Lines Detector</h5>
          </div>
        </Project>
        <Project href="https://github.com/Knevari/overfall">
          <img
            src="/projects/overfall.png"
            alt=""
            className="w-full h-full object-contain relative"
          />
          <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
            <h5 className="font-semibold text-white">Overfall</h5>
          </div>
        </Project>
        <Project href="https://github.com/Knevari/overfall">
          <img
            src="/projects/overfall.png"
            alt=""
            className="w-full h-full object-contain relative"
          />
          <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
            <h5 className="font-semibold text-white">Overfall</h5>
          </div>
        </Project>
        <Project href="https://github.com/Knevari/overfall">
          <img
            src="/projects/overfall.png"
            alt=""
            className="w-full h-full object-contain relative"
          />
          <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
            <h5 className="font-semibold text-white">Overfall</h5>
          </div>
        </Project>
        <Project href="https://github.com/Knevari/overfall">
          <img
            src="/projects/overfall.png"
            alt=""
            className="w-full h-full object-contain relative"
          />
          <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
            <h5 className="font-semibold text-white">Overfall</h5>
          </div>
        </Project>
      </div>
    </div>
  );
}
