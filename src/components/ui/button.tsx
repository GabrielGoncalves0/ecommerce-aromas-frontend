import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

const Button = ({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md',
    secondary: 'bg-primary-200 text-primary-900 hover:bg-primary-400 active:bg-primary-300',
    outline: 'border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white active:bg-primary-100',
    ghost: 'text-primary-700 hover:bg-primary-100 active:bg-primary-200',
    link: 'text-primary-600 underline-offset-4 hover:underline'
  }
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm', 
    lg: 'h-12 px-6 text-base',
    xl: 'h-14 px-8 text-lg'
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

export { Button }
export type { ButtonProps }
