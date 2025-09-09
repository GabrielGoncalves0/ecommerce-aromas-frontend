import { Button, Section, Container } from "@/components/ui";
import { CategoryInfoCard } from "@/components/cards";
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
            <CategoryInfoCard
              key={item.category}
              category={item.category}
              title={item.title}
              description={item.description}
              image={item.image}
              features={item.features}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
