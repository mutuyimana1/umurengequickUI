import react from "react";
import {Routes, Route,useLocation} from "react-router-dom";
import Home from "../views/home"
import Services from "../views/services"
import NormalLoginForm from "../components/signin"
const Index=()=>{
const currentUrl=useLocation.pathname

return(

<Routes>
<Route path='/' element={<Home/>} />
<Route path='/serivisi' element={<Services/>}/>
<Route path='/login' element={<NormalLoginForm/>}/>

</Routes>



)
}
export default Index