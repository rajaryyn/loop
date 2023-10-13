import {
  selectCartQuantity,
  selectTotalAmount,
} from "@/redux/features/CartSlice";
import React, { use } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Toast() {
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectCartQuantity);
  return toast.custom((t) => (
    <div>
      <h1>{totalAmount}</h1>
      <h1>{totalQty}</h1>
    </div>
  ));
}
