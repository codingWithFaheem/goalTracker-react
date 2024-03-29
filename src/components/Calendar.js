import React from 'react'
import Day from './modules/Day'

const Calendar = ({data}) => {
  const currentDate =  new Date().getDate().toString() ;
  return (
    <div className='    md:h-[24rem]
     px-[1rem] py-[1rem] pb-[2.5rem] 
    bg-gradient-to-b  from-[rgb(2,42,175)] to-[#223796c9]
    rounded-2xl'> 
        <div className='flex  justify-between'> 
          <img src="./calendar.png" className='object-contaub md:h-[70px]' alt="" />
                <p className=' appFont descFont  
                                 md:text-[16px] text-[#d7d1f7] 
                               w-[11rem] h-[4rem]  leading-7 text-center'>Set your task <br /> <span className='appFont   md:text-[28px] text-[#ffffff] ml-2  tracking-wider font-bold'> Day {currentDate}  </span>  </p>
                
            </div>
                <div className='flex flex-wrap   items-end justify-start gap-2 pl-[1.2rem]  mt-4
                                  
                                   '>

                  
                     <Day data = {data}/>
                  </div>
      </div>
  )
}

export default Calendar



