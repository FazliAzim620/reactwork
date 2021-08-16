import React from 'react';
import exchange from '../picture/exchange.png';
import pic2 from '../picture/findi.png';
import darazmall from '../picture/arazmal.png';
import east from '../picture/east.png';
import deliver from '../picture/deliver.png';
import './Style.css'
const Focus=()=>{
    return (
        <>
             <div className="container">
        <h1 className="focusHeading">Our focus for 2020</h1>
        <div className="focusDiv" style={{display:'no'}}> 
          <div className="row " style={{marginLeft:"40px !important;"}}>
           <div className="main-card-div container"> 
             <div className="col-sm-12 col-md-4 col-12">
               <div className="focusCard focustitle">
               <img src={exchange} alt=""></img>
                  <p>Enhancing customer experience</p>
            </div>
                   </div>
                   <div className="col-sm-12 col-md-4 col-12">
                    <div className="focusCard focustitle" style={{background:"linear-gradient(0deg,white 70%, rgb(41, 41, 100) 400% )"}}>
                    <img src={pic2} alt=""></img>
                       <p>Findability & relevance</p>
                 </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-12">
                          <div className="focusCard focustitle" style={{background:"linear-gradient(0deg,white 70%, rgb(41, 41, 100) 400% )"}}>
                          <img src={darazmall} alt=""></img>
                             <p>DarazMall to become a top-of-mind quality consumer brand</p>
                       </div>
                              </div>
               </div>
          </div>
          <div className="row " style={{marginTop:" 10%"}}>
            <div className="second-card">
              <div className="col-sm-12 col-md-6 col-6">
                <div className="focusCard focustitle second-card-div" style={{background:'linear-gradient(0deg,white 70%, green 400% )'}} >
                  <img src={east} alt=""></img>
                     <p>Establish Daraz as an entertainment platform in addition to an app</p>
               </div>
               
              </div>
              <div className="col-sm-12 col-md-6 col-6">
                <div className="focusCard focustitle second-card-div" style={{float: "left",background:'linear-gradient(0deg,white 70%,orange 400% )'}}>
                  <img src={deliver} alt=""></img>'
                     <p>Scale express deliveries and collection points</p>
               </div>
               
              </div>
            </div>
          </div>

        </div>
      
      </div>
        </>
    )

}
export default Focus;