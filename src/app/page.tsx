"use client";

import { useState } from "react";
import { 
  OfferBanner, 
  HeroSection, 
  CategoriesSection, 
  CatalogSection 
} from "@/components/sections";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleAddToCart = (productId: string) => {
    console.log("Produto adicionado ao carrinho:", productId);
  };

  return (
    <div className="min-h-screen bg-background">
      <OfferBanner />
      
      <HeroSection onAddToCart={handleAddToCart} />
      
      <CategoriesSection />
      
      <CatalogSection 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
