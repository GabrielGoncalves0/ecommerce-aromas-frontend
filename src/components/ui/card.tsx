import { ReactNode, forwardRef } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'luxury' | 'glass' | 'minimal'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'md',
  variant = 'default',
  shadow = 'md',
  ...props 
}, ref) => {
  const baseClasses = 'rounded-2xl border transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-layout border-primary-200/50',
    luxury: 'bg-gradient-to-br from-white via-primary-50/30 to-primary-100/20 border-primary-200/30 shadow-elegant',
    glass: 'bg-white/80 backdrop-blur-md border-white/20 shadow-lg',
    minimal: 'bg-white border-primary-100'
  }
  
  const hoverClasses = hover ? {
    default: 'hover:shadow-lg hover:border-primary-300/70 hover:-translate-y-1',
    luxury: 'hover:shadow-elegant-hover hover:border-primary-300/50 hover:-translate-y-2',
    glass: 'hover:bg-white/90 hover:shadow-xl hover:-translate-y-1',
    minimal: 'hover:shadow-md hover:border-primary-200 hover:-translate-y-0.5'
  }[variant] : ''
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-10'
  }

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  return (
    <div 
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export { Card }
