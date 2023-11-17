import { useRef } from "react";
import { LuLanguages } from "react-icons/lu";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaCodepen,
  FaMoon,
} from "react-icons/fa";
import FooterItem from "./footer-item";

export default function Socials() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={footerRef}
      id="links"
      className="flex flex-row z-[99999] gap-1 md:gap-2 text-white/40 h-14 items-center px-2 rounded-full border border-[#30333A] transition metal-gradient"
      style={{ background: "hsl(0 0% 8.5%)" }}
    >
      <svg width="0" height="0">
        <linearGradient
          id="purple-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#7B1FA2" offset="0%" />
          <stop stopColor="#673AB7" offset="100%" />
        </linearGradient>
      </svg>
      <FooterItem href="https://github.com/Knevari" title="Github">
        <FaGithub size="24px" />
      </FooterItem>
      <FooterItem href="https://www.linkedin.com/in/knevari/" title="LinkedIn">
        <FaLinkedin size="24px" />
      </FooterItem>
      <FooterItem href="" title="Discord">
        <FaDiscord size="24px" />
      </FooterItem>
      <FooterItem href="https://codepen.io/_Common/" title="Codepen">
        <FaCodepen size="24px" />
      </FooterItem>
      <div
        tabIndex={-1}
        className="h-3/5 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full"
        role="presentation"
      />
      <FooterItem>
        <LuLanguages />
      </FooterItem>
      <FooterItem>
        <FaMoon />
      </FooterItem>
    </div>
  );
}
