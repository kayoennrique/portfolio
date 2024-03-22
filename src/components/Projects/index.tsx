'use client';

// Components
import { ProjectCard, IProjectCardProps } from "../ProjectCard";
import SectionHeading from "../SectionHeading";

// Libs
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Projects = () => {

  const { ref } = useSectionInView("Projetos", 0.5);

  const t = useTranslations("Projects");

  const projectList: IProjectCardProps[] = [
    {
      name: "AluraCases",
      description: `${t("AluraCases.description")}`,
      thumb: "/cases.png",
      technologies: ['Next.js', 'GIT', 'TypeScipt'],
      link: 'https://alura-cases-theta.vercel.app/'
    },
    {
      name: "ByteBank",
      description: `${t("ByteBank.description")}`,
      thumb: "/image.png",
      technologies: ['TypeScipt', 'GIT'],
      link: 'https://bytebank2-p6v90fcjb-kayoennrique.vercel.app/'
    },
    {
      name: "Hello World!",
      description: `${t("HelloWorld.description")}`,
      thumb: "/hello-world.png",
      technologies: ['React', 'JavaScript', 'GIT',],
      link: 'https://helloworld-green-one.vercel.app/'
    },
    {
      name: "Organo",
      description: `${t("Organo.description")}`,
      thumb: "/organo.png",
      technologies: ['React', 'GIT', 'TypeScript'],
      link: 'https://organo-alpha-five.vercel.app/'
    },
    {
      name: "Studies",
      description: `${t("Studies.description")}`,
      thumb: "/studies.png",
      technologies: ['React', 'TypeScript', 'GIT', 'SASS'],
      link: 'https://studies-dun.vercel.app/'
    },
    {
      name: "AlfaBit",
      description: `${t("AlfaBit.description")}`,
      thumb: "/alfabit.png",
      technologies: ['Next.js', 'Tailwind', 'NPM', 'Storybook'],
      link: 'https://alfabit.vercel.app/?path=/story/design-system-molecules-notice--primary'
    },
    {
      name: "Cinetag",
      description: `${t("Cinetag.description")}`,
      thumb: "/cinetag.png",
      technologies: ['React', 'CSS Modules', 'GIT'],
      link: 'https://cinetag-two-omega.vercel.app/'
    },
    {
      name: "Meteora",
      description: `${t("Meteora.description")}`,
      thumb: "/meteora.png",
      technologies: ['React', 'ContextAPI', 'GIT'],
      link: 'https://meteora-bice-rho.vercel.app/'
    },
    {
      name: "Aluroni",
      description: `${t("Aluroni.description")}`,
      thumb: "/aluroni.png",
      technologies: ['React', 'GIT', 'SASS', 'NPM'],
      link: 'https://aluroni-5ujg.vercel.app/'
    },
    {
      name: "ByteBooks",
      description: `${t("ByteBooks.description")}`,
      thumb: "/bytebooks.png",
      technologies: ['React', 'SSR', 'GIT', 'Hooks'],
      link: 'https://alurabooks-init-1h98a27r6-kayoennrique.vercel.app/'
    },
    {
      name: "VidFlow",
      description: `${t("VidFlow.description")}`,
      thumb: "/vidflow.png",
      technologies: ['JavaScript', 'GIT', 'API', 'NPM'],
      link: 'https://vidflow-4d9n.vercel.app/'
    },
  ]

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
        <SectionHeading>{t("title")}</SectionHeading>
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