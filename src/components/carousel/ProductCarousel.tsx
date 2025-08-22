import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Button } from "@/components/ui";
import styles from './ProductCarousel.module.css';

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
        pagination={false}
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
        className={`${styles.customSwiper} w-full ${height} rounded-3xl overflow-hidden shadow-2xl`}
        style={{
          '--swiper-navigation-color': 'white',
          '--swiper-navigation-size': '16px',
        } as React.CSSProperties}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white transform transition-all duration-500 group-hover:translate-y-[-8px] max-w-[calc(100%-3rem)] pr-4">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{product.title}</h3>
                <p className="text-lg opacity-90 drop-shadow-md mb-3">{product.description}</p>
                {showButton && (
                  <div className="transform transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/50 backdrop-blur-sm border-2 border-gray/80 text-white hover:bg-white/30 hover:border-white hover:text-white cursor-pointer"
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
