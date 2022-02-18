import React from "react";
import allServices from "../assets/constants/services.json";
const SingleService=({data})=>{
    return(
        <div className="singletours-container" style={{width:"50%",height:"30vh", backgroundColor:"red"}}>
        <h1>my Description</h1>
        <h1>{data.serviceName}</h1>
        <p>{data.servicesDescription}</p>
        </div>
        
    )
}
export default SingleService;