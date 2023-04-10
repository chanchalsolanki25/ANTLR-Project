import React from 'react'

export default function ProgressPoll() {
    return (
        <div div className='flex'>

            <div className='basis-[40%] xsm:absolute  xxl:top-[70%] lg:top-[77%] md:top-[70%] sm:top-[62%] top-[65%] xsm:left-[20%] flex flex-col shadow-2xl bg-slate-50 rounded-2xl md:96 h-36 lg:w-[10%] w-28 mx-1 py-3 cursor-pointer'>
                <div className='flex justify-center'>
                    <h1 className='text-lg text-amber-500 font-bold'>92%</h1>
                    <span className='text-2xl text-teal-500 mx-1'>&#129081;</span>
                </div>
                <p className='text-slate-300 text-center'>Growth rate of companies</p>
                <img src="img/poll.png" alt="" srcset="" className='h-10 w-10 mx-auto' />
            </div>

            <div className='basis-[60%]  grid grid-rows-2 xsm:grid-flow-col grid-flow-row h-36 lg:w-96 md:w-80 w-72 mx-1 shadow-2xl bg-slate-50 rounded-2xl xsm:absolute xxl:top-[69%] lg:top-[77%] md:top-[70%] sm:top-[62%] top-[65%] lg:right-[25%] right-[18%] cursor-pointer'>
                <div className='row-span-2 xsm:flex items-center hidden'><p className='md:h-16 h-12 md:w-16 w-12 bg-[#E75480] rounded-full mx-4'></p>
                </div>
                <span className='text-xl text-teal-500 font-bold text-center mt-3'>+3.251%</span>
                <span className=' col-span-2 text-slate-300 text-center'>Percentage of monthly growth of the company</span>
                <div className=''><img src="img/poll.png" alt="" srcset="" className='h-10 w-14 mx-auto mt-3' />
                </div>

            </div>
        </div>
    )
}
