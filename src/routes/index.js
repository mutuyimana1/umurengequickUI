import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import Services from "../views/services";
import Header from "../components/header";
import ContactUs from "../views/contactUs";

import Schedule from "../views/Schedule";
import AllBookings from "../views/dashboard/userDashboard";
import Planner from "../components/planner";
import PlannerLayout from "../components/plannerLayout";
import UserForm from "../components/userForm";

const Index = () => {
  const currentUrl = useLocation.pathname;


  return (
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      
      <Route path="/serivisi" element={<Services />} />
      {/* <Route path='/header' element={<Header/>}/> */}
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/header" element={<Header />} />
      <Route path="/userboard" element={<AllBookings />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/plannerlayout" element={<PlannerLayout />} />
      <Route path="/userForm" element={<UserForm/>} />      
    </Routes>
  );
};
export default Index;

