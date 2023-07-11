"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function Adress({ area }) {
  return (
    <div className="flex justify-center items-center mt-5">
      <div>
        <MapPinIcon className="w-10 h-7 stroke-[2] center " />
      </div>

      <Dialog.Root>
        <Dialog.Trigger className=" w-40 bg-blue-500 text-white text-sm border-2 rounded-lg font-bold transition-all duration-300 hover:scale-110 px-3 py-2 text-center">
          {area}
        </Dialog.Trigger>

        
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className=" fixed -translate-x-1/2 w-full max-w-md left-1/2 top-1/2 -translate-y-1/2 bg-white rounded-md p-8 shadow text-gray-900 ">
            <div className="flex justify-between items-center ">
              <Dialog.Title className="text-xl">Add location</Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-500">
                <Cross1Icon />
              </Dialog.Close>
            </div>
            <div className="mt-8">
              <UserFields />
            </div>

            <div className="text-right m-8">
              <Dialog.Close className=" rounded px-4 py-4  text-sm font-medium text-gray-500 hover:text-gray-600">
                Cancel
              </Dialog.Close>
              <button className=" rounded bg-green-500 px-4 py-2  text-sm font-medium text-white hover:bg-green-600">
                Save
              </button>
            </div>
          </Dialog.Content>
      </Dialog.Root>
    </div>
    
  );
}

function UserFields() {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-900">Name</label>
        <input
          autoFocus
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
        />
      </div>

      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Phone number
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Address
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          City
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
        />
      </div>
    </div>
  );
}
