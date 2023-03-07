import './App.css';
import Home from './components/Home';
import React , {useState} from 'react'
import SidebarNav from './components/SidebarNav';
import { BrowserRouter as Router , Routes ,Route    } from 'react-router-dom';
import WeekTasks from './components/DaysTask';
// import GoalTrackerData from './components/GoalTrakerData ';
function App() {
    return (
    <Router>
          <div className="app flex   w-[46%] h-[54vh] pr-[1.8rem]  m-auto mt-[10rem] bg-[#CDC6F5] rounded-[12px]">
                        <SidebarNav />
                        <Routes>
                          <Route path="/" element={<Home />} />
                            
                          <Route path="/week-1" element={<WeekTasks />} />
                        </Routes>
          </div>
    </Router>
  );
}

export default App;
