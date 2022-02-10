import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import Services from "../views/services";
import Header from "../components/header";
import ContactUs from "../views/contactUs";
import DateAndTime from "../components/DateAndTime";
import Schedule from "../views/Schedule";
import DashboardLayout from "../components/DashboardLayout"
import NewSchedule from "../views/dashboard/createSchedule"
import AllShedule from "../views/dashboard/allSchedule"

const Index = () => {
  const currentUrl = useLocation.pathname;


  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/date" element={<DateAndTime />} />
      <Route path="/serivisi" element={<Services />} />
      {/* <Route path='/header' element={<Header/>}/> */}
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/header" element={<Header />} />
      <Route path="/dashboard" element={<DashboardLayout/>}/>
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

