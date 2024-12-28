import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const QRScannerPage: React.FC = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleScan = (data: any) => {
    if (data) {
      setScannedData(data.text);
      console.log("Scanned Code:", data.text); // Log the scanned data for debugging
      // Add logic here to update records or perform an action with the scanned data
    }
  };

  const handleError = (error: any) => {
    console.error("QR Scanner Error:", error);
  };

  return (
    <div className="qr-scanner-page">
      {/* Title */}
      <h1 className="qr-title">Scan to Register</h1>

      {/* Scanner Card */}
      <div className="scanner-card">
        {!isCameraActive ? (
          <img
            src="img\QR.png" // Replace with your placeholder image
            alt="Placeholder"
            className="placeholder-image"
          />
        ) : (
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%", height: "100%" }}
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

      {/* Scanned Data Display */}
      {scannedData && (
        <div className="scanned-data">
          <p>Scanned Code: {scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default QRScannerPage;
