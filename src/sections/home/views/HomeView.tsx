"use client";

import { useState } from "react";
import OfferBanner from "@/sections/home/components/OfferBanner";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import CatalogSection from "../components/CatalogSection";

export default function HomeView() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

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
