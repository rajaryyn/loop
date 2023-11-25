"use client";
import {
  selectTotalAmount,
  selectTotalQuantity,
} from "@/redux/features/CartSlice";

import { LocalMallTwoTone } from "@mui/icons-material";
import React, {useState,useEffect} from "react";
import { useSelector } from "react-redux";

export default function CartCard() {

  
  const [isMounted, setIsMounted] = useState(false);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQuantity);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);




  if (!isMounted) {
    return null;
  }


  return (
    <div className=" flex items-center rounded-3xl bg-blue-600 px-3 py-2">
      <LocalMallTwoTone className="text-white" fontSize="medium" />
      <span className="ml-1 tet-sm font-medium text-white">{totalQty}</span>
      <span className="ml-2 tet-sm font-medium text-white">₹{totalAmount}</span>
    </div>
  );
}
