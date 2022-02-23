import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../../redux/Cart/cart-actions";
import "./style.css";

BoxProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

function BoxProduct(props) {
  const { product } = props;

  const history = useHistory();

  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(addToCart(id));
  }

  function handleClick() {
    history.push(`/products/${product.id}`);
  }

  const [like, setLike] = useState(false);

  return (
    <div className="product-item">
      <div className="product-slider">
        <ul>
          <li
            title="Thích"
            className={classnames({ like: like })}
            onClick={() => setLike(!like)}
          >
            <ion-icon name="heart"></ion-icon>
          </li>
          <li
            title="Thêm vào giỏ hàng"
            onClick={() => handleAddToCart(product.id)}
          >
            <ion-icon name="cart"></ion-icon>
          </li>
          <li title="Xem chi tiết" onClick={handleClick}>
            <ion-icon name="search"></ion-icon>
          </li>
        </ul>
      </div>
      <div className="product-img">
        <img src={`../img/${product.img}`} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <h4>
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(+product.price)}
      </h4>
    </div>
  );
}

export default BoxProduct;
