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
        className="mx-auto max-w-[55rem] my-auto text-center leading-8 sm:mb-5 scroll-mt-28"
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
          Olá! Meu nome é Kayo Enrique, sou formado em Comunicação Social - Jornalismo e atualmente estou em transição para carreira de Desenvolvimento Web.{" "}
          Atualmente estudo na Alura, me especializando como Desenvolvedor Front-End. {" "}
          Encontrei uma enorme satisfação nas áreas de experiência do usuário, e resolução de problemas durante a programação.{" "}
          Esses aspectos são gratificantes para mim no campo da organização.{" "}Desfruto enormemente de conceber experiências inovadoras que têm um impacto transformador nos usuários.{" "}
          <span className="underline text-slate-900 dark:text-slate-300">Minhas habilidades principais incluem,{" "}</span>
          React (Next.js), React Native, Typescript, e Javascript.{" "}Também possuo conhecimentos consolidados em NodeJs, Jest, Cypress, Express, API&apos;s, TailwindCSS, SCSS, Bootstrap, Material UI, Sass, CSS3, e HTML5. Na busca continua em aprimorar minhas habilidades, {" "}procuro uma posição em tempo integral como Desenvolvedor Front-End Júnior de Software/Web/Apps.
          Nos meus momentos de lazer, gosto de jogar videogame, ver séries/filmes, treinar jiu-jitsu e malhar. Além disso, gosto de conhecer novos lugares.{" "}
        </p>
      </motion.section>
    </Container>
  );
}
