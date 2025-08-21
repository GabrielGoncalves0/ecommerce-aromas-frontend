import { Button, FeatureCard } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-6">
            Aromas Noor
          </h1>
          <p className="text-xl text-primary-600 mb-8 leading-relaxed">
            Desperte seus sentidos com nossas fragrâncias exclusivas, criadas artesanalmente 
            para transformar cada ambiente em um refúgio de bem-estar.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="primary">
              Explorar Produtos
            </Button>
            <Button size="lg" variant="outline">
              Nossa História
            </Button>
          </div>
        </div>
      </section>

      {/* Variações de Botões */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-primary-800 mb-8 text-center">Variações de Botões</h2>
        
        <div className="space-y-6">
          {/* Variantes */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          {/* Tamanhos */}
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">
          Por que escolher Aromas Noor?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            icon="mdi:leaf"
            title="100% Natural"
            description="Ingredientes cuidadosamente selecionados para proporcionar a melhor experiência aromática."
          />
          <FeatureCard 
            icon="mdi:heart"
            title="Feito com Amor"
            description="Cada produto é criado artesanalmente com dedicação e cuidado especial em cada detalhe."
          />
          <FeatureCard 
            icon="mdi:truck-fast"
            title="Entrega Rápida"
            description="Receba seus aromas favoritos no conforto da sua casa com nossa entrega expressa."
          />
        </div>
      </section>
    </div>
  );
}
