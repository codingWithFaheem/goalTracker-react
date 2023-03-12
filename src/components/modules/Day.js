import React from 'react'
import {Link} from 'react-router-dom';
const Day = ({data}) => {
      const currentDate =  new Date().getDate().toString() ;
      const  showActiveDay =  () => {
               
      }
  return (
    <>
     {
            data.map(item => {
              return ( <Link to={item.id}>
      <div className={` flex flex-col items-center  md:w-[3.5rem]  md:h-[2.9rem]
                             md:px-[0.2rem]   
                         ${item.day ===  currentDate ? 'bg-gradient-to-r from-[#42bcc5] to-[#174cae]'  :' bg-gradient-to-r  from-[#070e52] to-[#00093f] '}
                            rounded-[12px] 
                          cursor-pointer drop-shadow-2xl shadow-2xl
                          hover:transform  transition-transform hover:scale-125`}
                          key = {item.id} 
                          onClick
                          >
                        <p className='appFont  md:text-[0.5rem] text-white leading-4 '>Day</p>
                        <p className={`appFont   md:text-[0.9rem] font-bold  ${item.day ===  currentDate  ? 'text-[#1b213d] text-[18px]' :'text-[#98dcec]'}`}>{item.day}</p>
                </div>
        </Link>
            )})}
    </>
  )
}

export default Day ;


