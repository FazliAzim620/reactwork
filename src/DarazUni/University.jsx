import React from 'react';
import pic1 from '../picture/univ.png';
import pic2 from '../picture/darazuniv.jpg';
import './Style.css';
const University=()=>{
    return(
        <>
        
         <div className="container-fluid">
        <div className="row main-div-uni">

          <div className="col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="univ-left">
                <img src= {pic1} alt=" daraz university pic"></img>
                <p className="uniText">Through Daraz University, we educate 50,000 new and existing sellers every month on ecommerce operations.</p>

              </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-6 col-12">
            <div className="univ-right">
              <img className="uniimg" src={pic2} alt=""></img>

            </div>
        </div>
        </div>
      </div>

        </>
    )
}
export default University;