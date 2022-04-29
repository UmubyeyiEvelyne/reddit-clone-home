import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {FaReddit} from 'react-icons/fa';
function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: 'rgb(252, 69, 4)'}}>
        <div className="container-fluid">
            <a className="navbar-brand text-white " href="/">
              <FaReddit/>
              <span className="text-white fw-bold ps-3 pe-5 me-5" >Reddit</span>  
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
            <div className="header__right">

          <div className="header__user">
            <img
              src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg"
            />

            <span>Amir Vhora</span>
            <i className="fas fa-caret-down"></i>
              
          </div>
          <Link to="/login" className="login link" >Log In</Link>
          <Link to="" className="bar" >|</Link>
          <Link to="/signup" className="signup link">Sign up</Link>

          </div>
          </div>
          {/* </div> */}
    </nav>   
);
}

export default Header;
