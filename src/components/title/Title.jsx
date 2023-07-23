import React from 'react'

export default function Title({title}) {
  return (
    <div>
      <h1 className='text-3xl font-semibold tracking-tight justify-center mt-14 flex'>{title}</h1>
    </div>
  )
}
