import React from 'react'
import PremiumProducts from './PremiumProducts'

export default function PremiumProjects() {
  return (
    <div>
      <h1 className='md:text-5xl sm:text-4xl text-3xl  text-neutral-700 font-bold  md:w-[40%] sm:w-[60%] w-[80%] mx-auto hover:text-neutral-400 text-center'>Take a look at some <span className='text-[#E75480]'>premium</span> projects.</h1>
      <PremiumProducts/>
    </div>
  )
}
