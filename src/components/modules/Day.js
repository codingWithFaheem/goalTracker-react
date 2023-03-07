import React from 'react'

const Day = () => {
  return (
    <div className=' bg-gradient-to-r from-[#222688] to-purple-500 rounded-[22px] w-[8rem] h-[7.4rem]  first-letter:\] py-1.5 px-[0.2rem] drop-shadow-2xl'>
            <div className='h-[4.2rem] flex flex-col items-center  py-2'>
                <p className='appFont text-[1.3rem] text-white leading-3  mt-2'>DAY</p>
                <p className='appFont text-[2.4rem] text-white font-bold'>02</p>

            </div>
            <div className='h-[2rem] flex items-center justify-center gap-2'>
                    <p className='text-[12px] text-white m-auto'>
                      points
                    <span className='text-[18px] font-bold text-white m-auto ml-2'>3/5</span>
                    </p>
                    

            </div>
    </div>
  )
}

export default Day