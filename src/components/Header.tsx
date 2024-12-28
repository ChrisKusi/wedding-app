import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img
          src="/img/img1.jpg" // Replace with the correct image path
          alt="Logo"
          className="logo-image"
        />
      </div>

      {/* Names */}
      <h1 className="header-title">Louis & Magdalene</h1>

      {/* People Icon */}
      <Link to="/attendees" className="header-icon">
        <FontAwesomeIcon icon={faUsers} />
      </Link>
    </header>
  );
};

export default Header;
