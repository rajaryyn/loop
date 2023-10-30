import React from "react";

export default function page() {
  return <div className="flex flex-col mt-1 p-16">
  <div className="flex">
  <img
    className="mr-4 h-10 w-10 rounded-full"
    src="/apple.png"
    alt=""
  />
  <p className="flex items-baseline">
    <span className="mr-2 text-sm text-green-500">Aryan</span>
  </p>
</div>

<div>
  <h1>Orders History</h1>
  <h1>my address</h1>
  <h1>Buy later</h1>
  <h1>Liked products</h1>
  
</div>
  </div>;
}
