import Dock from "../components/dock/dock";
import Stars from "../components/common/stars";
import StarryText from "../components/common/starry-text";
import Container from "../components/common/container";
import Galaxy from "../components/common/galaxy";

export default function Hero() {
  return (
    <section className="h-screen overflow-x-hidden">
      <Stars />
      <Container className="flex flex-col justify-start gap-4 text-center md:text-start lg:justify-center">
        <div className="flex flex-1 flex-col justify-start gap-4  md:justify-center">
          <h1 className="mt-10 whitespace-nowrap text-7xl font-bold leading-none text-white lg:mt-0 lg:text-[180px]">
            Knevari
          </h1>
          <p className="pointer-events-none max-w-4xl text-lg font-bold leading-tight text-white sm:text-4xl">
            Hey! I'm a web developer. I like music, programming,{" "}
            <StarryText>stars</StarryText> and cats 🐱
          </p>
        </div>
        <Galaxy />
        <div className="absolute bottom-[40px] flex w-full shrink-0 justify-center pb-8 md:bottom-0 md:justify-start">
          <Dock />
        </div>
      </Container>
    </section>
  );
}
