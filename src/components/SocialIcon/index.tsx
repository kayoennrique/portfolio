// React
import Link from "next/link"
import { ReactNode } from "react"

export interface ISocialIconsProps {
  icon: ReactNode,
  link: string
}

export const SocialIcon = ({ icon, link }: ISocialIconsProps) => {
  return (
    <Link href={link} className="w-9 h-9 mr-4 inline-flex items-center justify-center rounded-2xl border-solid border-[2px] border-yellow-500">
      <span>
        {icon}
      </span>
    </Link>
  )
}