import React from "react";
import Header from "./header";
// import Footer from "./footer";
// import "./homelayout.css"

const HomeLayout = ({children}) => {
 return (
     <>
    <Header></Header>
     <div  className="homeLayout"> {children}</div>
{/* <Footer></Footer>  */}
</>
 )
}
export default HomeLayout;