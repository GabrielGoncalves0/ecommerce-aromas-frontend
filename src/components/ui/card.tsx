import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card = ({ children, className = '', hover = false, padding = 'md' }: CardProps) => {
  const baseClasses = 'bg-layout rounded-xl shadow-lg border border-primary'
  
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow duration-200' : ''
  
  const paddingClasses = {
    sm: 'p-2',
    md: 'p-3', 
    lg: 'p-6'
  }

  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}

export { Card }
