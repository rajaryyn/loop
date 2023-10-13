
import {
  selectTotalAmount,
  selectTotalQuantity,
} from "@/redux/features/CartSlice";
import { LocalMallTwoTone } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";




export default function CartCard() {
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQuantity);

  return (
    <div>
      <button
        type="button"
        className=" flex items-center rounded-3xl bg-blue-600 px-3 py-2"
      >
        <LocalMallTwoTone className="text-white" fontSize="medium" />
        <span className="ml-1 tet-sm font-medium text-white">{totalQty}</span>
        <span className="ml-2 tet-sm font-medium text-white">
          ₹{totalAmount}
        </span>
      </button>
    </div>
  );
}
