import './App.css'; 
import React from 'react'
import {SidebarNav , Home} from './components/';
import { BrowserRouter as Router , Routes ,Route    } from 'react-router-dom';
import data from  './data';
function App() {
  return (
    <Router>
          <div className="app flex  h-[100vh] pr-[1.8rem]  m-auto  p-8 bg-[#03072e] rounded-[12px]">
                 <SidebarNav />
                 <Routes>
                
                      <Route path="/" element={<Home data = {data} />} />  :
                  
                  
                  
                  </Routes>   
          </div>
  </Router>
  );
}

export default App;
  