import React from 'react'

function Navbar() {
    const navMenus = ['Browse Topis', 'How It works', 'FAQ', 'Support'];

    return (
        <>
            <div className='bg-[#E75480] sm:w-[100vw]'>
                <div className='flex xsm:flex-row flex-col text-slate-200 mb-4' style={{ fontFamily: 'Ubuntu, sans-serif' }}>

                    {/* logo */}
                    <div className='flex basis-[40%] xsm:pl-20 mx-auto xsm:py-8 py-2'>
                        <p className='lg:h-5 h-4 lg:w-8 w-6 bg-gray-300 b rounded-r-full lg:mt-2 mt-1 mx-2'></p>
                        <h1 className='md:text-[1.5rem] xsm:text-[1.2rem] text-[1rem] font-bold cursor-pointer'>KALLYAS</h1>
                    </div>

                    {/* Menus */}
                    <div className='xsm:basis-[60%] basis-[100%] xsm:mx-0 mx-auto xsm:py-8 py-2'>
                        <ul className='flex  xsm:absolute xsm:right-8 '>
                            {navMenus.map((navitem => {
                                return (<li className='list-none xsm:mx-2 mx-1 lg:px-4 xsm:px-2 px-1 md:text-[1.1rem] xsm:text-[1rem] text-[0.8rem] cursor-pointer hover:text-[#E75480] hover:bg-white rounded-3xl'>{navitem}</li>)
                            }))}
                        </ul>
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='md:text-[2rem] xsm:text-[1.5rem] text-[1rem] font-bold text-white xl:w-[30%] xsm:w-[40%] w-[70%]  mx-auto xsm:my-auto my-3' style={{ fontFamily: 'Roboto, sans-serif' }}>Premium Services from Premium Agency</h1>
                    <p className='text-white xsm:w-[60%] w-[80%] md:text-[16px] xsm:text-[14px] text-[10px] mx-auto lg:py-5 py-2'>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                </div>
                <div className='flex justify-center py-4'>
                    <input type='text' placeholder='e.g. SEO, Design, Programming' name="searchBox" id="searchBox" className='bg-white md:w-[40%] xsm:w-[60%] w-[90%] xsm:h-12 h-10 xl:py-8 lg:py-6 py-1 xsm:text-20 text-sm text-slate-200 rounded-full pl-5' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400 relative xl:top-[20px] top-[12px]  right-[50px]  xsm:block hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E75480" fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </>
    )
}

export default Navbar
