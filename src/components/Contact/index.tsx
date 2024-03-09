"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { senderEmail } from "@/actions/sendEmail";
import SubmitBtn from "../SubmitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 py-6 my-6 sm:mb-28 w-custom text-center rounded-3xl leading-8 scroll-mt-28 shadow-lg z-40 shadow-black/[0.2] bg-yellow-300/10"
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
      <SectionHeading>Contato</SectionHeading>

      <p className="text-slate-700 -mt-5">
        Entre em contato diretamente em{" "}
        <a className="underline" href="mailto:kayo.ennrique@hotmail.com.br">
          kayo.ennrique@hotmail.com.br
        </a>{" "}
        ou através do formulário abaixo
      </p>

      <form className="mt-10 flex flex-col w-custom1 mx-auto my-auto dark:text-black"
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
          className="h-14 px-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={400}
          placeholder="Seu email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
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
