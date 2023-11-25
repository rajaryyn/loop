import React from 'react'

export default function Title({title}) {
  return (
    <div className=''>
      <h1 className='text-2xl md:text-3xl font-semibold tracking-tight  mt-4 md:mt-14 flex justify-center'>{title}</h1>
    </div>
  )
}
