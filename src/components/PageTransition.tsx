import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }: { children: ReactNode }) {
  const { key } = useLocation()

  return (
    <div key={key} className="animate-fadeIn">
      {children}
    </div>
  )
}
