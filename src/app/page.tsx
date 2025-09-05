"use client";

import { Button, Section, Container, Grid, Heading } from "@/components/ui";
import CategoryCard from "@/components/cards/CategoryCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { Field } from "@/components/ui/fields";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Sparkles, Heart } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const catalogProducts = [
    {
      id: "1",
      name: "Vela Aromática Lavanda",
      description: "Vela artesanal com fragrância relaxante de lavanda, perfeita para momentos de tranquilidade",
      price: 29.90,
      originalPrice: 39.90,
      image: "/img/vela-chantily.jpg",
      category: "Velas",
      inStock: true,
      rating: 5
    },
    {
      id: "2",
      name: "Sabonete Artesanal Rosa",
      description: "Sabonete natural com pétalas de rosa e óleos essenciais, hidrata e perfuma a pele",
      price: 15.90,
      image: "/img/sabonetes.jpg",
      category: "Sabonetes",
      inStock: true,
      rating: 4
    },
    {
      id: "3",
      name: "Difusor de Ambiente Eucalipto",
      description: "Difusor com fragrância refrescante de eucalipto, ideal para ambientes amplos",
      price: 45.90,
      originalPrice: 55.90,
      image: "/img/vela-frasco.jpg",
      category: "Difusores",
      inStock: true,
      rating: 5
    },
    {
      id: "4",
      name: "Vela Premium Baunilha",
      description: "Vela de soja com aroma doce de baunilha, queima por até 40 horas",
      price: 35.90,
      image: "/img/vela-chantily.jpg",
      category: "Velas",
      inStock: false,
      rating: 4
    },
    {
      id: "5",
      name: "Kit Sabonetes Variados",
      description: "Conjunto com 3 sabonetes artesanais de fragrâncias diferentes",
      price: 42.90,
      originalPrice: 52.90,
      image: "/img/sabonetes.jpg",
      category: "Sabonetes",
      inStock: true,
      rating: 5
    },
    {
      id: "6",
      name: "Difusor Reed Jasmim",
      description: "Difusor com varetas de bambu e essência de jasmim, duração de 60 dias",
      price: 38.90,
      image: "/img/vela-frasco.jpg",
      category: "Difusores",
      inStock: true,
      rating: 4
    },
    {
      id: "7",
      name: "Vela Aromática Canela",
      description: "Vela com fragrância aconchegante de canela, perfeita para o inverno",
      price: 27.90,
      image: "/img/vela-chantily.jpg",
      category: "Velas",
      inStock: true,
      rating: 5
    },
    {
      id: "8",
      name: "Sabonete Esfoliante Café",
      description: "Sabonete esfoliante com grãos de café, remove células mortas e energiza",
      price: 18.90,
      image: "/img/sabonetes.jpg",
      category: "Sabonetes",
      inStock: true,
      rating: 4
    }
  ];

  const categories = [
    {
      name: "Velas",
      image: "/img/vela-chantily.svg",
      href: "/categoria/velas"
    },
    {
      name: "Sabonetes",
      image: "/img/sabonetes.svg",
      href: "/categoria/sabonetes"
    },
    {
      name: "Difusores",
      image: "/img/vela-frasco.svg",
      href: "/categoria/difusores"
    }
  ];

  // Cálculos da paginação
  const totalPages = Math.ceil(catalogProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = catalogProducts.slice(startIndex, endIndex);

  const handleAddToCart = (productId: string) => {
    console.log("Produto adicionado ao carrinho:", productId);
    // Aqui você implementaria a lógica de adicionar ao carrinho
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Banner de Oferta */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 text-center">
        <p className="text-sm font-medium">
          🔥 OFERTA ESPECIAL: 25% OFF em toda linha de velas aromáticas | Frete GRÁTIS acima de R$ 99
        </p>
      </div>

      {/* Hero Section */}
      <Section padding="md" background="gradient" className="relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[80vh]">
            {/* Conteúdo Principal */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                ✨ Mais de 5.000 clientes satisfeitos
              </div>

              <Heading level={1} gradient className="mb-4 lg:mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Aromas que Transformam
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2">
                  Ambientes em Experiências
                </span>
              </Heading>

              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-700 mb-8 lg:mb-12 leading-relaxed px-4 lg:px-0">
                Produtos artesanais premium com <strong>fragrâncias exclusivas</strong>.
                Entrega rápida, qualidade garantida e preços que cabem no seu bolso.
              </p>

              {/* Benefícios */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm font-medium">Frete Grátis</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm font-medium">100% Artesanal</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm font-medium">Troca Garantida</span>
                </div>
              </div>

              <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start flex-col sm:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl text-sm lg:text-base"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ver Ofertas Especiais
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 text-sm lg:text-base"
                >
                  Produtos Mais Vendidos
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Prova Social */}
              <div className="flex items-center gap-4 justify-center lg:justify-start mt-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>+2.5k</strong> pedidos este mês
                </div>
              </div>
            </div>

            {/* Grid de Produtos Hero */}
            <div className="relative">
              {/* Badge de Destaque */}
              <div className="text-center mb-6">
                <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-2">
                  🔥 OFERTAS IMPERDÍVEIS
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                  Produtos Selecionados com Desconto
                </h2>
              </div>

              {/* Grid de 3 Produtos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {catalogProducts.slice(0, 3).map((product) => (
                  <div key={`hero-${product.id}`} className="group cursor-pointer">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Imagem do Produto */}
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Badge de Oferta */}
                        {product.originalPrice && (
                          <div className="absolute top-3 left-3">
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                            </span>
                          </div>
                        )}

                        {/* Overlay com botão */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <Button
                            size="sm"
                            className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                            onClick={() => handleAddToCart(product.id)}
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
                              className={`text-sm ${i < product.rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                            >
                              ★
                            </span>
                          ))}
                          <span className="text-xs text-gray-500 ml-1">({product.rating}.0)</span>
                        </div>

                        {/* Nome do Produto */}
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Categoria */}
                        <p className="text-xs text-gray-500 mb-3">{product.category}</p>

                        {/* Preços */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg lg:text-xl font-bold text-green-600">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                            </span>
                          )}
                        </div>

                        {/* Botão de Ação */}
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          Adicionar ao Carrinho
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Adicional */}
              <div className="text-center mt-6">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Ver Todos os Produtos
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="md" background="default">
        <Container>
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-lg font-medium mb-4">
              ✨ Categorias de Produtos
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
              Conheça nossa variedade: velas aromáticas, sabonetes artesanais e difusores de ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {[
              {
                category: "Velas",
                title: "Velas Aromáticas",
                description: "Velas artesanais com fragrâncias exclusivas, feitas com cera de soja natural",
                icon: "🕯️",
                features: ["100% Natural", "Longa Duração", "Fragrâncias Exclusivas"],
                image: "/img/vela-chantily.jpg"
              },
              {
                category: "Sabonetes",
                title: "Sabonetes Artesanais",
                description: "Sabonetes naturais com óleos essenciais, ideais para todos os tipos de pele",
                icon: "🧼",
                features: ["Ingredientes Naturais", "Hidratante", "Sem Químicos"],
                image: "/img/sabonetes.jpg"
              },
              {
                category: "Difusores",
                title: "Difusores de Ambiente",
                description: "Difusores com essências premium que perfumam seu ambiente por semanas",
                icon: "🌸",
                features: ["Longa Duração", "Essências Premium", "Design Elegante"],
                image: "/img/vela-frasco.jpg"
              }
            ].map((item, index) => (
              <div key={item.category} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Imagem do Produto */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay com ícone */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-6xl opacity-80">
                        {item.icon}
                      </div>
                    </div>

                    {/* Badge de Categoria */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Informações da Categoria */}
                  <div className="p-6">
                    {/* Título */}
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {item.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {item.features.map((feature, featureIndex) => (
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
                      Ver {item.category}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="md" background="gradient">
        <Container>
          <div className="text-center mb-6 lg:mb-8">
            <div className="inline-block bg-sky-200 text-sky-700 px-4 py-2 rounded-full text-lg font-medium mb-4">
              ✨ Catálogo de Produtos
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
              Produtos feitos artesanalmente, com materiais de qualidade e muito amor
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Sidebar de Filtros */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-8 mb-6 lg:mb-8">
                <div className="flex items-center justify-between mb-4">
                  <Heading level={4} className="text-gray-800 flex items-center gap-2 text-base lg:text-lg">
                    Filtrar Produtos
                  </Heading>
                </div>

                <div className="space-y-3 lg:space-y-4">
                  <Field.Text label="Buscar" placeholder="Digite o nome do produto..." />

                  <Field.Select
                    label="Categoria"
                    options={[
                      { value: "all", label: "Todas as categorias" },
                      { value: "velas", label: "Velas Aromáticas" },
                      { value: "sabonetes", label: "Sabonetes" },
                      { value: "difusores", label: "Difusores" },
                    ]}
                  />

                  <Field.Select
                    label="Tipo de Produto"
                    options={[
                      { value: "all-types", label: "Todos os tipos" },
                      { value: "artesanal", label: "Artesanal" },
                      { value: "premium", label: "Premium" },
                      { value: "natural", label: "Natural" },
                    ]}
                  />

                  <Field.Select
                    label="Faixa de Preço"
                    options={[
                      { value: "all-prices", label: "Qualquer preço" },
                      { value: "0-25", label: "R$ 0 - R$ 25" },
                      { value: "25-50", label: "R$ 25 - R$ 50" },
                      { value: "50-100", label: "R$ 50 - R$ 100" },
                      { value: "100+", label: "Acima de R$ 100" },
                    ]}
                  />

                  <Button
                    size="sm"
                    className="shadow-md w-full"
                  >
                    Buscar Produtos
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="text-gray-600 border-gray-300 hover:bg-gray-50 w-full"
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </div>

            {/* Produtos */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-8 mb-6 lg:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-3">
                  <Heading level={4} className="text-gray-800 flex items-center gap-2 text-base lg:text-lg">
                    Produtos ({catalogProducts.length} itens)
                  </Heading>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Página {currentPage} de {totalPages}
                  </div>
                </div>

                {/* Grid de Produtos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
                  {currentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      category={product.category}
                      inStock={product.inStock}
                      rating={product.rating}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>

                {/* Paginação */}
                <div className="flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>

                      {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                          <PaginationItem key={pageNumber}>
                            <PaginationLink
                              onClick={() => setCurrentPage(pageNumber)}
                              isActive={currentPage === pageNumber}
                              className="cursor-pointer"
                            >
                              {pageNumber}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
