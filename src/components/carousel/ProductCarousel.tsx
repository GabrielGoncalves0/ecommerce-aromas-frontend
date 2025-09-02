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
import { ShoppingCart } from "lucide-react";

interface Product {
  src: string;
  alt: string;
  title: string;
  description: string;
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

                  <div className="absolute inset-0 bg-black/20 rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-sm opacity-90 mb-4">{product.description}</p>

                    <Button variant="secondary" size="sm" className="bg-white/90 text-black hover:bg-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Ver Produto
                    </Button>
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
