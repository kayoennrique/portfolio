"use client";

// React
import React from "react";

// Libs
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div className='bg-purple-600 my-24 h-16 w-1 rounded-full dark:bg-yellow-500'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  )
}
