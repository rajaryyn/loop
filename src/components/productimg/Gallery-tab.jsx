import React from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import Image from 'next/image';


export default function Gallery({image}) {
  return (
    <Tabs.Trigger
    className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
  >

      <div>
        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
          <Image 
            fill 
            src={image.url} 
            alt="" 
            className="object-cover object-center" 
          />
        </span>
        <span
          className={cn(
            'absolute inset-0 rounded-md ring-2 ring-offset-2',
            selected ? 'ring-black' : 'ring-transparent',
          )}
        />
      </div>

  </Tabs.Trigger>
  )
}
