// import React, { useEffect, useState } from "react";

// const AttendeesPage: React.FC = () => {
//   const [attendees, setAttendees] = useState<string[]>([]);

//   useEffect(() => {
//     const storedAttendees = localStorage.getItem("attendees");
//     if (storedAttendees) {
//       setAttendees(JSON.parse(storedAttendees));
//     }
//   }, []);

//   return (
//     <div className="attendees-page">
//       <h1>Scanned Attendees</h1>
//       <ul>
//         {attendees.length > 0 ? (
//           attendees.map((code, index) => (
//             <li key={index}>
//               <span>{index + 1}.</span> {/* Numbering */}
//               <span>Attendee Code: {code}</span>
//             </li>
//           ))
//         ) : (
//           <p className="text-lg text-white text-center">
//             No attendees scanned yet.
//           </p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default AttendeesPage;

import React, { useEffect, useState } from "react";

const AttendeesPage: React.FC = () => {
  const [attendees, setAttendees] = useState<string[]>([]);

  // Load attendees from localStorage on component mount
  useEffect(() => {
    const storedAttendees = localStorage.getItem("attendees");
    if (storedAttendees) {
      setAttendees(JSON.parse(storedAttendees));
    }
  }, []);

  // Function to clear attendees
  const handleClearData = () => {
    localStorage.removeItem("attendees"); // Clear localStorage
    setAttendees([]); // Reset attendees state
  };

  return (
    <div className="attendees-page">
      <h1>Scanned Attendees</h1>
      <button
        onClick={handleClearData}
        className="clear-data-button"
      >
        Clear Scanned Data
      </button>
      <ul>
        {attendees.length > 0 ? (
          attendees.map((code, index) => (
            <li key={index}>
              <span>{index + 1}.</span> {/* Numbering */}
              <span>Attendee Code: {code}</span>
            </li>
          ))
        ) : (
          <p className="text-lg text-white text-center">
            No attendees scanned yet.
          </p>
        )}
      </ul>
    </div>
  );
};

export default AttendeesPage;


