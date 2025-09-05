"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingCart, Star } from "lucide-react";

interface Product {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  badge?: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({
  products
}: ProductCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-0 shadow-lg h-[500px]">
                <CardContent className="p-0 h-full relative">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    className="object-cover rounded-lg"
                    priority={index === 0}
                  />

                  {/* Badge Promocional */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                        product.badge === "25% OFF" ? "bg-red-500" :
                        product.badge === "MAIS VENDIDO" ? "bg-green-500" :
                        product.badge === "LANÇAMENTO" ? "bg-blue-500" :
                        "bg-purple-500"
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating! ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                            }`}
                          />
                        ))}
                        <span className="text-sm ml-1 opacity-90">({product.rating}.0)</span>
                      </div>
                    )}

                    <h3 className="text-xl lg:text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{product.description}</p>

                    {/* Preços */}
                    {product.price && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-green-400">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-300 line-through">
                            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="bg-white/90 text-black hover:bg-white flex-1"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Comprar Agora
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-white/50 text-white hover:bg-white/20"
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {products.length > 1 && (
        <>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </>
      )}
    </Carousel>
  );
}
