// React
import { ReactNode } from "react"

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
  color = 'primary'
}: IButtonProps) => {

  const setType = () => {
    if (type === 'outlined') {
      if (color === 'primary') {
        return 'bg-none text-primary border-primary'
      } else if (color === 'light') {
        return 'bg-none text-font-light dark:text-white border-font-light dark:border-white'
      }
    } else if (type === 'filled') {
      return 'bg-primary text-white border-primary'
    }
  }

  return (
    <button onClick={onClick && onClick} className={`w-full min-w-fit rounded-full py-2 px-6 border-[3px] border-solid uppercase flex items-center justify-center ${setType()}`}>
      {children}
    </button>
  )
}