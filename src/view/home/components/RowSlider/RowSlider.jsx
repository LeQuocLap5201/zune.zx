import PropTypes from "prop-types";
import React from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperBox from "../../../../components/SwiperBox/SwiperBox";
import "./style.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

RowSlider.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string,
};

RowSlider.defaultProps = {
  products: [],
  title: "",
};

function RowSlider(props) {
  const { products, title } = props;

  return (
    <div className="row-slider" data-aos="fade-up">
      <h2>sản phẩm {title}</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <SwiperBox product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RowSlider;
