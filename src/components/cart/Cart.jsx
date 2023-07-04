"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cartcount from "./Cartcount";
import Cartempty from "./Cartempty";
import Cartitems from "./Cartitems";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQuantity,
  setCloseCart,
  setGetTotals,
} from "@/redux/features/CartSlice.js";
import Adress from "../adress/Adress";

export default function Cart() {
  // cart closing function by redux

  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  // cart itmes in cart

  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQuantity);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);


  // adrees compo

  const [checkoutClicked, setCheckoutClicked] = useState(false);


  return (
    <>
      <div
        className={` fixed  top-0  left-0  right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] 
        ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-7"
        }`}
      >
        <div
          className={`
            blur-effect-theme
            duration-500
            h-screen 
            max-w-xl 
            w-full 
            absolute 
            right-0
          ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-7"
          }`}
        >
          <Cartcount onCartToggle={onCartToggle} />

          
        {checkoutClicked ? (
          <Adress area={'Choose Your Address'} />
        ) : (
          <>

          {cartItems?.length === 0 ? (
            <Cartempty />
            ) : (
              <div>
              <div className=" flex items-start justify-start  flex-col gap-y-7 lg:gap-y-5  overflow-y-scroll  [81vh] scroll-smooth  scroll-hidden  py-3" >
                {cartItems?.map((product, i) => (
                  <Cartitems key={i} product={product} />
                  ))}
              </div>
              <div className=" fixed bottom-0 bg-white w-full   px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    Total items
                  </h1>
                  <h1 text-sm>{totalQty}</h1>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    subtotal
                  </h1>
                  <h1 text-sm>₹{totalAmount} </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    taxes and shipoing will apply
                  </p>

                  <button className="button-theme bg-theme-cart text-white" onClick={() => setCheckoutClicked(true)}>
                    checkout
                  </button>
                </div>
              </div>
            </div>
          )}
                  
                </>
              )}
          
        </div>
      </div>
    </>
  );
}
