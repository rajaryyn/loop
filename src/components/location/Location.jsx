"use client";
import React from 'react'
import * as Dialog from "@radix-ui/react-dialog";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Cross1Icon, Crosshair2Icon } from "@radix-ui/react-icons";

export default function Location() {
  return (
    <div className="flex justify-center items-center ml-4">
    <div >
      <MapPinIcon className="w-6 h-5 center  " />
    </div>

    <Dialog.Root>


      <Dialog.Trigger className="font-semibold  text-center">
        Set Location
      </Dialog.Trigger>

      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className=" fixed -translate-x-1/2 w-full max-w-md left-1/2 top-1/2 -translate-y-1/2 bg-white rounded-md p-8 shadow text-gray-900 ">
          <div className="flex justify-between items-center ">
            <Dialog.Title className="text-xl">Add Your location</Dialog.Title>
            <Dialog.Close className="text-gray-400 hover:text-gray-500">
              <Cross1Icon />
            </Dialog.Close>
          </div>
          <div className='flex flex-col gap-8 mt-4'>

          <input
              type="text"
              placeholder="Search Your location"
              className="rounded-lg p-2 border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
             <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex gap-4 items-center">
              <Crosshair2Icon className='h-8 w-6'/>
              Detect Location
            </button>
              </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
  )
}
