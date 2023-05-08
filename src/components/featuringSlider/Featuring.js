import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import featuringProducts from "../../productFeaturingApi";
import FeaturingItem from "./FeaturingItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./FeaturingSlider.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="slider-div section-margin">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FeaturingItem img={featuringProducts[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturingItem img={featuringProducts[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturingItem img={featuringProducts[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturingItem img={featuringProducts[3]} />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
}
