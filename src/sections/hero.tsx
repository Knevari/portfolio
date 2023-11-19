import { Trans } from "react-i18next";

import Dock from "../components/dock/dock";
import Starfall from "../components/common/starfall";
import StarryText from "../components/common/starry-text";
import Container from "../components/common/container";
import Galaxy from "../components/common/galaxy";
import { useLanguage } from "../providers/language";

export default function Hero() {
  const {
    state: { language },
  } = useLanguage();
  console.log(`Current Language is ${language}`);

  return (
    <section className="h-screen">
      <Starfall />
      <Container className="flex flex-col justify-start gap-4 text-center md:text-start lg:justify-center">
        <div className="z-50 flex flex-1 flex-col justify-start  gap-4 md:justify-center">
          <h1 className="mt-10 whitespace-nowrap text-7xl font-bold leading-none text-white lg:mt-0 lg:text-[180px]">
            Knevari
          </h1>
          <p className="pointer-events-none max-w-4xl text-lg font-bold leading-tight text-white sm:text-4xl">
            <Trans i18nKey="intro">
              Hey! I'm a web developer. I like music, programming,
              <StarryText>stars</StarryText> and cats 🐱
            </Trans>
          </p>
        </div>
        <div className="absolute bottom-[40px] flex w-full shrink-0 justify-center pb-8 md:bottom-0 md:justify-start">
          <Dock />
        </div>
        <Galaxy />
      </Container>
    </section>
  );
}
