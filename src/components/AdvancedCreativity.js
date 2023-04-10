import React from 'react'

export default function AdvancedCreativity() {
    return (
        <div className='lg:flex justify-center w-[70%] mx-auto'>
            <div className='xsm:basis-[30%] basis-full md:my-20 my-10'>
                <h1 className='xsm:text-4xl text-3xl font-bold w-[100%] text-zinc-700 hover:text-zinc-500'>A team with creativity and an <span className='text-[#E75480]'>advanced</span>  imagination.</h1>
                <p className='text-[14px] text-gray-500 mt-8 w-[100%]'>Within 30 years of combined industry experience and a solution led philosophy, we pride overselves on offering a transparent, personalized recuritment services, no matter how complex you needs.</p>
                <p className='text-[14px] text-gray-500 mt-8 w-[100%]'>With a pan-european network that includes the most sought out businesses and it professionals in the market, you ask, we deliver.</p>
            </div>

            <div className='xsm:basis-[50%] basis-full grid lg:grid-rows-2 grid-rows-1 grid-flow-col xl1:justify-normal justify-center'>
                <img src="img/creativity/backdrop.jpg" className='w-[14rem] xsm:h-[18rem] h-[10rem] rounded-2xl hover:scale-90 transition-all ease-in-out duration-700 xl:mb-0' alt="" srcset="" />
                <img src="img/creativity/background.jpg" className='lg:w-[12rem] w-[14rem] lg:h-[15rem] xsm:h-[18rem] h-[9.5rem] rounded-2xl my-1 md:ml-24 mx-2 hover:scale-90 transition-all ease-in-out duration-700 xl1:ml-8' alt="" srcset="" />

                <img src="img/creativity/many-color.png" className='xl1:block hidden w-[12rem] h-[15rem] rounded-2xl ml-[-5.3rem] relative top-[6rem] hover:scale-90 transition-all ease-in-out duration-700' alt="" srcset="" />
                <img src="img/creativity/modern.png" className='xl1:block hidden w-[8rem] h-[10rem] rounded-2xl relative top-[3.3rem] right-[5.2rem] hover:scale-90 transition-all ease-in-out duration-700' alt="" srcset="" />
            </div>
        </div>
    )
}
