import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-emerald-600 text-white shadow-md">
      {/* Logo */}
      <img
        src="/img/img1.jpg" // Replace with the correct image path
        alt="Logo"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Names */}
      <h1 className="text-lg md:text-xl font-bold text-center">
        Louis & Magdalene
      </h1>

      {/* People Icon */}
      <Link to="/attendees">
        <FontAwesomeIcon
          icon={faUsers}
          className="text-2xl hover:text-gray-200 cursor-pointer"
        />
      </Link>
    </header>
  );
};

export default Header;
