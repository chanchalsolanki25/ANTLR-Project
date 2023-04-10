import React from 'react'
import Cources from './Cources'

export default function Services() {
  return (
    <div className='md:my-auto my-10'>
      <div className='xsm:flex xsm:w-[90%] w-full'>
        <div className='xsm:basis-[70%] basis-full  text-center'>
          <h1 className='xsm:w-[40%] w-full lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl text-2xl font-bold opacity-70 mx-auto xsm:relative xsm:top-10 hover:opacity-50'>What can we do for you?</h1>
        </div>

        <div className='xsm:basis-[30%] basis-full xsm:my-auto my-2 flex justify-center'>
          <button className='xsm:relative xsm:left-[10%] md:top-[4.3rem] xsm:top-[3rem] bg-[#E75480] sm:w-40 xsm:w-32 w-[50%] xsm:mx-auto sm:py-3 py-2 rounded-full text-white hover:text-[#E75480] hover:bg-white duration-500 hover:font-bold'>Learn more</button>
        </div>
      </div>

      <div className='flex sm:w-[90%] w-full bg-gray-200 text-gray-400 md:text-[16px] text-[12px] rounded-r-xl'>
        <div className='flex sm:ml-[25%] xsm:ml-[16%] ml-3 lg:pt-20 pt-16 lg:pb-40 xsm:pb-36 pb-14'>
          <p className='w-6 h-2 mt-2 mx-1 rounded-full bg-[#E75480]'></p>
          <p>We speak to emotions and multiply conversions, reach and profits - we help your dreams take flight.</p>
        </div>

        <div className='flex mx-8 lg:pt-20 pt-16 lg:pb-40 xsm:pb-36 pb-14'>
          <p className='w-6 h-2 mt-2 mx-1 rounded-full bg-[#E75480]'></p>
          <p>Our offer covers a wide range of services which will help you capture the attension and the hearts of your audience.</p>
        </div>
      </div>
      <Cources/>
    </div>
  )
}
