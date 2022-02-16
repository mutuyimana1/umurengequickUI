import React from 'react';
import "./signin.css";
function Signin(props) {
  return (props.trigger)?(
  <div className='popups'>
      <div className='popups_inner'>
          <button className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
         {props.children}
      </div>

  </div>
  ):"";
}

export default Signin;

