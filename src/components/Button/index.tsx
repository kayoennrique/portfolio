// React
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import React from 'react';
import { useFormStatus } from 'react-dom';

// Icons
import { FaPaperPlane } from 'react-icons/fa';

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'filled' | 'outlined'
  color?: 'primary' | 'light'
}

export const Button = ({
  children,
  onClick,
  type = 'filled',
  color = 'primary',
}: IButtonProps) => {

  const setType = () => {
    if (type === 'outlined') {
      if (color === 'primary') {
        return 'bg-none text-slate-900 border-primary'
      } else if (color === 'light') {
        return 'bg-none dark:text-white border-font-light dark:border-white'
      }
    } else if (type === 'filled') {
      return 'bg-primary text-white border-primary dark:text-slate-800'
    }
  }

  return (
    <button onClick={onClick && onClick} className={`flex items-center px-5 py-5 w-40 justify-center gap-2 h-[3rem] bg-purple-500 text-white rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:hover:bg-purple-500 dark:bg-yellow-500 dark:text-black ${setType()}`}>
      {children}
    </button>
  );
}

export default function SubmitBtn() {

  const { pending } = useFormStatus();

  const t = useTranslations("SubmitBtn");

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-purple-900 text-yellow-300 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}

    >{
        pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <div className="flex items-center px-5 py-5 w-40 justify-center gap-2 h-[3rem] bg-purple-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:hover:bg-purple-500 dark:bg-yellow-500 dark:text-black ">
            {t("title")}{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
            {/* className="flex items-center px-5 py-5 w-40 justify-center gap-2 h-[3rem] bg-purple-500 text-white rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:hover:bg-purple-500 dark:bg-yellow-500 dark:text-black " */}
          </div>
        )}
    </button>
  );
}