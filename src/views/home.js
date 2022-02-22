import React from "react";
import "./home.css";
import { ArrowRightOutlined } from "@ant-design/icons";
// import Carousel from "react-elastic-carousel";
import HomeLayout from "../components/homelayout";
import paragraphPhoto from "../assets/images/image.jpg";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import SampleServices from "../assets/constants/home.json";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Typography, Switch } from "antd";

const { Paragraph, Text } = Typography;

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);

const Home = () => {
  return (
    <>
      <HomeLayout>
        <div className="background">
        {/* <Space direction="vertical"/> */}


<div className="all-content">

        <Search
          style={{ width: "45%", padding: "55px", paddingRight: "30px",marginLeft:"30%", color:"red"}}
          placeholder="Shakira hano"
         
          // suffix={suffix}
          onSearch={onSearch}
        />
        
      <a href="/aboutus">  <button className="btn" style={{borderRadius: "15px",marginTop:"-10px",marginRight:"600px",width:"150px",height:"7vh",boxShadow: "3px 0px 3px 0px white"}}><b style={{Color:"black"}}>Menya byinshi</b></button>  </a>
        
        <div style={{ marginBottom: "100px" }} className="container">
          {/* <Carousel> */}

          <br />
          {SampleServices.map((service)=>(

          <div className="home-igenamigambi">
            <item>
              <h1 style={{fontSize:"30px"}}>
             {service.serviceName}
             </h1>
             <h2>
             <Paragraph
                  ellipsis={
                    true
                      ? {
                          rows: 1,
                          expandable: false,
                          symbol: "more",
                        }
                      : false
                  }
                >
                  {service.servicesDescription}{" "}
                </Paragraph>
                </h2>
                <div style={{textAlign:"center", fontSize:"25px"}}>
                <i >
                  <b >
                  <a style={{color:"black",textAlign:"center", fontSize:"25px"}} href="/serivisi"> Ibikurikira{" "}</a> 
                    <ArrowRightOutlined
                      style={{ width: "20%", fontSize: "26px" }}
                    />
                  </b>
                </i>
                </div>
            </item>
          </div>
          ))}
          </div>
       

        
      
        </div>
        </div>
      </HomeLayout>
    </>
  );
};
export default Home;
