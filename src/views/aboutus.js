import React from "react";
import HomeLayout from "../components/homelayout";
import "./aboutus.css";
import {Carousel} from "antd";
import photo3 from "../assets/images/logo.png";
// const contentStyle = {
//     height: '300px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };
const AboutUs = () => {
    return (
        <>
            <HomeLayout>

            <div className="imageSlider" style={{background:"aliceblue"}}>
          <div className="hh">
        <h style={{ fontSize:"40px", color:"black", textDecoration:"bold",paddingLeft:"120px" }}> SURA IBIKORWA BY'UMURENGE!</h>
       <marquee><p style={{ marginBottom:"25px", fontSize:"30px"}}>Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize
        Umujyi wa Kigali, gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nyarugenge gafite
        ubuso bungana na 134 Km2 nkuko bigaragazwa</p></marquee>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
   


  <Carousel autoplay>
    <div>
      <img style={{width:"50%", height:"40vh", marginLeft:'340px'}} src="https://images.pexels.com/photos/9430884/pexels-photo-9430884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>
    <div>
      <img style={{width:"50%", height:"40vh", marginLeft:'340px'}} src="https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>
    <div>
   <img style={{width:"50%", height:"40vh", marginLeft:'340px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9OmQxFjs8EybbgUovdIBp7B6cu-hXz5Flg&usqp=CAU"/>
    </div>
    <div>
      <img style={{width:"50%", height:"40vh", marginLeft:'340px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtb5PcTk1Wly98HNA2CU_UH8zYVxmiKPLhfA&usqp=CAU"/>
    </div>
  </Carousel>
 

        </div><br></br><br></br><br></br><br></br>
      
        <div className="summary" style={{display:"flex"}}>
          <div className="image">
          <img style={{width:"80%",borderRadius:"30px",marginLeft:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRMRu8EG_oX7tmQVb-zkWS44j1SBhwPIIDA&usqp=CAU"/>
          </div>
          <div className="content">
              <h2 >Ubuhinzi</h2>
            <p style={{ fontSize:"27px"}}>
            Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize Umujyi wa Kigali
             
              ,gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nya
             
              genge gafite ubuso ugana na 134 Km2 nkuko bigaragazwa n'ibarura
            
              ry'abaturage ryakozwe mu mwaka wa 2012 Akarere ka Nyarugenge gaf
              
              Abaturage : 
              
             
            </p>
          </div>
        </div>
        <div className="summary" style={{display:"flex"}}>
          <div className="image">
          <img style={{width:"80%",borderRadius:"30px",marginLeft:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QEx-1CHDZWy_g_n5j-xTSDQz8rWBZunl5Q&usqp=CAU"/>
          </div>
          <div className="content">
              <h2 >uburezi</h2>
            <p style={{ fontSize:"27px"}}>
            Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize Umujyi wa Kigali
             
              ,gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nya
             
              genge gafite ubuso ugana na 134 Km2 nkuko bigaragazwa n'ibarura
            
              ry'abaturage ryakozwe mu mwaka wa 2012 Akarere ka Nyarugenge gaf
              
              Abaturage  
              
             
            </p>
          </div>
        </div>
        <div className="summary" style={{display:"flex"}}>
          <div className="image">
          <img style={{width:"80%",borderRadius:"30px",marginLeft:"20px"}} src="data:image/jpeg;base64,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"/>
          </div>
          <div className="content">
              <h2 >Ubuhinzi</h2>
            <p style={{ fontSize:"27px"}}>
            Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize Umujyi wa Kigali
             
              ,gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nya
             
              genge gafite ubuso ugana na 134 Km2 nkuko bigaragazwa n'ibarura
            
              ry'abaturage ryakozwe mu mwaka wa 2012 Akarere ka Nyarugenge gaf
              
              Abaturage
              
             
            </p>
          </div>
        </div>
        <div className="summary" style={{display:"flex"}}>
          <div className="image">
          <img style={{width:"80%",borderRadius:"30px",marginLeft:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BT1jV11JkHzRMWbBr6f2mgvf0-sL_DdSNA&usqp=CAU"/>
          </div>
          <div className="content">
              <h2 >Ubuhinzi</h2>
            <p style={{ fontSize:"27px"}}>
            Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize Umujyi wa Kigali
             
              ,gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nya
             
              genge gafite ubuso ugana na 134 Km2 nkuko bigaragazwa n'ibarura
            
              ry'abaturage ryakozwe mu mwaka wa 2012 Akarere ka Nyarugenge gaf
              
              Abaturage
              
             
            </p>
          </div>
        </div>
        <div className="summary" style={{display:"flex"}}>
          <div className="image">
          <img style={{width:"80%",borderRadius:"30px",marginLeft:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVJ6v2-eBN8MjGJQx5eK7BoeS96gsoQLKSQ&usqp=CAU"/>
          </div>
          <div className="content">
              <h2 >Ubuhinzi</h2>
            <p style={{ fontSize:"27px"}}>
            Akarere ka Nyarugenge ni kamwe mu Turere 3 tugize Umujyi wa Kigali
             
              ,gafite Imirenge 10, Utugari 47 n' Imidugudu 350. Akarere ka Nya
             
              genge gafite ubuso ugana na 134 Km2 nkuko bigaragazwa n'ibarura
            
              ry'abaturage ryakozwe mu mwaka wa 2012 Akarere ka Nyarugenge gaf
              
              Abaturage 
              
             
            </p>
          </div>
        </div>
        
    
                   
              
            </HomeLayout>
        </>
    )
}
export default AboutUs;