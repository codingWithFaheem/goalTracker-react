import React from 'react'
import '../App.css';

import {AiFillHome} from 'react-icons/ai' ;
import {BsFillBarChartLineFill} from 'react-icons/bs';
import {IoHeadset} from 'react-icons/io5' ;
import {BiSun} from 'react-icons/bi' ;
import {BsCalendar3} from 'react-icons/bs' ;

// import {BsFillMoonStarsFill} from 'react-icons/bs' ;
 


const SidebarNav = () => {
  return (
    <div className='flex flex-col items-center   w-[26%]  h-full  bg-[#1f2274] px-2 pt-5 rounded-bl-[22px] rounded-tl-[22px]'>
    <div>
               <div className=' flex items-center w-[120px] '>
                    <img src='./logo.png'  className=' object-contain h-10 '/>
                    <p className='pattayaFont tracking-wider  font-bold text-[18px] text-[#CDC6F5] mr-2'>Taskify</p>
                 </div>
    </div>
                <div className='w-[100%] flex flex-col items-center justify-evenly h-[23rem] '>
                     <div className='flex items-center justify-center w-[8.5rem] py-3 cursor-pointer rounded-2xl bg-[#b3abdf] appFont text-center'>
                       <span className='appFont text-[19px] font-bold'>Home</span>
                       <AiFillHome className='text-[26px] text-[#1a1b44]  ml-[15px]'/>
                     </div>
                     <div className='flex items-center justify-center w-[8.5rem] py-3 cursor-pointer rounded-2xl bg-[#b3abdf] appFont text-center'>
                       <span className='appFont text-[19px] font-bold'>Progress</span>
                       <BsFillBarChartLineFill  className='text-[28px] text-[#1a1b44] ml-[15px]'/> 
                     </div>
                     <div className='flex items-center justify-center w-[8.5rem] py-3 cursor-pointer rounded-2xl bg-[#b3abdf] appFont text-center'>
                       <span className='appFont text-[19px] font-bold'>Plans</span>
                       <BsCalendar3  className='text-[28px] text-[#1a1b44] ml-[15px]'/>
                     </div>
                     <div className='flex items-center justify-center w-[8.5rem] py-3 cursor-pointer rounded-2xl bg-[#b3abdf] appFont text-center'>
                       <span className='appFont text-[19px] font-bold'>Lofi</span>
                       <IoHeadset  className='text-[28px] text-[#1a1b44] ml-[15px]'/>
                     </div>
                     
                    
                   </div> 
    </div>
  )
}

export default SidebarNav


// flex flex-col items-center justify-center gap-10 