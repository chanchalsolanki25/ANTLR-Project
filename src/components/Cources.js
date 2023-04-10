import React from 'react'

export default function Cources() {
    const data = [
        { title: 'SEO', color: '#000C66', image: 'img/seo.png' },
        { title: 'DESIGN', color: '#F69770', image: 'img/design.jpg' },
        { title: 'PROGRAMMING', color: '#444444', image: 'img/programming.png' },
        { title: 'DEVELOPMENT', color: '#A3EBB1', image: 'img/development.png' }
    ]
    return (
        <div>
            <div className='xsm:flex grid grid-rows-2 grid-flow-col lg:w-[80%] sm:w-[90%] w-[95%] xsm:justify-end justify-center xsm:relative xsm:top-[-7rem] xsm:my-auto my-4'>
                {data?.map(item => {
                    return (
                        <div src='img/seo.png' className='lg:w-[12rem] sm:w-[9rem] w-[7rem] lg:h-[15rem] sm:h-[12rem] h-[10rem] rounded-xl shadow-2xl lg:text-xl sm:text-sm text-xs font-bold pt-7 sm:px-5 px-2 text-white z-10 mx-4 cursor-pointer hover:scale-110 duration-700 my-2' style={{ background: item.color }}
                        >{item.title}
                            <img src={item.image} alt='services' className='md:w-[12rem] sm:w-[10rem] w-[8rem] lg:h-[10rem] md:h-[8rem] sm:h-[7rem] h-[6rem]' />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
