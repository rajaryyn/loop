"use client";
import Cartempty from "@/components/cart/Cartempty";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
  setGetTotals,
} from "@/redux/features/CartSlice";
import Cartitems from "@/components/cart/Cartitems";
import Title from "@/components/title/Title";
import Cartcount from "@/components/cart/Cartcount";
import Adress from "@/components/adress/Adress";
import Payment from "@/components/payment/Payment";

export default function page() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // cart itmes in cart

  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQuantity);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const deliverycharge = 25;
  const total = deliverycharge + totalAmount;
  return (
    <div>
      {cartItems?.length === 0 ? (
        <Cartempty />
      ) : (
        <>
          <Cartcount />
          <div className=" md:flex md:mt-12 md:ml-[20%] md:mr-[20%] md:gap-3 ">
            <div className="overflow-scroll scroll-smooth scroll-hidden   h-2/3 sm:h-96 ">
              <div className=" ">
                {cartItems?.map((product, i) => (
                  <Cartitems key={i} product={product} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5   ">
              <div className=" bg-slate-100 w-full md:static  h-48 md:w-96 px-5 py-2 grid items-center  md:rounded-lg">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold text-gray-400 my-2">
                    Total Items:
                  </h1>
                  <h1 className="font-semibold">{totalQty}</h1>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold text-gray-400 my-2 ">
                    SubTotal:
                  </h1>
                  <h1 className="font-semibold">₹{totalAmount} </h1>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold text-gray-400 my-2">
                    Delivery Fee:
                  </h1>
                  <h1 className="font-semibold">₹25 </h1>
                </div>
                <div className="flex items-center justify-between border-t pt-3 border-dashed border-emerald-500">
                  <h1 className="text-base font-semibold text-gray-400 my-2">
                    Total:
                  </h1>
                  <h1 className="font-semibold">{total}</h1>
                </div>
              </div>
                <Payment />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
