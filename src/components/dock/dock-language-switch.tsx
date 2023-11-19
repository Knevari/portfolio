import { MotionValue } from "framer-motion";
import { LuLanguages } from "react-icons/lu";

import DockItem from "./dock-item";
import { SupportedLanguage, useLanguage } from "../../providers/language";

const lngs = {
  en: { nativeName: "English", flag: "/flags/usa.png" },
  ptbr: { nativeName: "Brazilian Portuguese", flag: "/flags/brazil.png" },
  jp: { nativeName: "日本語", flag: "/flags/japan.png" },
} as Record<SupportedLanguage, { nativeName: string; flag: string }>;

export default function DockLanguageSwitch({
  mouseX,
}: {
  mouseX: MotionValue;
}) {
  const {
    actions: { updateLanguage },
  } = useLanguage();

  return (
    <DockItem mouseX={mouseX} unmagnetized>
      <>
        <LuLanguages />
        <div className="absolute bottom-1/2 flex h-0 w-[200%] items-start justify-center overflow-hidden group-hover:h-auto">
          <div className="flex origin-bottom -translate-y-1/4 scale-75 flex-col gap-1 rounded-full border border-[#30333A] bg-[#30333A] py-2 opacity-0 transition group-hover:opacity-100">
            {Object.entries(lngs).map(([key, { nativeName, flag }], index) => (
              <img
                key={key}
                width={64}
                height={48}
                title={nativeName}
                src={flag}
                alt={`${nativeName} flag`}
                role="button"
                aria-description={`changes application language to ${nativeName}`}
                onClick={() => updateLanguage(key as SupportedLanguage)}
                className="translate-x-full opacity-0 transition active:scale-95 active:grayscale group-hover:translate-x-0 group-hover:opacity-100"
                style={{ transitionDuration: `${150 * (3 - index)}ms` }}
              />
            ))}
          </div>
        </div>
      </>
    </DockItem>
  );
}
