import React from "react";
import CartCard from "../Carttotals/CartCard";
import Paybtn from "./Paybtn";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import Adress from "../adress/Adress";
import Ctotals from "../Carttotals/Ctotals";

export default function Payment() {
  return (
    <div className="fixed bottom-0 border shadow-lg w-full md:static h-24 md:w-96 px-5 py-2  md:rounded-lg     space-y-3 ">
      <div className="flex justify-between ">
        <h3>Deeliver here</h3>

        <Dialog.Root>
          <Dialog.Trigger className=" ">hel.l.o</Dialog.Trigger>

          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className=" fixed -translate-x-1/2 w-full max-w-md left-1/2 top-1/2 -translate-y-1/2 bg-white rounded-md p-8 shadow text-gray-900 ">
            <div className="flex justify-between items-center ">
              <Dialog.Title className="text-xl">Add location</Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-500">
                <Cross1Icon />
              </Dialog.Close>
            </div>

            <Adress />
          </Dialog.Content>
        </Dialog.Root>
      </div>
      <div className="flex justify-between">
        <Ctotals />
        <Paybtn />
      </div>
    </div>
  );
}
