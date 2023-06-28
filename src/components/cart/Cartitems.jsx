'use client'
import React from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setIncQty,setDecQty, setRemoveItemFromCart, setClearQty } from "../../redux/features/CartSlice";

function Cartitems({ product }) {
  // reduxx
const dispatch = useDispatch()
const onRemoveItem = () =>{
  dispatch(setRemoveItemFromCart(product))

}

const handleIncCart = ()=>{
  dispatch(setIncQty(product))
}
const handleDecCart = ()=>{
  dispatch(setDecQty(product))

}
const handleClearCart = ()=>{
  dispatch(setClearQty())

}

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div className="relative hover:scale-105 transition-all duration-75 ease-in-out grid items-center">
            <Image src={product.img} className="w-12 h-auto" alt="img" />
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {product.name}
              </h1>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                onClick={handleDecCart}
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 stroke-[2]" />
              </button>
              <div className="font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center ">
                {product.quantity}
              </div>
              <button
                type="button"
                className="w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                onClick={handleIncCart}
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">₹ {product.price * product.quantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            <button type="button" className="cursor-pointer" onClick={onRemoveItem}>
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartitems;


