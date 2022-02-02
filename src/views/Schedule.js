import React from "react"
import "./schedule.css"
import leadersInfos from "../assets/constants/leaders.json"
import SingleSchedule from "../components/singleschedule"

const Schedule=()=>{
   
         return(
            <div className="schedule-container">
                {
                    leadersInfos.map((data)=>(<SingleSchedule leader={data} />))
                }
            </div>
        )
    
}
export default Schedule