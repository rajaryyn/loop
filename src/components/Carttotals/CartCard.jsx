import {
  selectTotalAmount,
  selectTotalQuantity,
} from "@/redux/features/CartSlice";
import React from "react";
import { useSelector } from "react-redux";
import { ShoppingBag } from "lucide-react";

export default function CartCard() {
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQuantity);
  return (
    <div>
      <button
        type="button"
        className=" flex items-center rounded-full bg-blue-600 px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 tet-sm font-medium text-white">{totalQty}</span>
        <span className="ml-2 tet-sm font-medium text-white">
          ₹{totalAmount}
        </span>
      </button>
    </div>
  );
}
