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
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-4">Scanned Attendees</h1>
//       <ul className="bg-white shadow-md rounded p-4">
//         {attendees.length > 0 ? (
//           attendees.map((code, index) => (
//             <li key={index} className="border-b py-2">
//               Attendee Code: {code}
//             </li>
//           ))
//         ) : (
//           <p>No attendees scanned yet.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default AttendeesPage;


import React, { useEffect, useState } from "react";

const AttendeesPage: React.FC = () => {
  const [attendees, setAttendees] = useState<string[]>([]);

  useEffect(() => {
    const storedAttendees = localStorage.getItem("attendees");
    if (storedAttendees) {
      setAttendees(JSON.parse(storedAttendees));
    }
  }, []);

  return (
    <div className="attendees-page">
      <div className="attendance-card">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Scanned Attendees
        </h1>
        <ul>
          {attendees.length > 0 ? (
            attendees.map((code, index) => (
              <li
                key={index}
                className="border-b border-gray-400 py-2 text-lg text-white"
              >
                Attendee Code: {code}
              </li>
            ))
          ) : (
            <p className="text-lg text-white">No attendees scanned yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AttendeesPage;
