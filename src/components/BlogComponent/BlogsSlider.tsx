import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import '../BlogComponent/Slider.css';
import SwiperComponent from './SwiperComponent';

const BlogSlider = () => {
  return (
    <div className="mt-[42px]">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className="!w-full sm:!w-auto"><SwiperComponent /></SwiperSlide>
        <SwiperSlide className="!w-full sm:!w-auto"><SwiperComponent /></SwiperSlide>
        <SwiperSlide className="!w-full sm:!w-auto"><SwiperComponent /></SwiperSlide>
        <SwiperSlide className="!w-full sm:!w-auto"><SwiperComponent /></SwiperSlide>
        <SwiperSlide className="!w-full sm:!w-auto"><SwiperComponent /></SwiperSlide>
        <SwiperSlide className="!w-full sm:!w-auto"><SwiperComponent /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
