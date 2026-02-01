import { Trans, useTranslation } from "react-i18next";

import { IconType } from "react-icons";
import { SiNestjs } from "react-icons/si";
import { FaPython, FaReact, FaRust } from "react-icons/fa";

import Card from "./card/card";
import StackTooltip from "./stack-tooltip";

import { atom, useAtomValue, useSetAtom } from "jotai";

const tooltipAtom = atom(false);

const withIconTooltip = (
  Icon: IconType,
  content: string,
  position: "top" | "right" | "bottom" | "left",
  index: number,
) => {
  const isShowingTooltips = useAtomValue(tooltipAtom);
  return (
    <div className="relative inline-block" role="tooltip">
      <Icon className="inline" />
      <StackTooltip
        position={position}
        isActive={isShowingTooltips}
        delay={(index * 100) / 1000}
      >
        {content}
      </StackTooltip>
    </div>
  );
};

export default function MyStack() {
  const { t } = useTranslation();

  const setIsShowingTooltips = useSetAtom(tooltipAtom);
  const onMouseEnter = () => setIsShowingTooltips(true);
  const onMouseLeave = () => setIsShowingTooltips(false);

  return (
    <Card className="h-[90vh] max-h-[972px]">
      <Card.Title>{t("myStack")}</Card.Title>
      <Card.Subtitle>
        <br />
        <Trans
          i18nKey="myStackText"
          components={{
            icon1: withIconTooltip(FaReact, "React", "top", 0),
            icon2: withIconTooltip(SiNestjs, "NestJS", "right", 1),
            icon3: withIconTooltip(FaRust, "Rust", "top", 2),
            icon4: withIconTooltip(FaPython, "Python", "bottom", 3),
            link1: (
              <a
                href="https://react.dev"
                target="_blank"
                title="ReactJS"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            ),
            link2: (
              <a
                href="https://docs.nestjs.com/"
                target="_blank"
                title="NestJS"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            ),
            link3: (
              <a
                href="https://www.rust-lang.org/"
                target="_blank"
                title="Rust"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            ),
            link4: (
              <a
                href="https://www.python.org/"
                target="_blank"
                title="Python"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            ),
          }}
        />
      </Card.Subtitle>
    </Card>
  );
}
