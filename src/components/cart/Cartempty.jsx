import React from 'react'
import emptycartt from '../../../public/emptycartt.png'
import Image from 'next/image'

const Cartempty = () => {
  return (
    <div className=' flex flex-col items-center justify-center h-screen px-11 text-center gap-7'>
      <Image src={emptycartt} alt="emptycart" className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110' />
      <h1 className='text-slate-900 font-semibold'>Your cart is empty</h1>
    </div>
  )
}

export default Cartempty