import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Button } from "@/components/ui";

// CSS imports para o Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Product {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ProductCarouselProps {
  products: Product[];
  height?: string;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  showButton?: boolean;
  effect?: 'fade' | 'slide' | 'cube' | 'coverflow' | 'flip';
  className?: string;
}

const ProductCarousel = ({ 
  products,
  height = "h-[500px]",
  autoplayDelay = 4000,
  showNavigation = true,
  showPagination = true,
  showButton = true,
  effect = "fade",
  className = ""
}: ProductCarouselProps) => {
  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={showNavigation}
        pagination={showPagination ? {
          clickable: true,
          dynamicBullets: true,
        } : false}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect={effect}
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        className={`w-full ${height} rounded-3xl overflow-hidden shadow-2xl`}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{product.title}</h3>
                <p className="text-lg opacity-90 drop-shadow-md">{product.description}</p>
                {showButton && (
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
