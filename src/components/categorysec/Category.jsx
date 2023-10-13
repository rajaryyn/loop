"use client";
import { useDispatch } from "react-redux";

import React from "react";
import Image from "next/image";
import "./category.css";
import { useState } from "react";

import { setItemToCart } from "../../redux/features/CartSlice";
import { useRouter } from "next/navigation";
import ProductCard from "../productCard/ProductCard";

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
      <h1 className="text-xl font-semibold md:text-2xl ">{heading}</h1>
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

        <div
          className="list gap-y-4 gap-x-1 scroll-smooth scroll-hidden"
        >
          {MenuProducts.map((product, i) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

