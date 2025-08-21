import { ReactNode } from 'react'
import { Icon } from '@iconify/react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-primary-200/50 hover:shadow-md hover:border-primary-300/70 transition-all duration-300 group ${className}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon Container */}
        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
          <Icon icon={icon} width="28" height="28" className="text-white" />
        </div>
        
        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-primary-800 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-primary-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export { FeatureCard }
export type { FeatureCardProps }
