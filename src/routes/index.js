import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import Services from "../views/services";
import Header from "../components/header";
import ContactUs from "../views/contactUs";
import Schedule from "../views/Schedule";
import AboutUs from "../views/aboutus";
import Calendar from "../components/calendar";
import AllAPPOINTMENT from "../views/dashboard/leadersDashboard";
import DashboardLayout from "../components/DashboardLayout"
import NewSchedule from "../views/dashboard/createSchedule"
import AllShedule from "../views/dashboard/allSchedule"
import OnlineUser from "../views/dashboard/onlineuser"
import Calend from "../views/calendar"

import Planner from "../components/planner";
// import AboutUs from "../views/aboutus";


const isUserLoggedIn=localStorage.getItem("userLogedIn")
const Index = () => {
  const currentUrl = useLocation.pathname;


  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/serivisi" element={<Services />} />
      {/* <Route path='/header' element={<Header/>}/> */}
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/header" element={<Header />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/appointments" element={<AllAPPOINTMENT />} />
      <Route path='/dashboard/schedule' element={<NewSchedule/>}/>
      <Route path='/dashboard/allschedule' element={<AllShedule/>}/>
      <Route path='/dashboard/onlineuser' element={<OnlineUser/>}/>
      <Route path='/calendars' element={<Calend/>}/>
    </Routes>

{ isUserLoggedIn && currentUrl.includes("")?(
  <DashboardLayout>
  <Routes>

      
  </Routes>

</DashboardLayout>
  
):(
  <></>
)
} 
</>  
  )
 
};
export default Index;

