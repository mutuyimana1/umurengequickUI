import React, { useState } from "react";
import "./DateAndTime.css";

const DateAndTime = () => {
 
//  changeColor(){
//     this.setState({black: !this.state.black})
//  }
const [style, setStyle] = useState("cont");
  
  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle("cont2");
  };
    return (
  <>
  <table >

            <tr> 
                <td>MON</td>
                <td>TUE</td>
                <td>WED</td>
                <td>THU</td>
                <td>FRI</td>
            </tr>
            <div className="time">
            <tr > 
  <div className={style}>

            
                <td><button onClick={changeStyle}>8:00</button></td>
                </div>
                <td><button >8:00</button></td>                
                <td><button>8:00</button></td>                
                <td><button>8:00</button></td>                
                <td><button>8:00</button></td>   

            </tr>
            <tr> 
                <td><button>9:00</button></td>
                <td><button>9:00</button></td>                
                <td><button>9:00</button></td>                
                <td><button>9:00</button></td>                
                <td><button>9:00</button></td>   
            </tr>
            <tr> 
                <td><button>10:00</button></td>
                <td><button>10:00</button></td>                
                <td><button>10:00</button></td>                
                <td><button>10:00</button></td>                
                <td><button>10:00</button></td>   
            </tr>
            <tr> 
                <td><button>11:00</button></td>
                <td><button>11:00</button></td>                
                <td><button>11:00</button></td>                
                <td><button>11:00</button></td>                
                <td><button>11:00</button></td>   
            </tr>
            </div>
        </table>  
        <br></br>
        <button >EMEZA</button>
        </>
    )
}
export default DateAndTime