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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">QR Code Scanner</h1>

      {/* QR Scanner */}
      <div className="w-full max-w-sm">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
          className="border border-gray-300 shadow-md rounded-lg"
        />
      </div>

      {/* Scanned Message */}
      {scannedData && (
        <div className="mt-4 p-4 rounded-lg shadow-md text-white bg-emerald-600">
          <p>Scanned Code: {scannedData}</p>
        </div>
      )}

      {/* Get Started Button */}
      <button
        className="mt-6 px-6 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition"
        onClick={() => setScannedData(null)}
      >
        Get Started
      </button>
    </div>
  );
};

export default QRScannerPage;
