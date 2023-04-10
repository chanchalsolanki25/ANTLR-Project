import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1 className='text-zinc-800 hover:text-zinc-500 md:w-[23%] w-[50%] md:text-4xl sm:text-3xl text-2xl font-bold mx-auto my-10'>You want to <span className='text-[#E75480]'>grow</span>. We're here to help.</h1>
            <div className='flex sm:flex-row flex-col w-[80%] mx-auto justify-center'>
                <div className='basis-[50%] '>
                    <h1 className='text-2xl font-bold text-zinc-800 hover:text-zinc-500'>Get in <span className='text-[#E75480]'>touch</span> with us.</h1>
                    <div className='flex text-zinc-500 my-7 w-[90%]'>
                        <p className='w-7 h-2 mt-2 mx-1 rounded-full bg-[#E75480]'></p>
                        <p>Creating a highly, interactive, animated masterpiece along side a sleek full rebrand for the change management experts at kallyas.</p>
                    </div>

                    <div className='flex text-zinc-500 my-7 w-[90%]'>
                        <p className='w-6 h-2 mt-2 mx-1 rounded-full bg-[#E75480]'></p>
                        <p>Our offer covers a wide range of services which will help you capture the attention and hearts for your audience.</p>
                    </div>

{/* Social media */}
                    <div className='sm:flex justify-center hidden'>
                        <section className='basis-[30%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-yellow-500 rounded-full ml-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <h1 className='font-bold text-xl text-yellow-500'>Phone</h1>
                            <p className='text-gray-400 text-[12px] mt-2'>+531 7622 522</p>
                            <p className='text-gray-400 text-[12px]'>+215 8211 12</p>
                        </section>

                        <section className='basis-[30%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-emerald-500 rounded-full ml-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <h1 className='font-bold text-xl text-emerald-500'>Email</h1>
                            <p className='text-gray-400 text-[12px] mt-2'>info@company.com</p>
                            <p className='text-gray-400 text-[12px]'>support@help.com</p>
                        </section>

                        <section className='basis-[30%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-red-500 rounded-full ml-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <h1 className='font-bold text-xl text-red-500'>Location</h1>
                            <p className='text-gray-400 text-[12px] mt-2'>wall St. NYC. 36,</p>
                            <p className='text-gray-400 text-[12px]'>97415, 4C</p>
                        </section>
                    </div>
                </div>

                <div className='basis-[40%]'>
                    <form action="" className='flex flex-col sm:my-auto my-10'>
                        <input type="text" name="" id="" placeholder='Your Name' className='m-2 bg-white rounded-full px-4 py-2'/>
                        <input type="email" name="" id="" placeholder='Email address' className='m-2 bg-white rounded-full px-4 py-2'/>
                        <input type="text" name="" id="" placeholder='Subject' className='m-2 bg-white rounded-full px-4 py-2'/>
                        <textarea name="" id="" cols="30" rows="4" placeholder='Message' className='m-2 bg-white rounded-2xl px-4 py-2'></textarea>
                        <button className='bg-[#E75480] rounded-full mx-2 my-4 text-white font-semibold py-2'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
