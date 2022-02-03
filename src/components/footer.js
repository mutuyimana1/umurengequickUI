import React from "react";
import "./footer.css"

import Logo from "../assets/images/logo.png"
import {InstagramOutlined,LinkedinOutlined,WhatsAppOutlined,FacebookOutlined} from "@ant-design/icons"






const Footer = () =>{
    return(
        <div className="footer">
        <div style={{position:"relative", backgroundColor:"gray",minHeight:"60vh", marginTop:"20px"}}>
            <div style={{display:"flex", marginLeft:"20px"}}>

                <div className="logo" style={{width:"10%",height:"40vh",marginTop:"50px"}}>
                <img src={Logo} height="70px" width={"100px"} /><br/>
                
                </div>
                <div style={{width:"30%",height:"40vh",marginTop:"50px"}}>
                    
                    <h1 style={{color:"white",textAlign:'center'}}>Indangagaciro</h1>
                    <p style={{fontSize:"25px"}}>Gukunda Igihugu ni ugukunda bene cyo, abagituye nta kuvangura,
gukunda ibikigize byose nk’ubutaka, ururimi, umuco, amateka;
kugikorera, kubumbatira umutekano n’ubusugire bwacyo, kukitangira
byaba ngombwa ukaba wanagipfira.</p>
                </div>
                <div style={{width:"30%",height:"40vh",marginTop:"50px"}}>
                    
                    <h1 style={{color:"white",textAlign:'center'}}>dukurikire kuri:</h1>
                    <div style={{margin:"40px 60px 20px"}}><InstagramOutlined style={{marginLeft:"30px",fontSize:"50px", color:"green"}}/><LinkedinOutlined style={{marginLeft:"30px",fontSize:"50px", color:"green"}}/>
                    <WhatsAppOutlined style={{marginLeft:"40px",fontSize:"50px", color:"green"}}/><FacebookOutlined  style={{marginLeft:"30px",fontSize:"50px", color:"green"}}/>
                    </div>
                </div>
                <div style={{width:"30%",height:"40vh",marginTop:"50px",marginLeft:"60px"}}>
                    
                    <h1 style={{color:"white",textAlign:'center'}}>Tuvugishe</h1>
                    <h2 style={{margin:"40px 60px 20px"}}>Ufite ikibazo?</h2>
                    <button style={{width:"20%",height:"5vh",margin:"10px 150px", borderRadius:"15px"}}>Twandikire</button>
                    <h2 style={{margin:"40px 60px 20px"}}>Duhamagare kuri:</h2>
                    <h2 style={{margin:"20px 60px 20px "}}>+25078xxxxxx</h2>
                </div>
                
            </div>
            <h1 style={{color:"white",textAlign:'center', marginTop:"-40px"}}> &#169; CAFE Programmer</h1>
        <div class="custom-shape-divider-bottom-1643320600">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    
    </div>
    )
}

export default Footer;