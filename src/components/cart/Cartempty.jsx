import React from "react";
import emptycartt from "../../../public/emptycartt.png";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/Button";
import Link from "next/link";

const Cartempty = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen px-11 text-center gap-7">
      <Image
        src={emptycartt}
        alt="emptycart"
        className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
      />

      <Link href="/">
        <Button variant="outline">
          <div className="flex gap-2 items-center">
            <ChevronLeftIcon className="h-4 w-4" />
            <h1 className="text-slate-900 font-semibold">
              Go Back To Shopping
            </h1>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default Cartempty;
