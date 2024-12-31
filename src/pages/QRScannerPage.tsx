// import React, { useState } from "react";
// import Webcam from "react-webcam";

// const QRScannerPage: React.FC = () => {
//   const [isCameraActive, setIsCameraActive] = useState(false);

//   const videoConstraints = {
//     facingMode: { exact: "environment" }, // Explicitly request the back camera
//   };

//   return (
//     <div className="qr-scanner-page">
//       {/* Title */}
//       <h1 className="qr-title">Scan to Register</h1>

//       {/* Scanner Card */}
//       <div className="scanner-card">
//         {!isCameraActive ? (
//           <img
//             src="/img/QR.png" // Placeholder image
//             alt="Placeholder"
//             className="placeholder-image"
//           />
//         ) : (
//           <Webcam
//             videoConstraints={videoConstraints}
//             className="camera-feed"
//             screenshotFormat="image/jpeg"
//             onUserMediaError={(error) => console.error("Camera Error:", error)}
//           />
//         )}
//       </div>

//       {/* Activate Camera Button */}
//       {!isCameraActive && (
//         <button
//           onClick={() => setIsCameraActive(true)}
//           className="activate-camera-button"
//         >
//           Activate Camera
//         </button>
//       )}
//     </div>
//   );
// };

// export default QRScannerPage;


import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const QRScannerPage: React.FC = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [attendees, setAttendees] = useState<string[]>([]);
  const [modal, setModal] = useState<{ type: string; message: string } | null>(
    null
  );

  const handleScan = (data: any) => {
    if (data && data.text) {
      const code = data.text.trim(); // Trim whitespace if any
      if (!/^\d{3}$/.test(code) || Number(code) < 1 || Number(code) > 150) {
        // Invalid code
        setModal({ type: "error", message: "Invalid QR code scanned." });
      } else if (attendees.includes(code)) {
        // Duplicate code
        setModal({ type: "error", message: `Attendee code ${code} already scanned.` });
      } else {
        // Valid code
        setAttendees((prev) => [...prev, code]); // Add to attendees list
        setModal({ type: "success", message: `Attendee code ${code} scanned successfully.` });
      }
    }
  };

  const handleError = (error: any) => {
    console.error("QR Scanner Error:", error);
    setModal({ type: "error", message: "An error occurred while scanning the QR code." });
  };

  const closeModal = () => setModal(null);

  return (
    <div className="qr-scanner-page">
      {/* Title */}
      <h1 className="qr-title">Scan to Register</h1>

      {/* Scanner Card */}
      <div className="scanner-card">
        {!isCameraActive ? (
          <img
            src="/img/QR.png" // Placeholder image
            alt="Placeholder"
            className="placeholder-image"
          />
        ) : (
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            className="camera-feed"
          />
        )}
      </div>

      {/* Activate Camera Button */}
      {!isCameraActive && (
        <button
          onClick={() => setIsCameraActive(true)}
          className="activate-camera-button"
        >
          Activate Camera
        </button>
      )}

      {/* Modals */}
      {modal && (
        <div
          className={`modal ${
            modal.type === "success" ? "modal-success" : "modal-error"
          }`}
        >
          <p>{modal.message}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default QRScannerPage;
