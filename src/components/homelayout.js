import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./homelayout.css"

const HomeLayout = ({children}) => {
 return (
     <>
    <Header></Header>
     <div style={{width:"100%"}} className="homeLayout"> {children}</div>
<Footer></Footer> 
</>
 )
}
export default HomeLayout;