import { Button, Section, Container, Heading } from "@/components/ui";
import { ProductCard } from "@/components/cards/ProductCard";
import { Field } from "@/components/ui/fields";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { catalogProducts, type Product } from "@/data/mockData";

interface CatalogSectionProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  productsPerPage: number;
  onAddToCart: (productId: string) => void;
}

export default function CatalogSection({ 
  currentPage, 
  setCurrentPage, 
  productsPerPage, 
  onAddToCart 
}: CatalogSectionProps) {
  // Cálculos da paginação
  const totalPages = Math.ceil(catalogProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = catalogProducts.slice(startIndex, endIndex);

  return (
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
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>

              {/* Paginação */}
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
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
                        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
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
  );
}
