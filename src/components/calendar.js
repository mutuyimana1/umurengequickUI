import React from 'react';
// import ReactDOM from 'react-dom';
import "./singleSchedule.css"

import 'antd/dist/antd.css';


import { DatePicker } from 'antd';


const Calendar =()=>{
  
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  
}

function onOk(value) {
  console.log('onOk: ', value);
}
return(
  <>
        <h1>HITAMO UMUNSI USHAKA HANO</h1>
 <div className='calendar'>
    <DatePicker showTime onChange={onChange} onOk={onOk} />
    </div>
    </>
 
)
}
export default Calendar;