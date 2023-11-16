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
    <>
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
      <div
        ref={footerRef}
        id="links"
        className="flex flex-row z-[99999] gap-4 text-white/40 mt-12 fixed bottom-[40px] h-14 items-center px-4 rounded-full border border-[#30333A] transition"
        style={{ background: "hsl(0 0% 8.5%)" }}
      >
        <FooterItem href="https://github.com/Knevari">
          <FaGithub size="24px" />
        </FooterItem>
        <FooterItem href="https://www.linkedin.com/in/knevari/">
          <FaLinkedin size="24px" />
        </FooterItem>
        <FooterItem href="">
          <FaDiscord size="24px" />
        </FooterItem>
        <FooterItem href="https://codepen.io/_Common/">
          <FaCodepen size="24px" />
        </FooterItem>
        <div className="h-3/5 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full" />
        <FooterItem>
          <LuLanguages />
        </FooterItem>
        <FooterItem>
          <FaMoon />
        </FooterItem>
      </div>
    </>
  );
}
