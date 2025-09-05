import { Button, Section, Container } from "@/components/ui";
import { categoriesInfo } from "@/data/mockData";

export default function CategoriesSection() {
  return (
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
          {categoriesInfo.map((item) => (
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
  );
}
