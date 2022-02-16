import React from "react"
import "./schedule.css"
import leadersInfos from "../assets/constants/leaders.json"
import SingleSchedule from "../components/singleschedule"
import HomeLayout from "../components/homelayout"


const Schedule = () => {

    return (
        <>
        <HomeLayout>
            <div className="background">
            <h1><b>Abayobozi bacu</b></h1>
            <div className="schedule-container">
                {
                    leadersInfos.map((data) => (<SingleSchedule leader={data} />))
                }
            </div>
             </div>
        </HomeLayout >
        </>
        )
    
}
export default Schedule