import React from 'react';
import friendlogo from '../picture/alilogo.png';
import alibabalogo from '../picture/alogo.png';
import friendship from '../picture/pc.jpg';
import './style.css';
const Friendship=()=>{
    return (
        <>
        <div class="container">
        <div class="row friendship">
         
          <div class="col-sm-12 col-xs-12 col-md-6 col-12">
            <div class="friendLeft"> 
              <img class="freindlogo" src={friendlogo} alt=""></img>
              <img class="freindlogo" src={alibabalogo} alt=""></img>
              <p class="expressText">
                The Jack Ma Foundation and Alibaba Foundation donates much-needed medical supplies
                 including protective masks and testing kits to 10 Asian countries including Daraz countries 
                 to help the global fight against COVID-19.
              </p>

            </div>  
          </div>
          <div class="col-sm-12 col-xs-12 col-md-6 col-12">
            <div class="friendRight"> 
              <img src={friendship} alt=""></img>

            </div>  
          </div>
          
          

        

        </div>
      </div>

        </>
    )
}
export default Friendship;