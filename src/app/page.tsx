import { Button, FeatureCard, Section, Container, Grid, Heading } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section variant="hero" background="gradient" className="relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-lg"></div>
        
        <Container size="lg" className="text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Heading level={1} gradient className="mb-6">
              Aromas Noor
            </Heading>
            
            <p className="text-xl md:text-2xl text-primary-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Desperte seus sentidos com nossas fragrâncias exclusivas, criadas artesanalmente 
              para transformar cada ambiente em um refúgio de bem-estar e elegância.
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
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
        </Container>
      </Section>

      {/* Showcase de Variações */}
      <Section padding="xl" background="subtle">
        <Container>
          <Heading level={2} align="center" className="mb-12">
            Sistema de Design Elegante
          </Heading>
          
          <div className="space-y-12">
            {/* Variantes de Botões */}
            <div className="space-y-6">
              <Heading level={3} align="center" size="lg" color="secondary">
                Variações de Botões
              </Heading>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="primary" icon="mdi:check">Primary</Button>
                <Button variant="secondary" icon="mdi:star">Secondary</Button>
                <Button variant="outline" icon="mdi:heart-outline">Outline</Button>
                <Button variant="ghost" icon="mdi:eye">Ghost</Button>
                <Button variant="gradient" icon="mdi:sparkles">Gradient</Button>
              </div>
              
              {/* Tamanhos */}
              <div className="flex gap-4 justify-center items-center flex-wrap">
                <Button size="sm" variant="primary">Small</Button>
                <Button size="md" variant="primary">Medium</Button>
                <Button size="lg" variant="primary">Large</Button>
                <Button size="xl" variant="primary">Extra Large</Button>
              </div>
            </div>

            {/* Variantes de FeatureCard */}
            <div className="space-y-6">
              <Heading level={3} align="center" size="lg" color="secondary">
                Estilos de Cards
              </Heading>
              
              <Grid cols={3} gap="lg">
                <FeatureCard 
                  variant="default"
                  icon="mdi:leaf"
                  title="Estilo Padrão"
                  description="Design clean e moderno para informações essenciais."
                />
                <FeatureCard 
                  variant="luxury"
                  icon="mdi:diamond"
                  title="Estilo Luxuoso"
                  description="Elegância premium com gradientes e efeitos sofisticados."
                />
                <FeatureCard 
                  variant="minimal"
                  icon="mdi:circle-outline"
                  title="Estilo Minimal"
                  description="Simplicidade e foco no conteúdo essencial."
                />
              </Grid>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section Melhorada */}
      <Section variant="featured" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} gradient className="mb-6">
              Por que escolher Aromas Noor?
            </Heading>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Descubra a excelência em cada detalhe dos nossos produtos artesanais
            </p>
          </div>
          
          <Grid cols={3} gap="xl">
            <FeatureCard 
              variant="luxury"
              icon="mdi:leaf"
              title="100% Natural"
              description="Ingredientes cuidadosamente selecionados da natureza para proporcionar a melhor experiência aromática sustentável."
            />
            <FeatureCard 
              variant="luxury"
              icon="mdi:heart"
              title="Feito com Amor"
              description="Cada produto é criado artesanalmente com dedicação e cuidado especial em cada detalhe, do conceito à entrega."
            />
            <FeatureCard 
              variant="luxury"
              icon="mdi:truck-fast"
              title="Entrega Expressa"
              description="Receba seus aromas favoritos no conforto da sua casa com nossa entrega rápida e segura em todo o país."
            />
          </Grid>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="gradient" padding="xl">
        <Container className="text-center">
          <Heading level={2} className="mb-6 text-primary-800">
            Pronto para transformar seu ambiente?
          </Heading>
          <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
            Explore nossa coleção exclusiva e encontre a fragrância perfeita para cada momento especial.
          </p>
          <Button 
            size="xl" 
            variant="primary" 
            icon="mdi:arrow-right"
            iconPosition="right"
            className="shadow-xl"
          >
            Começar Agora
          </Button>
        </Container>
      </Section>
    </div>
  );
}
