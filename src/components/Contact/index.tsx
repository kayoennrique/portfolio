'use client';

// React
import React from "react";
import toast from "react-hot-toast";

// Components
import SectionHeading from "../SectionHeading";

// API
import { senderEmail } from "@/api/sendEmail";

// Libs
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "../Button";
import { useTranslations } from "next-intl";

// Icons
import {
  RiUserFill,
  RiMailFill,
  RiMessageFill
} from "react-icons/ri";

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

export default function Contact() {

  const { ref } = useSectionInView("Contato");

  const t = useTranslations("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative px-4 my-14 mb-auto text-center scroll-mt-28"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <p className="text-slate-700 -mt-5 dark:text-slate-200">
        {t("description")}{" "}
        <a className="underline" href="mailto:kayo.ennrique@hotmail.com.br">
          kayo.ennrique@hotmail.com.br
        </a>{" "}
        {t("description2")}
      </p>
      <form className="mt-10 flex flex-col sm:w-custom1 mx-auto my-auto text-slate-900 dark:text-slate-100"
        action={async formData => {
          const { data, error } = await senderEmail(formData);

          if (error) {
            toast.error(error);
            return
          }

          toast.success('Email enviado com sucesso')
        }}
      >
        <div className="relative flex items-center">
          <input
            className="h-12 px-11 mb-4 w-full rounded-lg border borderBlack bg-white dark:bg-slate-500 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            type="name"
            required
            maxLength={400}
            placeholder={t("placeholder")}
          />
          <RiUserFill className="absolute left-5 top-1/2 transform -translate-y-4" size={15} />
        </div>
        <div className="relative flex items-center">
          <input
            className="h-12 px-11 mb-4 w-full rounded-lg border borderBlack bg-white dark:bg-slate-500 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={400}
            placeholder="Email"
          />
          <RiMailFill className="absolute left-5 top-1/2 transform -translate-y-4" size={15} />
        </div>
        <div className="relative flex items-center">
          <textarea
            className="h-52 my-3 px-11 w-full rounded-lg mb-6 border borderBlack p-4 dark:bg-slate-500 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder={t("placeholder2")}
            required
            maxLength={5000}
          />
          <RiMessageFill className="absolute left-5 transform -translate-y-4 top-12" size={15} />
        </div>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
