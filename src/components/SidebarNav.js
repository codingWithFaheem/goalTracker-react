import React from 'react'
import '../App.css';
import { AiFillHome } from 'react-icons/ai';
import { BsFillBarChartLineFill } from 'react-icons/bs';
import { IoHeadset } from 'react-icons/io5';
import { BsCalendar3 } from 'react-icons/bs';

// import { BiSun } from 'react-icons/bi';
// import {BsFillMoonStarsFill} from 'react-icons/bs' ;



const SidebarNav = () => {
	return (
		<div className='flex flex-col items-center   w-[100%] md:w-[16%] lg:w-[12%]  h-full  bg-[#182881] px-2 pt-5 rounded-bl-[12px] rounded-tl-[12px]'>
			<div>
				<div className=' flex items-center w-[120px] '>
					<img src='./logo.png' className=' object-contain h-10 ' />
					<p className='logoFont tracking-wider  font-bold text-[18px] text-[#CDC6F5] mr-2'>Taskify</p>
				</div>
			</div>
			<div className='w-[100%] flex flex-col items-center justify-evenly h-[23rem] '>
				<div className='flex items-center justify-center gap-x-2 w-[8.5rem] py-3 cursor-pointer rounded-2xl bg-[#250f5899] appFont text-center'>
					<AiFillHome className='text-[22px] text-[#c5d0ee] ' />
					<span className='appFont text-[16px] font-bold text-[#c5d0ee] '>Home</span>				</div>
				<div className='flex items-center justify-center gap-x-2 w-[8.5rem] py-3 cursor-pointer rounded-2xl bg-[#250f5899] appFont text-center'>
					<BsFillBarChartLineFill className='text-[22px] text-[#c5d0ee] ml-[15px]' />
					<span className='appFont text-[16px] font-bold text-[#c5d0ee] '>Progress</span>				</div>
				<div className='flex items-center justify-center gap-x-2 w-[8.5rem] py-3 cursor-pointer rounded-2xl bg-[#250f5899] appFont text-center'>
					<BsCalendar3 className='text-[22px] text-[#c5d0ee] ml-[15px]' />
					<span className='appFont text-[16px] font-bold   text-[#c5d0ee]'>Plans</span>				</div>
				<div className='flex items-center justify-center gap-x-2 w-[8.5rem] py-3 cursor-pointer rounded-2xl bg-[#250f5899] appFont text-center'>
					<IoHeadset className='text-[22px] text-[#c5d0ee] ml-[15px]' />
					<span className='appFont text-[16px] font-bold text-[#c5d0ee]  '>Lofi</span>				</div>


			</div>
		</div>
	)
}

export default SidebarNav


// flex flex-col items-center justify-center gap-10 