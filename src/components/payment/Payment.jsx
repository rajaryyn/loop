import React from "react";

import Paybtn from "./Paybtn";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
// import { ChevronFirstIcon, ChevronUpIcon } from "lucide-react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

export default function Payment() {
  return (
    <div className="fixed bottom-0 border shadow-lg w-full md:static h-28 md:w-96 px-5 py-2  md:rounded-lg     space-y-3 ">
      <div className="flex justify-between ">
        <h3>Deliver Here :</h3>

        <Dialog.Root>
          <Dialog.Trigger className="flex flex-col ">
            <p>Home</p>
            <p className="text-xs italic font-light hover:text-red-500">Change Address</p>
          </Dialog.Trigger>
          

          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className=" fixed -translate-x-1/2 w-full max-w-md left-1/2 top-1/2 -translate-y-1/2 bg-white rounded-md p-8 shadow text-gray-900 ">
            <div className="flex justify-between items-center ">
              <Dialog.Title className="text-xl">Add location</Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-500">
                <Cross1Icon />
              </Dialog.Close>
            </div>

        
            
          </Dialog.Content>
        </Dialog.Root>
      </div>
      <div className="flex justify-between">
        
        <Paybtn />
      </div>
    </div>
  );
}
