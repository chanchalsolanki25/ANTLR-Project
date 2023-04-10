import React from 'react'

export default function BusinessNeed() {
  return (
    <div className='flex justify-end'>
    <div className='flex sm:flex-row flex-col bg-[#E75480] xsm:w-[90%] w-full xsm:rounded-l-3xl my-6'>
      <div className='basis-[25%] md:grid md:grid-rows-2 md:grid-flow-col my-8 xsm:mx-20 hidden'>
        <div className='bg-emerald-500 xl1:h-40 lg:h-[9.5rem] h-[7.5rem] xl1:w-40 lg:w-[9.5rem] w-[7.5rem] rounded-full shadow-2xl'></div>
        <div className='bg-yellow-500 xl1:h-40 lg:h-[9.5rem] h-[7.5rem] xl1:w-40 lg:w-[9.5rem] w-[7.5rem]  shadow-2xl'></div>
        <div className='bg-blue-700 xl1:h-40 lg:h-[9.5rem] h-[7.5rem] xl1:w-40 lg:w-[9.5rem] w-[7.5rem]  rounded-tr-full shadow-2xl xl::ml-[-12px]'></div>
        <div className='bg-purple-500 xl1:h-40 lg:h-[9.5rem] h-[7.5rem] xl1:w-40 lg:w-[9.5rem] w-[7.5rem]  rounded-full shadow-2xl xl:ml-[-12px]'></div>
      </div>
      <div className='md:basis-[50%] basis-full text-center flex flex-col justify-center'>
        <h1 className='lg:text-4xl xsm:text-3xl text-2xl text-slate-100 xsm:w-[50%] w-full font-bold'>Everything your business needs.</h1>
        <p className='text-slate-200 xsm:my-10 my-2 xsm:w-[70%] w-full'>Our community is a collaboration hub, where the best people and right companies come together, helping to each other to be very best at business.</p>
      </div>
    </div>
    </div>
  )
}
