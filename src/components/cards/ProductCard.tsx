import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  rating?: number;
  onAddToCart?: (productId: string) => void;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  category,
  inStock,
  rating = 5,
  onAddToCart
}: ProductCardProps) {
  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercentage = hasDiscount 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (onAddToCart && inStock) {
      onAddToCart(id);
    }
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative overflow-hidden">
        {/* Imagem do Produto */}
        <div className="aspect-square relative bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badge de Desconto */}
          {hasDiscount && (
            <Badge 
              variant="destructive" 
              className="absolute top-3 left-3 bg-red-500 text-white font-semibold"
            >
              -{discountPercentage}%
            </Badge>
          )}

          {/* Badge de Categoria */}
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 bg-white/90 text-gray-700"
          >
            {category}
          </Badge>

          {/* Overlay com ações rápidas */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white text-gray-700 shadow-md"
              >
                <Icon icon="mdi:eye" className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white text-gray-700 shadow-md"
              >
                <Icon icon="mdi:heart-outline" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                icon={i < rating ? "mdi:star" : "mdi:star-outline"}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">({rating}.0)</span>
          </div>

          {/* Nome do Produto */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>

          {/* Descrição */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>

          {/* Preço */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-blue-600">
              R$ {price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through">
                R$ {originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Status de Estoque */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-2 h-2 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={`text-sm ${inStock ? 'text-green-600' : 'text-red-600'}`}>
              {inStock ? 'Em estoque' : 'Fora de estoque'}
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            onClick={handleAddToCart}
            disabled={!inStock}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300 disabled:from-gray-400 disabled:to-gray-400"
          >
            <Icon icon="mdi:cart-plus" className="w-4 h-4 mr-2" />
            {inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
