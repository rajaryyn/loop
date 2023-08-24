"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  setIncQty,
  setDecQty,
  setRemoveItemFromCart,
  setClearQty,
} from "../../redux/features/CartSlice";

function Cartitems({ product }) {
  // reduxx
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart(product));
  };

  const handleIncCart = () => {
    dispatch(setIncQty(product));
  };
  const handleDecCart = () => {
    dispatch(setDecQty(product));
  };
  const handleClearCart = () => {
    dispatch(setClearQty());
  };

  useEffect(() => {
    if (product.quantity === 0) {
      dispatch(setRemoveItemFromCart(product));
    }
  }, [product.quantity, dispatch]);

  return (
    <>
      <div className="flex items-center justify-between w-full md:w-[450px] p-3 border hover:border-blue-500 rounded-md mb-3 relative shadow-lg ">
        <div className="flex gap-3">
          <div className="relative hover:scale-105 bg-gray-100 p-3 rounded-xl transition-all duration-75 ease-in-out items-center shrink-0">
            <Image src={product.img} className="w-16 h-16" alt="img" />
          </div>
          <div className="font-bold text-lg text-slate-900 ">
            <h3>{product.name}</h3>
            <div className="mt-1 flex">
              <div className="flex"> ₹{product.price * product.quantity}</div>
            </div>
            <div className="flex absolute gap-10 top-12 right-8">
              <div className="flex">
                <button
                  type="button"
                  className="w-6 h-6  flex items-center justify-center active:scale-90"
                  onClick={handleDecCart}
                >
                  <MinusIcon className="w-5 h-5  stroke-[2]" />
                </button>
                <div className="font-medium  w-7 h-6 flex items-center justify-center ">
                  {product.quantity}
                </div>
                <button
                  type="button"
                  className="w-6 h-6  flex items-center justify-center active:scale-90"
                  onClick={handleIncCart}
                >
                  <PlusIcon className="w-5 h-5 stroke-[2]" />
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  className="cursor-pointer hover:text-red-600"
                  onClick={onRemoveItem}
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartitems;
