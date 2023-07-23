import React from "react";
import "./searchbanner.css";
import Image from "next/image";

export default function SearchBanner() {
  return (
    <>
      {/*==Search-banner=======================================*/}
      <div className="mt-20 xl:w-[1350px] h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-3xl bg-[#ecf7ee]    mx-4 md:mx-10 relative bg-[length:400px]  sm:bg-[length:1000px] md:bg-[length:500px] lg:bg-[length:700px]  lg:h-[500px] xl:h-[550px]  lg:mx-20 xl:mx-auto p-7 flex sm:mx-7">
        {/*bg-------*/}
        <Image src="/bg-1.png" className="bg-1" alt="bg-1" width={300} height={300}/> 
        <Image src="/bg-1.png" className="bg" alt="bg-1"  width={350} height={300}/>
       <Image src="/bg-2.png" className="bg-2" alt="bg-2" width={300} height={300}/>
        {/*text-----*/}
        <div className="search-banner-text">
          <h1 className="font-bold">Order Your 
             Daily Grocery
             </h1>
        </div>
      </div>
    </>
  );
}
