import React, { useRef, useContext } from "react";
import Product from "../ProductElement";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function DealsSlider(props) {
  const productsArray = props.featureItemsArray;
  const currentScreenSize = props.currentScreenSize;
  const swiperElements =
    productsArray &&
    productsArray.map((ele, index) => {
      return (
        <SwiperSlide>
          <Product key={index} product={ele} />
        </SwiperSlide>
      );
    });

  return (
    <section className="bestDeals-slider-div white-background">
      <div
        className={`bestDeals-slider--category-title-div ${props.categoryTitle.class}`}
      >
        <h1 className="bestDeals-slider--category-title">
          {props.categoryTitle.caption}
        </h1>
      </div>{" "}
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={currentScreenSize.screenWidth < 700 ? 2 : 4}
      >
        <div className="swiper-Elements">{swiperElements}</div>
      </Swiper>
    </section>
  );
}
