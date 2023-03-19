import React from 'react'

const TaskSection = ({tasks , onCompleteTask}) => {

  const d= new Date()
  let Hour  = d.getHours().toString() ;
  let Minute = d.getMinutes().toString() ; 
         Hour =  Hour ==="13" ? "01" : Hour === "14" ? "02" : Hour === "15" ? "03" : Hour === "16" ? "04" : Hour === "17" ? "05" : Hour === "18" ? "06" : Hour === "19" ? "07" : Hour === "20" ? "08" : Hour === "21" ? "09" : Hour === "22" ? "10" : Hour === "23" ? "11" : "12" ;
  
   const finishongTime = ` Timing  : ${Hour}:${Minute}  to ${parseInt(Hour) + 2}:${Minute}`
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
                 <p className='text-white semi-bold text-[16px] '>{finishongTime}</p>
                 <p className=" text-[#c7ccf8] font-bold text-[16px] mt-3">{task.task}</p>
                 {task.isTaskComplete && <p className='mt-[2rem] text-[32px] text-center font bottom-0 text-[#8ff9b6] leading-8'>   🥳😍  Congratuation <br/> <span className=' text-[18px]'> for ompleting task</span>  </p>}
             </div>
             {!task.isTaskComplete && (
             <button className={`outline-none border-none  py-3 rounded-[16px]
               ${task.isTaskComplete ? ' bg-gradient-to-tr  from-[#0c4b19] to-[#6976c9] text-white ml-[4rem] w-[12rem]'
                       : 'bg-gradient-to-tr   from-[#2241a4] to-[#188ec5] text-white ml-[9rem] w-[7rem]'}  font-bold  cursor-pointer
                `}
                onClick={() => handleCompleteTask(index)}
             > {task.isTaskComplete ? 'Completed' : 'Complete'} 
             </button>
             )}
      </div>
      )
      })
        
         }
       </>
  )
}

export default TaskSection

