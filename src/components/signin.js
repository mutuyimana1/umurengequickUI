import React from 'react';
import "./signin.css"
function signin(props) {
  return (props.trigger)?(
  <div className='popup'>
      <div className='popup-inner'>
          <button className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
         {props.children}
      </div>

  </div>
  ):"";
}

export default signin;