"use client"
import { useDispatch } from "react-redux";

import React from "react";
import Image from "next/image";''
import "./category.css";
import { ProductsData } from "../../../data/products.js";
import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { setItemToCart } from "../../redux/features/CartSlice";




export default function Category({ pro, heading, list }) {
  const [MenuProducts, setMenuProducts] = useState(pro);
  
  // reduxx
  const dispatch = useDispatch();
  const AddToCart = (product)=>{
    dispatch(setItemToCart(product));
  }
  
  const filter = (type) => {
    setMenuProducts(pro.filter((product) => product.type === type));
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-semibold tracking-tight underline decoration-2 underline-offset-4">{heading}</h1>
      <div className="products">
        <ul className="menu">
          <li onClick={() => setMenuProducts(pro)} className="all">
            All
          </li>
          {list.map((category, index) => (
            <li key={index} onClick={() => filter(category.type)} className="all">
              {category.label}
            </li>
          ))}
    
        </ul>

        <div className="list">
          
          {MenuProducts.map((product, i) => (
            <div className="product" key={product.id}>
              <div className="left-s">
                <div className="name" >
                  <span className="text-sm font-semibold ">{product.name}</span>
                  <span>{product.quantity}</span>
                </div>
                <span className="absolute -bottom-6 ">₹ {product.price}</span>
              </div>
              
  <Image
               src={product.img} alt="" className="img-p " /> 
              <span className="absolute -bottom-7 right-2 ">
                <button
                  type="button"
                  className="active:scale-110 transition-all duration-300 relative"
                  onClick={() => AddToCart(product)}
                  >
                  <PlusCircleIcon className="icon-style" />
                </button>
              </span>
            </div>
          ))}
        </div>
          
        
      </div>
    </div>
  );
}








