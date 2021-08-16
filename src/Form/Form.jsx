import React from 'react';
import FormControl from '@material-ui/core/FormControl';

import './style.css';
const Form =()=>{
return(
    <>
   
    <div className="main_div">
      <div className="box">
        <h1>Login Form</h1>
        <form action="">
          <div className="input-box">
            <input
              type="text"
              name="Username"
              id="name"
              autocomplete="off"
              required
            />
            <label for="Username">Username</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              id="name"
              autocomplete="off"
              required
            />
            <label for="Password">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
 
    </>
)
}
export default Form;