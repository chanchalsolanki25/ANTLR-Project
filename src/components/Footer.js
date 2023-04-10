import React from 'react'

export default function Footer() {
    const navMenus = ['Browse Topis', 'How It works', 'FAQ', 'Support'];
    const social = ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'];

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E75480" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,117.3C640,96,800,96,960,106.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className=' bg-[#E75480]'>
                <div className='text-center'>
                    <h1 className='text-4xl text-white font-bold'>Lets Do this!</h1>
                    <p className='text-zinc-200 my-6'>Lets get to the work on the common project!</p>
                    <p className='text-zinc-200 my-6 w-[60%] mx-auto'>You're curious what we can do for your business? You want to benifit from the online marketing or you need graphic design services in your company? You plan to open an online store carry out an adwords compaign?</p>
                    <button className='bg-white text-[#E75480] py-2 px-5 rounded-full font-bold my-2'>Write to us!</button>
                </div>

                <div className='text-white flex sm:w-[90%] w-full mx-auto py-8'>
                    {/* logo */}
                    <section className='sm:flex hidden basis-[20%] lg:pl-20 md:pl-10 sm:pl-5'>
                        <p className='lg:h-5 h-4 lg:w-8 w-6 bg-gray-300 b rounded-r-full lg:mt-2 mt-1 mx-1 sm:mx-2'></p>
                        <h1 className='lg:text-[1.5rem] text-[1.2rem] font-bold cursor-pointer'>KALLYAS</h1>
                    </section>

                    {/* Menus */}
                    <section className='sm:basis-[25%] basis-[20%] mx-auto'>
                            <ul>
                                {navMenus.map((navitem => {
                                    return (<li className='list-none sm:m-3 hover:underline lg:px-4 px-2 sm:text-[1.1rem] text-[1rem] cursor-pointer'>{navitem}</li>)
                                }))}
                            </ul>
                    </section>

                    {/* Social media */}
                    <section className='sm:basis-[25%] basis-[20%] mx-auto'>
                            <ul>
                                {social.map((socialapp => {
                                    return (<li className='list-none hover:underline sm:m-3 lg:px-4 px-2 sm:text-[1.1rem] text-[1rem] cursor-pointer'>{socialapp}</li>)
                                }))}
                            </ul>
                    </section>
                    {/* Location */}
                    <section className='sm:basis-[25%] basis-[20%] mx-auto'>
                        <ul>
                            <li className='list-none sm:m-3 lg:px-4 px-2 sm:text-[1.1rem] text-[1rem] cursor-pointer hover:underline'>Wall st, NYC 36, 97415 4C</li>
                            <li className='list-none sm:m-3 lg:px-4 px-2 sm:text-[1.1rem] text-[1rem] cursor-pointer hover:underline'>+531 7622 522; +215 8211 12</li>
                            <li className='list-none sm:m-3 lg:px-4 px-2 sm:text-[1.1rem] text-[1rem] cursor-pointer hover:underline'>info@company.com</li>
                            <li className='list-none sm:m-3 lg:px-4 px-2 sm:text-[1.1rem] text-[1rem] cursor-pointer hover:underline'>support@help.com</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}
