import Calendar from './Calendar';
import DailyTask from './DailyTask';
import IntroTask from './IntroTask';
import {IoMdAdd as AddIcon} from  'react-icons/io'
const Home = ({data}) => {
    return (
        <div className='
        flex  justify-between w-[80%] h-full ml-8  rounded-2xl
        bg-gradient-to-r  from-[#16216d] to-[#16216d]
        px-[1rem] pr-[4rem]  py-[2rem] 
        '>
            {/* ========================= hEADER =========================*/}
            <div className='  flex flex-col justify-between 
                              w-[28rem] h-[65vh]
                             ml-10
                             '>
            <IntroTask/>
            <Calendar  data={data}/>
            </div>
            <div className='w-[45rem] h-[65vh] flex flex-col items-end justify-between '>
                    <div className='flex item-center justify-end cursor-pointer'>
                        <div  className='flex justify-center items-center gap-3
                         w-32 py-4  rounded-lg
                          bg-gradient-to-tr from-[#3344b1] to-[#3a19c9]
                           text-white font-bold'>
                        New Task <AddIcon className='text-white  font-bold' />

                        </div>
                    </div>
                    <DailyTask />
            </div>
        </div>
    )
}

export default Home