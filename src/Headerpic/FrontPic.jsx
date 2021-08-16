import React from 'react';
import picture from "../picture/daraz.jpg";
import './Style.css';
const FrontPic=()=>{
    return(
        <>
            <div className="container">
       <div className='row'>
           <div className='col-12 col-md-12 col-sm-12'>
           <img className='frontPic' src={picture} alt='picture'></img>
           
          <p class="headermain-p">Daraz is the leading online marketplace in South Asia connecting 
            thousands of sellers with millions of customers in Pakistan,
             Bangladesh, Sri Lanka, Nepal and Myanmar.</p>
             <div ></div>
      
           </div>
       </div>
        
      </div>
        </>
    )
}
export default FrontPic;