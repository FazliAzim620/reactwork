import React from 'react';
import pic from '../picture/express.png';
import express from '../picture/darazexpre.jpg';
import './Style.css';
const DarazExpress=()=>{
    return(
        <>

           <div class="container">
        <div class="row expressMain">
         
          <div class="col-sm-12 col-xs-12 col-md-6 col-12">
            <div class="expressLeft"> 
              <img src={pic} alt=""></img>
              <p class="expressText">
                In 2018, we launched Daraz Express (DEX) - South Asia’s 
                first fully-integrated and digitised logistics company.
                 Every month, 2,500 DEX Heros deliver 1.7 million packages.
              </p>

            </div>  
          </div>
          <div class="col-sm-12 col-xs-12 col-md-6 col-12">
            <div class="expressRight"> 
              <img src={express} alt=""></img>

            </div>  
          </div>
          
          

        

        </div>
      </div>

        </>
    )
}
export default DarazExpress;