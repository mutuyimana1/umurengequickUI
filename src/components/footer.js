import React from "react";
import "./footer.css"
import Logo from "../assets/images/logo.png"
const Footer = () =>{
    return(
        <div style={{position:"relative", backgroundColor:"gray",minHeight:"60vh", marginTop:"20px"}}>
            <div style={{display:"flex", marginLeft:"10px"}}>
                <div className="logo" style={{width:"25%",height:"80%",marginTop:"10px"}}>
                <h3 style={{color:"white"}}>follow us</h3>
                <img src={Logo} height="70px" width={"100px"} />

                </div>
                <div className="card2"  style={{width:"22%",height:"80%",marginTop:"10px"}}>
                <p style={{color:"white"}}>Indangagaciro</p>
                </div>
                <div className="card3"  style={{width:"23%",height:"80%",marginTop:"10px"}}>
                <p style={{color:"white"}}>dukurikire kuri:</p>
                </div>
                <div className="card4"  style={{width:"23%",height:"80%",marginTop:"10px"}}>
                <p style={{color:"white"}}>tuvugishe</p>
                </div>
            </div>
        <div class="custom-shape-divider-bottom-1643320600">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    )
}

export default Footer;