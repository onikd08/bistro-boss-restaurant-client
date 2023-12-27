import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-20"
    >
      <SwiperSlide>
        <div className="relative">
          <img src={slider1} alt="" />
          <div className="absolute uppercase text-white top-3/4 translate-x-1/2 translate-y-1/2">
            <h3 className="text-4xl">Salads</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={slider2} alt="" />
          <div className="absolute uppercase text-white top-3/4  translate-x-1/2 translate-y-1/2">
            <h3 className="text-4xl">Pizzas</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={slider3} alt="" />
          <div className="absolute uppercase text-white top-3/4  translate-x-1/2 translate-y-1/2">
            <h3 className="text-4xl">Soups</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={slider4} alt="" />
          <div className="absolute uppercase text-white top-3/4  translate-x-1/2 translate-y-1/2">
            <h3 className="text-4xl">Deserts</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={slider5} alt="" />
          <div className="absolute uppercase text-white top-3/4  translate-x-1/2 translate-y-1/2">
            <h3 className="text-4xl">Salads</h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Categories;
