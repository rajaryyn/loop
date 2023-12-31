"use client";
import Cartempty from "@/components/cart/Cartempty";
import Link from "next/link";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
  setGetTotals,
} from "@/redux/features/CartSlice";
import Cartitems from "@/components/cart/Cartitems";
import Payment from "@/components/payment/Payment";
import { Button } from "@/components/ui/Button";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function page() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // cart items in cart
  
  
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQuantity);
  
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);
  
  const deliverycharge = 25;
  const total = deliverycharge + totalAmount;

  const itemMessages = cartItems.map(item => `${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`);
const cartSummary = `Hello, I want to order: ${itemMessages.join(', ')}`;
const msg = encodeURIComponent(`${cartSummary}, total price=₹${total} `);


  const href = `https://wa.me/919279377215?text=${msg}`
  return (
    <div>
      {cartItems?.length === 0 ? (
        <Cartempty />
      ) : (
        <>
          <div className="px-4 pt-16 pb-5 sm:ml-[20%] sm:px-6 lg:px-8">
            <div className="flex gap-3">
              <Link href='/'>
              <Button variant="outline" size="icon">
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              </Link>
              <h1 className="text-3xl font-bold text-black ">Shopping Cart</h1>
            </div>
          </div>
          <div className=" lg:flex md:ml-[20%]  md:gap-3 ">
              <div className=" ">
            <div className="overflow-scroll scroll-smooth scroll-hidden h-96 w-full">
                {cartItems?.map((product, i) => (
                  <Cartitems key={i} product={product} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5   ">
              <div className=" bg-slate-100 w-full md:static shadow-sm h-48 md:w-96 px-5 py-2 grid items-center  md:rounded-lg">
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
                  <h1 className="font-semibold">₹{total}</h1>
                </div>
              </div>
              <div>
              <a href={href}>

              <div
     type="button"
     className=" flex items-center rounded-full bg-blue-600 px-4 py-2"
   >
     <span className=" tet-sm font-medium text-white">Order from Whatsapp</span>

   </div> </a>
              </div>
              {/* <Payment /> */}
            </div>
            
          </div>
        </>
      )}
    </div>
  );
}
