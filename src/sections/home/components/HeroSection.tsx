    import { Button, Section, Container, Heading } from "@/components/ui";
import { HeroProductCard } from "@/components/cards";
import { Sparkles, Heart } from "lucide-react";
import { catalogProducts } from "@/data/mockData";

interface HeroSectionProps {
  onAddToCart: (productId: string) => void;
}

export default function HeroSection({ onAddToCart }: HeroSectionProps) {
  return (
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
                <HeroProductCard
                  key={`hero-${product.id}`}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  onAddToCart={onAddToCart}
                />
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
  );
}
