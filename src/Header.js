import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light col-md-12" style={{backgroundColor: 'rgb(252, 69, 4)'}}>

    {/* <div className="header col-md-12"> */}
      <div className="sidenav__logo">
        <div className="reddit">
          <a className="navbar-brand text-white " href="/"><i className="fa-brands fa-reddit"></i>
          </a> 
        </div>
      </div>
      <div className="header__left">
        <ul>
          <Link to="/popular" className="active">Popular</Link>
          <Link to="/hot">Hot</Link>
          <Link to="/rising">Rising</Link>
          <Link to="/controversial">Controversial</Link>
          <Link to="/top">Top</Link>
          <Link to="/gilded">Gilded</Link>
        </ul>
      </div>

      <div className="header__right">

        {/* <i className="fas fa-bell"></i> */}
        
        
        <div className="header__user">
          <img
            src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg"
          />

          <span>Amir Vhora</span>
          <i className="fas fa-caret-down"></i>
            
            {/* <Link to="/gilded">|   Log out</Link> */}
        </div>
        <Link to="/login" className="login" >Log In</Link>
        <Link to="/signup" className="signup">| Sign up</Link>

      </div>
    {/* </div> */}
    </nav>
  );
}

export default Header;
