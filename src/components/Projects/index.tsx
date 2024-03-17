'use client';

// Components

import { ProjectCard, IProjectCardProps } from "../ProjectCard";
import SectionHeading from "../SectionHeading";

// Libs
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";


const projectList: IProjectCardProps[] = [
  {
    name: "AluraCases",
    description: "Explorei o Framework Next.js na Alura, aprendendo sobre criação de projetos, geração de conteúdo e SEO. Pronto para aplicar esses conhecimentos!",
    thumb: "/cases.png",
    technologies: ['Next.js', 'GIT', 'TypeScipt'],
    link: 'https://alura-cases-theta.vercel.app/'
  },
  {
    name: "ByteBank",
    description: "Sistema de gerenciamento bancário, com TypeScript para a interface amigável, Git para controle de versão.",
    thumb: "/image.png",
    technologies: ['TypeScipt', 'GIT'],
    link: 'https://bytebank2-p6v90fcjb-kayoennrique.vercel.app/'
  },
  {
    name: "Hello World!",
    description: "Projeto em React Router com JavaScript, implementando rotas, páginas de erro 404 e rotas dinâmicas",
    thumb: "/hello-world.png",
    technologies: ['React', 'JavaScript', 'GIT',],
    link: 'https://helloworld-green-one.vercel.app/'
  },
  {
    name: "Organo",
    description: "Criado em React, adaptei Organo 2.0 com melhorias, aprendendo sobre props, closures, e estados. Refatorei e compreendi os fundamentos do React.",
    thumb: "/organo.png",
    technologies: ['React', 'GIT', 'TypeScript'],
    link: 'https://organo-alpha-five.vercel.app/'
  },
  {
    name: "Studies",
    description: "Desenvolvi em React com TypeScript, SASS, componentes de classe e função, manipulação de props e arrays",
    thumb: "/studies.png",
    technologies: ['React', 'TypeScript', 'GIT', 'SASS'],
    link: 'https://studies-dun.vercel.app/'
  },
  {
    name: "AlfaBit",
    description: "Explorei Next.js e Tailwind, abordando setup inicial, tokens de design, Atomic Design, Headless UI, Storybook e publicação de bibliotecas de componentes.",
    thumb: "/alfabit.png",
    technologies: ['Next.js', 'Tailwind', 'NPM', 'Storybook'],
    link: 'https://alfabit.vercel.app/?path=/story/design-system-molecules-notice--primary'
  },
  {
    name: "Cinetag",
    description: "Projeto feito para prática do uso do React",
    thumb: "/cinetag.png",
    technologies: ['React', 'CSS Modules', 'GIT'],
    link: 'https://cinetag-two-omega.vercel.app/'
  },
  {
    name: "Meteora",
    description: "React gerenciando o estado globalmente com ContextAPI",
    thumb: "/meteora.png",
    technologies: ['React', 'ContextAPI', 'GIT'],
    link: 'https://meteora-bice-rho.vercel.app/'
  }
]

export const Projects = () => {

  const { ref } = useSectionInView("Projetos", 0.5);

  return (
    <div className="overflow-hidden w-full ">
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        ref={ref} id="projects"
        className="mb-0 my-28 scroll-mt-28"
      >
        <SectionHeading>Projetos</SectionHeading>
        <div className="mx-4 lg:-mx-5">
          <Swiper
            spaceBetween={60}
            slidesPerView={1}
            centeredSlides
            loop
            breakpoints={{
              1024: {
                slidesPerView: 1.5
              },
              1280: {
                slidesPerView: 2
              },
              1536: {
                slidesPerView: 2.5
              },
            }}
          >
            {projectList.map((project, index) => (
              <SwiperSlide key={index} className="w-[767px]">
                {({ isActive }) => (
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    thumb={project.thumb}
                    technologies={project.technologies}
                    link={project.link}
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    </div>
  )
}