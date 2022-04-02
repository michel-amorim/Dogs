import React from "react";
import { Link } from "react-router-dom";
import "../Header/style.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
