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


import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";

const QRScannerPage: React.FC = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [attendees, setAttendees] = useState<string[]>([]);
  const [modal, setModal] = useState<{ type: string; message: string } | null>(
    null
  );
  const webcamRef = useRef<Webcam>(null);

  const handleScan = () => {
    if (webcamRef.current) {
      const video = webcamRef.current.video;

      if (video) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (context) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code && code.data) {
            const scannedCode = code.data.trim();
            if (!/^\d{3}$/.test(scannedCode) || Number(scannedCode) < 1 || Number(scannedCode) > 150) {
              setModal({ type: "error", message: "Invalid QR code scanned." });
            } else if (attendees.includes(scannedCode)) {
              setModal({ type: "error", message: `Attendee code ${scannedCode} already scanned.` });
            } else {
              setAttendees((prev) => [...prev, scannedCode]);
              setModal({ type: "success", message: `Attendee code ${scannedCode} scanned successfully.` });
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    if (isCameraActive) {
      const interval = setInterval(() => {
        handleScan();
      }, 500); // Scan every 500ms
      return () => clearInterval(interval);
    }
  }, [isCameraActive]);

  const closeModal = () => setModal(null);

  return (
    <div className="qr-scanner-page">
      <h1 className="qr-title">Scan to Register</h1>
      <div className="scanner-card">
        {!isCameraActive ? (
          <img
            src="/img/QR.png" // Placeholder image
            alt="Placeholder"
            className="placeholder-image"
          />
        ) : (
          <Webcam
            ref={webcamRef}
            videoConstraints={{ facingMode: "environment" }}
            className="camera-feed"
          />
        )}
      </div>

      {!isCameraActive && (
        <button
          onClick={() => setIsCameraActive(true)}
          className="activate-camera-button"
        >
          Activate Camera
        </button>
      )}

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
