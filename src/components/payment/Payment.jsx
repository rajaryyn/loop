import React from "react";
import CartCard from "../Carttotals/CartCard";

export default function Payment() {
  return (
    <div className="fixed bottom-0 border bg-blue-500 w-full md:static h-24 md:w-96 px-5 py-2  md:rounded-lg     space-y-3 ">
      <div className="flex justify-between ">
        <h3>Deeliver here</h3>
        <h3>dchazng</h3>
      </div>
      <div className="flex justify-between">
        <CartCard />
        <CartCard />
      </div>
    </div>
  );
}
