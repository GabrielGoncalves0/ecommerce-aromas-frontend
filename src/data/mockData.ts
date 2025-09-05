// Dados mock para o e-commerce de aromas
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
}

export interface Category {
  name: string;
  image: string;
  href: string;
}

export interface CategoryInfo {
  category: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export const catalogProducts: Product[] = [
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

export const categories: Category[] = [
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

export const categoriesInfo: CategoryInfo[] = [
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
];
