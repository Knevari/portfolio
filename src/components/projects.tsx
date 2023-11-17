const Project = () => {
  return (
    <a
      href="https://github.com/Knevari/advanced-lane-lines"
      target="_blank"
      className="p p-px bg-gray bg-colorful-gradient bg-3x bg-[0%_0%] hover:bg-[100%_100%] transition-bg-pos-transform duration-500 ease rounded-lg"
    >
      <div className="bg-[#30333A90] backdrop-blur-2xl w-full h-full overflow-hidden rounded-lg">
        <img
          src="/projects/all.png"
          alt=""
          className="w-full h-full object-cover relative"
        />
        <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
          <h5 className="font-semibold text-white">Lane Lines Detector</h5>
        </div>
      </div>
    </a>
  );
};

export default function Projects() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-white font-bold text-5xl text-left mb-4">Projects</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
