import { ReactNode } from 'react'
import { Icon } from '@iconify/react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
  variant?: 'default' | 'luxury' | 'minimal'
}

const FeatureCard = ({ icon, title, description, className = '', variant = 'luxury' }: FeatureCardProps) => {
  const variants = {
    default: {
      container: 'bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-primary-200/50 hover:shadow-xl hover:border-primary-300/70 transition-all duration-300 group hover:-translate-y-1',
      iconContainer: 'w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300',
      title: 'text-lg font-semibold text-primary-800 group-hover:text-primary-900 transition-colors',
      description: 'text-sm text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors'
    },
    luxury: {
      container: 'relative bg-gradient-to-br from-white to-primary-50/30 p-8 rounded-3xl shadow-elegant border border-primary-200/30 hover:shadow-elegant-hover transition-all duration-500 group overflow-hidden hover:-translate-y-2',
      iconContainer: 'w-20 h-20 bg-gradient-to-br from-primary-400 via-primary-500 to-accent rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-110',
      title: 'text-xl font-bold text-primary-800 group-hover:text-primary-900 transition-all duration-300',
      description: 'text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300'
    },
    minimal: {
      container: 'bg-white/60 p-6 rounded-xl border border-primary-100 hover:bg-white/80 hover:border-primary-200 transition-all duration-300 group',
      iconContainer: 'w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300',
      title: 'text-lg font-medium text-primary-800 transition-colors',
      description: 'text-sm text-primary-600 transition-colors'
    }
  }

  const currentVariant = variants[variant]

  return (
    <div className={`${currentVariant.container} ${className}`}>
      {variant === 'luxury' && (
        <>
          {/* Efeito de brilho de fundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Partículas decorativas */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-primary-300 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-accent rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
        </>
      )}
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Icon Container */}
        <div className={currentVariant.iconContainer}>
          <Icon icon={icon} width={variant === 'luxury' ? "32" : "24"} height={variant === 'luxury' ? "32" : "24"} className="text-white" />
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          <h3 className={currentVariant.title}>
            {title}
          </h3>
          <p className={currentVariant.description}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export { FeatureCard }
export type { FeatureCardProps }
