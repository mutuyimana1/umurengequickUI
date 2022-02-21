import React,{useState} from "react";
import { Drawer, Button,Modal } from 'antd';
import "antd/dist/antd.css";
import HomeLayout from "../components/homelayout";
import "./services.css";
import SingleService from "./singleService"
import allServices from "../assets/constants/services.json";
import { EnvironmentOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Typography, Switch } from "antd";

const { Paragraph, Text } = Typography;

const Services = (data) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  }
  return (
    <>
    {/* <Drawer title="menya byinshi" placement="left" visible={drawerVisible} width={520} height="10%" onClose={closeDrawerVisible}>
             <SingleService data={data}/>  
    
    </Drawer> */}
    <HomeLayout>
      <div className="servicecontiner">
        <div className="page-background">
          <h3>Serivisi zitandukanye zitangirwa k'Umurenge</h3>
        </div>

        <div className="card-container">
          {allServices.map((service) => (
            <div className="card">
              <div className="card-content">
                <h3>
                  <EnvironmentOutlined 
                    style={{ marginRight: "50px", color: "green" }}
                  />
                  {service.serviceName}
                </h3>
                <Paragraph
                 
                >
                  {service.servicesDescription}{" "}
                </Paragraph>
                <i>
                <p type="primary" onClick={showModal}>ibikurikira... </p><b>
                    {/* <ArrowRightOutlined
                      style={{ width: "20%", fontSize: "26px" }}
                    /> */}
                  </b>
                
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal title="Urashaka gukora gahunda?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <a href="schedule" style={{paddingTop:"20px"}}> <h3>kora gahunda</h3></a>
        <h3></h3>
       <a href="/aboutus"> <p>Menya byishi</p></a>
      </Modal>
    </>
    </HomeLayout>
    </>
    
  );
};
export default Services;
