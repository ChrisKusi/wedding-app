// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUsers } from "@fortawesome/free-solid-svg-icons";

// const Header: React.FC = () => {
//   return (
//     <header className="header">
//       {/* Logo */}
//       <div className="header-logo">
//         <img
//           src="/img/img1.jpg" // Replace with the correct image path
//           alt="Logo"
//           className="logo-image"
//         />
//       </div>

//       {/* Names */}
//       <h1 className="header-title">Louis & Magdalene</h1>

//       {/* People Icon */}
//       <Link to="/attendees" className="header-icon">
//         <FontAwesomeIcon icon={faUsers} />
//       </Link>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAttendeesPage = location.pathname === "/attendees";

  return (
    <header className="header">
      {/* Logo */}
      <img
        src="/img/img1.jpg" // Replace with the correct image path
        alt="Logo"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Title */}
      <h1 className="text-lg md:text-xl font-bold text-center">
        Louis & Magdalene
      </h1>

      {/* Back Arrow or People Icon */}
      {isAttendeesPage ? (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-2xl hover:text-gray-200 cursor-pointer"
          onClick={() => navigate("/")} // Navigate back to the main page
        />
      ) : (
        <Link to="/attendees">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-2xl hover:text-gray-200 cursor-pointer"
          />
        </Link>
      )}
    </header>
  );
};

export default Header;
