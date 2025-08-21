import { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label'
  color?: 'primary' | 'secondary' | 'muted'
  className?: string
}

const Typography = ({ children, variant = 'body', color = 'primary', className = '' }: TypographyProps) => {
  const variantClasses = {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-semibold',
    h5: 'text-lg md:text-xl font-medium',
    h6: 'text-base md:text-lg font-medium',
    body: 'text-base',
    caption: 'text-sm',
    label: 'text-sm font-medium'
  }
  
  const colorClasses = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    muted: 'text-text-secondary/70'
  }

  const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p'

  return (
    <Component className={`${variantClasses[variant]} ${colorClasses[color]} ${className}`}>
      {children}
    </Component>
  )
}

export { Typography }
