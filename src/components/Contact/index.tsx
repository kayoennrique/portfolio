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
      <SectionHeading>Contato</SectionHeading>
      <p className="text-slate-700 -mt-5 dark:text-slate-200">
        Contato direto em{" "}
        <a className="underline" href="mailto:kayo.ennrique@hotmail.com.br">
          kayo.ennrique@hotmail.com.br
        </a>{" "}
        ou através do formulário abaixo
      </p>
      <form className="mt-10 flex flex-col sm:w-custom1 mx-auto my-auto text-slate-900"
        action={async formData => {
          const { data, error } = await senderEmail(formData);

          if (error) {
            toast.error(error);
            return
          }

          toast.success("Email sent successfully!")
        }}
      >
        <input
          className="h-14 px-4 mb-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="name"
          required
          maxLength={400}
          placeholder="Nome completo"
        />
        <input
          className="h-14 px-4 mb-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={400}
          placeholder="Email"
        />
        <textarea
          className="h-52 my-3 px-4 rounded-lg mb-4 border borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Sua mensagem"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
