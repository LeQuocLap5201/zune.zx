import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MiniCart() {
  const history = useHistory();

  const redux = useSelector((state) => state.cart.cart);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let c = 0;
    redux.forEach(i => {
      c += i.qty;
    })
    setCount(c)
  }, [redux]);

  function handleClick() {
    history.push("/cart");
  }

  return (
    <li className="icon-cart" onClick={handleClick}>
      <ion-icon name="cart"></ion-icon>
      <span>{count}</span>
    </li>
  );
}
