import React from 'react'
import Day from './modules/Day'
// import {Route} from 'react-router-dom';
const DaysTask = () => {
  return (
    <div className='m-auto w-[34rem] h-[29rem] relative'>

    <div className=' flex flex-wrap justify-center gap-2  p-[0.2rem]'>
           <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </div>
    </div>

  )
}

export default DaysTask




{/*
      <div className='absolute w0dt'>
      </div>
        <div className='h-[8rem] bg-gradient-to-r from-[#222688] to-purple-500 rounded-tl-3xl rounded-tr-3xl px- py-[1.8rem]'>
        </div> */}