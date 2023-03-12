import React from 'react'
import '../App.css'
const DailyTask = () => {

  return (
      <div className=' w-[22rem] h-[25rem]  px-4 py-2 rounded-[22px]
      bg-gradient-to-b  from-[#022aaf] to-[#223796c9]
      flex flex-col items-center justify-center gap-y-3
      '>
        <div className=" h-[6rem] w-full">
                <p className="text-[#9dc3e9] text-center text-[22px] ">Add Task to </p>
                <p className="text-white text-center text-5xl text-gradient-to-r from-[#123] to-[#123]">Taskify</p>
        </div>
         <div className="h-[13rem] w-full">
                  <div className="border-[4px] border-[#030a36] py-2 px-4  w-full h-[4rem] rounded-[32px]">
                      <input className='  
                      bg-[#022aaf]  text-[#bdd1e6]  font-bold
                      outline-none border-none
                       py-2 w-full
                       
                       ' type="text" placeholder='' name="" id="" />
                  </div>
            <button className="py-4 w-full h-[4rem] rounded-[32px] mt-4 
            text-[22px] text-white font-bold cursor-pointer
             bg-gradient-to-tr from-[#0c144d] to-[#030a36]">
                  Add Task
            </button>

          </div>
    </div>
  )
}

export default DailyTask ;