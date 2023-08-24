import React from "react";
import { selectTotalAmount } from "@/redux/features/CartSlice";
import { useSelector } from "react-redux";
// import { ShoppingBag } from "lucide-react";

export default function Ctotals() {
  const totalAmount = useSelector(selectTotalAmount);

  const deliverycharge = 25;
  const total = deliverycharge + totalAmount;
  return (
    <div>
      <button
        type="button"
        className=" flex items-center rounded-full bg-blue-600 px-4 py-2"
      >
        {/* <ShoppingBag size={20} color="white" /> */}
        <span className="ml-2 tet-sm font-medium text-white">₹{total}</span>
      </button>
    </div>
  );
}
