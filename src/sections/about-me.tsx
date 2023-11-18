import Container from "../components/common/container";
import GameOfLife from "../components/common/game-of-life";

export default function AboutMe() {
  return (
    <section className="relative min-h-screen">
      <GameOfLife>
        <Container className="flex items-center justify-between px-4">
          <div>
            <h2 className="mb-4 text-left text-3xl font-bold text-white md:text-5xl">
              About me
            </h2>
            <p className="w-full font-semibold text-white md:w-[45ch] md:text-2xl">
              I'm a software developer with a few years of experience on my
              back. I have a Bsc in Computer Science and I like building things
              that matter to other people, I strive for becoming a better
              professional everyday and I love to learn and teach people about
              programming.
            </p>
          </div>
        </Container>
      </GameOfLife>
    </section>
  );
}
