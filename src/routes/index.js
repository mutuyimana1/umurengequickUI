import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import Services from "../views/services";
import Header from "../components/header";
import ContactUs from "../views/contactUs";

import Schedule from "../views/Schedule";

import AllBookings from "../views/dashboard/adminDashboard";
import Calendar from "../components/calendar";
import AllAPPOINTMENT from "../views/dashboard/leadersDashboard";
import DashboardLayout from "../components/DashboardLayout"
import NewSchedule from "../views/dashboard/createSchedule"
import AllShedule from "../views/dashboard/allSchedule"


import Planner from "../components/planner";
import PlannerLayout from "../components/plannerLayout";
import UserForm from "../components/userForm";


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
      <Route path="/dashboard" element={<AllBookings />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/appointments" element={<AllAPPOINTMENT />} />
    </Routes>

{/* { isUserLoggedIn && currentUrl.includes("/dash")?( */}
  <DashboardLayout>
  <Routes>
  <Route path='/dashboard/schedule' element={<NewSchedule/>}/>
      <Route path='/dashboard/allschedule' element={<AllShedule/>}/>
  </Routes>

</DashboardLayout>
  
):(
  <></>
)
{/* //} */}
</>  
  )
 
};
export default Index;

