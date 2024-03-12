'use client';

// Components

import { ProjectCard, IProjectCardProps } from "../ProjectCard";
import SectionHeading from "../SectionHeading";

// Libs
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

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
    <motion.section
      initial={{ y: 0, x: "0", opacity: 0 }}
      animate={{ y: 100, x: "0", opacity: 1 }}
      whileInView="animate"
      ref={ref} id="projects"
      className="w-full mb-20 overflow-hidden scroll-mt-28"
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
  )
}