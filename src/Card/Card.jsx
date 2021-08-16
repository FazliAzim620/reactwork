import React from 'react';
import pic from '../picture/shop.png';
import './Card.css';
const Card=()=>{
    return(
        <>
       <div className='container'>
           <div className='row'>

               <div className='col-sm-6 col-xs-6 col-md-2 col-12'>
             <div class="card">
              <img className='card-image'  src={pic} alt="" />
          <div class="card-body">
           <h5 class="card-title">20M</h5>
              <p className='card-text'>Products</p>
          </div>
           </div>
               </div>
               <div className='col-sm-6 col-xs-6 col-md-2 col-12'>
             <div class="card">
              <img className='card-image'  src={pic} alt="" />
          <div class="card-body">
           <h5 class="card-title">20M</h5>
              <p className='card-text'>Products</p>
          </div>
           </div>
               </div>
               <div className='col-sm-6 col-xs-6 col-md-2 col-12'>
             <div class="card">
              <img className='card-image'  src={pic} alt="" />
          <div class="card-body">
           <h5 class="card-title">20M</h5>
              <p className='card-text'>Products</p>
          </div>
           </div>
               </div>
               <div className='col-sm-6 col-xs-6 col-md-2 col-12'>
             <div class="card">
              <img className='card-image'  src={pic} alt="" />
          <div class="card-body">
           <h5 class="card-title">20M</h5>
              <p className='card-text'>Products</p>
          </div>
           </div>
               </div>
               <div className='col-sm-12 col-xs-12 col-md-2 col-12'>
             <div class="card">
              <img className='card-image'  src={pic} alt="" />
          <div class="card-body">
           <h5 class="card-title">20M</h5>
              <p className='card-text'>Products</p>
          </div>
           </div>
               </div>

           </div>
       </div>
            
        </>
    )
}
export default Card;