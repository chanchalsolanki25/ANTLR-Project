import React from 'react'

export default function PremiumProducts() {
    const list = [' Content Optimization', ' Branding Stretegy', 'Better than normal ads']
    return (
        <div className='my-20 flex sm:flex-row flex-col justify-center'>

            {/* Project-1 */}
            <div className='flex sm:w-[30%] w-[90%] mx-auto sm:my-auto my-1 md:h-[18rem] h-60 shadow-2xl rounded-br-[2rem] transform hover:translate-y-10 duration-500 hover:opacity-60 cursor-pointer '>
                {/* experince - section */}
                <section className='basis-[50%] '>
                    <h1 className='lg:text-xl md:text-lg text-sm text-slate-900 font-medium lg:my-6 my-0'>Our company has many years of experience!</h1>
                    <ul className=' font-bold'>
                        {list?.map(listItem => {
                            return (
                                <li className='flex lg:my-2 lg:text-[16px] md:text-[14px] text-[10px] my-1 hover:scale-110 ease-in-out transition-all duration-500 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mx-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {listItem}</li>

                            )
                        })}

                    </ul>
                </section>

                {/* Image-section */}
                <section className='basis-[50%] h-auto overflow-hidden rounded-br-[2rem]'>
                    <img src="img/project1.jpeg " className='hover:scale-125 h-full transition-all ease-in-out duration-700 w-full' alt="products" srcset="" />
                </section>
            </div>

            {/* Project-2 */}
            <div className='grid grid-rows-3 grid-flow-col sm:w-[30%] w-[90%] mx-auto sm:my-auto my-1 sm:mx-3 rounded-br-[2rem] shadow-2xl transform hover:translate-y-10 duration-500 hover:opacity-60 cursor-pointer md:h-auto h-60'>
                <section className='col-span-2 font-bold text-2xl flex items-center px-5 text-[#848475] bg-[#c9c9b6]'>
                    Our Projects
                </section>
                <section className=' row-span-2 w-[60%] h-[5rem] text-stone-300 font-bold p-2 lg:text-[15px] md:text-[12px] text-[10px] hover:text-stone-400 duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit dolorem, cumque odio quis delectus explicabo? Asperiores!</section>
                <section className='row-span-2 w-[100%]'>
                    <img src="img/living-room.jpg" className='md:w-[6rem] w-[4rem] md:h-[6rem] h-[4rem] rounded-full relative md:top-[-2rem] top-[-1.5rem] md:left-[-6rem] left-[-3rem] border-[5px] border-white hover:scale-110 duration-500' alt="" srcset="" />
                    <img src="img/flowers.jpg" className='md:w-[6rem] w-[4rem] md:h-[6rem] h-[4rem] rounded-full relative md:left-[-1rem] left-[-1rem] md:top-[-2rem] right-[1rem] hover:scale-110 duration-500' alt="" srcset="" />
                </section>
            </div>

            {/* Project-3 */}
            <div className='sm:w-[30%] w-[90%] mx-auto sm:my-auto my-1 md:h-auto h-60 sm:mx-3 rounded-br-[2rem] shadow-2xl transform hover:translate-y-10 duration-500 hover:opacity-60 bg-slate-50 cursor-pointer '>
                <div className='mx-2'>
                    <h1 className='md:text-3xl text-2xl mt-5 font-bold text-neutral-800'>Latest Projects</h1>
                    <p className='text-zinc-500 md:text-[16px] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex justify-evenly sm:my-4 my-2'>
                    <img src="img/project3.jpg" className='md:h-[10rem] sm:h-[8rem] h-[6rem] md:w-[8rem] sm:w-[6rem]
                    w-[4rem] xl:relative xl:top-[2rem]' alt="" srcset="" />
                    <img src="img/project31.jpg" className='md:h-[10rem] sm:h-[8rem] h-[6rem] md:w-[8rem] sm:w-[6rem]
                    w-[4rem] xl:mt-5' alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}


