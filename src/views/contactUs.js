import React from "react";
import HomeLayout from "../components/homelayout";
import "./contactUs.css";
import GoogleMapReact from 'google-map-react';
import { MailFilled, PhoneFilled, HomeFilled } from "@ant-design/icons";


const ContactUs = () => {
    return (
        <>
            <HomeLayout>
                <div className="backgroung">

                    <div className="icons">
                        <div className="icon2">
                            <h style={{ fontSize: "50px" }}><HomeFilled /></h><br></br>
                            <p2> Aho dukorera</p2><br></br>
                            <p3>KG 99 ST</p3>
                        </div>
                        <div className="icon2">
                            <h style={{ fontSize: "50px", color:"rgb(22, 138, 158);" }}><PhoneFilled /></h><br></br>
                            <p2> Nimero ya terefoni</p2><br></br>
                            <p3>+250789083600</p3>
                        </div>
                        <div className="icon2">
                            <h style={{ fontSize: "50px" }}><MailFilled /></h><br></br>
                            <p2> Imeli</p2><br></br>
                            <p3 style={{ textDecoration: "underline" }}>umurengequick@gmail.com</p3>
                        </div>
                        <div className="icon2">
                            <h style={{ fontSize: "50px" }}><MailFilled /></h><br></br>
                            <p2> Imeli</p2><br></br>
                            <p3 style={{ textDecoration: "underline" }}>umurengequick@gmail.com</p3>
                        </div>
                    </div>
                    <div className="box-flex">

                    <div className="home-container">
                        <div className="twandikire">
                            <h1 style={{ textWeight: "20px", color: "white" }}>TWAKINDIKIRE</h1>
                            <p1 style={{ textWeight: "bold" }}>Tuvugishe Kubundi Bufasha cyangwa igitekerezo watanga</p1><br></br>
                        </div>

                        <div style={{ marginBottom: "70px" }} className="home"></div>
                        <div className="kkkk">
                            <div className="contact">
                                <label for="input"><b>Mail:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input /><br /><br /><br></br><br></br>
                                <label for="input" style={{ width: "2px" }}><b>Telefoni:</b> &nbsp;</label>
                                <input /><br /><br /><br /><br></br>
                                <label for="input"><b>Amazina:</b> &nbsp;</label>
                                <input /><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            </div>
                            <div className="hhh">
                                <label style={{ marginBottom: "50px" }} for="input"><b>Ubutumwa:</b> &nbsp;</label><br></br><br></br>
                                <textarea rows="7.5" cols="40" /><br></br><br></br><br></br><br></br>
                                <button><b>Ohereza</b></button><br></br>
                            </div>
                        </div>
                    </div>
                        <div style={{ height:"100px"}}className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255203.60499334583!2d29.987156451168822!3d-1.9294216783339653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1644409687289!5m2!1sen!2srw" width="600" height="560" boxShadow="7px" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                    </div>
                </div>
            </HomeLayout>
        </>
    )
}

export default ContactUs;