import { useTranslation } from "react-i18next";

import Container from "../components/common/container";
import GameOfLife from "../components/common/game-of-life";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen">
      <GameOfLife>
        <Container className="flex items-center justify-between px-4">
          <div>
            <h2 className="mb-4 text-left text-3xl font-bold text-white md:text-5xl">
              {t("aboutMe")}
            </h2>
            <p className="w-full font-semibold text-white md:w-[45ch] md:text-2xl">
              {t("aboutMeText")}
            </p>
          </div>
        </Container>
      </GameOfLife>
    </section>
  );
}
