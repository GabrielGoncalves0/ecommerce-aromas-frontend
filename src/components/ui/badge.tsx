import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Badge = ({ children, variant = 'primary', size = 'md', className = '' }: BadgeProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-full shadow-sm border'
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white border-primary-600',
    secondary: 'bg-primary-100 text-primary-900 border-primary-200',
    success: 'bg-green-500 text-white border-green-600',
    warning: 'bg-yellow-500 text-white border-yellow-600',
    danger: 'bg-red-500 text-white border-red-600'
  }
  
  const sizeClasses = {
    sm: 'text-xs min-w-[18px] h-[18px] px-1',
    md: 'text-xs min-w-[22px] h-[22px] px-1.5',
    lg: 'text-sm min-w-[26px] h-[26px] px-2'
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  )
}

export { Badge }
