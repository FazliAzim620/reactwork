import React from 'react';
import picture from '../picture/mall.png';
import './MarketPlace.css';
import dmLogo from '../picture/dm.png'
const Marketplace=()=>{

    return (
        <>
            <div className="container">
        <div className="row">
          <div className="col-sm-12 col-12 col-xs-12 col-12">
            <div className="marketText">
              <h2>Daraz is a mall, a marketplace and a community.</h2>
              <p>In 2019 we built the infrastructure to enable our functions:</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-12" >

          </div>
        </div>
        <div className="dmpic">
          <img src={picture} alt="Picture" />
          <img className='DMlogo' src={dmLogo} alt=" DM logo" style={{width:'70px',height:'60px'}} />
          <p>DarazMall is our premium service channel that allows our brands to reach a large customer 
          base and build interactive relationships with them. In 2020, DarazMall is set to become a top-of-mind quality brand.</p>
        </div>

      </div>
        </>
    )
}
export default Marketplace;