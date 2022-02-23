import * as actionTypes from "./cart-types";

const initState = {
  products: [],
  cart: [],
  currentItem: null,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((p) => p.id === action.payload.id);
      const inCart = state.cart.find((i) =>
        i.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((i) =>
              i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload.id),
      };
    case actionTypes.QTY:
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
        ),
      };
    case actionTypes.CURRENT_CART:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.REMOVE_CART:
      return {
        ...state, cart: []
      };
    default:
      return state;
  }
};

export default cartReducer;
