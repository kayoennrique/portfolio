"use client";

// Components
import { Container } from "@/components/Container"
import { SocialIcon, ISocialIconsProps } from "@/components/SocialIcon";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// Next
import Image from "next/image";

// Icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiDownload } from "react-icons/hi";

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
    link: 'https://www.linkedin.com/in/kayoennrique/'
  },
  {
    icon: <FaGithub />,
    link: 'https://github.com/kayoennrique'
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/kayoennrique/'
  },
]

export const Hero = () => {
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
            <SocialIcon key={index} icon={social.icon} link={social.link} />
          ))}
          <h1 className="my-6 font-bold text-5xl text-slate-700">
            Olá, me chamo <br />
            <span className="text-purple-500">Kayo Ennrique </span>
            e sou dev!
          </h1>
          <p className="text-slate-700 text-3xl mb-7">Há 8 meses desenvolvendo sites e aplicativos <br /> para projetos incríveis! 🚀</p>
        </div>
        <Image className="mix-blend-normal" src="/banner__image.png" alt="Imagem do desenvolvedor" width={285} height={41.5} />
      </motion.div>
      <a
        className="group bg-black text-purple-900 font-bold px-7 py-3 w-48 flex items-center gap-2 rounded-2xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-purple-800 dark:bg-white/10"
        href="/CurriculoKayoEnnrique.pdf"
        download={true}
      >
        Download CV{" "}
        <HiDownload className="opacity-60 group-hover:translate-y-1" />
      </a>
    </Container>
  )
}