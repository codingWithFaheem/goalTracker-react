import React from 'react'
import {Link} from 'react-router-dom';
const Day = ({data}) => {
      const currentDate =  new Date().getDate().toString() ;
  return (
    <>
     {
            data.map(item => {
              return ( <Link to={item.id}>
      <div className={` flex flex-col items-center lg:w-[6rem] md:w-[3.5rem] lg:h-[4.9rem] md:h-[2.9rem]
                              lg:px-[0.6rem] lg:py-[0.8rem]  md:px-[0.2rem]   
                         ${item.day ===  currentDate ? 'bg-gradient-to-r from-[#42bcc5] to-[#b90ebe]'  :' bg-gradient-to-r  from-[#070e52] to-[#00093f] '}
                         lg:rounded-[22px]   rounded-[12px] 
                          cursor-pointer drop-shadow-2xl shadow-2xl
                          hover:transform  transition-transform hover:scale-125`}
                          key = {item.id} >
                        <p className='appFont lg:text-[1rem] md:text-[0.5rem] text-white leading-4 '>Day</p>
                        <p className='appFont lg:text-[1.7rem]  md:text-[0.9rem] text-[#98dcec] font-bold'>{item.day}</p>
                </div>
        </Link>
            )})}
    </>
  )
}

export default Day ;



