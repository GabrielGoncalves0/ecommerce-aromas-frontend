import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
  className?: string;
}

export default function CategoryCard({
  name,
  image,
  href,
  className = ""
}: CategoryCardProps) {
  return (
    <Link href={href} className={`block ${className}`}>
      <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100">
        {/* Imagem da Categoria */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradiente para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Overlay de hover com efeito sutil */}
          <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Título */}
        <div className="p-6 text-center bg-white">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
            {name}
          </h3>
          
          {/* Indicador visual sutil */}
          <div className="mt-3 flex justify-center">
            <div className="w-8 h-0.5 bg-gray-200 group-hover:bg-primary-400 transition-colors duration-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
