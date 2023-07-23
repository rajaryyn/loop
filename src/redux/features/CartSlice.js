'use client'

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


const initialState = {
  cartState: false,
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQty: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setItemToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

 if (existingItem) {
        existingItem.quantity += 1;
        toast.success(`item incresed`);
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} "added to cart"`);
        
      }
     
    },

    setRemoveItemFromCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      // const removeItem = state.cartItems.filter((item)=> item.id !== action.payload.id);
      // state.cartItems = removeItem
   
      toast.success(`${action.payload.name} "removed from cart"`);
    },
    setIncQty: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        toast.success(`"item incresed"`);
      }

    },
    setDecQty: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity -= 1;
        toast.success(`"item decresed"`);
      }
      
      
    },
    setClearQty: (state, action) => {
      state.cartItems = [];
      toast.success(`"cart cleared"`);
     
    },

    setGetTotals: (state, action) => {
      let { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const totalPrice = price * quantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQuantity += quantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQty = totalQuantity;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setItemToCart,
  setRemoveItemFromCart,
  setClearQty,
  setDecQty,
  setIncQty,
  setGetTotals
} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state)=> state.cart.cartTotalAmount;
export const selectTotalQuantity = (state)=> state.cart.cartTotalQty;
export default CartSlice.reducer;
