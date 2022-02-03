import React from "react";
import "./home.css";
import { ArrowRightOutlined } from "@ant-design/icons";
// import Carousel from "react-elastic-carousel";
import HomeLayout from "../components/homelayout";
import paragraphPhoto from "../assets/images/image.jpg";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Carousel from "react";

import { Modal } from "antd";

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
        {/* <Space direction="vertical"/> */}

        <Search
          style={{ width: "70%", padding: "60px", paddingRight: "60px" }}
          placeholder="Shakira hano"
          enterButton="Shakisha"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
        <div style={{ marginBottom: "100px" }} className="container">
          {/* <Carousel> */}

          <br />

          <div className="home-igenamigambi">
            <item>
              <h1 style={{ fontSize: "20px" }}>Igenamigambi</h1>
              <br></br>
              <p1 style={{ fontSize: "17px" }}>
                Serivisi fatizo zitangwa mu ishami ry'igenamigambi
              </p1>
              <br></br>
              <br></br>
              <br></br>
              <p2
                style={{
                  fontSize: "17px",
                  marginLeft: "100px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Ibikurikira <ArrowRightOutlined />
              </p2>
            </item>
          </div>
          <div className="home-igenamigambi">
            <item>
              {/* <div ClassName="igenamigambi"> */}
              <h1 style={{ fontSize: "20px" }}>
                Ubuhinzi, Ubworozi n'umutungo kamere
              </h1>
              <br></br>
              <p1 style={{ fontSize: "17px" }}>
                Serivisi fatizo zitangwa mu karere mu ishami ry'ubuhinzi,
                Ubworozi n'umutungo kamere
              </p1>
              <br></br>
              <br></br>
              <p2
                style={{
                  fontSize: "17px",
                  marginLeft: "100px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Ibikurikira <ArrowRightOutlined />
              </p2>
            </item>
          </div>
          <div className="home-igenamigambi">
            <item>
              {/* <div ClassName="igenamigambi"> */}
              <h1 style={{ fontSize: "20px" }}>Imali</h1>
              <br></br>
              <p1 style={{ fontSize: "17px" }}>
                Serivisi fatizo zitangwa mu karere mu ishami ry'Imali
              </p1>
              <br></br>
              <br></br>
              <br></br>
              <p2
                style={{
                  fontSize: "17px",
                  marginLeft: "100px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Ibikurikira <ArrowRightOutlined />
              </p2>
            </item>
          </div>
          <div className="home-igenamigambi">
            <item>
              {/* <div ClassName="igenamigambi"> */}
              <h1 style={{ fontSize: "20px" }}>Ubuzima</h1>
              <br></br>
              <p1 style={{ fontSize: "17px" }}>
                Serivisi fatizo zitangwa kubijyanye n'ubuzima
              </p1>
              <br></br>
              <br></br>
              <br></br>
              <p2
                style={{
                  fontSize: "17px",
                  marginLeft: "100px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Ibikurikira <ArrowRightOutlined />
              </p2>
            </item>
          </div>
          <div className="home-igenamigambi">
            <item>
              {/* <div ClassName="igenamigambi"> */}
              <h1 style={{ fontSize: "20px" }}>Imiyoborere Myiza</h1>
              <br></br>
              <p1 style={{ fontSize: "17px" }}>
                Serivisi fatizo zitangwa mu karere mu ishami ry'Ubuhinzi
                n'Ubworozi
              </p1>
              <br></br>
              <br></br>
              <br></br>
              <p2
                style={{
                  fontSize: "17px",
                  marginLeft: "100px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Ibikurikira <ArrowRightOutlined />
              </p2>
            </item>
          </div>
          <div className="home-igenamigambi">
            <item>
              {/* <div ClassName="igenamigambi"> */}
              <h1 style={{ fontSize: "20px" }}>Uburezi</h1>
              <br></br>
              <p1 style={{ fontSize: "17px" }}>
                Serivisi fatizo zitangwa kubijyanye n'uburezi
              </p1>
              <br></br>
              <br></br>
              <br></br>
              <p2
                style={{
                  fontSize: "17px",
                  marginLeft: "100px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Ibikurikira <ArrowRightOutlined />
              </p2>
            </item>
          </div>
          {/* </Carousel> */}
        </div>

        <div style={{ display: "flex" }}>
          <div className="leftside">
            <img
              src={paragraphPhoto}
              alt=""
              style={{ height: "40vh", width: "90%" }}
            />
          </div>
          <div className="rightside">
            <p>
              {" "}
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
        <div className="search">
          <button>Menya byinshi...</button>
        </div>
      </HomeLayout>
    </>
  );
};
export default Home;
