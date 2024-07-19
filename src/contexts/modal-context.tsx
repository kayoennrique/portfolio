'use client'

import { useState, ReactNode, createContext } from "react"

interface IModalContextProps {
  isOpen: boolean
  toggleVisibility?: () => void
}

interface IModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext<IModalContextProps>({} as IModalContextProps)

export const ModalProvider = ({ children }: IModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleVisibility = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ModalContext.Provider value={{ isOpen, toggleVisibility }}>
      {children}
    </ModalContext.Provider>
  )
}