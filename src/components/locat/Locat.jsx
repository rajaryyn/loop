"use client";

import React, { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import LocDialog from "../locationdialog/LocDialog";




export default function Locat() {

  const [open, setOpen] = useState(false);
  const openDialog = ()=>{
    setOpen(true)
  }

  return (
    <>
    <div className="flex items-center">
      <MapPinIcon className=' w-5 h-5'/>
      <h1 onClick={()=> openDialog()} className="cursor-pointer ">Location</h1>
    </div>
    <LocDialog open={open} setOpen={setOpen} />
    </>
      
  );
}
