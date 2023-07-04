'use client'
import { MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Adress({area}) {
  return (
   

    <div className="flex justify-center items-center mt-5">
      <div>
        <MapPinIcon className="w-10 h-7 stroke-[2] center " />
      </div>
      <button className=" w-40 bg-slate-400 text-sm border-2 rounded-xl font-bold transition-all duration-300 hover:scale-110 px-3 py-2 text-center">
        {area}
      </button>
    </div>
   
  );
}
