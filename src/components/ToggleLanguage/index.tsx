"use client"

import * as React from "react"
import { Languages } from "lucide-react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu"
import { Link, usePathname, useRouter } from "@/navigation"

export function LanguageToggle() {

  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='fixed bottom-5 my-16 left-5 bg-gray-400 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'>
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle Language</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push(pathname, { locale: "en" })}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push(pathname, { locale: "pt" })}>
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
