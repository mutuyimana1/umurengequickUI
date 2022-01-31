
import logo from "../assets/images/logo.png";
import "./header.css";
import Signup from "./signup"
import {useState} from "react"
const Header = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
    <div className="app">
      <main>
        {/* <button onClick={()=>setButtonPopup(true)}>Injira</button> */}
        <div className="header">
        <img src={logo} height="70px" width={"100px"} />
        <h1> UMURENGE QUICK</h1>
        <h2>We Starve To Serve</h2>
        {/* <div ClassName="navbar"> */}
        <div ClassName="navbar-fix">
          <a href="/#"> Kora Gahunda</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" onClick={()=>setButtonPopup(true)}>Kwinjira</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/#"> Iyandikishe </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/serivisi"> Servisi </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/home"> Ahabanza </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
        
      </main>
<Signup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Login pages</h3>
          <p>Uzuzamo amakuu yawe</p>
        </Signup>
    </div>
     

      
    </>
  );
};

export default Header;
