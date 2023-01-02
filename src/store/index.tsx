import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type initialprops = {
  cartItems: {
    cartQuantity: number
    image: string;
    id: React.Key;
    name: string;
    price: number;
  }[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

// cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
const initialState: initialprops = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")!) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: { id: React.Key}) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // adding toast for notification
        toast.info(`${action.payload.name} product quantity increases`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        // adding toast for notification
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
      //storing data to local storage so that on page refresh we not loose our cart data.
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem: { id: React.Key }) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity >= 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`${action.payload.name} product quantity decreases`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem: { id: React.Key }) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        //updating local Storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        // adding toast for notification
        toast.error(`${action.payload.name} remove from cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem: { id: React.Key }) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      //updating local Storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // adding toast for notification
      toast.error(`${action.payload.name} remove from cart`, {
        position: "bottom-left",
      });
    },
    clearCart(state) {
      state.cartItems = [];
      // adding toast for notification
      toast.error("Cart Cleared", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (
          cartTotal: { total: number; quantity: number },
          cartItems: { price: number; cartQuantity: number }
        ) => {
          const { price, cartQuantity } = cartItems;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, clearCart, getTotal } =
  counterSlice.actions;

export default counterSlice.reducer;
