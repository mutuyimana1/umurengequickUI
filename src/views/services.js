import React from "react";
import HomeLayout from "../components/homelayout";
import "./services.css";
import{EnvironmentOutlined,ArrowRightOutlined  }from '@ant-design/icons';
const Services=()=>{
    return(
        <HomeLayout>
            <div className="servicecontiner">
    <h2  style={{paddingLeft:"600px"}}>all services Umurenge utanga</h2>
    <div className="page-background">
<h3>Serivisi zitandukanye zitangirwa k'Umurenge</h3>
    </div>
    
    <div className="card-container">
    <div className="card">
        <div className="card-content">
        <h3><EnvironmentOutlined style={{marginRight:"50px", color:"green"}}/>Ubuzima</h3>
        <p>serivise fatizo zitangwa kubijyanye n'Ubuzima</p>
        <i><b>Ibikurikira <ArrowRightOutlined style={{width:"20%", fontSize: '26px', }} /></b></i>
        </div>

    </div>
    <div className="card">
        <div className="card-content">
        <h3><EnvironmentOutlined style={{marginRight:"50px", color:"green"}}/>Imali</h3>
        <p>serivise fatizo zitangwa kubijyanye n'Imali</p>
        <i><b>Ibikurikira<ArrowRightOutlined style={{width:"20%", fontSize: '26px', }} /></b></i>
        </div>

    </div>
    <div className="card">
        <div className="card-content">
        <h3><EnvironmentOutlined style={{marginRight:"50px", color:"green"}}/>Igenamigambi</h3>
        <p>serivise fatizo zitangwa kubijyanye n'Igenamigambi</p>
        <i><b>Ibikurikira<ArrowRightOutlined style={{width:"20%", fontSize: '26px', }} /></b></i>
        </div>

    </div>
    
   
    <div className="card">
        <div className="card-content">
        <h3><EnvironmentOutlined style={{marginRight:"50px", color:"green"}}/>Ubuhinzi , Ubworozi</h3>
        <p>serivise fatizo zitangwa kubijyanye n'Ubuhinzi n'ubworozi</p>
        <i><b>Ibikurikira<ArrowRightOutlined style={{width:"20%", fontSize: '26px', }} /></b></i>
        </div>

    </div>
    
    </div>
    <div className="card-container2">
   
    <div className="card">
        <div className="card-content">
        <h3><EnvironmentOutlined style={{marginRight:"50px", color:"green"}}/>Uburezi</h3>
        <p>serivise fatizo zitangwa kubijyanye n'Uburezi</p>
        <i><b>Ibikurikira<ArrowRightOutlined style={{width:"20%", fontSize: '26px', }} /></b></i>
        </div>

    </div>
    <div className="card">
        <div className="card-content">
        <h3><EnvironmentOutlined style={{marginRight:"50px", color:"green"}}/>Imibereho myiza</h3>
        <p>serivise fatizo zitangwa kubijyanye n'Imibereho myiza</p>
        <i><b>Ibikurikira<ArrowRightOutlined style={{width:"20%", fontSize: '26px', }} /></b></i>
        </div>

    </div>
    <div className="card">
        <div className="card-content">
        <h3><EnvironmentOutlined style={{marginRight:"50px", color:"green"}}/>Uburezi</h3>
        <p>serivise fatizo zitangwa kubijyanye n'Uburezi</p>
        <i><b>Ibikurikira<ArrowRightOutlined style={{width:"20%", fontSize: '26px', }} /></b></i>
        </div>

    </div>
    <div className="card">
        <div className="card-content" >
        <h3 style={{margin:"2px"}}><EnvironmentOutlined style={{marginRight:"50px", color:"green"}}/>Imiyoborere myiza</h3>
        <p>serivise fatizo zitangwa kubijyanye n'Imiyoborere myiza</p>
        <i><b>Ibikurikira<ArrowRightOutlined style={{width:"20%", fontSize: '26px', }} /></b></i>
        </div>

    </div>
    </div>
    </div>
    </HomeLayout>

    )
}
export default Services;