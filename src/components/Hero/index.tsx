'use client';

// Components
import { Container } from "@/components/Container"
import { SocialIcon, ISocialIconsProps } from "@/components/SocialIcon";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// Next.js
import Image from "next/image";

// Icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiDownload } from "react-icons/hi";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

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


const socialListItems: ISocialIconsProps[] = [
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/kayoennrique/',
    label: 'Icone do Linkedin'
  },
  {
    icon: <FaGithub />,
    link: 'https://github.com/kayoennrique',
    label: 'Icone do Github'
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/kayoennrique/',
    label: 'Icone do Instagram'
  },
]

export const Hero = () => {
  const router = useRouter()
  const { ref } = useSectionInView("Inicio", 0.5);

  return (
    <Container>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, }}
        ref={ref}
        id="home"
        className="md:flex scroll-mt-28 leading-8 items-center justify-between"
      >
        <div className="my-20 lg:my-0 md:w-full lg:w-2/4">
          {socialListItems.map((social, index) => (
            <SocialIcon
              key={index}
              icon={social.icon}
              link={social.link}
              label={social.label}
            />
          ))}
          <h1 className="my-6 font-bold text-5xl text-slate-700 dark:text-white">
            Olá, me chamo <br />
            <span className="text-purple-500 dark:text-yellow-500">Kayo Ennrique </span>
            e sou dev!
          </h1>
          <p className="text-slate-700 text-3xl mb-7 dark:text-white">Há 8 meses desenvolvendo sites e aplicativos <br /> para projetos incríveis! 🚀</p>
          <div className="flex items-center flex-col sm:flex-row justify-start gap-4 sm:w-3/4 lg:w-full">
            <a className="flex items-center px-5 py-5 w-40 justify-center gap-2 h-[3rem] bg-purple-500 text-white rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:hover:bg-purple-500 dark:bg-yellow-500 dark:text-black "
              href="/#projects"
            >
              PROJETOS
            </a>
            <a
              className="flex items-center px-5 py-5 w-40 justify-center gap-2 h-[3rem] bg-purple-500 text-white rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:hover:bg-purple-500 dark:bg-yellow-500 dark:text-black "
              href="/CurriculoKayoEnnrique.pdf"
              download={true}
            >
              BAIXAR CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 text-white dark:text-black" />
            </a>
          </div>
        </div>
        <Image
          className="flex mix-blend-normal"
          src="/banner__image2.webp"
          alt="Imagem do desenvolvedor"
          width={285}
          height={41.5}
        />
      </motion.div>
    </Container>
  )
}