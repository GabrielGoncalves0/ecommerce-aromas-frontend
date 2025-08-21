import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Card } from './card'

interface ProductCardProps {
  href: string
  icon: string
  title: string
  description: string
  className?: string
}

const ProductCard = ({ href, icon, title, description, className = '' }: ProductCardProps) => {
  return (
    <Link href={href} className={`flex items-center p-3 rounded-lg hover:bg-primary-200/20 transition-colors duration-200 group/item ${className}`}>
      <div className="bg-primary-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        <Icon icon={icon} width="24" height="24" />
      </div>
      <div className="flex-1">
        <div className="font-semibold text-text-primary transition-colors">
          {title}
        </div>
        <div className="text-sm text-text-secondary group-hover/item:text-text-primary transition-colors">
          {description}
        </div>
      </div>
    </Link>
  )
}

export { ProductCard }
