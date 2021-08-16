import React from 'react';
import facebook from '../Icon/facce.png'
import darazlogo from '../picture/darazf.png';
import Bangladesh from '../Icon/bang.png';
import pak from '../Icon/pak.png';
import sarilanka from '../Icon/sari.png';
import Myanmar from '../Icon/nep.png';
import linkedin from '../Icon/link.png';
import youtube from '../Icon/yout.png';
import instagram from '../Icon/insta.png';
import playstore from '../picture/play.png';
import appstore from '../picture/apple.png';
import scan from '../picture/scan.png';
import Form from '../Form/Form';

import './Style.css';
const Footer=()=>{
return (
    <>
  
         <div className="container-fluid" style={{backgroundColor: '#222222' ,marginTop: '20px'}}>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-12 firstcolumnfooter">
            <img src={darazlogo} alt="darazlogo"></img>
            <ul >

              <li><a href="#">
              <img src={pak} alt="daraz Logo"/>
              </a></li>
              <li><a href="#"><img src={Bangladesh} alt="Bangladesh flag"/></a></li>
              <li><a href="#"><img src={sarilanka} alt="sarilanka flag"/></a></li>
              <li><a href="#"><img src={Myanmar} alt="Myanmar flag"/></a></li>
            </ul>
            {/* <p>&copy; 2020 Daraz Group</p> */}
          </div>
          <div className="col-sm-6 col-md-4 col-12  secondcolumnfooter">
            <p id='daraz'>daraz</p>
            <ul >
               <li className="list">about</li>
            <li className="list">Sell on Daraz</li>
            <li ><a href='#' style={{color: "white", textDecoration:'none'}} >Connect with Us</a></li>
            </ul>
<div className="secondcolumnfooter2">
  <ul>
              
    <li><a href="#"><img src={facebook} alt="facebook"/></a></li>
    <li><a href="#"><img src={linkedin} alt="linkedin"/></a></li>
    <li><a href="#"><img src={youtube} alt="youtube"/></a></li>
    <li><a href="#"><img src={instagram} alt="instagram"/></a></li>
  </ul>
</div>

          </div>
          <div className="col-sm-6 col-md-4 col-12  thirdcolumnfooter">
            <img className='scanner' src={scan}alt=""/>
            <p id='happy'>Happy Shopping</p>
            <p id="download">Download App</p>
         <div className="playstor">
          <img className="playid" src={playstore} alt=" playstore"/>
          <img className='appstoreimg' src={appstore}alt="app store"/>
         </div>
          </div>
        </div>
      </div>
     
    
               
    </>
)
}
export default Footer;
