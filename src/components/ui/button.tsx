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
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full'
  scale?: number
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  iconPosition = 'left',
  iconSize = 'sm',
  loading = false,
  fullWidth = false,
  rounded = 'xl',
  scale,
  disabled,
  ...props
}, ref) => {

  const base = 'relative inline-flex items-center justify-center gap-2 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 ease-in-out overflow-hidden group'

  const sizes = {
    sm: 'h-9 px-4 text-sm min-w-[80px]',
    md: 'h-11 px-6 text-sm min-w-[100px]',
    lg: 'h-13 px-8 text-base min-w-[120px]',
    xl: 'h-15 px-10 text-lg min-w-[140px]'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  }

  const rounding: Record<NonNullable<ButtonProps['rounded']>, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '4xl': 'rounded-4xl',
    '6xl': 'rounded-6xl',
    full: 'rounded-full'
  }

  const widthClass = fullWidth ? 'w-full' : ''

  // Variantes modernizadas
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: `
    bg-primary-500 text-white shadow-elegant
    hover:bg-primary-600
    focus:ring-2 focus:ring-primary-700 focus:ring-offset-2
  `,
    secondary: `
    bg-secondary-500 text-white shadow-elegant
    hover:bg-secondary-600
    focus:ring-2 focus:ring-secondary-700 focus:ring-offset-2
  `,
    outline: `
    border-2 border-primary-500 text-primary-700 bg-transparent
    hover:bg-primary-100 hover:text-primary-800
    focus:ring-2 focus:ring-primary-700 focus:ring-offset-2
  `,
    ghost: `
    bg-transparent text-primary-700 hover:bg-primary-50 hover:text-primary-800
    shadow-none
  `,
    link: `
    bg-transparent text-primary-700 underline-offset-4
    hover:underline hover:text-primary-800
    shadow-none
  `,
    gradient: `
    bg-gradient-to-r from-primary-400 via-accent-light to-accent-dark
    text-white shadow-elegant
    hover:from-primary-500 hover:via-accent-light hover:to-accent-dark
  `
  }


  // Hover scale opcional
  const scaleClass = scale ? `hover:scale-[${scale}] active:scale-[${scale - 0.03}]` : ''

  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${rounding[rounded]} ${widthClass} ${scaleClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 rounded-[inherit]">
          <Icon icon="mdi:loading" className="animate-spin w-5 h-5" />
        </div>
      )}

      {/* Icon Left */}
      {icon && iconPosition === 'left' && !loading && (
        <Icon icon={icon} className={`${iconSizes[iconSize]} z-10`} />
      )}

      {/* Texto */}
      <span className={`relative z-10 ${loading ? 'opacity-50' : ''}`}>{children}</span>

      {/* Icon Right */}
      {icon && iconPosition === 'right' && !loading && (
        <Icon icon={icon} className={`${iconSizes[iconSize]} z-10`} />
      )}

      {/* Overlay para gradiente suave */}
      {(variant === 'primary' || variant === 'gradient') && (
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-primary-500 to-primary-600 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-500 z-0"></div>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
