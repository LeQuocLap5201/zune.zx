import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/Cart/cart-actions";
import "./style.css";

RowCart.propTypes = {
  row: PropTypes.object,
};

RowCart.defaultProps = {
  row: {},
};

function RowCart(props) {
  const { row } = props;

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <tr>
      <td><img src={`../img/${row.img}`} alt={row.name} /></td>
      <td className='td-flex'>{row.name}</td>
      <td className='td-flex'>
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(+row.price)}
      </td>
      <td className='td-flex'>{row.qty}</td>
      <td className='td-flex'>
        <button onClick={() => handleDelete(row.id)}><ion-icon name="close-outline"></ion-icon></button>
      </td>
    </tr>
  );
}

export default RowCart;
