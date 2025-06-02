import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import '../BlogComponent/Slider.css';
import SwiperComponent from './SwiperComponent';

// interface BlogItem {
//   type: string;
//   picture: string;
//   name: string;
//   description: string;
//   date: string;
// }

const BlogSlider = () => {
  return (
    <div className="mt-[42px] px-4 sm:px-0 ">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SwiperComponent/></SwiperSlide>
        <SwiperSlide><SwiperComponent/></SwiperSlide>
        <SwiperSlide><SwiperComponent/></SwiperSlide>
        <SwiperSlide><SwiperComponent/></SwiperSlide>
        <SwiperSlide><SwiperComponent/></SwiperSlide>
        <SwiperSlide><SwiperComponent/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
