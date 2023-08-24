"use client";
import React from "react";
import { Input } from "../ui/Input";
import * as Label from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Adress() {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  const onsubmit = (data) => {
    console.log("submit",data);
  };
  return (
    <>
      <form className="grid gap-4 py-4" onSubmit={handleSubmit(onsubmit)}>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="name"
          >
            Name
          </Label.Root>
          <Input id="name" className="col-span-3" {...register("name")} />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="phone"
          >
            Phone no.
          </Label.Root>
          <Input id="phone" className="col-span-3" {...register("phone")} />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="address"
          >
            Address
          </Label.Root>
          <Input id="address" className="col-span-3" {...register("address")} />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="code"
          >
            Pin Code
          </Label.Root>
          <Input id="code" className="col-span-3" {...register("code")} />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="city"
          >
            City
          </Label.Root>
          <Input
            id="city"
            className="col-span-3"
            value="Gaya"
            {...register("city")}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label.Root
            className="text-[15px] font-medium leading-[35px] text-black   text-center"
            htmlFor="state"
          >
            State
          </Label.Root>
          <Input
            id="state"
            className="col-span-3"
            value="Bihar"
            {...register("state")}
          />
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
}
