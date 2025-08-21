import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Icon } from '@iconify/react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  icon?: string
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  disabled,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-secondary-200 text-secondary-800 hover:bg-secondary-300 hover:shadow-md border border-secondary-300/50',
    outline: 'border-2 border-primary-500 text-primary-700 hover:bg-primary-50 hover:border-primary-600 hover:text-primary-800 hover:shadow-md',
    ghost: 'text-primary-700 hover:bg-primary-100/70 hover:text-primary-800 active:bg-primary-200/50',
    link: 'text-primary-600 underline-offset-4 hover:underline hover:text-primary-700',
    gradient: 'bg-gradient-to-r from-primary-400 via-primary-500 to-accent text-white hover:from-primary-500 hover:via-primary-600 hover:to-accent-dark shadow-lg hover:shadow-xl hover:scale-[1.02]'
  }
  
  const sizeClasses = {
    sm: 'h-9 px-4 text-sm min-w-[80px]',
    md: 'h-11 px-6 text-sm min-w-[100px]', 
    lg: 'h-13 px-8 text-base min-w-[120px]',
    xl: 'h-15 px-10 text-lg min-w-[140px]'
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 bg-current opacity-20 flex items-center justify-center">
          <Icon icon="mdi:loading" className="animate-spin w-5 h-5" />
        </div>
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <Icon icon={icon} className="w-4 h-4" />
      )}
      
      <span className={loading ? 'opacity-50' : ''}>{children}</span>
      
      {icon && iconPosition === 'right' && !loading && (
        <Icon icon={icon} className="w-4 h-4" />
      )}
      
      {/* Efeito de ondulação para botões primários */}
      {(variant === 'primary' || variant === 'gradient') && (
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
