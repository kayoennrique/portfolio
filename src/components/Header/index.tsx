'use client';

// React
import React from "react";

// Components
import { Container } from "../Container";

// Next.js
import Link from "next/link";
import clsx from "clsx";

// Libs
import { motion } from "framer-motion";

import { useActiveSectionContext } from "@/contexts/active-section";
import { useTranslations } from "next-intl";
import { links } from "@/lib/data";


export default function Header() {

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const t = useTranslations("Header");

  return (
    <Container>
      <header className="z-[999] relative sm:py-20 flex justify-between items-center scroll-mt-28">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full border-white border-opacity-40 bg-yellow-100 bg-opacity-60 shadow-lg shadow-black/[0.04] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[33rem] sm:rounded-2xl dark:bg-yellow-300/10 dark:border-purple-600 dark:bg-opacity-35"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h {initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.90rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-2 py-3 hover:text-yellow-400 transition dark:text-white dark:hover:text-purple-400",
                    {
                      "dark:text-gray-200 text-black": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {t(link.name)}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-purple-500 rounded-2xl absolute inset-0 -z-10 dark:bg-yellow-400"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 275,
                        damping: 23,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </Container>
  );
}


