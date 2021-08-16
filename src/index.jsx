import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card/Card';
import Care from './Care/Care';
import DarazExpress from './DarazExpress/DarazExpress';
import Marketplace from './DarazMarket/MarketPlace';
import Payment from './DarazPayment/Payment';
import University from './DarazUni/University';
import Focus from './Focus/Focus';
import Footer from './Footer/Footer';
import Friendship from './Friendship/Friendship';
import DarazGroup from './Group/DarazGroup';
import FrontPic from './Headerpic/FrontPic'
import Mission from './Mission/Mission';



ReactDOM.render(

<>
<App/>
<FrontPic/>
<Card/>
<Care/>
<Marketplace/>
<University/>
<DarazExpress/>
<Payment/>
<Mission/>
{/* <Focus/> not responsive make responsive will later */}
<Friendship/>
<DarazGroup/>
<Footer/>


</>

    ,document.getElementById('root'));

