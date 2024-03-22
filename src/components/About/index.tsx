'use client';

// React
import React from "react";

// Components
import { Container } from "../Container";
import SectionHeading from "../SectionHeading";

// Libs
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function About() {

  const { ref } = useSectionInView("about", 0.5);

  const t = useTranslations("About");

  return (
    <Container>
      <motion.section
        ref={ref}
        id="about"
        className="mx-auto max-w-[55rem] my-auto text-center leading-8 sm:mb-5 scroll-mt-28"
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
        <SectionHeading>{t("title")}</SectionHeading>
        <p className="mb-4 text-slate-900 dark:text-slate-300">
          {t("content")}{" "}
          <span className="underline text-slate-900 dark:text-slate-300">{t("content2")}</span>
          {t("content3")}{" "}
        </p>
      </motion.section>
    </Container>
  );
}
