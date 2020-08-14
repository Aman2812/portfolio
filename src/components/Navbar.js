import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">


  <NavLink className="navbar-brand" to="/">My Portfolio</NavLink>




  <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>




  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/resume">Resume <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Me</NavLink>
      </li>

    </ul>
  </div>
</nav>
</div>
            </div>
            </div>
        </div>

    );
};

export default Navbar;



