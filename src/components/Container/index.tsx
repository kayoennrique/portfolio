// React
import { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-5xl w-full mx-auto">
      {children}
    </div>
  )
}