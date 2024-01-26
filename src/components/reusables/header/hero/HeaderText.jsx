import React from 'react'

export const HeaderText = () => {
  return (
    <div className='w-1/4 text-xs md:text-lg relative mt-4 h-full flex-col items-center flex justify-center bg-white'>
        <h3 className='pb-2 text-center font-bold'>Live for class</h3>
        <h1 className='text-pink-500 text-center'> 
          <span className="font-bold"> Fashion Up Your Look, </span>
          <br /> Mobile Up Your Space
        </h1>
        <button className='shadow-lg px-4 shadow-pink-500/50'>Explore</button>
    </div>
  )
}
