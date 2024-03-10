// Next
import Image from "next/image";

// Components
import { Button } from "../Button";

export interface IProjectCardProps {
  name: string
  thumb: string
  description: string
  link: string
  technologies: string[]
  isActive?: boolean
}

export const ProjectCard = ({ name, thumb, description, technologies, link, isActive }: IProjectCardProps) => {
  return (
    <div className={`flex flex-col relative bg-yellow-300/10 shadow-lg shadow-black/[0.2] p-10 rounded-xl sm:mb-28 md:flex-row gap-5 ${!isActive && 'blur-sm'}`}>
      <div className="h-[251px] w-full md:w-[244px] min-w-[175px] overflow-hidden relative">
        <Image src={thumb} alt="Projeto Libercard" fill className="object-cover object-top" />
      </div>
      <div className="flex flex-col justify-between md:h-[251px]">
        <div>
          <p className="text-font-light text-purple-800 font-bold mb-5 text-3xl text-center md:text-left dark:text-yellow-500">{name}</p>
          <p className="text-font-light hidden md:block text-slate-600 dark:text-slate-200">{description}</p>
        </div>
        <div className="flex justify-start py-5 flex-wrap">
          <div className="flex md:flex">
            {technologies.map((item, index) => (
              <p key={index} className="bg-purple-400 rounded-lg justify-start text-white py-[2px] px-5 mr-2 mb-2 dark:bg-yellow-400 dark:text-slate-600">{item}</p>
            ))}
          </div>
        </div>
        <div className="relative bg-purple-500 rounded-full sm:w-40 mr-auto ml-auto outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-yellow-400 dark:hover:bg-purple-500">
          <Button onClick={() => window.open(link, '_ blank')}>Visitar site</Button>
        </div>

      </div>
    </div>
  )
}