import ProductImg from '@/components/productimg/ProductImg'
import React from 'react'

export default function page({params}) {
  const product = params.productid

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-7xl">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ProductImg images={product.img} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
