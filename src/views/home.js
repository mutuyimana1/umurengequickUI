import React from "react";
import "./home.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import photo1 from "../assets/images/jh.gif"
import photo2 from "../assets/images/igenamigambi.umurenge.jpg"
import photo3 from "../assets/images/uuh.jpg"
import photo4 from "../assets/images/uburezi.umurenge.jpg"
import HomeLayout from "../components/homelayout";
import paragraphPhoto from "../assets/images/image.jpg";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import SampleServices from "../assets/constants/home.json";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {Carousel} from "react-bootstrap";
import Services from "../views/services";


import { Modal } from "antd";
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

<div className="all-content">

        <Search
          style={{ width: "70%", padding: "60px", paddingRight: "60px" }}
          placeholder="Shakira hano"
          enterButton="Shakisha"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
        {/* <carousel> */}
        <div style={{ marginBottom: "100px" }} className="container">
          {/* <Carousel> */}

          {SampleServices.map((service)=>(

          <div className="home-igenamigambi">
            <item>
              <h1 style={{fontSize:"30px"}}>
             {service.serviceName}
             </h1><br></br>
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
                  style={{fontSize:"20px"}}
                >
                  {service.servicesDescription}{" "}
                </Paragraph>
                
                <i style={{color:"black"}}>
                  <a  href="/serivisi">
                    Ibikurikira
                    <ArrowRightOutlined
                      style={{ width: "20%",height:"5px", fontSize: "28px"}}
                   
                    />
                  </a>
                </i>
                </h2>
            </item>
          </div>
          ))}
          </div>
          {/* </carousel> */}
        <div className="search">
        
          <h2 style={{fontSize:"20px", textAlign:"center"}}>Menya byinshi...</h2><br></br><br></br><br></br>    
          </div>
        </div>
        <div className="imageSlider">
          <div className="hh">
        <h style={{ fontSize:"40px", color:"black", textDecoration:"bold" }}> SURA IBIKORWA BY'UMURENGE!</h>
       <marquee><p style={{ marginBottom:"25px"}}>Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize
        Umujyi wa Kigali, gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nyarugenge gafite 
        ubuso bungana na 134 Km2 nkuko bigaragazwa</p></marquee> 
        </div>
        <br></br><br></br><br></br><br></br><br></br>
          <Carousel
          variant="dark"
          className="slide Carousel-fade container-corousel">
            <Carousel.Item>
             <img src={photo1} height="500px" width="60%" textAlign="center"/>
             <Carousel.Caption >
               <h1 style={{color:"white"}}> Imali</h1>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={photo2}/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}> Igenamigambi</h1>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={photo3}/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}> Ubuhinzi</h1>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={photo4}/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}> Uburezi</h1>
             </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div><br></br><br></br><br></br><br></br>
        <div className="gh">
        <h>Ubuhinzi</h>
        </div><br></br><br></br>
        <div className="summary">
          <div className="h1">
          <img src={photo3}/>
          </div>
          <div className="h1">
            <p style={{ fontSize:"27px"}}>
            Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize Umujyi wa Kigali
              <br></br>
              ,gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nya
              <br></br>
              genge gafite ubuso ugana na 134 Km2 nkuko bigaragazwa n'ibarura
              <br></br>
              ry'abaturage ryakozwe mu mwaka wa 2012 Akarere ka Nyarugenge gaf
              <br></br>
              Abaturage : 284,561 abagabo 148,132 abagore 136,429 ,Ubucucike :
              <br></br>
              2,149 /km <br /> Kuri uyu wa Gatanu tariki ya 10 Ukuboza 2021, Um
              <br></br>
              bikorwa w’Akarere Bwana Ngabonziza Emmy yashikirije imiryango 2
              <br></br>
              ituye mu Kagari k’Akabahizi mu Murenge wa Gitega kuri ruhurura{" "}
              <br></br>
              Mpazi inzu za kijyambere zifite agaciro ka miliyoni 200 z’amafar
              <br></br>
              nga y’u Rwanda.{" "}
            </p>
          </div>
        </div>
        <br></br><br></br><br></br>
        <div className="gh">
        <h>Ubworozi</h>
        </div><br></br><br></br>
        <div className="summary">
          <div className="h1">
          <p style={{ fontSize:"27px"}}>
            Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize Umujyi wa Kigali
              <br></br>
              ,gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nya
              <br></br>
              genge gafite ubuso ugana na 134 Km2 nkuko bigaragazwa n'ibarura
              <br></br>
              ry'abaturage ryakozwe mu mwaka wa 2012 Akarere ka Nyarugenge gaf
              <br></br>
              Abaturage : 284,561 abagabo 148,132 abagore 136,429 ,Ubucucike :
              <br></br>
              2,149 /km <br /> Kuri uyu wa Gatanu tariki ya 10 Ukuboza 2021, Um
              <br></br>
              bikorwa w’Akarere Bwana Ngabonziza Emmy yashikirije imiryango 2
              <br></br>
              ituye mu Kagari k’Akabahizi mu Murenge wa Gitega kuri ruhurura{" "}
              <br></br>
              Mpazi inzu za kijyambere zifite agaciro ka miliyoni 200 z’amafar
              <br></br>
              nga y’u Rwanda.{" "}
            </p>
          </div>
          <div className="h1">
          <img src={photo3}/>
          </div>
        </div>
        <br></br><br></br><br></br>
        <div className="gh">
        <h>Imali</h>
        </div><br></br><br></br>
        <div className="summary">
          <div className="h1">
          <img src={photo3}/>
          </div>
          <div className="h1">
            <p style={{ fontSize:"27px"}}>
            Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize Umujyi wa Kigali
              <br></br>
              ,gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nya
              <br></br>
              genge gafite ubuso ugana na 134 Km2 nkuko bigaragazwa n'ibarura
              <br></br>
              ry'abaturage ryakozwe mu mwaka wa 2012 Akarere ka Nyarugenge gaf
              <br></br>
              Abaturage : 284,561 abagabo 148,132 abagore 136,429 ,Ubucucike :
              <br></br>
              2,149 /km <br /> Kuri uyu wa Gatanu tariki ya 10 Ukuboza 2021, Um
              <br></br>
              bikorwa w’Akarere Bwana Ngabonziza Emmy yashikirije imiryango 2
              <br></br>
              ituye mu Kagari k’Akabahizi mu Murenge wa Gitega kuri ruhurura{" "}
              <br></br>
              Mpazi inzu za kijyambere zifite agaciro ka miliyoni 200 z’amafar
              <br></br>
              nga y’u Rwanda.{" "}
            </p>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};
export default Home;
