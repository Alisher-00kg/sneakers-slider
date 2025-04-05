import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Slider from "../assets/image/Slider.png?react";
import Slider2 from "../assets/image/Slide2.png?react";
import Slider3 from "../assets/image/Slide3.png?react";
import Slider4 from "../assets/image/Slide4.png?react";
import styled from "styled-components";

export const SwiperSlider = () => {
  return (
    <SwiperWrapper>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      >
        <SwiperSlide>
          <StyledImg src={Slider} alt="Nike1" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImg src={Slider2} alt="Nike2" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImg src={Slider3} alt="Nike3" />
        </SwiperSlide>{" "}
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
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 45%;
  height: 500px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;
