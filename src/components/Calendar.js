import React from 'react'
import Day from './modules/Day'

const Calendar = ({data}) => {
  const currentDate =  new Date().getDate().toString() ;

  return (
    <div className='   lg:w-[46rem] md:[30rem] lg:h-[35rem] md:h-[23rem]
     px-[1rem] pt-[1rem] pb-[2.5rem] 
    bg-gradient-to-b  from-[#022aaf] to-[#223796c9]
    rounded-2xl'> 
        <div className='flex justify-between'> 
          <img src="./calendar.png" className='object-contaub lg:h-[90px] md:h-[70px]' alt="" />
                <p className=' appFont descFont  
                                lgtext-[22px] md:text-[16px] text-[#d7d1f7] 
                               w-[11rem] h-[4rem]  leading-7 text-center'>Set your task <br /> <span className='appFont  lg:text-[40px] md:text-[28px] text-[#ffffff] ml-2  tracking-wider font-bold'> Day {currentDate}  </span>  </p>
                
            </div>
                <div className='flex flex-wrap   items-center justify-start gap-2 pl-[1.2rem]  mt-4
                                  
                                   '>

                  
                     <Day data = {data}/>
                  </div>
      </div>
  )
}

export default Calendar



