import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function SliderShow() {
  const slickText = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: "cubic-bezier(.84, 0, .08, .99)",
    pauseOnHover: false,
  };

  const sickImage = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: "cubic-bezier(.84, 0, .08, .99)",
    centerMode: true,
    pauseOnHover: false,
  };

  return (
    <div className="Slider-home">
      <div className="text-slider-wrapper">
        <Slider {...slickText} className="text-slider">
          <div className="text-slide">
            <h2>
              ZUNE.ZX <br />
              THỜI TRANG THIẾT KẾ <br />
              PHONG CÁCH NHẬT.
            </h2>
          </div>
          <div className="text-slide">
            <h2>
              Bộ sưu tập <br />
              IRREGULAR PLANET.
            </h2>
          </div>
          <div className="text-slide">
            <h2>
              Bộ sưu tập <br />
              NISHIKIGOI MASCOT.
            </h2>
          </div>
          <div className="text-slide">
            <h2>
              Bộ sưu tập <br />
              ONE BAD DAY.
            </h2>
          </div>
          <div className="text-slide">
            <h2>
              Bộ sưu tập <br />
              BLOODMOON PARTY.
            </h2>
          </div>
        </Slider>
      </div>
      <div className="blocks">
        <div className="block-1" />
        <div className="block-2" />
        <div className="block-3" />
      </div>
      <div className="overlay" />
      <Slider {...sickImage} className="image-slider">
        <div className="image-slide">
          <img src="../img/sl1.jpg" alt="" />
        </div>
        <div className="image-slide">
          <img src="../img/sl2.jpg" alt="" />
        </div>
        <div className="image-slide">
          <img src="../img/sl3.jpg" alt="" />
        </div>
        <div className="image-slide">
          <img src="../img/sl4.jpg" alt="" />
        </div>
        <div className="image-slide">
          <img src="../img/sl5.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
