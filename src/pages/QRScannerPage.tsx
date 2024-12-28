import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const QRScannerPage: React.FC = () => {
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleScan = (data: any) => {
    if (data) setScannedData(data.text);
  };

  const handleError = (error: any) => {
    console.error("QR Scanner Error:", error);
  };

  return (
    <div className="qr-scanner-page">
      <h1>QR Code Scanner</h1>

      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "300px" }}
      />

      {scannedData && (
        <div className="scanned-message">
          <p>Scanned Code: {scannedData}</p>
        </div>
      )}

      <button onClick={() => setScannedData(null)}>Get Started</button>
    </div>
  );
};

export default QRScannerPage;
