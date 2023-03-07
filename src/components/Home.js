import IntroTask from './IntroTask' ;
import WeekTaskCom from './WeekTaskCom' ;
const Home = () => {
  return (
    <div className='flex flex-col w-[80%] h-[28rem] ml-8 mt-8 '>
         <IntroTask />
         <WeekTaskCom/>
    </div>
  )
}

export default Home