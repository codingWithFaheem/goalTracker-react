import      { useState , useEffect }           from   'react';
import      Calendar               from   './Calendar';
import      IntroTask              from   './IntroTask';
import      twClassesData          from   './TailwindClassesData';
import      {IoMdAdd as AddIcon}   from    'react-icons/io'
import TaskSection from './TaskSection';
const  getTaskFromLocalStorage = () => {
  
}
const Home = ({data}) => {

    const    [tasks , setTasks] = useState([]);
    const    [task , setTask] = useState("")
    const    [isPopup , setPop] = useState(false);
    const    {div_1, div_2 ,div_3 ,adIcon} = twClassesData.main
   
      const addTask = () =>{
        const newTask = {
            task :task ,
            isTaskComplete : false ,
        }
        const allNewTask = [...tasks , newTask] ;
        setTasks(allNewTask)
        setTask("") ;
    
        setPop(false)
        
      }
        const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isTaskComplete = true;
    setTasks(updatedTasks);
  };
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Load the tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

    return (


        <div className={div_1}>
            {/* ================ Left Side ================== */}
                <div className={div_2}>
                   <IntroTask/>
                  <Calendar  data={data} />
                 </div>






          {/* ================= Right Side =============== */}
            <div className={div_3}>
                    


                                  {/* =========== Add To Task Form Input ===== */}
                    {
                           isPopup  ? 

                           <div className=' m-auto w-[22rem] h-[25rem]  px-4 py-2 rounded-[22px]
                           bg-gradient-to-b  from-[rgb(2,42,175)] to-[#223796c9]
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
                                            
                                            ' type="text" placeholder='Add task in this field' 
                                            onChange={(e) => setTask(e.target.value)} 
                                             
                                            />
                                       </div>
                                 <button className="py-4 w-full h-[4rem] rounded-[32px] mt-4 
                                 text-[22px] text-white font-bold cursor-pointer
                                  bg-gradient-to-tr from-[#0c144d] to-[#030a36]"
                                  onClick = {addTask}
                                  >
                                       Add Task
                                 </button>
                     
                               </div>
                         </div>
                         
                           : 

                            // ================= todo Task section =============
                          
                           <TaskSection 
                           tasks = {tasks} 
                           onCompleteTask = {completeTask}
                           />
                    

                        }
                
                    {!isPopup &&   
                     <div  className='flex justify-center items-center gap-3
                     w-32 py-4  rounded-lg cursor-pointer
                      lg:fixed bottom-[18rem] right-[16rem]
                      bg-gradient-to-tr from-[#3a4cc2] to-[#3a19c9]
                       text-white font-bold shadow-lg shadow-ratio-blue'
                           onClick={() => setPop(true)} 
                           >
                        New Task <AddIcon className={adIcon} />
                   
                    </div>
                     }
            </div>
        </div>
    )
}

export default Home