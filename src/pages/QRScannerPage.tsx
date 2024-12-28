import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";

const QRScannerPage: React.FC = () => {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [attendees, setAttendees] = useState<string[]>([]);

  useEffect(() => {
    // Load attendees from localStorage on page load
    const storedAttendees = localStorage.getItem("attendees");
    if (storedAttendees) {
      setAttendees(JSON.parse(storedAttendees));
    }
  }, []);

  const handleScan = (data: any) => {
    if (data) {
      const code = data.text;
      if (!attendees.includes(code)) {
        const updatedAttendees = [...attendees, code];
        setAttendees(updatedAttendees);
        localStorage.setItem("attendees", JSON.stringify(updatedAttendees));
        setScannedData(code);
      } else {
        setScannedData("Duplicate Scan");
      }
    }
  };

  const handleError = (error: any) => {
    console.error("QR Scanner Error:", error);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">QR Code Scanner</h1>

      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "300px" }}
      />

      {scannedData && (
        <div className="mt-4 p-4 rounded-lg shadow-md text-white bg-emerald-600">
          <p>{scannedData === "Duplicate Scan" ? "Duplicate QR Code" : `Scanned Code: ${scannedData}`}</p>
        </div>
      )}
    </div>
  );
};

export default QRScannerPage;
