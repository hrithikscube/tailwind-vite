import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <div className='flex items-center gap-5'>
        <img className="w-[70px] h-[70px] cursor-pointer" src="/vite.svg" alt="vite_logo" />
        <p className="text-3xl">+</p>
        <img className="w-[90px] h-[90px] cursor-pointer" src="/tailwind.svg" alt="tailwind" />
      </div>

      <h1 className='mt-5 text-xl text-black font-medium'>Hello there,To Get Started</h1>
      <p className="text-base mt-2">Start editing the
        <span className='p-1 bg-[#f2f2f2] rounded-lg mx-1 text-base font-medium '>App.jsx</span> file</p>
    </div>
  )
}

export default Intro