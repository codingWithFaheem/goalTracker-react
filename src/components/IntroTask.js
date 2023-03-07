import React from 'react'

const IntroTask = () => {
  return (
    <div className='h-[11rem] bg-gradient-to-r from-[#222688] to-purple-500 rounded-3xl px- py-[1.8rem]'>
    <div className=' h-full px-5 flex '>
        <img src="./avatar.jpg" className=' object-contain h-[80px] rounded-full' alt="avatar" />
        <div className=' w-[53%] h-[80px] pl-[0.8rem] pt-[0.8rem]'>
            <p className='appFont descFont text-[28px] text-[#CDC6F5]  leading-5'>Hey 👋 <span className='text-[#ffffff]  tracking-wider font-bold'>Faheem Khan</span></p>
            <p className='appFont descFont text-[22px] text-[#CDC6F5] ml-[1.8rem]'>set your<span className='text-[#ffffff]  tracking-wider font-bold'> Week 02 </span> Task</p>

        </div>
    </div>
    </div>
  )
}

export default IntroTask ;