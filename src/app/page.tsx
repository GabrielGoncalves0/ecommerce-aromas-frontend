"use client";

import { Button, Section, Container, Grid, Heading } from "@/components/ui";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import CategoryCard from "@/components/cards/CategoryCard";
import { Field } from "@/components/ui/fields";
import { Sparkles, Heart } from "lucide-react";

export default function Home() {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section padding="md" background="gradient" className="relative overflow-hidden">
        <Container size="xl" className="relative z-10">
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
        <Container size="xl">
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
                <div className="flex items-center justify-between mb-4">
                  <Heading level={4} className="text-gray-800 flex items-center gap-2">
                    Produtos
                  </Heading>
                </div>

                {/* Aqui viria o grid/lista de produtos */}
                <Grid cols={3} gap="lg">
                  <div className="h-40 bg-gray-100 rounded-lg"></div>
                  <div className="h-40 bg-gray-100 rounded-lg"></div>
                  <div className="h-40 bg-gray-100 rounded-lg"></div>
                  <div className="h-40 bg-gray-100 rounded-lg"></div>
                </Grid>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

    </div>
  );
}
