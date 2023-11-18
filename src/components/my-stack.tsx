import { Trans, useTranslation } from "react-i18next";

import { SiNestjs } from "react-icons/si";
import { FaPython, FaReact, FaRust } from "react-icons/fa";

import Card from "./card/card";

export default function MyStack({ inViewport }: { inViewport: boolean }) {
  const { t } = useTranslation();
  return (
    <Card isActive={inViewport} className="h-[90vh] max-h-[972px]">
      <Card.Title>{t("myStack")}</Card.Title>
      <Card.Subtitle>
        <br />
        <Trans
          i18nKey="myStackText"
          components={{
            icon1: <FaReact className="inline" />,
            icon2: <SiNestjs className="inline" />,
            icon3: <FaRust className="inline" />,
            icon4: <FaPython className="inline" />,
            link1: (
              <a href="https://react.dev" target="_blank" title="ReactJS" />
            ),
            link2: (
              <a
                href="https://docs.nestjs.com/"
                target="_blank"
                title="NestJS"
              />
            ),
            link3: (
              <a
                href="https://www.rust-lang.org/"
                target="_blank"
                title="NestJS"
              />
            ),
            link4: (
              <a
                href="https://www.python.org/"
                target="_blank"
                title="NestJS"
              />
            ),
          }}
        />
      </Card.Subtitle>
    </Card>
  );
}
