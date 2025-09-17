"use client";

import { useParams } from 'next/navigation';
import { catalogProducts, Product } from '../../../data/mockData';
import React, { useState } from 'react';

export default function ProdutoPage() {
  const params = useParams();
  const { id } = params;
  const produto = catalogProducts.find((item: Product) => item.id === id);
  const [selectedVariant, setSelectedVariant] = useState('Padrão');

  if (!produto) {
    return <div className="flex items-center justify-center h-96 text-xl font-bold text-red-500">Produto não encontrado.</div>;
  }

  // Mock de variantes
  const variants = ['Padrão', 'Luxo', 'Mini'];

  // Produtos relacionados (outros do catálogo, exceto o atual)
  const relatedProducts = catalogProducts.filter((item) => item.id !== id).slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-8 p-8 bg-white rounded-xl shadow-lg">
        {/* Imagem do Produto */}
        <div className="flex-1 flex items-center justify-center">
          <img src={produto.image} alt={produto.name} className="rounded-lg shadow-md w-full max-w-md object-cover aspect-square border" />
        </div>
        {/* Informações do Produto */}
        <div className="flex-1 flex flex-col gap-6 justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{produto.name}</h1>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl font-extrabold text-blue-600">R$ {produto.price.toFixed(2)}</span>
              {produto.originalPrice && produto.originalPrice > produto.price && (
                <span className="text-lg font-semibold text-gray-500 line-through">R$ {produto.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${produto.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{produto.inStock ? 'Em estoque' : 'Fora de estoque'}</span>
          </div>
          {/* Variantes */}
          <div>
            <h2 className="text-md font-bold text-gray-800 mb-2">Variante</h2>
            <div className="flex gap-2">
              {variants.map((variant) => (
                <button
                  key={variant}
                  className={`px-4 py-2 rounded-lg border font-semibold transition-all duration-200 ${selectedVariant === variant ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100'}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">Descrição</h2>
            <p className="text-gray-700 text-base leading-relaxed">{produto.description}</p>
          </div>
          <button className={`mt-4 w-full py-3 rounded-lg text-lg font-bold shadow transition-all duration-300 ${produto.inStock ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={!produto.inStock}>
            {produto.inStock ? 'Comprar agora' : 'Indisponível'}
          </button>
        </div>
      </div>
      {/* Produtos relacionados */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Produtos Relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded mb-3" />
              <h3 className="text-md font-semibold text-gray-900 mb-1 text-center">{item.name}</h3>
              <span className="text-blue-600 font-bold text-lg mb-2">R$ {item.price.toFixed(2)}</span>
              <button className="px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-200" onClick={() => window.location.href = `/produto/${item.id}`}>Ver detalhes</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
