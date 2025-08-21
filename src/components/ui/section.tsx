import { ReactNode, forwardRef } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'hero' | 'featured' | 'minimal'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'transparent' | 'subtle' | 'gradient' | 'pattern'
}

const Section = forwardRef<HTMLElement, SectionProps>(({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'lg',
  background = 'transparent',
  ...props 
}, ref) => {
  const baseClasses = 'relative w-full'
  
  const variantClasses = {
    default: '',
    hero: 'min-h-[80vh] flex items-center',
    featured: 'relative overflow-hidden',
    minimal: 'border-b border-primary-100 last:border-b-0'
  }
  
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  }

  const backgroundClasses = {
    transparent: '',
    subtle: 'bg-primary-50/30',
    gradient: 'bg-gradient-to-br from-primary-50/20 via-transparent to-accent/10',
    pattern: 'bg-gradient-to-br from-primary-50/40 to-transparent'
  }

  return (
    <section 
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`}
      {...props}
    >
      {/* Padrão decorativo para variant 'pattern' */}
      {background === 'pattern' && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary-400"></div>
          <div className="absolute top-32 right-20 w-12 h-12 rounded-full bg-accent"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-primary-300"></div>
          <div className="absolute bottom-40 right-1/4 w-8 h-8 rounded-full bg-secondary-400"></div>
        </div>
      )}
      
      {/* Efeito de brilho para variant 'featured' */}
      {variant === 'featured' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/10 to-transparent"></div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
})

Section.displayName = 'Section'

export { Section }
