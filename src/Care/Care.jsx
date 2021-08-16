import React from 'react';
import './Care.css';
import pic from '../picture/care.png'
const Care=()=>{
    return (
        <>
    <div className='container-fluid'>                     
        <div className='row main-care-div'>

<div className='col-xs-12 col-sm-12 col-md-6 col-12'>
            <div class="careRight">
            <img src={pic} alt=" daraz logo" />
          
              <p class="careText">Donate to the daily wage earners and familes, they need you. 
               Overseas Pakistani's can now also donate through their Visa or Mastercard 
                Credit & Debit Cards to support Pakistan
              </p>
           </div>
         

            </div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-12'>

            <div class="careLeft">
                      <iframe  src="https://www.youtube.com/embed/tgbNymZ7vqY">  </iframe>
           </div>
         

            </div>

            
        </div>
    </div>



        </>
    )
}
export default Care;


