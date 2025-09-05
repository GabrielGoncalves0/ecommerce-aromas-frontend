"use client";

import { Button, Section, Container, Grid, Heading } from "@/components/ui";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import CategoryCard from "@/components/cards/CategoryCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { Field } from "@/components/ui/fields";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Sparkles, Heart } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const products = [
    {
      src: "/img/sabonetes.jpg",
      alt: "Sabonetes Artesanais",
      title: "Sabonetes Naturais",
      description: "Feitos com ingredientes naturais"
    },
    {
      src: "/img/vela-chantily.jpg",
      alt: "Vela Chantily",
      title: "Velas Aromáticas",
      description: "Fragrância exclusiva Chantily"
    },
    {
      src: "/img/vela-frasco.jpg",
      alt: "Vela em Frasco",
      title: "Velas Premium",
      description: "Elegância em cada detalhe"
    }
  ];

  // Dados dos produtos para o catálogo
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
      {/* Hero Section */}
      <Section padding="md" background="gradient" className="relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Conteúdo Principal */}
            <div className="text-center lg:text-left space-y-8">
              <Heading level={1} gradient className="mb-6">
                Aromas Noor
              </Heading>

              <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed">
                Desperte seus sentidos com nossas fragrâncias exclusivas, criadas artesanalmente
                para transformar cada ambiente em um refúgio de bem-estar e elegância.
              </p>

              <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Explorar Produtos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2"
                >
                  Nossa História
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Carrossel de Produtos */}
            <ProductCarousel products={products} />
          </div>
        </Container>
      </Section>

      {/* Seção de Categorias */}
      <Section padding="md" background="subtitle">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} align="center" className="mb-6 text-4xl font-bold text-gray-900">
              Categorias
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra nossa variedade de produtos aromáticos cuidadosamente selecionados para você
            </p>
          </div>

          <Grid cols={3} gap="xl">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                image={category.image}
                href={category.href}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section padding="md" background="subtitle">
        <Container>
          <div className="text-center mb-8">
            <Heading
              level={2}
              align="center"
              className="mb-4 text-4xl font-bold text-gray-900"
            >
              Catálogo de Produtos
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Produtos feitos artesanalmente, com materiais de qualidade e muito amor
            </p>
          </div>

          <Grid cols={12} gap="xl">
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <Heading level={4} className="text-gray-800 flex items-center gap-2">
                    Filtrar Produtos
                  </Heading>
                </div>

                <Grid cols={1} gap="md" className="mb-4">
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
                    className="shadow-md"
                  >
                    Buscar Produtos
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="text-gray-600 border-gray-300 hover:bg-gray-50"
                  >
                    Limpar Filtros
                  </Button>
                </Grid>
              </div>
            </div>

            {/* Produtos */}
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <Heading level={4} className="text-gray-800 flex items-center gap-2">
                    Produtos ({catalogProducts.length} itens)
                  </Heading>
                  <div className="text-sm text-gray-500">
                    Página {currentPage} de {totalPages}
                  </div>
                </div>

                {/* Grid de Produtos */}
                <Grid cols={3} gap="lg" className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
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
                </Grid>

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
          </Grid>
        </Container>
      </Section>

    </div>
  );
}
