import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import productApi from "../../../api/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/Cart/cart-actions";
import "./style.css";

export default function DetailPage() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(addToCart(id));
  }

  const {
    params: { id },
  } = useRouteMatch();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.get(id);
        setProduct(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return <div className='ld'>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="detail-page">
        <div className="detail-name">
          <h1>{product.name}</h1>
        </div>
        <div className="detail-content">
          <p>{product.desc}</p>
          <h2>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(+product.price)}
          </h2>
          <span onClick={() => handleAddToCart(product.id)}>Thêm vào giỏ hàng</span>
        </div>
        <div className="detail-img-intro">
          <img src={`../img/${product.imgIntro}`} alt={product.name} />
        </div>
        <div className="detail-img">
          <img src={`../img/${product.img}`} alt={product.name} />
        </div>
      </div>
    </div>
  );
}
