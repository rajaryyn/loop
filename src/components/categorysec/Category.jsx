"use client";
import { useDispatch } from "react-redux";

import React from "react";
import Image from "next/image";
("");
import "./category.css";
import { ProductsData } from "../../../data/products.js";
import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { setItemToCart } from "../../redux/features/CartSlice";

export default function Category({ pro, heading, list }) {
  const [MenuProducts, setMenuProducts] = useState(pro);

  // reduxx
  const dispatch = useDispatch();
  const AddToCart = (product) => {
    dispatch(setItemToCart(product));
  };

  const filter = (type) => {
    setMenuProducts(pro.filter((product) => product.type === type));
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-semibold ">
        {heading}
      </h1>
      <div className="products">
        <ul className="menu">
          <li onClick={() => setMenuProducts(pro)} className="all">
            All
          </li>
          {list.map((category, index) => (
            <li
              key={index}
              onClick={() => filter(category.type)}
              className="all"
            >
              {category.label}
            </li>
          ))}
        </ul>

        <div className="list gap-y-4 gap-x-2 scroll-smooth scroll-hidden ">
          {MenuProducts.map((product, i) => (
            <div className="w-36 key={product.id} rounded-xl border p-2 space-y-3   shadow-xl ">
              <div className="bg-slate-100 p-4 rounded-2xl">
                <Image src={product.img} alt="" className=" w-28 h-24" />
              </div>
              <div className="">
                <h3 className="font-semibold text-md leading-5">{product.name}</h3>
              </div>
              <p>{product.quantity}</p>
              <div className="flex mt-1">
                <div className="text-base font-bold grow">₹{product.price}</div>
                <button
                  type="button"
                  className="active:scale-110 transition-all duration-300 relative"
                  onClick={() => AddToCart(product)}
                >
                  <PlusCircleIcon className="icon-style" />
                </button>
              </div>
            </div>
            //           <div className="product" key={product.id}>
            //             <div className="left-s">
            //               <div className="name" >
            //                 <span className="text-sm font-semibold">{product.name}</span>
            //                 <span>{product.quantity}</span>
            //               </div>
            //               <span className="absolute -bottom-7 ">₹ {product.price}</span>
            //             </div>

            // <Image
            //              src={product.img} alt="" className="img-p " />
            //             <span className="absolute -bottom-8 right-2 ">
            //               <button
            //                 type="button"
            //                 className="active:scale-110 transition-all duration-300 relative"
            //                 onClick={() => AddToCart(product)}
            //                 >
            //                 <PlusCircleIcon className="icon-style" />
            //               </button>
            //             </span>
            //           </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// #ECF3E3   #4EE301