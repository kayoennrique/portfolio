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
    name: "ByteBank",
    description: "Sistema de gerenciamento bancário, com TypeScript para a interface amigável, Git para controle de versão.",
    thumb: "/image.png",
    technologies: ['GIT', 'TypeScipt'],
    link: 'https://bytebank2.vercel.app/'
  },
  {
    name: "Negotiation",
    description: "Projeto de Gestão de Tarefas: TypeScript para interface intuitiva, Git para versionamento.",
    thumb: "/image2.png",
    technologies: ['GIT', 'TypeScipt'],
    link: 'https://negotiation-six.vercel.app/'
  },
  {
    name: "Devs &  Dragons",
    description:
      "Projeto pessoal: cartas em batalha usando JavaScript para lógica, CSS para design e Git para controle. Uma experiência envolvente e estratégica.",
    thumb: "/image3.png",
    technologies: ['JavaScript', 'GIT', 'CSS'],
    link: 'https://devsedragons.vercel.app/'
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