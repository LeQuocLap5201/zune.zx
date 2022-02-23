import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { useHistory } from "react-router-dom";

SwiperBox.propTypes = {
  product: PropTypes.object,
};

SwiperBox.defaultProps = {
  product: {},
};

function SwiperBox(props) {
  const { product } = props;

  const history = useHistory();

  function handleClick() {
    history.push(`/products/${product.id}`);
  }

  return (
    <div className="swiper-box" onClick={handleClick}>
      <div className="swiper-box-img">
        <img src={`../img/${product.img}`} alt="" />
      </div>
      <div className="swiper-box-overlay">{product.name}</div>
    </div>
  );
}

export default SwiperBox;
