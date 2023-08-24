"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import Gallery from "./Gallery-tab";

export default function ProductImg({ images }) {
  return (
    <Tabs.Root defaultValue="account" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tabs.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Gallery key={image.id} image={image} />
          ))}
        </Tabs.List>
      </div>
      <div className="aspect-square ">
        {images.map((image) => (
          <Tabs.Content key={image.id}>
            <div className="w-full relative h-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.img}
                alt=""
                className="object-cover object-center"
              />
            </div>
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}
