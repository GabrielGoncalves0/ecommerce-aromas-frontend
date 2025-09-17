import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

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
  price,
  originalPrice,
  image,
  inStock,
  onAddToCart
}: ProductCardProps) {
  const router = useRouter();
  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (onAddToCart && inStock) {
      onAddToCart(id);
    }
  };

  const handleRedirect = () => {
    router.push(`/produto/${id}`);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative overflow-hidden">
<<<<<<< HEAD
        <div className="relative overflow-hidden aspect-square cursor-pointer">
=======
        <div className="relative overflow-hidden aspect-square cursor-pointer" onClick={handleRedirect}>
>>>>>>> d9d95296769a20a19b1bdde2f75e2222c67b931d
          {/* Imagem do Produto */}
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />

          {/* Badge de Desconto */}
          {hasDiscount && (
            <Badge
              className="absolute top-3 bg-red-300 text-red-700 left-3 font-bold text-sm shadow px-3 py-1 rounded-full z-10"
            >
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        <CardContent className="p-4">
          {/* Nome do Produto */}
<<<<<<< HEAD
          <h3 className="text-md font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer">
=======
          <h3 className="text-md font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={handleRedirect}>
>>>>>>> d9d95296769a20a19b1bdde2f75e2222c67b931d
            {name}
          </h3>

          {/* Preço */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold text-blue-600">
              R$ {price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-md font-semibold text-gray-700 line-through">
                R$ {originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Status de Estoque */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={`text-sm font-semibold ${inStock ? 'text-green-600' : 'text-red-600'}`}>
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
