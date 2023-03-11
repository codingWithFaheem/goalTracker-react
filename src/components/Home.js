import Calendar from './Calendar';
import IntroTask from './IntroTask';
const Home = ({data}) => {
    return (
        <div className='
        flex flex-col  justify-between w-[80%] h-full ml-8  rounded-2xl
        bg-gradient-to-r  from-[#182881] to-[#050022]
        px-[1.2rem]  py-[1rem] 
        '>
            {/* ========================= hEADER =========================*/}
            <div className='  flex flex-col justify-between 
                             lg:w-[47rem] lg:h-[46rem] h-[65vh]
                             ml-10
                             '>
            <IntroTask/>
            <Calendar data={data}/>
            </div>
        </div>
    )
}

export default Home