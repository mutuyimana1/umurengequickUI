import React from "react"
import "./schedule.css"
import leadersInfos from "../assets/constants/leaders.json"
import SingleSchedule from "../components/singleschedule"
import HomeLayout from "../components/homelayout"

const Schedule=()=>{
   
         return(
             <HomeLayout>
                 
            <h1 style={{"fontSize":"x-large", "fontFamily":"inherit"}}>Abayobozi bacu</h1>
            <div className="schedule-container">
                {                    
                    leadersInfos.map((data)=>(<SingleSchedule leader={data} />))
                }
            </div>
            
            </HomeLayout>
        )
    
}
export default Schedule