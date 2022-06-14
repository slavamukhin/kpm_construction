import { FC } from "react"
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { content } from "../../content";

const MySwiper = styled(Swiper)`
  width: 100%;
  max-height: 660px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-progressbar-fill {
    background-color: #fdac2b;
  }

  .swiper-button-prev, .swiper-button-next {
    color: #fff;
  }


`

export const Slider: FC = () => {
  return <div>
    <MySwiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {content.myWork.sliders.map(slide => <SwiperSlide><img src={slide} alt='slide'/></SwiperSlide>)}
      </MySwiper>
  </div>
}