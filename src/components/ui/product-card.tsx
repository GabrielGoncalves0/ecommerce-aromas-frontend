import Link from 'next/link'
import { Icon } from '@iconify/react'

interface ProductCardProps {
  href: string
  icon?: string
  title: string
  description: string
  className?: string
  variant?: 'default' | 'compact' | 'featured'
  iconWidth?: string | number
  iconHeight?: string | number
  iconColor?: string
}

const ProductCard = ({ 
  href, 
  icon, 
  title, 
  description, 
  className = '', 
  variant = 'default',
  iconWidth,
  iconHeight,
  iconColor
}: ProductCardProps) => {
  const variants = {
    default: {
      container: 'flex items-center p-4 rounded-xl hover:bg-primary-100/40 transition-all duration-300 group/item hover:shadow-md hover:scale-[1.02]',
      iconContainer: 'bg-gradient-to-br from-primary-500 to-primary-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-md group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300',
      title: 'font-semibold text-text-primary group-hover/item:text-primary-700 transition-colors duration-300',
      description: 'text-sm text-text-secondary group-hover/item:text-primary-600 transition-colors duration-300'
    },
    compact: {
      container: 'flex items-center p-3 rounded-lg hover:bg-primary-50 transition-all duration-200 group/item',
      iconContainer: 'bg-primary-500 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0',
      title: 'font-medium text-text-primary group-hover/item:text-primary-700 transition-colors',
      description: 'text-xs text-text-secondary group-hover/item:text-primary-600 transition-colors'
    },
    featured: {
      container: 'relative bg-gradient-to-br from-white to-primary-50/30 p-6 rounded-2xl shadow-elegant border border-primary-200/30 hover:shadow-elegant-hover transition-all duration-500 group/item overflow-hidden hover:-translate-y-1',
      iconContainer: 'bg-gradient-to-br from-primary-400 via-primary-500 to-accent text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300',
      title: 'text-lg font-bold text-primary-800 group-hover/item:text-primary-900 transition-colors duration-300 mb-2',
      description: 'text-primary-600 group-hover/item:text-primary-700 transition-colors duration-300'
    }
  }

  const currentVariant = variants[variant]


  const getDefaultIconSize = () => {
    switch (variant) {
      case 'compact': return { width: "20", height: "20" }
      case 'featured': return { width: "28", height: "28" }
      default: return { width: "24", height: "24" }
    }
  }

  const defaultSize = getDefaultIconSize()
  const iconProps = {
    width: iconWidth || defaultSize.width,
    height: iconHeight || defaultSize.height,
    ...(iconColor && { style: { color: iconColor } })
  }

  if (variant === 'featured') {
    return (
      <Link href={href} className={`block ${currentVariant.container} ${className}`}>
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 text-center">
          {icon && (
            <div className={`${currentVariant.iconContainer} mx-auto`}>
              <Icon icon={icon} {...iconProps} />
            </div>
          )}
          <div className={currentVariant.title}>
            {title}
          </div>
          <div className={currentVariant.description}>
            {description}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className={`${currentVariant.container} ${className}`}>
      {icon && (
        <div className={currentVariant.iconContainer}>
          <Icon icon={icon} {...iconProps} />
        </div>
      )}
      <div className="flex-1">
        <div className={currentVariant.title}>
          {title}
        </div>
        <div className={currentVariant.description}>
          {description}
        </div>
      </div>

      {/* Seta indicadora */}
      <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 ml-2">
        <Icon icon="mdi:chevron-right" width="20" height="20" className="text-primary-600" />
      </div>
    </Link>
  )
}

export { ProductCard }
