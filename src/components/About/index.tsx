'use client';

// React
import React from "react";

// Components
import { Container } from "../Container";
import SectionHeading from "../SectionHeading";

// Libs
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {

  const { ref } = useSectionInView("Sobre", 0.5);

  return (
    <Container>
      <motion.section
        ref={ref}
        id="about"
        className="mx-auto max-w-[55rem] text-center leading-8 sm:mb-5 scroll-mt-28"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading>Sobre</SectionHeading>
        <p className="mb-4 text-slate-900 dark:text-slate-300">
          Olá! Meu nome é Kayo Enrique
          <span className="font-medium text-slate-900 dark:text-slate-300 ">, sou formado em Comunicação Social - Jornalismo e atualmente estou em transição para carreira de Desenvolvimento Web.{" "}
          </span>
          <span className="font-medium text-slate-900 dark:text-slate-300">Atualmente estudo na Alura, me especializando como Desenvolvedor Front-End. {" "}
          </span>
          <span className="text-slate-900 dark:text-slate-300">
            Encontrei uma enorme satisfação nas áreas de experiência do usuário, e resolução de problemas durante a programação.
          </span>{" "}
          Esses aspectos são gratificantes para mim no campo da organização.{" "}
          <span className="text-slate-900 dark:text-slate-300">Desfruto enormemente de conceber experiências inovadoras que têm um impacto transformador nos usuários.{" "}
          </span>
          <span className="underline text-slate-900 dark:text-slate-300">Minhas habilidades principais incluem,</span>
          <span className="font-medium text-slate-900 dark:text-slate-300">{" "}
            React (Next.js), React Native, Typescript, e Javascript.{" "}Também possuo conhecimentos consolidados em NodeJs, Jest, Cypress, Express, API&apos;s, TailwindCSS, SCSS, Bootstrap, Material UI, Sass, CSS3, e HTML5. Na busca continua em aprimorar minhas habilidades,
          </span>
          <span className="font-medium text-slate-900 dark:text-slate-300"> {" "}procuro uma posição</span> em tempo integral como Desenvolvedor Front-End Júnior de Software/Web/Apps.
        </p>
        <p>
          <span className="text-slate-900 dark:text-slate-300">Nos meus momentos de lazer, gosto de jogar videogame, ver séries/filmes, treinar jiu-jitsu e malhar. Além disso, gosto de conhecer novos lugares.{" "}
          </span>
        </p>
      </motion.section>
    </Container>
  );
}
