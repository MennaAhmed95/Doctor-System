import React from "react";
import { NavLink, Link } from "react-router-dom";

// import {Link,NavLink} form 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="logo" src="/assets/images/logo.png" alt="logo" />
      </div>
      <div className="menuHeader">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/doctors-sec">Docters</NavLink>
        <NavLink to="/specialties-sec">Specialties</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Sign up</NavLink>
      </div>
    </header>
  );
};

export default Header;
