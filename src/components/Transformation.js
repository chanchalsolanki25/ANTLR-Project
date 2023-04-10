import React from 'react'

export default function Transformation() {
    return (
        <>
            <div className='flex sm:flex-row flex-col sm:w-[60%] w-full mx-auto xsm:my-20 my-10  shadow-2xl py-10'>
                <div className='basis-[50%] relative sm:left-20 lg:top-10 top-5 sm:mx-auto md:text-left text-center'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-zinc-700 hover:text-zinc-500 md:w-[90%] w-[100%] z-40'>Digital <span className='text-[#E75480] lg:text-6xl md:text-5xl sm:text-4xl text-3xl' >solution</span> and transformation.</h1>
                    <p className='xsm:w-[70%] w-full sm:my-10 my-8 text-zinc-500 md:text-left text-center'>We support our client's online presence and expertly implement sales and promotion stretegies. We believe in the power of online marketing and all our interactive services around it.</p>
                </div>

                <div className='lg:basis-[30%] sm:basis-[40%] basis-full lg:w-[60%] w-[80%] z-[-1] bg-gray-200 rounded-2xl lg:px-8 lg:py-4 md:p-4 p-6  md:h-[20rem] h-[18rem]  dottedBackground relative lg:top-10 md:top-20 sm:top-32 top-5 md:ml-auto sm:ml-2 mx-auto'>
                    <div className='w-28 xsm:w-24 sm:w-20 md:w-28 sm:h-20 md:h-28 py-3 bg-emerald-500 rounded-tr-full'>
                        <div className=' w-24 h-24 sm:w-16 md:w-24 md:h-24 sm:h-16 mx-auto rounded-full bg-indigo-900'></div>
                    </div>
                    <div className='w-36 xsm:w-32 sm:w-28 md:w-36 md:h-36 sm:h-28  py-5 bg-emerald-500 float-right sm:mt-8 my-1 rounded-bl-full'>
                        <div className='w-28 h-28 md:w-28 md:h-28 sm:w-24 sm:h-24  rounded-full bg-[#E75480] '></div>

                    </div>

                </div>
            </div>
        </>
    )
}
