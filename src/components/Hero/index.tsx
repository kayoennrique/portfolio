'use client';

// React
import { useContext, useEffect, useState } from "react";

// Components
import { Container } from "@/components/Container"
import SectionHeading from "../SectionHeading";
import { ModalContext } from "@/contexts/modal-context";

// Next.js
import Image from "next/image";
import { useTheme } from "@/contexts/theme-context";
import { useRouter } from "next/navigation";

// Icons
import { SocialIcon, ISocialIconsProps } from "@/components/SocialIcon";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiDownload, HiOutlineDocumentDownload } from "react-icons/hi";
import { Modal } from "../Modal";
import SubmitBtn, { Button } from "../Button";

// Libs
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

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
  const router = useRouter();
  const [heroImage, setHeroImage] = useState<string | undefined>(undefined);
  const { isOpen: isModalOpen, toggleVisibility: toggleModal } = useContext(ModalContext);
  const { theme } = useTheme();
  const { ref } = useSectionInView("home", 0.5);

  useEffect(() => {
    if (theme === 'light') {
      setHeroImage('/banner__image2.webp')
    } else {
      setHeroImage('/banner__image-dark.webp')
    }
  }, [theme]);

  const t = useTranslations("Home");

  return (
    <Container>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, }}
        ref={ref}
        id="home"
        className="md:flex mb-20 scroll-mt-28 leading-8 items-center justify-between"
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
            {t("title")}<br />
            <span className="text-purple-500 dark:text-yellow-500">Kayo Ennrique </span>
            {t("title2")}
          </h1>
          <p className="text-slate-700 text-3xl mb-7 dark:text-white">{t("title3")}<br />{t("title4")}</p>
          <div className="flex items-center flex-col sm:flex-row justify-start gap-4 sm:w-3/4 lg:w-full">
            <Button onClick={() => router.push('/#projects')}>
              {t("button_projects")}
            </Button>
            <Button onClick={toggleModal}>
              {t("button_resume")}
              <HiDownload className="opacity-60 group-hover:translate-y-1 text-white dark:text-black" />
            </Button>
          </div>
        </div>
        {heroImage ? (
          <Image
            loading="lazy"
            className="mix-blend-normal lg:block"
            src={heroImage}
            alt="Imagem do desenvolvedor"
            width={285}
            height={41.5}
          />
        ) : (
          <div className="h-[511px] w-[500px] lg:block"></div>
        )}
      </motion.div>
      <Modal isOpen={isModalOpen}>
        <SectionHeading>{t("title5")}</SectionHeading>
        <div className="my-4mb-5">
          <p className="mb-2 text-center text-slate-700 dark:text-white">Currículo em português</p>
          <Button onClick={() => window.open('CurriculoKayoEnnrique.pdf', '_blank')}><HiOutlineDocumentDownload size={28} className="mr-2" /> Baixar</Button>
        </div>
        <div className="my-4">
          <p className="mb-2 text-center text-slate-700 dark:text-white">Resume in english</p>
          <Button onClick={() => window.open('resume-kayo-ennrique-english.pdf', '_blank')}><HiOutlineDocumentDownload size={28} className="mr-2" /> Download</Button>
        </div>
      </Modal>
    </Container>
  );
}