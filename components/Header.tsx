"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../contexts/active-section";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[99] relative">
      <motion.div
        initial={{ y: -400, x: "-50%", opacity: 5 }}
        animate={{ y: 0, x: "-50%", opacity: 5 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h {initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -400, opacity: 5 }}
              animate={{ y: 0, opacity: 5 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-2 py-3 hover:text-gray-800 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "dark:text-yellow-300 text-yellow-450": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-yellow-400 "
                    layoutId="activeSection"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
