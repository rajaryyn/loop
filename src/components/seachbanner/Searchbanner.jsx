import React from "react";
import "./searchbanner.css";
import Image from "next/image";

export default function SearchBanner() {
  return (
    <>
      {/*==Search-banner=======================================*/}
      <div className="search-banner mt-24">
        {/*bg-------*/}
        <Image src="/bg-1.png" className="bg-1" alt="bg-1" width={300} height={300}/> 
        <Image src="/bg-1.png" className="bg" alt="bg-1"  width={350} height={300}/>
       <Image src="/bg-2.png" className="bg-2" alt="bg-2" width={300} height={300}/>
        {/*text-----*/}
        <div className="search-banner-text">
          <h1>Order Your Daily Grocery</h1>
        </div>
      </div>
    </>
  );
}
