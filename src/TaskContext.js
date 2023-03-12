import React, { useState , createContext }  from "react";
import data from './data'
export const DailyTaskData = createContext()
export  const TaskProvider = ({childern}) => {
    const [data , setData] = useState(data)
    return (
                <DailyTaskData.Provider value={{data,setData}}>
                            {childern}
                </DailyTaskData.Provider> 
    );  
} 