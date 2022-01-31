import react from "react";
import {Routes, Route,useLocation} from "react-router-dom";
import Home from "../views/home"
import Services from "../views/services"
import Header from "../components/header";
const Index=()=>{
const currentUrl=useLocation.pathname

return(

<Routes>
<Route path='/home' element={<Home/>} />
<Route path='/serivisi' element={<Services/>}/>
{/* <Route path='/header' element={<Header/>}/> */}

</Routes>



)
}
export default Index