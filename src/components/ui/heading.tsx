import { ReactNode, forwardRef, createElement } from 'react'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

interface HeadingProps {
  children: ReactNode
  level?: HeadingLevel
  size?: HeadingSize
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'gradient'
  align?: 'left' | 'center' | 'right'
  className?: string
  gradient?: boolean
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ 
  children, 
  level = 2,
  size,
  weight = 'bold',
  color = 'primary',
  align = 'left',
  className = '',
  gradient = false,
  ...props 
}, ref) => {
  const tagName = `h${level}` as const
  
  // Se size não for especificado, usar tamanho padrão baseado no level
  const defaultSizes: Record<HeadingLevel, HeadingSize> = {
    1: '4xl',
    2: '3xl', 
    3: '2xl',
    4: 'xl',
    5: 'lg',
    6: 'md'
  }
  
  const finalSize = size || defaultSizes[level]
  
  const sizeClasses: Record<HeadingSize, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
    '2xl': 'text-2xl md:text-3xl',
    '3xl': 'text-3xl md:text-4xl lg:text-5xl',
    '4xl': 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
  }
  
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  }
  
  const colorClasses = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    muted: 'text-text-muted',
    accent: 'text-accent',
    gradient: 'bg-gradient-to-r from-primary-600 via-primary-500 to-accent bg-clip-text text-transparent'
  }
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const finalColor = gradient ? 'gradient' : color

  return createElement(
    tagName,
    {
      ref,
      className: `${sizeClasses[finalSize]} ${weightClasses[weight]} ${colorClasses[finalColor]} ${alignClasses[align]} leading-tight tracking-tight ${className}`,
      ...props
    },
    children
  )
})

Heading.displayName = 'Heading'

export { Heading }
