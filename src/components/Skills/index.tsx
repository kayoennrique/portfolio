'use client';

// React
import React from "react";

// Next.js
import Image from "next/image";

// Components
import SectionHeading from "../SectionHeading";
import { Container } from "../Container";

// Libs
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

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
    <motion.section
      initial={{ y: 0, x: "0", opacity: 0 }}
      animate={{ y: 100, x: "0", opacity: 1 }}
      whileInView="animate"
      ref={ref}
      id="skills"
      className="w-auto leading-8 scroll-mt-28 mx-4 md:w-[95vw] mt-24 mb-20 py-12 my-24 d:mx-auto rounded-3xl bg-yellow-300/10 dark:bg-dark-bg shadow-lg z-40 shadow-black/[0.2] relative"
    >
      <SectionHeading>Habilidades</SectionHeading>
      <Container>
        <ul className="flex flex-wrap justify-center gap-2">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-purple-300 border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-yellow-400"
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
    </motion.section>
  );
}
