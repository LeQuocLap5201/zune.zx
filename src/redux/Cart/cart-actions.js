import * as actionsTypes from "./cart-types";

export const addToCart = (id) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    payload: {
      id,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionsTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
};

export const qty = (id, value) => {
  return {
    type: actionsTypes.QTY,
    payload: {
      id,
      qty: value,
    },
  };
};

export const currentCart = (item) => {
  return {
    type: actionsTypes.CURRENT_CART,
    payload: item,
  };
};

export const setProducts = (products) => {
  return {
    type: actionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const removeCart = () => {
  return{
    type: actionsTypes.REMOVE_CART,
  }
}
