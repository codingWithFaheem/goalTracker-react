import React from 'react'

const IntroTask = () => {
  return (
    <div className='md:w-[27.8rem] md:h-[6rem]
    rounded-3xl px-[1.2rem] py-[1rem]
    bg-gradient-to-r  from-[#022aaf] to-[#223796c9]
    '>
    <div className=' h-full px-5 flex '>
        <img src="./avatar.jpg" className=' object-contain h-[65px] rounded-full' alt="avatar" />
        <div className='w-[19rem] h-[80px] pl-[0.8rem] '>
            <div>
                <p className='appFont descFont  text-[24px] text-[#CDC6F5] text-center mr-6  leading-5'>Wellcome Back </p>
                <p className='appFont  text-[28px] text-[#ffffff] ml-2  tracking-wider font-bold'>👋 Faheem Khan</p>
            </div>
          

        </div>
    </div>
    </div>
  )
}

export default IntroTask ;