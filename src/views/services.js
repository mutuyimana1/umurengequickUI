import React from "react";
import HomeLayout from "../components/homelayout";
import "./services.css";
import allServices from "../assets/constants/services.json";
import { EnvironmentOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Typography, Switch } from "antd";

const { Paragraph, Text } = Typography;

const Services = () => {
  return (
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
                <i>
                 <a href="/schedule"> <b>
                    Ibikurikira{" "}
                    <ArrowRightOutlined
                      style={{ width: "20%", fontSize: "26px" }}
                    />
                  </b>
                  </a>
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
};
export default Services;
