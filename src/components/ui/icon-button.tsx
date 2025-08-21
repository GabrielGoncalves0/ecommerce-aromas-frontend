import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'filled' | 'outline'
  className?: string
}

const IconButton = ({ children, size = 'md', variant = 'ghost', className = '', ...props }: IconButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
  
  const variantClasses = {
    ghost: 'hover:bg-primary-200/30 hover:scale-110 active:scale-95',
    filled: 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-105 active:scale-95',
    outline: 'border border-primary-300 hover:bg-primary-100/50 hover:scale-105 active:scale-95'
  }
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { IconButton }
