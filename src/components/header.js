
import logo from "../assets/images/logo.png";
import "./header.css";


const Header = () => {
  

  return (
    <>
    
      <div className="header">
        <img src={logo} height="70px" width={"100px"} />
        <h1> UMURENGE QUICK</h1>
        <h2>We Starve To Serve</h2>
        {/* <div ClassName="navbar"> */}
        <div ClassName="navbar-fix">
          <a href="/#"> Kora Gahunda</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#">Kwinjira</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/#"> Iyandikishe </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/serivisi"> Servisi </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/home"> Ahabanza </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      
    </>
  );
};

export default Header;
