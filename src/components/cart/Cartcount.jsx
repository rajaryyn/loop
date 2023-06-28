import React from "react";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Cartcount = ({onCartToggle, totalQty}) => {
  return (
    <div className="bg- h-11 flex items-center justify-between px-3 sticky top-0 right-0 w-full border-b-2 border-slate-400 ...">
      <div className="flex items-center gap-3">
        <div className="grid items-center cursor-pointer" onClick={onCartToggle}>
          <ChevronLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2] " />
        </div>
        <div className="grid items-center">
          <h1 className="text-base font-medium text-slate-900">
            Cart 
          </h1>
        </div>
      </div>
      <div>
        <button type="button" className="" onClick={onCartToggle}>
          <XMarkIcon className="w-5 h-5 stroke-[2]"/>
        </button>
      </div>
    </div>
  );
};

export default Cartcount;
