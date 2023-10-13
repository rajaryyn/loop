"use client"
import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setItemToCart } from "@/redux/features/CartSlice";


export default function ProductCard({ product, i }) {



  // reduxx
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(setItemToCart(product));
  };

  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };

  return (
    <div className="w-28 md:w-36 key={product.id} rounded-xl border p-2  shadow-xl space-y-4 ">
      <div onClick={handleClick} className="space-y-1 ">
        <div className="bg-slate-100 p-4 rounded-2xl ">
          <Image
            src={product.img}
            alt=""
            className=" object-center w-20 h-16 md:w-28 md:h-24"
          />
        </div>
        <div className="">
          <h3 className="font-bold text-xs md:text-sm leading-2">
            {product.name}
          </h3>
        </div>
        <p>{product.quantity}</p>
      </div>
      <div className="flex ">
        <div className="text-sm md:text-base  font-bold grow">
          ₹{product.price}
        </div>
        <button
          type="button"
          className="active:scale-110 transition-all duration-300 relative "
          onClick={AddToCart}
        >
          <PlusCircleIcon className="icon-style" />
        </button>
      </div>
    </div>
  );
}
