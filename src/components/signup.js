import React from 'react';
import "./signup.css"
function signup(props) {
  return (props.trigger)?(
  <div className='popup'>
      <div className='popup_inner'>
          <button className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
         {props.children}
      </div>

  </div>
  ):"";
}

export default signup;

