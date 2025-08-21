import { ReactNode, forwardRef } from 'react'

interface GridProps {
  children: ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto'
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
  alignment?: 'start' | 'center' | 'end' | 'stretch'
}

const Grid = forwardRef<HTMLDivElement, GridProps>(({ 
  children, 
  className = '', 
  cols = 'auto',
  gap = 'md',
  responsive = true,
  alignment = 'stretch',
  ...props 
}, ref) => {
  const baseClasses = 'grid'
  
  const colsClasses = {
    1: 'grid-cols-1',
    2: responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-4',
    5: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'grid-cols-5',
    6: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6' : 'grid-cols-6',
    auto: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }
  
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  }

  const alignmentClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }

  return (
    <div 
      ref={ref}
      className={`${baseClasses} ${colsClasses[cols]} ${gapClasses[gap]} ${alignmentClasses[alignment]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

Grid.displayName = 'Grid'

export { Grid }
