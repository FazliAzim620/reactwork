import React from 'react';
import alibaba from '../picture/alibaba.png';
import daraz from '../picture/daraz.png';
import background from '../picture/background.png'
import './Style.css'
const DarazGroup=()=>{
    return(
        <>
            <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-12 ">
            <div class="groupDiv" style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'auto' }}>
              <div class="container groupinnerdiv">
                <p className='text'>In 2018, Daraz was acquired by Alibaba Group,
                  making the South Asian ecommerce platform an important part of Alibaba’s global strategic goals.</p>
              </div>
              <div class="group-pic container">
     <div class="row">
       <div class="col-sm-12 col-md-6 col-6 ">
         <img src={alibaba} alt=""></img>
         
       </div>
       <div class="col-sm-12 col-md-6 col-6">
         <img src={daraz} alt=""></img>
       </div>
     </div>

     <div class="row">
      <div class="col-sm-12 col-md-6 col-6 ">
     <div class="alibaba">
      <h5>Reach</h5>
      <h1 style={{lineHeight:" 16px"}}>2B</h1>
      <p>
       global customers by 2036</p>
     </div>
        
      </div>
      <div class="col-sm-12 col-md-6 col-6">
        <div class="alibaba">
          <h5>Contribute</h5>
          <h1 style={{lineHeight:" 16px"}}>100M</h1>
          <p>
            customers from the five Daraz Markets</p>
         </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-6 ">
     <div class="alibaba">
      <h5>Create</h5>
      <h1 style={{lineHeight:" 16px"}}>100M</h1>
      <p>
       jobs</p>
     </div>
        
      </div>
      <div class="col-sm-12 col-md-6 col-6">
        <div class="alibaba">
          <h5>Create</h5>
          <h1 style= {{lineHeight:" 16px"}}>2.5M</h1>
          <p>
          jobs</p>
         </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-6 ">
     <div class="alibaba">
      <h5>Support over</h5>
      <h1 style={{lineHeight:" 16px"}}>100M</h1>
      <p>
       
profitable businesses on its platforms</p>
     </div>
        
      </div>
      <div class="col-sm-12 col-md-6 col-6">
        <div class="alibaba">
          <h5>Support</h5>
          <h1 style={{lineHeight:" 16px"}}>500K</h1>
          <p>
            profitable businesses through our platforms</p>
         </div>
      </div>
    </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default DarazGroup;