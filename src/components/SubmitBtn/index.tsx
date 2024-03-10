// React
import React from 'react';
import { useFormStatus } from 'react-dom';

// Icons
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
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
            Enviar{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
            {/* className="flex items-center px-5 py-5 w-40 justify-center gap-2 h-[3rem] bg-purple-500 text-white rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:hover:bg-purple-500 dark:bg-yellow-500 dark:text-black " */}
          </div>
        )}
    </button>
  )
}
