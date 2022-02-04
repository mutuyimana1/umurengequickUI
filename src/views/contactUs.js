import React from "react";
import HomeLayout from "../components/homelayout";
import "./contactUs.css"
import {MailFilled,PhoneFilled,HomeFilled } from "@ant-design/icons";
 

const ContactUs = () => {
    return(
        <>
        <HomeLayout>
            <div className="backgroung">
            <div className="home-container">
            <div className="twandikire">
            <h1 style={{ textDecoration:"bold"}}>TWAKINDIKIRE</h1><br></br>
            <p1>Tuvugishe Kubundi Bufasha cyangwa igitekerezo watanga</p1><br></br>
            </div><br></br><br></br>
            <div  style={{ marginBottom:"70px"}} className="home">
            <h><HomeFilled /></h>&nbsp;&nbsp;
                <p2>KG 99 ST</p2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h><PhoneFilled/></h>&nbsp;&nbsp;
                <p3>+250789083600</p3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h><MailFilled/></h>&nbsp;&nbsp;
                <p4>Umurengequick@gmail.com</p4>
            </div>
            <div className="kkkk">
            <div className="contact">
            <label for="input"><b>Mail:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input/><br/><br/><br></br><br></br>
            <label for="input"><b>Telefoni:</b> &nbsp;</label>
            <input/><br/><br/><br/><br></br>
            <label for="input"><b>Amazina:</b> &nbsp;</label>
            <input/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
             </div>
             <div className="hhh">
             <label style={{ marginBottom:"50px"}}for="input"><b>Ubutumwa:</b> &nbsp;</label><br></br><br></br>
            <textarea rows="7.5" cols="40"/><br></br><br></br><br></br><br></br>
            <button><b>Ohereza</b></button><br></br>
             </div>
            </div>
            </div>
            </div>
        </HomeLayout>
        </>
    )
}

export default ContactUs;