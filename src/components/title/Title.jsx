import React from 'react'

export default function Title({title}) {
  return (
    <div>
      <h1 className='text-2xl md:text-3xl font-semibold tracking-tight justify-center mt-4 md:mt-14 flex'>{title}</h1>
    </div>
  )
}
