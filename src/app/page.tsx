"use client";

import { Button, FeatureCard, Section, Container, Grid, Heading } from "@/components/ui";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import CategoryCard from "@/components/cards/CategoryCard";

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
      image: "/img/vela-chantily.jpg",
      href: "/categoria/velas"
    },
    {
      name: "Sabonetes",
      image: "/img/sabonetes.jpg",
      href: "/categoria/sabonetes"
    },
    {
      name: "Difusores",
      image: "/img/vela-frasco.jpg",
      href: "/categoria/difusores"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section background="gradient" className="relative overflow-hidden">
        <Container size="xl" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Conteúdo Principal */}
            <div className="text-center lg:text-left space-y-8">
              <Heading level={1} gradient className="mb-6">
                Aromas Noor
              </Heading>

              <p className="text-xl md:text-2xl text-primary-700 mb-12 leading-relaxed">
                Desperte seus sentidos com nossas fragrâncias exclusivas, criadas artesanalmente
                para transformar cada ambiente em um refúgio de bem-estar e elegância.
              </p>

              <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
                <Button
                  size="xl"
                  variant="gradient"
                  icon="mdi:sparkles"
                  className="shadow-xl hover:shadow-2xl"
                >
                  Explorar Produtos
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  icon="mdi:heart-outline"
                  iconPosition="right"
                >
                  Nossa História
                </Button>
              </div>
            </div>

            {/* Carrossel de Produtos */}
            <ProductCarousel
              products={products}
              height="h-[500px]"
              autoplayDelay={4000}
              showNavigation={true}
              showPagination={true}
              showButton={true}
              effect="fade"
            />
          </div>
        </Container>
      </Section>

      {/* Seção de Categorias */}
      <Section padding="xl" background="subtle">
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
    </div>
  );
}
