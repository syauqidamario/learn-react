import { createStore } from "react-redux";// Import createStore from Redux, not legacy_createStore

// Reducer
const cartReducer = (
  state = {
    login: false,
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = createStore(cartReducer); // Use createStore from Redux
console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("STORE CHANGE:", store.getState());
});

// Dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 10, qty: 40 } };
store.dispatch(action2);
