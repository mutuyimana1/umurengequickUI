import React from "react";
import "./footer.css";
import TextField from "@mui/material/TextField";
import Logo from "../assets/images/logo.png";
import {
  InstagramFilled,
  LinkedinFilled,
  WhatsAppOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  YoutubeFilled,
  GooglePlusSquareFilled,
  WechatOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div
        style={{
          position: "relative",
    
          height: "55vh",
          marginTop: "-30px",
        }}
      >
        <div style={{ backgroundColor: "", height: "10vh" }}>
          <InstagramFilled
            style={{ marginLeft: "360px", fontSize: "35px", color: "white" }}
          />
          <FacebookFilled
            style={{ padding: "30px", fontSize: "35px", color: "white" }}
          />
          <LinkedinFilled
            style={{ padding: "30px", fontSize: "35px", color: "white" }}
          />
          <WhatsAppOutlined
            style={{ padding: "30px", fontSize: "35px", color: "white" }}
          />
          <TwitterSquareFilled
            style={{ padding: "30px", fontSize: "35px", color: "white" }}
          />
          <YoutubeFilled
            style={{ padding: "30px", fontSize: "35px", color: "white" }}
          />
          <GooglePlusSquareFilled
            style={{ padding: "30px", fontSize: "35px", color: "white" }}
          />
          <WechatOutlined
            style={{ padding: "30px", fontSize: "35px", color: "white" }}
          />
        </div>
        <div className="footer-container">
          <div className="footer-side-1">
            <img src={Logo} style={{ width: "70%", marginTop: "30px" }} />
          </div>
          <div className="footer-side-2">
            <h2>About Us</h2>

            <p style={{ fontSize: "20px" }}>
              Our Services <br /> Our Staff
              <br />
              Our Team <br />
              Lecation
            </p>
          </div>
          <div className="footer-side-3">
            <h2>Our values</h2>
            <p style={{ fontSize: "20px" }}>
              consistency <br /> Competence
              <br />
              Commitment
              <br />
              Honesty <br /> Quick services
            </p>
          </div>
          <div className="footer-side-4">
            <h2>Our Mission</h2>
            <p style={{ fontSize: "20px" }}>
              {" "}
              To elevate Minnesota as a premier innovative destination marketing
              <br /> travel destination through results
            </p>
          </div>
          <div className="footer-side-5">
            <h2>Contact Us</h2>
            <TextField
              id="standard-basic"
              label="your email"
              variant="standard"
              color="success"
            />

            <TextField
              id="filled-basic"
              label="telephone"
              variant="filled"
              color="warning"
              fullWidth
              style={{ margin: "20px 20px 20px 0", width: "200px", fontSize:"500px"}}
            />
            <TextField id="outlined-basic" label="Message" variant="outlined"color="success" />
          </div>
        </div>

        <h1 className="h1"> &#169; CAFE Programmer</h1>
        <div class="custom-shape-divider-bottom-1643320600">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
