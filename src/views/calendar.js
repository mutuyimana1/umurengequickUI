import React from "react";
import {CalendarComponent} from "@syncfusion/ej2-react-calendars";
import HomeLayout from "../components/homelayout";
import "./calendar.css";

function Calend(){
  return(
      <HomeLayout>
    <div>
      <CalendarComponent></CalendarComponent>
    </div>
    </HomeLayout>
  )
}
export default Calend;