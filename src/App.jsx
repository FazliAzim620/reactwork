import React from 'react';
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css'
const App=()=>{
    return(
        <>
      <div className="container-fluid">
    <div className='row'>
      <div className='col-sm-10 col-xs-10 col-12'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">daraz</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#daraz-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-gray"></span>
          </button>
          <div className="collapse navbar-collapse" id="daraz-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active about" aria-current="page" href="#">About</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sell with us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Pakistan</a></li>
                  <li><a className="dropdown-item" href="#">Serilanka</a></li>
                  <li><a className="dropdown-item" href="#">Bangladesh</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop with us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Pakistan</a></li>
                  <li><a className="dropdown-item" href="#">Serilanka</a></li>
                  <li><a className="dropdown-item" href="#">Bangladesh</a></li>
                </ul>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
      </div>
    </div>
      </div>


        </>
    )
}
export default App;
