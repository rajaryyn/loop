// Import necessary libraries and data
import React from "react";
import { ProductsData } from "../../../../data/products";
import Image from "next/image";

export default function Page({ params }) {
  // Convert params.productid to a number (assuming it's a number)
  const productId = parseInt(params.productid);

  // Find the product by ID
  const product = ProductsData.find((product) => product.id === productId);

  // Check if the product exists before accessing its properties
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2  mt-9">
          <div className="relative p-3 rounded-xl w-full md:w-[28rem] flex items-center shrink-0 border h-96  ">
            <Image
              src={product.img}
              className=" w-96 object-center h-80"
              alt="img"
            />
          </div>
          <div>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
