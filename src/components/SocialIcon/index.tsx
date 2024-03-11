// React
import { ReactNode } from "react";

// Next.js
import React from "react";

export interface ISocialIconsProps {
  icon: ReactNode;
  link: string;
  label: string;
}

export const SocialIcon = ({ icon, link, label }: ISocialIconsProps) => {
  return (
    <button
      className="w-9 h-9 mr-4 bg-slate-600 inline-flex items-center justify-center rounded-2xl border-solid border-[2px] border-purple-400 dark:border-yellow-400 dark:bg-slate-800"
      aria-label={label}
    >
      <span>{icon}</span>
    </button>
  );
};
