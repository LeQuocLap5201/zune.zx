import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/Cart/cart-actions";
import RowCart from "./RowCart/RowCart";
import "./style.css";

function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  const dispatch = useDispatch();

  const redux = useSelector((state) => state.cart.cart);
  console.log(redux);

  useEffect(() => {
    let items = 0;
    let price = 0;

    redux.forEach((i) => {
      items += i.qty;
      price += i.qty * +i.price;
    });

    setTotalPrice(price);
    setTotalItem(items);
  }, [totalItem, totalPrice, setTotalItem, setTotalPrice, redux]);

  const handleRemoveCart = () => {
    if (localStorage.getItem('email') == null) {
      alert('Bạn chưa đăng nhập')
    } else {
      alert('Cảm ơn bạn đã ủng hộ Shop')
      dispatch(removeCart())
    }
  }

  return (
    <div className="container cart-page ">
      <h2>Giỏ hàng của bạn</h2>
      <div className="cart-content">
        <div className="cart-table">
          <table>
            <thead>
              <tr>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {redux.map((p) => (
                <RowCart key={p.id} row={p} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-pay">
          <h3>
            Tổng số lượng sản phẩm: <span>{totalItem}</span>
          </h3>
          <h3>
            Tổng tiền:{" "}
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalPrice)}
            </span>
          </h3>
          <button type='button' onClick={handleRemoveCart}>Tiến hành thanh toán</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
