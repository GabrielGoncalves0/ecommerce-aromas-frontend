import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  onAddToCart: (productId: string) => void;
}

export default function HeroProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  onAddToCart
}: HeroProductCardProps) {
  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Imagem do Produto */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badge de Oferta */}
          {originalPrice && (
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                {discountPercentage}% OFF
              </span>
            </div>
          )}

          {/* Overlay com botão */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <Button
              size="sm"
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              onClick={() => onAddToCart(id)}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Comprar Agora
            </Button>
          </div>
        </div>

        {/* Informações do Produto */}
        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
            <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
          </div>

          {/* Nome do Produto */}
          <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base line-clamp-2">
            {name}
          </h3>

          {/* Categoria */}
          <p className="text-xs text-gray-500 mb-3">{category}</p>

          {/* Preços */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg lg:text-xl font-bold text-green-600">
              R$ {price.toFixed(2).replace('.', ',')}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                R$ {originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>

          {/* Botão de Ação */}
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            onClick={() => onAddToCart(id)}
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
}
