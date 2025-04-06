import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Slider from "../assets/image/Slider.png";
import Slider2 from "../assets/image/Slide2.png";
import Slider3 from "../assets/image/Slide3.png";
import Slider4 from "../assets/image/Slide4.png";

import styled from "styled-components";

export const SwiperSlider = () => {
  return (
    <SwiperWrapper>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        speed={800}
      >
        <SwiperSlide>
          <StyledImg src={Slider} alt="Nike1" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImg src={Slider2} alt="Nike2" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImg src={Slider3} alt="Nike3" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImg src={Slider4} alt="Nike4" />
        </SwiperSlide>
      </Swiper>
    </SwiperWrapper>
  );
};
const SwiperWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 85%;
  height: 500px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;
