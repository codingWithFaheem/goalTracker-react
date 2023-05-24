import React, { useState } from 'react'

const TaskSection = ({tasks , onCompleteTask}) => {
  const  [time ,setTime] = useState({})
  const d= new Date()
  let currentHour  = d.getHours().toString() 
  let currentMinute = d.getMinutes().toString() ; 
         currentHour =   currentHour ==="12" ?  "00"  :   currentHour ==="13" ? "01" : currentHour === "14" ? "02" : currentHour === "15" ? "03" : currentHour === "16" ? "04" : currentHour === "17" ? "05" : currentHour === "18" ? "06" : currentHour === "19" ? "07" : currentHour === "20" ? "08" : currentHour === "21" ? "09" : currentHour === "22" ? "10" : currentHour === "23" ? "11" : currentHour ;
         currentMinute =   currentMinute ==="1" ?  "01"  :   currentMinute ==="2" ? "02" : currentMinute === "3" ? "03" : currentMinute === "4" ? "04" : currentMinute === "5" ? "05" : currentMinute === "6" ? "06" : currentMinute === "7" ? "07" : currentMinute === "8" ? "08" : currentMinute === "9" ? "09" : currentMinute
   const   startingTime = `${currentHour} : ${currentMinute}`
   const   finishingTime = `${parseInt(currentHour == 11 ? -1 : currentHour) +2} : ${currentMinute} `
   const startToFinishTime = ` Timing  : ${startingTime}  to ${finishingTime}`
   const handleCompleteTask = (index) => {
    // Call the `onCompleteTask` callback function with the index of the completed task
    onCompleteTask(index);
    
  };
  
  return (
    <>
         { 
         tasks.length > 0 && tasks.map((task , index) => {
            return(
            <div className={`
            w-[18rem] h-[15rem]
            px-6 py-5
            flex flex-col justify-between
            rounded-[0.6rem]
            ${task.isTaskComplete?  'bg-gradient-to-tr from-[#044133]  to-[#1ba253]' : 'bg-[#4259bd]'}
            bg-[#0b1844]`}
            key={index}
>
             <div>
                 <p className='text-white semi-bold text-[16px] '>{startToFinishTime}</p>
                 {task.isTaskComplete? <s className='text-[#a4f2c1] font-bold text-[18px] mt-3'>{task.task} </s> : <p className=" text-[#c7ccf8] font-bold text-[18px] mt-3">{task.task} </p>  }
                 
                 {task.isTaskComplete && <p className={`mt-[2rem] text-[32px] text-center font bottom-0 ${task.isTaskComplete? 'text-[#8ff9b6]' : 'text-[#aad2fa]' } leading-8`}>   🥳😍  Congratuation <br/> <span className=' text-[18px]'> for ompleting task</span>  </p>}
             </div>
             <div className=' flex items-center justify-between'>
                  {!task.isTaskComplete && (
                  <button className={`outline-none border-none  py-3 rounded-[16px]
                    ${task.isTaskComplete ? ' bg-gradient-to-tr  from-[#0c4b19] to-[#6976c9] text-white  w-[12rem]'
                            : 'bg-gradient-to-tr   from-[#2241a4] to-[#188ec5] text-white ml-[9rem] w-[7rem]'}  font-bold  cursor-pointer
                      `}
                      onClick={() => handleCompleteTask(index)}
                  > Completed 
                  </button>
                  )}
             </div>
      </div>
      )
      })
        
         }
       </>
  )
}

export default TaskSection

