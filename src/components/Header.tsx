import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-emerald-600 text-white">
      {/* Logo */}
      <img
        src="/img/img1.jpg"
        alt="Logo"
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* Names */}
      <h1 className="text-xl font-bold">Louis & Magdalene</h1>

      {/* People Icon */}
      <Link to="/attendees">
        <button className="text-white text-lg">
          <i className="fas fa-users"></i>
        </button>
      </Link>
    </header>
  );
};

export default Header;
