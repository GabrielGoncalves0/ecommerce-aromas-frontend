import { Button } from "@/components/ui";

interface CategoryInfoCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  href?: string;
}

export default function CategoryInfoCard({
  category,
  title,
  description,
  image,
  icon,
  features,
  href = "#"
}: CategoryInfoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Imagem do Produto */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay com ícone */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-6xl opacity-80">
              {icon}
            </div>
          </div>

          {/* Badge de Categoria */}
          <div className="absolute top-4 left-4">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {category}
            </span>
          </div>
        </div>

        {/* Informações da Categoria */}
        <div className="p-6">
          {/* Título */}
          <h3 className="font-bold text-gray-900 mb-2 text-lg">
            {title}
          </h3>

          {/* Descrição */}
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-4">
            {features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-2">
                <span className="text-green-500 text-sm">✓</span>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Botão Ver Produtos */}
          <Button
            size="sm"
            variant="outline"
            className="w-full border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white"
          >
            Ver {category}
          </Button>
        </div>
      </div>
    </div>
  );
}
