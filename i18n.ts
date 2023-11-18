// https://www.i18next.com/overview/configuration-options
// https://github.com/i18next/i18next-browser-languageDetector

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          intro:
            "Hey! I'm a web developer. I like music, programming, <1>stars</1> and cats 🐱",
          aboutMe: "About Me",
          aboutMeText:
            "I'm a software developer with a few years of experience on my back. I have a Bsc in Computer Science and I like building things that matter to other people, I strive for becoming a better professional everyday and I love to learn and teach people about programming.",
          myStack: "My Stack",
          myStackText:
            "I have used <link1><icon1/></link1> during my entire career. Lately <link2><icon2/></link2> has been my primary choice for developing backend applications. <br/><br/>Currently learning <link3><icon3/></link3> and sometimes I code in <link4><icon4/></link4> for fun",
          projects: "Projects",
        },
      },
      ptbr: {
        translation: {
          intro:
            "Oi! Eu sou um desenvolvedor web. Gosto de música, programação <1>estrelas</1> e gatos 🐱",
          aboutMe: "Sobre Mim",
          aboutMeText:
            "Sou um desenvolvedor de software com alguns anos de experiência. Sou bacharel em Ciência da Computação e gosto de construir coisas que sejam importantes para outras pessoas, me esforço para me tornar um profissional melhor a cada dia e adoro aprender e ensinar as pessoas sobre programação.",
          myStack: "Minha Stack",
          myStackText:
            "Usei <link1><icon1/></link1> durante toda a minha carreira. Ultimamente <link2><icon2/></link2> tem sido minha principal escolha para desenvolver aplicativos backend. <br/><br/> Atualmente estou aprendendo <link3><icon3/></link3> e às vezes programo em <link4><icon4/></link4> por diversão",
          projects: "Projetos",
        },
      },
      jp: {
        translation: {
          intro:
            "おい！ 私はウェブ開発者です。 音楽、プログラミング、<1>星</1>、猫が好きです🐱",
          aboutMe: "私について",
          aboutMeText:
            "私はソフトウェア開発者で、数年の経験があります。 私はコンピューター サイエンスの学士号を取得しており、他の人にとって重要なものを構築するのが好きです。より良いプロフェッショナルになるために日々努力しており、プログラミングについて学び、人々に教えることが大好きです。",
          myStack: "スタック",
          myStackText:
            "「私はこれまでのキャリアを通じて <link1><icon1/></link1> を使用してきました。最近では <link2><icon2/></link2> がバックエンド アプリケーションの開発の主な選択です。<br/><br/> 現在 <link3><icon3/></link3> を学習していますが、趣味で <link4><icon4/></link4> をコーディングすることもあります。」",
          projects: "プロジェクト",
        },
      },
    },
  });

export default i18n;
