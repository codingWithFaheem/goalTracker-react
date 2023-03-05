import React from 'react'
import Week from './modules/Week'

const WeekTaskCom = () => {
  return (
    <div className=' flex flex-wrap gap-y-6 justify-between  h-[15.4rem] w-[90%] mt-6 px-[1rem]' >
        {/* <Week  bgcolor= "bg-gradient-to-r from-[#222688] to-purple-500"/> */}
         <Week bgcolor="bg-gradient-to-r from-[#9b9cf3] to-[#f1a8f3]  "/>
       {/* <Week  bgcolor="bg-gradient-to-r from-[#9b9cf3] to-[#f1a8f3]  "/>
        <Week  bgcolor="bg-gradient-to-r from-[#9b9cf3] to-[#f1a8f3] "/> */}

        
    </div>
  )
}

export default WeekTaskCom


