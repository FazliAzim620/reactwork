import React from 'react';
import pic from '../picture/payment.jpg';
import './Style.css';



const Payment=()=> {
    return (
       
       <>
 <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-12"> <div class="leftSection">
            <p class="paymenttext">Daraz has built a robust payment infrastructure that is localised to each market. 
              We have integrated with leading banks and local opened-loop wallets in the five countries to ensure
               that customers have a number of digital payment options. In Pakistan, 
              the closed-loop Daraz Wallet has been launched as the smartest payment option.</p>
          </div></div>
          <div class="col-sm-12 col-md-6 col-12"> <div class="rightSection">
            <img src={pic} alt=""></img>
          </div></div>
        </div>
      </div>

       </>
    )
}


export default Payment;