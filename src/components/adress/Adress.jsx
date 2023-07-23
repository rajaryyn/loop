import React from "react";
import { Input } from "../ui/Input";
import * as Label from "@radix-ui/react-label";

export default function Adress() {
  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="firstName"
          >
            Name
          </Label.Root>
          <Input id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="firstName"
          >
            Phone no.
          </Label.Root>
          <Input className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="firstName"
          >
            Address
          </Label.Root>
          <Input className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="firstName"
          >
            Pin Code
          </Label.Root>
          <Input className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="firstName"
          >
            City
          </Label.Root>
          <Input className="col-span-3" value="Gaya" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="firstName"
          >
            State
          </Label.Root>
          <Input className="col-span-3" value="Bihar" />
        </div>
      </div>
    </>
  );
}
