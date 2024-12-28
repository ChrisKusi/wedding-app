import React from "react";
import QrReader from "react-qr-scanner";

interface QRScannerProps {
  onScan: (data: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan }) => {
  const handleScan = (data: any) => {
    if (data && data.text) onScan(data.text);
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default QRScanner;
