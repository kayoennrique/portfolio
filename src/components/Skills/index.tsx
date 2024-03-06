"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { Container } from "../Container";
import SectionHeading from "../SectionHeading";
import Image from "next/image";

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


export default function Skills() {
  const { ref } = useSectionInView("Habilidades");

  return (
    <section
      ref={ref}
      id="skills"
      className="w-auto mx-5 md:w-[95vw] py-11 md:mx-auto bg-white dark:bg-dark-bg shadow-lg z-40 relative"
    >
      <SectionHeading>Habilidades</SectionHeading>
      <Container>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-500">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-black border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-black/10 dark:text-black/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, }}
              custom={index}
            >
              <Image src={skill} height={40} width={40} alt={skill} />
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
