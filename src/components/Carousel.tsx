import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className="w-full max-w-lg mx-auto mt-5">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <SwiperSlide key={index}>{child}</SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};

export default Carousel;
